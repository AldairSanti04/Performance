module.exports = {
  randomData
};

const Faker = require('faker');

function randomData(aux, e, done) {
  let randomContent = Faker.name.firstName();
  let randomDate = Faker.date.recent();
  let dateFormat = randomDate.toISOString().split('T')[0];

  aux.vars.randomContent = randomContent;
  aux.vars.dateFormat = dateFormat;
  return done();
}