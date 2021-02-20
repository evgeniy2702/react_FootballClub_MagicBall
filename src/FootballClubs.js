// Задание 3
// Расширьте первое задание таким образом, чтобы
// можно было показывать информацию о нескольких футбольных клубах. Информация о клубах поступает из
// массива объектов.
// Домашнее задание


import React from "react";

export default class FootballClubs extends React.Component{
num = [
    { color: "red" },
    { color: "green"},
    { color: "blue"}
    ];

clubs = [{
    nameClub: "Динамо Киев",
    city: "Киев",
    year: "1927",
    gerb: "https://sportguide.kiev.ua/_imgs/contentImgs/20071.gif"
  },
  {
    nameClub: "Шахтер",
    city: "Донецк",
    year: "1936",
    gerb: "//upload.wikimedia.org/wikipedia/ru/thumb/a/a2/FC_Shakhtar_Donetsk_Logo.svg/158px-FC_Shakhtar_Donetsk_Logo.svg.png"
  }
];

  render() {
    return(
      this.clubs.map( (club) => 
      {return (
          <div key = {club.id}>
        <h2 style={this.num[Math.floor(Math.random() * this.num.length)]}>Название ФК : {club.nameClub}</h2>
        <ul>
          <li>город клуба : {club.city}</li>
          <li>год основания клуба : {club.year}</li>
          <li>
            герб :
            <ul type="none">
              <li>
                <img src={club.gerb} width="50" height="60" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      )
      }
      ) 
    )
 }
}