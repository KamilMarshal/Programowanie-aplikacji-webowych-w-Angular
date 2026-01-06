import {Question} from './question';

export interface TestAnswer {
  question: Question;
  selected: string[];
  isCorrect: boolean;
}
