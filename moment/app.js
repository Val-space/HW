let link = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=';



let inputData = document.querySelector('.input');
inputData.addEventListener('click', () => {
    let date = moment(inputData.value).format("DDMMYYYY");
    // console.log(moment(inputData.value).format("DDMMYYYY"))
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
date = 20200302;

let currenciesInfo = [];
const getData = (date) => {
    console.log(date)
    fetch(`${link}${date}&json`)
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