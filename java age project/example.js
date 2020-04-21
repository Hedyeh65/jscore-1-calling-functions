function bornYear(age) {
  return 2020 - age;
}
console.log(bornYear(34));

function nameAndAge(name, age) {
  const year = 2020 - age;
  const message = "I am " + name + " and I born in " + year + ".";
  return message;
}
console.log(nameAndAge("Hedyeh", 34));
