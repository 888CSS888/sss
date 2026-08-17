package com.solitaire.core;

/**
 * Масть карты
 */
public enum Suit {
    SPADE("♠", "black"),
    CLUB("♣", "black"),
    HEART("♥", "red"),
    DIAMOND("♦", "red");

    public final String symbol;
    public final String color;

    Suit(String symbol, String color) {
        this.symbol = symbol;
        this.color = color;
    }

    /**
     * Возвращает цвет масти для отрисовки
     */
    public int getPaintColor() {
        return "red".equals(color) ? 0xFFFF0000 : 0xFF000000;
    }

    /**
     * Цвет масти противоположен?
     */
    public boolean isOppositeColor(Suit other) {
        return this.color != other.color;
    }
}
