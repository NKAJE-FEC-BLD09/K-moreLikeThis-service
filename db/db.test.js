const chai = require('chai');
const expect = chai.expect;

const getMovie = require('./queries/getMovie.js');

describe('db test suite', () => {
  describe('getMovie query function', () => {
    it('should return false when the input is not a number', () => {
      const result = getMovie('a');
       expect(result).to.equal(false);
    })
    it('should return an object', () => {
      const result = getMovie(1);
      expect(result).to.be.an('object');
    })
  })
})