let accessKey = '13b84bb97d1d700bf3c286d8894869d0'

let from = document.getElementById("from");
let toCurrencies = document.getElementById("toCurrencies");
// Getting all the data from API to put them into the two selectors
const fetchCurrencies = async() => {
    try {

        const response = await fetch(`http://www.apilayer.net/api/list?access_key=${accessKey}&format=1`)
        const currenciesCountries = await response.json();

        let currency = currenciesCountries.currencies;
        console.log(currenciesCountries.currencies);
        for (item in currency) {
            let fromCountry = document.createElement("option");
            fromCountry.setAttribute("value", item);
            fromCountry.setAttribute("id", item);
            fromCountry.innerText = item + " - " + currency[item];
            from.appendChild(fromCountry);
            let toCountry = document.createElement("option");
            toCountry.setAttribute("value", item);
            toCountry.setAttribute("id", item);
            toCountry.innerText = item + " - " + currency[item];
            toCurrencies.appendChild(toCountry);
        }

    }
        catch {console.log}
}
fetchCurrencies();

const convert = async() => {
    try{
    const response2 = await fetch(`http://www.apilayer.net/api/list?access_key=${accessKey}&format=1`)
    const currenciesValue = await response2.json();
    const currenciesName = await currenciesValue.quotes;
    let fromCountryId = from.selectedIndex;
    let currency1 = from.options[fromCountryId].id;
    let toCountryId = toCurrencies.selectedIndex;
    let currency2 = toCurrencies.options[toCountryId].id;
    let amount = entry.value;
    // for (item in currenciesName) {
    //     if (item == "USD" + currency1) {
    //         op1 = currenciesName[item];
    //     }
    //     else if (item == "USD" + currency2) {
    //         op2 = currenciesName[item];
    //     }
    // }
    let finalResult = (amount * op2 / op1) +" "+ currency2;
    result.style.display="block";
    result.textContent = finalResult;  }
    catch {
        result.style.display="block";
        result.textContent = "Try some other parameters";
    }

}


let button = document.getElementById("button");
let entry = document.getElementById("entry");
let result = document.getElementById("result");
button.addEventListener('click', convert);
