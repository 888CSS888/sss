package com.solitaire.core;

/**
 * Тип кучи (стека) на игровом столе
 */
public enum PileType {
    STOCK,        // колода (stock)
    WASTE,        // сброс (waste)
    FOUNDATION,   // база (foundation) — куда собираем до королей
    TABLEAU,      // табло (колонки)
    CELL,         // свободная ячейка (для Freecell)
}
