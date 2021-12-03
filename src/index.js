import Car from "./car.js";
import { RACE_GAME_INPUT } from "./constants/race.js";
export default class RacingGame {
  constructor() {
    this.cars = [];
    this.carNameInput = document.querySelector("#car-names-input");
    this.carNameSubmitButton = document.querySelector("#car-names-submit");
    this.racingCountInput = document.querySelector("#racing-count-input");
    this.racingCountSubmitButton = document.querySelector(
      "#racing-count-submit"
    );

    this.carNameSubmitButton.addEventListener("click", (event) =>
      this.makeCarWithName(event)
    );
    this.racingCountSubmitButton.addEventListener("click", (event) =>
      this.play(event)
    );
  }
  makeCarWithName = function (event) {
    event.preventDefault();
    const carNames = this.carNameInput.value.split(",");
    carNames.forEach((name) => this.cars.push(new Car(name)));
    console.log(this.cars);
  };

  play = function (event) {
    event.preventDefault();
    const raceCount = this.racingCountInput.value;
    this.cars.forEach((car) =>
      car.move(RACE_GAME_INPUT.MIN, RACE_GAME_INPUT.MAX, raceCount)
    );
    this.cars.forEach((car) => console.log(car));
  };
}

const game = new RacingGame();
