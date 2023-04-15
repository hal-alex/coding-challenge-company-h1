# Tendable Coding Assessment

## Usage

```sh
yarn
yarn dev
```

## Goal

Complete the provided skeleton command line program that asks a series of Yes/No questions.

## Requirements

The user should be able to answer "Yes", "No", "Y", or "N" case insensitively to answer each question prompt.

The answers will need to be **persisted** so they can be used in calculations for subsequent runs.

After _each_ run the program should calculate and print a rating.
The calculation for the rating is: `100 * number of yes answers / number of questions`.
The program should also print an average rating for all runs.
