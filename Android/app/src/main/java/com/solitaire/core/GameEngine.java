package com.solitaire.core;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Движок игры — управляет картами, кучами и правилами
 */
public class GameEngine {
    public final GameRules rules;
    public final List<Pile> stocks = new ArrayList<>();
    public final List<Pile> wastes = new ArrayList<>();
    public final List<Pile> foundations = new ArrayList<>();
    public final List<Pile> tableaux = new ArrayList<>();
    public final List<Pile> cells = new ArrayList<>();

    public List<Pile> allPiles = new ArrayList<>();

    // Undo stack
    private final List<String> undoLog = new ArrayList<>();

    // Game state
    public boolean gameOver = false;
    public int movesMade = 0;

    public GameEngine(GameRules rules) {
        this.rules = rules;
        initPiles();
    }

    /**
     * Создать все кучи для текущей игры
     */
    private void initPiles() {
        // Стоки
        for (int i = 0; i < rules.stockPacks; i++) {
            Pile stock = new Pile(PileType.STOCK, i);
            stocks.add(stock);
            allPiles.add(stock);
        }

        // Сброс
        for (int i = 0; i < rules.stockPacks; i++) {
            Pile waste = new Pile(PileType.WASTE, i);
            wastes.add(waste);
            allPiles.add(waste);
        }

        // Foundation (4 базы)
        for (int i = 0; i < 4; i++) {
            Pile foundation = new Pile(PileType.FOUNDATION, i);
            foundations.add(foundation);
            allPiles.add(foundation);
        }

        // Tableau (7 колонок для Klondike, 10 для Spider)
        int tableauCount = (rules.name.contains("Паук")) ? 10 : 7;
        for (int i = 0; i < tableauCount; i++) {
            Pile tableau = new Pile(PileType.TABLEAU, i);
            tableaux.add(tableau);
            allPiles.add(tableau);
        }

        // Cells (для Freecell)
        for (int i = 0; i < rules.cellCount; i++) {
            Pile cell = new Pile(PileType.CELL, i);
            cells.add(cell);
            allPiles.add(cell);
        }
    }

    /**
     * Создать и перемешать колоду
     */
    public List<Card> createDeck() {
        List<Card> deck = new ArrayList<>();
        Suit[] suits = {Suit.SPADE, Suit.CLUB, Suit.HEART, Suit.DIAMOND};

        for (int p = 0; p < rules.stockPacks; p++) {
            for (Suit suit : suits) {
                for (Rank rank : Rank.values()) {
                    deck.add(new Card(p, suit, rank, false));
                }
            }
        }
        return deck;
    }

    /**
     * Перемешать колоду
     */
    public void shuffle(List<Card> deck) {
        Collections.shuffle(deck);
    }

    /**
     * Раздать карты — для Клондайка
     */
    public void dealKlondike() {
        List<Card> deck = createDeck();
        shuffle(deck);

        // Раздаём на tableau: 1, 2, 3, 4, 5, 6, 7 карт
        int idx = 0;
        for (int col = 0; col < 7; col++) {
            for (int row = 0; row <= col; row++) {
                Card card = deck.get(idx++);
                card.faceDown = (row < col); // последняя карта открыта
                tableaux.get(col).cards.add(card);
            }
        }

        // Остальные — в stock
        Pile stock = stocks.get(0);
        Pile waste = wastes.get(0);
        while (idx < deck.size()) {
            Card card = deck.get(idx++);
            stock.cards.add(card);
        }

        // Открыть верхнюю карту waste
        if (!stock.cards.isEmpty()) {
            Card top = stock.pop();
            top.faceDown = false;
            waste.push(top);
        }

        movesMade = 0;
        gameOver = false;
    }

    /**
     * Взять карту из stock в waste
     */
    public void drawFromStock() {
        Pile stock = stocks.get(0);
        Pile waste = wastes.get(0);

        if (stock.cards.isEmpty()) {
            // Возвращаем waste обратно в stock (переворачиваем)
            for (Card c : waste.cards) {
                c.faceDown = true;
            }
            Collections.reverse(waste.cards);
            stock.pushAll(waste.pop(waste.cards.size()));
        } else {
            // Берём N карт из stock
            int count = Math.min(rules.stockDrawCount, stock.cards.size());
            for (int i = 0; i < count; i++) {
                Card card = stock.pop();
                card.faceDown = false;
                waste.push(card);
            }
        }
    }

    /**
     * Попытаться переместить карту в foundation
     */
    public boolean tryMoveToFoundation(Card card) {
        Pile source = card.owner;
        if (source == null) return false;

        for (Pile foundation : foundations) {
            if (rules.canAcceptToFoundation(foundation, card)) {
                // Перемещаем
                source.pop();
                foundation.push(card);
                source.flipTopCardFaceUp();
                movesMade++;
                checkGameOver();
                return true;
            }
        }
        return false;
    }

    /**
     * Попытаться переместить карту в tableau
     */
    public boolean tryMoveToTableau(Card card, Pile targetTableau) {
        Pile source = card.owner;
        if (source == null || source == targetTableau) return false;
        if (!rules.canAcceptToTableau(targetTableau, card)) return false;

        // Перемещаем карту (и серию, если есть)
        List<Card> tail = source.pop(1);
        targetTableau.pushAll(tail);
        source.flipTopCardFaceUp();
        movesMade++;
        checkGameOver();
        return true;
    }

    /**
     * Проверить, можно ли переместить карту
     */
    public boolean canMoveCard(Card card, Pile target) {
        if (target == null || card.owner == null) return false;

        switch (target.type) {
            case FOUNDATION:
                return rules.canAcceptToFoundation(target, card);
            case TABLEAU:
                return rules.canAcceptToTableau(target, card);
            case CELL:
                return target.cards.isEmpty();
            default:
                return false;
        }
    }

    /**
     * Выполнить перемещение
     */
    public void moveCard(Card card, Pile target) {
        List<Card> tail = card.getTail();
        card.owner.pop(tail.size());
        target.pushAll(tail);
        card.owner.flipTopCardFaceUp();
        movesMade++;
        checkGameOver();
    }

    /**
     * Проверить окончание игры
     */
    private void checkGameOver() {
        int foundationCards = 0;
        for (Pile f : foundations) {
            foundationCards += f.cards.size();
        }
        if (foundationCards == 52) {
            gameOver = true;
        }
    }

    /**
     * Получить количество ходов
     */
    public int getMovesMade() {
        return movesMade;
    }

    /**
     * Проверить, выиграна ли игра
     */
    public boolean isGameOver() {
        return gameOver;
    }
}

// Дополнение: нужно добавить метод getTail() в Card
// Или перенести логику сюда
