package com.solitaire.core;

/**
 * Ранг (значение) карты
 */
public enum Rank {
    ACE(1), TWO(2), THREE(3), FOUR(4), FIVE(5),
    SIX(6), SEVEN(7), EIGHT(8), NINE(9), TEN(10),
    JACK(11), QUEEN(12), KING(13);

    public final int value;

    Rank(int value) {
        this.value = value;
    }

    /**
     * Создать ранг из числового значения (1-13)
     */
    public static Rank fromValue(int value) {
        for (Rank r : values()) {
            if (r.value == value) return r;
        }
        throw new IllegalArgumentException("Invalid rank: " + value);
    }
}
