// // Amalyiyot mavzu serials

// const numberOfSeries = "Nechta serial ko'rdingiz"

// console.log(numberOfSeries)

// const promp = {
// count:"",
// series:{

// },

// actors:{

// },
// genres:[],
// privat:false,

// }

// promp.count = prompt("Nechta serial ko'rdingiz")
// promp.series = prompt("Qanday serial ko'rdingiz")
// promp.actors = prompt("qanday actyorlar bor")
// promp.genres = prompt("qanday janrlar mavjud")
// console.log(promp)

const numberOfSeries = +prompt("Nechta serial ko'rdingiz")

const SeriesDb = {
    count:numberOfSeries,
    series:{},
    actors:{},
    genres:[],
    private:false,
}
const a = prompt("Oxirgi marta ko'rgan serialingiz"),
      b = prompt("Nech baho berasiz"),
      c = prompt("Oxirgi marta ko'rgan serializngiz"),
      d  = prompt("Necha baho berasiz")

      SeriesDb.series[a] = b,
      SeriesDb.series[c] = d,
console.log(SeriesDb)