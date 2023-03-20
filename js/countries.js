const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countrie =>{
    // console.log(countrie);
    const allCountriesHTML = countrie.map(country => getCountriesHTML(country));
    // console.log(allCountriesHTML);
    const countrieHtml = document.getElementById('countries')
    countrieHtml.innerHTML = allCountriesHTML.join(' ');
    console.log(countrie[0])
}
const getCountriesHTML = country => {
    return `
    <div class="country">
       <h1>${country.name.common}</h1>
       <img src="${country.flags.png}" alt="">
      <p>${country.maps.googleMaps}<\p>
   </div>
 `;
 
}

loadCountries()