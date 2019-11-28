#!/usr/bin/env node

import { launchGame } from '../index';
import {
  brainGameRule,
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
} from '../games/brain-gcd-game';

launchGame(brainGameRule, question1, answer1, question2, answer2, question3, answer3);
