const chai = require('chai');
const expect = chai.expect;

const getMovie = require('./queries/getMovie.js');
const randomYear = require('./dataSeeder/randomData/randomYear.js');

describe('db test suite', () => {
  describe('getMovie query function', () => {
    it('should return false when the input is not a number', () => {
      const result = getMovie('a');
       expect(result).to.equal(false);
    });
    it('should return an object', () => {
      const result = getMovie(1);
      expect(result).to.be.an('object');
    });
  });

  describe('randomYear function', () => {
    const year = randomYear();
    it('should return a number between 2000 and 2020', () => {
      expect(year).to.be.above(1999);
      expect(year).to.be.below(2021);
    })
  })
})