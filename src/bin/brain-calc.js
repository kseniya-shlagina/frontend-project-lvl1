#!/usr/bin/env node

import { launchGame } from '../index';
import {
  brainCalcRule,
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
} from '../games/brain-calc-game';

launchGame(brainCalcRule, question1, answer1, question2, answer2, question3, answer3);
