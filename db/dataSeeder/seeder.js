const randomSeeder = require('./randomData/randomSeeder.js');
const fixedDataSeeder = require('./fixedData/fixedDataSeeder.js');
const movieData = require('./fixedData/movieData.js');


fixedDataSeeder(movieData);
randomSeeder();