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
                <td>${country.currencies}</td>
                <td>${country.languages}</td>
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
                    area: country.area || 0,
                    region: country.region,
                    currencies: country.currencies.map(i => i.name).join(', '),
                    languages: country.languages.map(i => i.name).join(', '),
                    flag: country.flag || ''
                };
            });
            renderCountries(countries);
        });
}

document.querySelector('.load-countries').onclick = e => {
    getData();
}