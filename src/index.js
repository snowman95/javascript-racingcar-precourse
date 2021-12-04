import Car from "./car.js";
import { RACE_GAME_INPUT } from "./constants/race.js";
import { HIDDEN_CLASSNAME } from "./constants/style.js";
import { checkNameValidation, checkRaceCountValidation } from "./tools.js";
export default class RacingGame {
  constructor() {
    this.cars = [];
    this.raceCount = 0;
    this.carNameInput = document.querySelector("#car-names-input");
    this.carNameSubmitButton = document.querySelector("#car-names-submit");
    this.racingCountTitle = document.querySelector("#racing-count-title");
    this.racingCountInput = document.querySelector("#racing-count-input");
    this.racingCountSubmitButton = document.querySelector(
      "#racing-count-submit"
    );
    this.winnerOuputElement = document.querySelector("#result");
    this.hideElement();
    this.createResultElement();
    this.addEvent();
  }
  hideElement() {
    this.racingCountInput.classList.add(HIDDEN_CLASSNAME);
    this.racingCountSubmitButton.classList.add(HIDDEN_CLASSNAME);
    this.racingCountTitle.classList.add(HIDDEN_CLASSNAME);
    this.winnerOuputElement.classList.add(HIDDEN_CLASSNAME);
  }

  createResultElement() {
    this.resultTitle = document.createElement("span");
    this.resultTitle.innerHTML = "최종 우승자: ";
    this.resultTitle.classList.add(HIDDEN_CLASSNAME);

    this.resultText = document.createElement("span");
    this.resultText.id = "racing-winners";
    this.resultText.innerHTML = "";
    this.resultText.classList.add(HIDDEN_CLASSNAME);
  }

  addEvent = function () {
    this.carNameSubmitButton.addEventListener("click", (event) =>
      this.onCarNameSubmitted(event)
    );
    this.racingCountSubmitButton.addEventListener("click", (event) =>
      this.onRaceCountSubmitted(event)
    );
  };

  onCarNameSubmitted = function (event) {
    event.preventDefault();
    const carNames = this.carNameInput.value.split(",");
    const { valid, message } = checkNameValidation(carNames);
    valid ? this.makeCarWithName(carNames) : alert(message);
  };
  makeCarWithName = function (carNames) {
    carNames.forEach((name) => this.cars.push(new Car(name)));
    this.racingCountTitle.classList.remove(HIDDEN_CLASSNAME);
    this.racingCountInput.classList.remove(HIDDEN_CLASSNAME);
    this.racingCountSubmitButton.classList.remove(HIDDEN_CLASSNAME);
  };

  onRaceCountSubmitted = function (event) {
    event.preventDefault();
    const raceCount = this.racingCountInput.value;
    const { valid, message } = checkRaceCountValidation(raceCount);
    valid ? this.play(raceCount) : alert(message);
  };
  play = function (raceCount) {
    this.raceCount = Number(raceCount);
    this.cars.forEach((car) =>
      car.move(
        RACE_GAME_INPUT.MIN,
        RACE_GAME_INPUT.MAX,
        RACE_GAME_INPUT.BASE,
        this.raceCount
      )
    );
    this.showTotalRecords();
    this.showWinner();
  };

  showTotalRecords = function () {
    let resultText = `📄 실행 결과<br/><br/>`;

    const range = [...Array(Number(this.raceCount))].map((v, i) => i);
    range.forEach((item, index) => (resultText += this.getRaceRecord(index)));
    this.winnerOuputElement.innerHTML = `${resultText}`;
    this.winnerOuputElement.classList.remove(HIDDEN_CLASSNAME);
  };

  getRaceRecord = function (lap) {
    const record = [];
    this.cars.forEach((car) =>
      record.push(`${car.name}:${" -".repeat(car.result[lap])}`)
    );
    record.push("<br/>");
    return record.join("<br/>");
  };

  showWinner = function () {
    const winner = [];
    this.cars.forEach((car) =>
      car.result[this.raceCount - 1] === this.raceCount
        ? winner.push(car.name)
        : ""
    );
    this.resultText.innerHTML = `${winner.join(", ")}`;
    this.winnerOuputElement.appendChild(this.resultTitle);
    this.winnerOuputElement.appendChild(this.resultText);
    this.resultText.classList.remove(HIDDEN_CLASSNAME);
    this.resultTitle.classList.remove(HIDDEN_CLASSNAME);
  };
}

const game = new RacingGame();
