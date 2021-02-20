import React from "react";

export default class MagicBall extends React.Component {
  ball = [
    [
      "Бесспорно",
      "Предрешено",
      "Никаких сомнений",
      "Определённо да",
      "Можешь быть уверен в этом"
    ],
    [
      "Мне кажется — «да»",
      "Вероятнее всего",
      "Хорошие перспективы",
      "Знаки говорят — «да»",
      "Да"
    ],
    [
      "Пока не ясно, попробуй снова",
      "Спроси позже",
      "Лучше не рассказывать",
      "Сейчас нельзя предсказать",
      "Сконцентрируйся и спроси опять"
    ],
    [
      "Даже не думай",
      "Мой ответ — «нет»",
      "По моим данным — «нет»",
      "Перспективы не очень хорошие",
      "Весьма сомнительно"
    ]
  ];
  press(ball) {
    let i = document.getElementById("pMagicBall");
    if (i !== null) {
      i.innerHTML = "";
    }
    let text = this.ball[Math.floor(Math.random() * this.ball.length)][
      Math.floor(
        Math.random() *
          this.ball[Math.floor(Math.random() * this.ball.length)].length
      )
    ];
    i.innerHTML = text;
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Введите свой вопрос" />
        <br />
        <p>
          Ответ :<i id="pMagicBall" />
        </p>
        <button onClick={() => this.press(this.ball)}>Click</button>
      </div>
    );
  }
}
