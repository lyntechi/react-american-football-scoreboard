//TODO: STEP 1 - Import the useState hook.
import React from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import { useState } from "react"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks. 
  // You'll need one for the home score and another for the away score.

  let [homeScore, setHomeScore] = useState(0);
  let [awayScore, setAwayScore] = useState(0);
  let timer = "00:00";
  const homeName = "Lions";
  const awayName = "Tigers";

let homeTouchDown = function(){
  setHomeScore(homeScore + 7)
}
let awayTouchDown = function(){
  setAwayScore(awayScore + 7)
}
let homeFieldGoal = function(){
  setHomeScore(homeScore+3)
}
let awayFieldGoal = function(){
  setAwayScore(awayScore + 3)
}






  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
  <h2 className="home__name">{homeName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic 
            values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">{awayName}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions 
          to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchDown}>Home Touchdown</button>

          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
         
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchDown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}
export default App;
