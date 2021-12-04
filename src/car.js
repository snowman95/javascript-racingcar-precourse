export default class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
    this.result = [];
  }

  move = function (min = 0, max = 9, base = 4, actionCount) {
    // min~max 사이의 랜덤 값이 base 이상 나오면 전진한다.
    // 이를 총 actionCount 번 반복한다.
    for (let i = 0; i < actionCount; i++) {
      const randomNum = MissionUtils.Random.pickNumberInRange(min, max);
      this.moveCount = randomNum >= base ? this.moveCount + 1 : this.moveCount;
      this.result.push(this.moveCount);
    }
  };
}
