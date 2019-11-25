#!/usr/bin/env node

import { getName, brainEvenRules, brainEvenGame } from '../index';

console.log('Welcome to the Brain Games!');
brainEvenRules();

const userName = getName();

brainEvenGame(userName);
