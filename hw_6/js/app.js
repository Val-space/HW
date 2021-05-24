const renderCountries = countries => {
    console.log(countries);

    let htmlStr = '';
    for (let country of countries) {
        htmlStr += `<tr>
                <td>${country.name}</td>
                <td>${country.capital}</td>
                <td>${country.population}</td>
                <td>${country.area}</td>
                <td>${country.region}</td>
                <td>${country.currencies.map(i => i.name).join(', ')}</td>
                <td>${country.languages.map(i => i.name).join(', ')}</td>
                <td><img src="${country.flag}"></td>
            </tr>`;
    }

    document.querySelector('table > tbody').innerHTML = htmlStr;

}


const getData = () => {
    let countries = [];
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json()).then(data => {
            countries = data.map(country => {
                return {
                    name: country.name,
                    population: country.population,
                    capital: country.capital,
                    area: country.area,
                    region: country.region,
                    currencies: country.currencies,
                    languages: country.languages,
                    flag: country.flag
                };
            });
            renderCountries(countries);
        });
}

document.querySelector('.load-countries').onclick = e => {
    getData();
}