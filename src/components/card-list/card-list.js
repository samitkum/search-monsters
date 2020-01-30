import React from "react";
import Card from "./../card/card";
import "./card-list.css";

const CardList = ({ monsters }) => {
  const res =
    monsters.length > 0 ? (
      <div className="card-list">
        {monsters.map(monster => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    ) : (
      <h3>Monster not found..!!</h3>
    );
  return res;
};

export default CardList;
