package com.solitaire.ui;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

import com.solitaire.core.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Главный вид игрового стола
 */
public class SolitaireView extends View {

    private GameEngine engine;
    private final Paint paintRect = new Paint();
    private final Paint paintText = new Paint();
    private final Paint paintBg = new Paint();

    // Размеры карт
    private float cardWidth = 60;
    private float cardHeight = 90;
    private float cardRadius = 4;

    // Для drag-and-drop
    private Card draggedCard;
    private float dragOffsetX, dragOffsetY;
    private float lastTouchX, lastTouchY;
    private boolean isDragging = false;

    // Настройки отображения
    private float tableWidth;
    private float tableHeight;

    public SolitaireView(Context context) {
        super(context);
        init();
    }

    public SolitaireView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public SolitaireView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        paintRect.setColor(Color.WHITE);
        paintRect.setStyle(Paint.Style.FILL);
        paintRect.setStrokeWidth(2);
        paintRect.setAntiAlias(true);

        paintText.setColor(Color.BLACK);
        paintText.setTextSize(24);
        paintText.setAntiAlias(true);

        paintBg.setColor(0xFF006400); // тёмно-зелёный фон
    }

    /**
     * Установить движок игры
     */
    public void setGameEngine(GameEngine engine) {
        this.engine = engine;
        invalidate();
    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);
        tableWidth = w;
        tableHeight = h;

        // Масштабируем карты под экран
        float scaleX = w / 470f;
        float scaleY = h / 700f;
        float scale = Math.min(scaleX, scaleY);

        cardWidth = 60 * scale;
        cardHeight = 90 * scale;
        cardRadius = 4 * scale;

        // Размещаем кучи
        layoutPiles();
        invalidate();
    }

    /**
     * Разместить все кучи на столе
     */
    private void layoutPiles() {
        if (engine == null) return;

        float stockX = 0;
        float stockY = 0;
        float foundationX = stockX + cardWidth + 10;
        float foundationY = 0;

        // Stock & Waste
        for (int i = 0; i < engine.stocks.size(); i++) {
            engine.stocks.get(i).x = stockX;
            engine.stocks.get(i).y = stockY;

            engine.wastes.get(i).x = foundationX + i * (cardWidth + 10);
            engine.wastes.get(i).y = stockY;
        }

        // Foundations
        for (int i = 0; i < engine.foundations.size(); i++) {
            engine.foundations.get(i).x = foundationX + i * (cardWidth + 10);
            engine.foundations.get(i).y = foundationY;
        }

        // Tableau
        float tableauStartX = 0;
        float tableauStartY = cardHeight + 20;
        for (int i = 0; i < engine.tableaux.size(); i++) {
            engine.tableaux.get(i).x = tableauStartX + i * (cardWidth + 10);
            engine.tableaux.get(i).y = tableauStartY;
        }

        // Cells
        for (int i = 0; i < engine.cells.size(); i++) {
            engine.cells.get(i).x = stockX + i * (cardWidth + 10);
            engine.cells.get(i).y = tableauStartY + cardHeight + 20;
        }

        // Обновляем позиции карт внутри куч
        layoutCardsInPiles();
    }

    /**
     * Расставить позиции карт внутри куч
     */
    private void layoutCardsInPiles() {
        // Stock: карты друг на друге
        for (Pile stock : engine.stocks) {
            for (int i = 0; i < stock.cards.size(); i++) {
                stock.cards.get(i).x = stock.x;
                stock.cards.get(i).y = stock.y;
            }
        }

        // Waste: карты друг на друге со смещением
        for (Pile waste : engine.wastes) {
            float stackFactor = Math.max(1f, cardHeight / 5f);
            for (int i = 0; i < waste.cards.size(); i++) {
                waste.cards.get(i).x = waste.x + i * stackFactor;
                waste.cards.get(i).y = waste.y;
            }
        }

        // Foundations: одна карта
        for (Pile foundation : engine.foundations) {
            if (!foundation.cards.isEmpty()) {
                Card top = foundation.peek();
                top.x = foundation.x;
                top.y = foundation.y;
            }
        }

        // Tableau: каскад вниз
        for (Pile tableau : engine.tableaux) {
            for (int i = 0; i < tableau.cards.size(); i++) {
                Card card = tableau.cards.get(i);
                card.x = tableau.x;
                // Первые карты ближе, потом увеличиваем шаг
                float spacing = (i < 3) ? 15 : 30;
                card.y = tableau.y + i * spacing;
            }
        }

        // Cells: одна карта
        for (Pile cell : engine.cells) {
            if (!cell.cards.isEmpty()) {
                Card top = cell.peek();
                top.x = cell.x;
                top.y = cell.y;
            }
        }
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);

        // Фон
        canvas.drawRect(0, 0, getWidth(), getHeight(), paintBg);

        if (engine == null) return;

        // Рисуем все кучи
        for (Pile pile : engine.allPiles) {
            drawPile(canvas, pile);
        }

        // Обновляем позиции карт (для анимации)
        updateCardPositions();
    }

    /**
     * Отрисовать кучу
     */
    private void drawPile(Canvas canvas, Pile pile) {
        // Рисуем пустое место кучи (подложка)
        Paint pileBg = new Paint();
        pileBg.setColor(Color.argb(64, 0, 0, 0));
        pileBg.setStyle(Paint.Style.FILL);
        pileBg.setStrokeWidth(1);
        pileBg.setAntiAlias(true);
        canvas.drawRoundRect(
            new RectF(pile.x, pile.y, pile.x + cardWidth, pile.y + cardHeight),
            cardRadius, cardRadius, pileBg
        );

        // Рисуем карты в куче
        for (Card card : pile.cards) {
            drawCard(canvas, card);
        }
    }

    /**
     * Отрисовать одну карту
     */
    private void drawCard(Canvas canvas, Card card) {
        float x = card.x;
        float y = card.y;

        if (card.faceDown) {
            // Рубашка карты
            Paint backPaint = new Paint();
            backPaint.setColor(0xFF2196F3); // синий
            backPaint.setStyle(Paint.Style.FILL);
            backPaint.setStrokeWidth(1);
            backPaint.setAntiAlias(true);
            canvas.drawRoundRect(
                new RectF(x, y, x + cardWidth, y + cardHeight),
                cardRadius, cardRadius, backPaint
            );

            // Рамка
            Paint borderPaint = new Paint();
            borderPaint.setColor(Color.WHITE);
            borderPaint.setStyle(Paint.Style.STROKE);
            borderPaint.setStrokeWidth(1);
            canvas.drawRoundRect(
                new RectF(x + 2, y + 2, x + cardWidth - 2, y + cardHeight - 2),
                cardRadius - 1, cardRadius - 1, borderPaint
            );
        } else {
            // Лицевая сторона
            Paint facePaint = new Paint();
            facePaint.setColor(Color.WHITE);
            facePaint.setStyle(Paint.Style.FILL);
            facePaint.setStrokeWidth(1);
            facePaint.setAntiAlias(true);
            canvas.drawRoundRect(
                new RectF(x, y, x + cardWidth, y + cardHeight),
                cardRadius, cardRadius, facePaint
            );

            // Рамка
            Paint borderPaint = new Paint();
            borderPaint.setColor(Color.GRAY);
            borderPaint.setStyle(Paint.Style.STROKE);
            borderPaint.setStrokeWidth(1);
            canvas.drawRoundRect(
                new RectF(x + 1, y + 1, x + cardWidth - 1, y + cardHeight - 1),
                cardRadius - 1, cardRadius - 1, borderPaint
            );

            // Подсветка ходимой карты
            if (card.moveable) {
                Paint highlightPaint = new Paint();
                highlightPaint.setColor(Color.argb(64, 255, 255, 0));
                highlightPaint.setStyle(Paint.Style.FILL);
                canvas.drawRoundRect(
                    new RectF(x, y, x + cardWidth, y + cardHeight),
                    cardRadius, cardRadius, highlightPaint
                );
            }

            // Текст: ранг и масть
            Paint textPaint = new Paint();
            textPaint.setColor(card.suit.getPaintColor());
            textPaint.setTextSize(cardHeight / 4);
            textPaint.setAntiAlias(true);
            textPaint.setFakeBoldText(true);

            String rankStr;
            switch (card.rank) {
                case ACE: rankStr = "A"; break;
                case JACK: rankStr = "J"; break;
                case QUEEN: rankStr = "Q"; break;
                case KING: rankStr = "K"; break;
                default: rankStr = String.valueOf(card.ordinal);
            }

            // Верхний левый угол
            canvas.drawText(rankStr + card.suit.symbol,
                x + 4, y + cardHeight / 3, textPaint);

            // Центр (большой символ масти)
            textPaint.setTextSize(cardHeight / 2);
            canvas.drawText(card.suit.symbol,
                x + cardWidth / 2 - textPaint.measureText(card.suit.symbol) / 2,
                y + cardHeight / 2 + textPaint.getTextSize() / 3,
                textPaint);
        }
    }

    /**
     * Обновить позиции карт (для плавной анимации)
     */
    private void updateCardPositions() {
        for (Pile pile : engine.allPiles) {
            for (Card card : pile.cards) {
                if (isDragging && card.grabbedTail != null) {
                    // Карта тащится — не обновляем позицию
                    continue;
                }
                // Плавное движение к целевой позиции
                card.x += (card.targetX - card.x) * 0.3f;
                card.y += (card.targetY - card.y) * 0.3f;
            }
        }
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        if (engine == null) return super.onTouchEvent(event);

        float x = event.getX();
        float y = event.getY();

        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:
                lastTouchX = x;
                lastTouchY = y;

                // Ищем карту под пальцем (с конца, чтобы брать верхнюю)
                draggedCard = findCardAt(x, y);
                if (draggedCard != null) {
                    isDragging = true;
                    dragOffsetX = draggedCard.x - x;
                    dragOffsetY = draggedCard.y - y;
                }
                break;

            case MotionEvent.ACTION_MOVE:
                if (isDragging && draggedCard != null) {
                    // Обновляем позицию тащимой карты
                    draggedCard.x = x + dragOffsetX;
                    draggedCard.y = y + dragOffsetY;
                }
                lastTouchX = x;
                lastTouchY = y;
                break;

            case MotionEvent.ACTION_UP:
                if (isDragging && draggedCard != null) {
                    // Ищем, куда бросили карту
                    Pile target = findPileAt(x, y);
                    if (target != null && engine.canMoveCard(draggedCard, target)) {
                        engine.moveCard(draggedCard, target);
                    }
                    // Сбрасываем позицию на оригинальную
                    layoutCardsInPiles();
                }
                isDragging = false;
                draggedCard = null;
                break;
        }

        invalidate();
        return true;
    }

    /**
     * Найти карту под координатами
     */
    private Card findCardAt(float x, float y) {
        for (int i = engine.allPiles.size() - 1; i >= 0; i--) {
            Pile pile = engine.allPiles.get(i);
            for (int j = pile.cards.size() - 1; j >= 0; j--) {
                Card card = pile.cards.get(j);
                if (x >= card.x && x <= card.x + cardWidth &&
                    y >= card.y && y <= card.y + cardHeight) {
                    return card;
                }
            }
        }
        return null;
    }

    /**
     * Найти кучу под координатами
     */
    private Pile findPileAt(float x, float y) {
        for (Pile pile : engine.allPiles) {
            if (x >= pile.x && x <= pile.x + cardWidth &&
                y >= pile.y && y <= pile.y + cardHeight) {
                return pile;
            }
        }
        return null;
    }
}
