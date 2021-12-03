import Car from "./car.js";
export default class RacingGame {
  constructor() {
    this.raceCount = 0;
    this.cars = [];
    this.carNameInput = document.querySelector("#car-names-input");
    this.carNameSubmitButton = document.querySelector("#car-names-submit");

    this.carNameSubmitButton.addEventListener("click", (event) =>
      this.makeCarWithName(event)
    );
  }
  makeCarWithName = function (event) {
    event.preventDefault();
    const carNames = this.carNameInput.value.split(",");
    carNames.forEach((name) => this.cars.push(new Car(name)));
    console.log(this.cars);
  };
}

const game = new RacingGame();
