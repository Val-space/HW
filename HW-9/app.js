let date = moment(Date.now()).format('YYYYMMDD');

let inputData = document.querySelector('.input');
inputData.addEventListener('change', () => {
    date = moment(inputData.value).format("YYYYMMDD");
    // console.log(date)
    getData(date)
})

const renderCurrencies = curr => {
    console.log(curr);
    let htmlStr = '';
    for (let i of curr) {
        htmlStr += `<tr>
                <td>${i.txt}</td>
                <td>${i.rate}</td>
            </tr>`;
    }
    document.querySelector('table > tbody').innerHTML = htmlStr;

}


let currenciesInfo = [];
const getData = (date) => {
    fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`)
        .then(res => res.json()).then(data => {
            currenciesInfo = data.map(currency => {
                return {
                    txt: currency.txt,
                    rate: currency.rate
                }
            })
            renderCurrencies(currenciesInfo);
        });
}
getData(date);