#!/usr/bin/env node

import { launchGame } from '../index';
import {
  brainEvenRule,
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
} from '../games/brain-even-game';

launchGame(brainEvenRule, question1, answer1, question2, answer2, question3, answer3);
