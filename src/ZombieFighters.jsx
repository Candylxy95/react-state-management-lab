import React, { useState } from "react";
import "./index.css";
import "./App.css";
import Button from "./Button";

const ZombieFighters = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setMoney((prevMoney) => prevMoney - fighter.price);
      setTeam((prevFighter) => [...prevFighter, fighter]);
      setTotalStrength((prevStr) => prevStr + fighter.strength);
      setTotalAgility((prevAgi) => prevAgi + fighter.agility);
    } else console.log("Not enough money");
  };

  const handleRemoveFighter = (member) => {
    if (team.length > 0) {
      setMoney((prevMoney) => prevMoney + member.price);
      setTeam((prevTeam) =>
        prevTeam.filter((fighter) => fighter.name !== member.name)
      );
      setTotalStrength((prevStr) => prevStr - member.strength);
      setTotalAgility((prevAgi) => prevAgi - member.agility);
    } else console.log("no more members");
  };

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <h2>Team</h2>
      <div className="team">
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          team.map((member, idx) => {
            return (
              <div key={idx}>
                <ul>
                  <img src={member.img} />
                  <li>Name: {member.name}</li>
                  <li>Price: {member.price}</li>
                  <li>Strength: {member.strength}</li>
                  <li>Agility: {member.agility}</li>
                  <Button
                    onClick={() => handleRemoveFighter(member)}
                    msg="Remove"
                  />
                </ul>
              </div>
            );
          })
        )}
      </div>
      <h2>Fighters</h2>
      <section>
        {zombieFighters.map((fighter, idx) => {
          return (
            <div key={idx}>
              <ul>
                <img src={fighter.img} />
                <li>Name: {fighter.name}</li>
                <li>Price: {fighter.price}</li>
                <li>Strength: {fighter.strength}</li>
                <li>Agility: {fighter.agility}</li>
                <Button onClick={() => handleAddFighter(fighter)} msg="Add" />
              </ul>
            </div>
          );
        })}
        ;
      </section>
    </div>
  );
};

export default ZombieFighters;
