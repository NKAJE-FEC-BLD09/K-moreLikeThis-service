const { expect } = require('chai');

const randomYear = require('./dataSeeder/randomData/randomYear.js');
const similarMoviesSeeder = require('./dataSeeder/randomData/similarMoviesSeeder.js');

describe('DB Test Suite', () => {
  describe('randomYear Function', () => {
    const year = randomYear();
    it('should return a number between 2000 and 2020', () => {
      expect(year).to.be.above(1999);
      expect(year).to.be.below(2021);
    });
  });

  describe('similarMoviesSeeder Function', () => {
    const similars = similarMoviesSeeder();
    it('should return an array', () => {
      expect(similars).to.be.an('array');
    });
    it('should have a length between and including 7 through 12', () => {
      expect(similars.length).to.be.above(6);
      expect(similars.length).to.be.below(13);
    });
  });
});
