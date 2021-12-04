export default class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
    this.result = [];
  }

  move = function (min = 0, max = 9, cnt) {
    for (let i = 0; i < cnt; i++) {
      const randomNum = MissionUtils.Random.pickNumberInRange(min, max);
      this.moveCount = randomNum >= 4 ? this.moveCount + 1 : this.moveCount;
      this.result.push(this.moveCount);
    }
  };
}
