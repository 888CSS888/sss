package com.solitaire.core;

import java.util.ArrayList;
import java.util.List;

/**
 * Куча (стопка) карт на столе
 */
public class Pile {
    public final PileType type;
    public final int index;       // номер в своём типе (0..n)
    public final List<Card> cards = new ArrayList<>();

    // Позиция кучи на экране (верхний левый угол)
    public float x, y;

    public Pile(PileType type, int index) {
        this.type = type;
        this.index = index;
        this.x = 0;
        this.y = 0;
    }

    /**
     * Верхняя карта (последняя в списке)
     */
    public Card peek() {
        return cards.isEmpty() ? null : cards.get(cards.size() - 1);
    }

    /**
     * Добавить карту в конец
     */
    public void push(Card card) {
        cards.add(card);
        card.owner = this;
    }

    /**
     * Убрать верхнюю карту
     */
    public Card pop() {
        if (cards.isEmpty()) return null;
        Card card = cards.remove(cards.size() - 1);
        card.owner = null;
        return card;
    }

    /**
     * Добавить несколько карт в конец
     */
    public void pushAll(List<Card> cards) {
        for (Card c : cards) {
            this.cards.add(c);
            c.owner = this;
        }
    }

    /**
     * Убрать n верхних карт
     */
    public List<Card> pop(int n) {
        List<Card> result = new ArrayList<>();
        for (int i = 0; i < n && !this.cards.isEmpty(); i++) {
            result.add(pop());
        }
        return result;
    }

    /**
     * Перевернуть верхнюю карту рубашкой вниз
     */
    public void flipTopCardFaceUp() {
        if (!cards.isEmpty()) {
            Card top = cards.get(cards.size() - 1);
            if (top.faceDown) {
                top.faceDown = false;
            }
        }
    }

    /**
     * Перевернуть все карты рубашкой вверх
     */
    public void flipAllFaceDown() {
        for (Card c : cards) {
            c.faceDown = true;
        }
    }

    @Override
    public String toString() {
        return type + "#" + index + " [" + cards.size() + " cards]";
    }
}
