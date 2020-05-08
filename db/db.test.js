const chai = require('chai');
const expect = chai.expect;

const getMovie = require('./queries/getMovie.js');
const randomYear = require('./dataSeeder/randomData/randomYear.js');
const similarMoviesSeeder = require('./dataSeeder/randomData/similarMoviesSeeder.js');

describe('DB Test Suite', () => {
  describe('getMovie Query Function', () => {
    it('should return false when the input is not a number', () => {
      const result = getMovie('a');
       expect(result).to.equal(false);
    });
    it('should return an object', () => {
      const result = getMovie(1);
      expect(result).to.be.an('object');
    });
  });

  describe('randomYear Function', () => {
    const year = randomYear();
    it('should return a number between 2000 and 2020', () => {
      expect(year).to.be.above(1999);
      expect(year).to.be.below(2021);
    });
  });

  describe('similarMoviesSeeder Function', () => {
    const similars =  similarMoviesSeeder();
    it('should return an array', () => {
      expect(similars).to.be.an('array');
    });
    it('should have a length between and including 7 through 12', () => {
      expect(similars.length).to.be.above(6);
      expect(similars.length).to.be.below(13);
    });
  });
});