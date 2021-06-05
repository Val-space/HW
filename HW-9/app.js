// const inputData = document.querySelector('.inputData');
// inputData.value = moment(Date.now()).format('YYYY-MM-DD');

// const showRateByDate = () => {
//     let showDate = moment(inputData.value).format('YYYYMMDD');
//     getData(showDate);
// }

// inputData.addEventListener('change', () => {
//     showRateByDate();
// })

// const renderCurrencies = curr => {
//     let htmlStr = '';
//     for (let i of curr) {
//         htmlStr += `<tr>
//                 <td>${i.txt}</td>
//                 <td>${i.rate}</td>
//             </tr>`;
//     }
//     document.querySelector('table > tbody').innerHTML = htmlStr;
// }

// let currenciesInfo = [];
// const getData = (date) => {
//     fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`)
//         .then(res => res.json()).then(data => {
//             currenciesInfo = data.map(currency => {
//                 return {
//                     txt: currency.txt,
//                     rate: currency.rate
//                 }
//             })
//             renderCurrencies(currenciesInfo);
//         });
// }
// showRateByDate();

// using jquery
$(document).ready(() => {

    let date = moment().format('YYYY-MM-DD');

    const renderCurrencies = (currencies) => {
        let newHtml = '';
        if (currencies.length) {
            for (let currency of currencies) {
                newHtml += `<tr><td>${currency.txt}</td><td>${currency.rate}</td></tr>`
            }

        } else {
            newHtml += '<tr><td class="text-center">There is no information about rate on selected date, please select another date!</td></tr>'
        }
        $('table#currenciesTable tbody').html(newHtml);

    }
    const getData = (date) => {
        $.ajax(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`)
            .then(data => {
                // console.log(data);
                renderCurrencies(data.map(currency => ({
                    txt: currency.txt,
                    rate: currency.rate.toFixed(2)
                })))

            })
    }
    $('.input-date').on('change', e => {
        date = e.target.value.split("-").join('')
        console.log(date);
        getData(date);

    })
    $('.input-date').val(date).trigger("change")
})