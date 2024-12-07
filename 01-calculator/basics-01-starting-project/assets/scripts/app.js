const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

outputResult(0, '');

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
      currentResult += enteredNumber;
      mathOperator = '+';
    } else if (calculationType === 'SUBSTRACT'){    
      currentResult -= enteredNumber;
      mathOperator = '-';
    } else if (calculationType === 'MULTIPLY' || calculationType === 'M') {
      currentResult *= enteredNumber;
      mathOperator = '-';
    } else {
      currentResult /= enteredNumber;
      mathOperator = '-';
    }

    createAndWriteLog(mathOperator, initialResult, currentResult);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', () => calculateResult('ADD'));
subtractBtn.addEventListener('click', () => calculateResult('SUBSTRACT'));
multiplyBtn.addEventListener('click', () => calculateResult('M'));
divideBtn.addEventListener('click', () => calculateResult('DIVIDE'));
