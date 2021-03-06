import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNumber from '../utils';

const conditionOfGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = questionNum => questionNum % 2 === 0;
const returnRightAnswer = questionNum => (isEven(questionNum) ? 'yes' : 'no');

const generateGameParams = () => {
  const questionNum = getRandomNumber(1, 100);
  const questionStr = `${questionNum}`;
  return cons(questionStr, returnRightAnswer(questionNum));
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};
