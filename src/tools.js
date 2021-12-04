export const checkNameValidation = function (inputArr) {
  let valid = false;
  let message = "";
  const size = inputArr.length;
  if (inputArr.filter((item) => item.length === 0).length > 0) {
    message = "error code1: 입력값이 없습니다.";
  } else if (inputArr.filter((item) => item.length > 5).length > 0) {
    message = `error code2: 자동차 이름은 5자 이하만 가능합니다.`;
  } else if ([...new Set(inputArr)].length < size) {
    message = `error code3: 자동차 이름은 중복없이 입력해주세요.`;
  } else {
    valid = true;
  }

  return { valid, message };
};
export const checkRaceCountValidation = function (input) {
  let valid = false;
  let message = "";
  if (input.length === 0) {
    message = "error code1: 입력값이 없습니다.";
  } else if (typeof Number(input) === NaN) {
    message = "error code2: 숫자가 아닙니다.";
  } else {
    valid = true;
  }

  return { valid, message };
};
