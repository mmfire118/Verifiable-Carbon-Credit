# fund-flow

Crypto fund flow for Mana.

## Setup

We use Hardhat as our development environment, and Ethers.js/Waffle plugins for testing. For remote network deployment, we use Alchemy.

Make sure you have git, solc, npm/npx, and nodejs installed on your machine.

Install repository dependencies with `npm install`.

Compile with `npx hardhat compile`.

Run tests with `npx hardhat test`.

## Info

Contract heading:
```solidity=
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
```

Commit logs:
- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

## Specs

See the living document [here](https://hackmd.io/@wzhang/HJ4B-kuy5).
