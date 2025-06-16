const marvel_heroes = ["thor", "Ironman", "spiderman"]

const dc_heroes  = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// const allHeros = marvel_heroes.concat(dc_heroes)

// console.log(allHeros);

const allHerosnew = [...marvel_heroes, ...dc_heroes]

console.log(allHerosnew);

const anotherArr = [1,2,3,[4,5,6],7,[8,9,[4,5]]]

const realAnarr = anotherArr.flat(Infinity)

console.log(realAnarr);

console.log(Array.isArray("Piyush"));
console.log(Array.from("Piyush"));
console.log(Array.from({name:"Piyush"})); ///interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
