// console.table(countries);
// console.log(countries);



//1
const showCountrieInfo = function (countries, args) {
    let newCountrieList = countries.map(function (country) {
        let obj = {};
        args.forEach(i => {
            obj[i] = country[i]
        })
        return obj;
    })
    return newCountrieList;
}


console.log(showCountrieInfo(countries, ['population', 'area']));



// const showCoutriesFields = function (countries, keys) {
//     return countries.map(function (country) {
//         let objKeys = Object.keys(country)
//         objKeys.forEach(function (item) {
//             if (keys.indexOf(item) === -1) {
//                 delete country[item]
//             }
//         })
//         return country;
//     });
// }
// console.log(showCoutriesFields(countries, ['name', 'population', 'capital']))


// 2
const sortCountries = function (countries, str) {
    let sortedCountries = [...countries].sort(function (countryA, countryB) {
        if (typeof (countryA[str]) == 'number') {
            return countryB[str] - countryA[str];

        } else if (typeof (countryA[str]) == 'string') {
            if (countryA[str] > countryB[str]) {
                return 1;
            }
            if (countryB[str] > countryA[str]) {
                return -1;
            }
            return 0;
        }
    });
    return sortedCountries;
}

// console.table(sortCountries(countries, 'area'));
// console.table(sortCountries(countries, 'capital'));


// 3

const getAverage = function (countries, str) {
    return countries.reduce(function (acc, country) {
        return (acc + country[str]) / countries.length;
    }, 0).toFixed(2);
}

console.log(getAverage(countries, 'population'));