package com.solitaire.core;

/**
 * Карта колоды
 */
public class Card {
    public final int pack;          // номер колоды (0, 1, 2...)
    public final Suit suit;         // масть
    public final Rank rank;         // ранг
    public final int ordinal;       // 1-13

    public boolean faceDown;        // рубашкой вверх
    public boolean moveable;        // подсвечена как ходимая

    // Позиция на экране (обновляется при отрисовке/анимации)
    public float x, y;
    public float targetX, targetY;  // для анимации

    // Карты, которые тащим вместе с этой
    public Card[] grabbedTail;

    public Card(int pack, Suit suit, Rank rank, boolean faceDown) {
        this.pack = pack;
        this.suit = suit;
        this.rank = rank;
        this.ordinal = rank.value;
        this.faceDown = faceDown;
        this.moveable = false;
        this.grabbedTail = null;
        this.x = 0;
        this.y = 0;
        this.targetX = 0;
        this.targetY = 0;
    }

    /**
     * Строковое представление: "S0A" = Suit, Pack, Rank
     */
    @Override
    public String toString() {
        String rankStr;
        switch (rank) {
            case ACE: rankStr = "A"; break;
            case JACK: rankStr = "J"; break;
            case QUEEN: rankStr = "Q"; break;
            case KING: rankStr = "K"; break;
            default: rankStr = String.valueOf(ordinal);
        }
        return "P" + pack + suit.symbol + rankStr;
    }

    /**
     * Карты от этой до конца кучи (включая себя)
     */
    public List<Card> getTail() {
        if (owner == null || owner.cards.isEmpty()) return new ArrayList<>();
        int idx = owner.cards.indexOf(this);
        if (idx < 0) return new ArrayList<>();
        return new ArrayList<>(owner.cards.subList(idx, owner.cards.size()));
    }

    public boolean isRed() {
        return suit.color.equals("red");
    }

    public boolean isBlack() {
        return suit.color.equals("black");
    }
}
