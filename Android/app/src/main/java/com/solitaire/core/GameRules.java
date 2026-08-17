package com.solitaire.core;

/**
 * Правила конкретной игры в пасьянс
 * Аналог JSON-объекта rules в оригинальном JS-коде
 */
public class GameRules {
    public final String name;
    public final int stockPacks;      // количество колод
    public final int stockDrawCount;  // сколько карт брать из колоды за раз (1, 2, 3)

    // Правила для foundation: какая масть принимается
    // suit: 1=одна масть, 4=любая масть
    public final int foundationSuit;

    // Правила для foundation: какой ранг принимается
    // rank: 1=туз (начинаем с туза), 2=любое значение
    public final int foundationRank;

    // Правила для tableau: как строим колонки
    // build.suit: 1=одна масть, 4=любая
    // build.rank: 2=убывание на 1
    public final int tableauBuildSuit;
    public final int tableauBuildRank;

    // Правила для перемещения по tableau
    // move.suit: 4=чередование цветов
    // move.rank: 2=убывание на 1
    public final int tableauMoveSuit;
    public final int tableauMoveRank;

    // Максимальное количество карт в foundation
    public final int foundationAccept;

    // Максимальное количество карт в tableau
    public final int tableauAccept;

    // Количество ячеек (для Freecell)
    public final int cellCount;

    // Можно ли перемещать серию карт?
    public final boolean allowStackMoves;

    public GameRules(String name, int stockPacks, int stockDrawCount,
                     int foundationSuit, int foundationRank,
                     int tableauBuildSuit, int tableauBuildRank,
                     int tableauMoveSuit, int tableauMoveRank,
                     int foundationAccept, int tableauAccept,
                     int cellCount, boolean allowStackMoves) {
        this.name = name;
        this.stockPacks = stockPacks;
        this.stockDrawCount = stockDrawCount;
        this.foundationSuit = foundationSuit;
        this.foundationRank = foundationRank;
        this.tableauBuildSuit = tableauBuildSuit;
        this.tableauBuildRank = tableauBuildRank;
        this.tableauMoveSuit = tableauMoveSuit;
        this.tableauMoveRank = tableauMoveRank;
        this.foundationAccept = foundationAccept;
        this.tableauAccept = tableauAccept;
        this.cellCount = cellCount;
        this.allowStackMoves = allowStackMoves;
    }

    /**
     * Клондайк (Косынка): 1 колода, 3 карты, любая масть, начинаем с туза
     */
    public static GameRules klondike() {
        return new GameRules(
            "Клондайк (Косынка)",
            1, 3,                          // 1 колода, берём по 3
            1, 1,                          // foundation: одна масть, начинаем с туза
            4, 2,                          // tableau build: любая масть, убывание на 1
            4, 2,                          // tableau move: любое чередование цветов
            13, 13,                        // max 13 в foundation, max 13 в tableau
            0, true                        // 0 ячеек, разрешены перемещения серий
        );
    }

    /**
     * Паук (Spider): 2 колоды, 1 карта, только пики, начинаем с короля
     */
    public static GameRules spiderOneSuit() {
        return new GameRules(
            "Паук (1 масть)",
            2, 1,                          // 2 колоды, берём по 1
            1, 13,                         // foundation: только пики, начинаем с туза (но строим с короля)
            1, 2,                          // tableau: одна масть, убывание
            1, 2,                          // move: одна масть, убывание
            13, 10,                        // max 13 в foundation, max 10 в tableau
            0, true
        );
    }

    /**
     * Свободная ячейка (Freecell): 1 колода, 1 карта, 8 ячеек
     */
    public static GameRules freecell() {
        return new GameRules(
            "Freecell",
            1, 1,                          // 1 колода, берём по 1
            1, 1,                          // foundation: одна масть, с туза
            4, 2,                          // tableau build: любая масть
            4, 2,                          // tableau move: чередование цветов
            13, 13,
            8, true                        // 8 ячеек
        );
    }

    /**
     * Проверить, можно ли положить карту в foundation
     */
    public boolean canAcceptToFoundation(Pile foundation, Card card) {
        Card top = foundation.peek();
        if (top == null) {
            return foundationRank == 1 && card.rank == Rank.ACE;
        }
        if (foundationSuit == 1) {
            return top.suit == card.suit && top.ordinal == card.ordinal - 1;
        } else {
            return top.ordinal == card.ordinal - 1;
        }
    }

    /**
     * Проверить, можно ли положить карту в tableau
     */
    public boolean canAcceptToTableau(Pile tableau, Card card) {
        Card top = tableau.peek();
        if (top == null) {
            // На пустую колонку можно положить только короля (обычно)
            return card.rank == Rank.KING;
        }

        if (tableauBuildRank == 2) {
            // Убывание на 1
            if (top.ordinal != card.ordinal + 1) return false;
        }

        if (tableauBuildSuit == 4) {
            // Любая масть — только чередование цветов
            return top.isOppositeColor(card.suit);
        } else {
            // Одна масть
            return top.suit == card.suit;
        }
    }

    /**
     * Проверить, можно ли переместить серию по tableau
     */
    public boolean canMoveInTableau(Card card) {
        // Проверяем, что все карты в серии идут по правилам
        return true;  // упрощённо
    }
}
