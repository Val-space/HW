// console.table(countries);
// console.log(countries);
//1
const showCountrieInfo = function (countries, args) {
    return countries.map(function (country) {
        let obj = {};
        args.forEach(i => {
            obj[i] = country[i] || null;
        })
        return obj;
    });
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
const sortCountries = function (countries, key) {
    let sortedCountries = [...countries].sort(function (countryA, countryB) {
        // if (typeof (countryA[key]) === 'number') {
        //     return countryB[key] - countryA[key];

        // } else if (typeof (countryA[key]) == 'string') {
        //     if (countryA[key] > countryB[key]) {
        //         return 1;
        //     }
        //     if (countryB[key] > countryA[key]) {
        //         return -1;
        //     }
        //     return 0;
        // }
        return typeof countryA[key] === 'number' ?
            countryB[key] - countryA[key] : countryA[key] > countryB[key] ? 1 : -1
    });
    // return sortedCountries;
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



// 
function addNumbers(num1) {
    return function (num2) {
        return num1 + num2;
    }
}
console.log(addNumbers(5)(8))