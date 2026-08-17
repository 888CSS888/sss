package com.solitaire;

import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.solitaire.core.GameEngine;
import com.solitaire.core.GameRules;
import com.solitaire.ui.SolitaireView;

/**
 * Главная активность — запускает игру
 */
public class MainActivity extends AppCompatActivity {

    private SolitaireView solitaireView;
    private GameEngine engine;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Находим views
        solitaireView = findViewById(R.id.solitaireView);
        TextView tvMoves = findViewById(R.id.tvMoves);
        TextView tvStatus = findViewById(R.id.tvStatus);
        Button btnNewGame = findViewById(R.id.btnNewGame);
        Button btnDraw = findViewById(R.id.btnDraw);

        // Создаём движок и запускаем игру
        engine = new GameEngine(GameRules.klondike());
        engine.dealKlondike();
        solitaireView.setGameEngine(engine);

        // Кнопка "Новая игра"
        btnNewGame.setOnClickListener(v -> {
            engine = new GameEngine(GameRules.klondike());
            engine.dealKlondike();
            solitaireView.setGameEngine(engine);
            updateUI(tvMoves, tvStatus);
            Toast.makeText(this, "Новая игра!", Toast.LENGTH_SHORT).show();
        });

        // Кнопка "Взять карту"
        btnDraw.setOnClickListener(v -> {
            engine.drawFromStock();
            solitaireView.invalidate();
            updateUI(tvMoves, tvStatus);
        });

        updateUI(tvMoves, tvStatus);
    }

    private void updateUI(TextView tvMoves, TextView tvStatus) {
        if (engine == null) return;
        tvMoves.setText("Ходы: " + engine.getMovesMade());

        if (engine.isGameOver()) {
            tvStatus.setText("Поздравляем! Вы выиграли!");
            tvStatus.setTextColor(0xFFFF8800);
        } else {
            tvStatus.setText("Игра продолжается...");
            tvStatus.setTextColor(0xFFFFFFFF);
        }
    }
}
