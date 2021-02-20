// Задание 2
// Настройте компонент из первого задания с помощью
// стилей. Набор стилей выбирается каждый раз случайно.

import React from "react";

export default class FootballClubStyle extends React.Component {
  num = [
    { color: "red" },
    { color: "green"},
    { color: "blue"}
    ];

  club = {
    nameClub: "Динамо Киев",
    city: "Киев",
    year: "1927",
    gerb: "https://sportguide.kiev.ua/_imgs/contentImgs/20071.gif"
  };

  render() {
    return (
      <div>
        <h2 style={this.num[Math.floor(Math.random() * this.num.length)]}>Название ФК : {this.club.nameClub}</h2>
        <ul>
          <li>город клуба : {this.club.city}</li>
          <li>год основания клуба : {this.club.year}</li>
          <li>
            герб :
            <ul type="none">
              <li>
                <img src={this.club.gerb} width="50" height="60" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
