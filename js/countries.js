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

const getCountriesHTML = ({name, flags, area, region})=> {
    return `
    <div class="country">
       <h1>${name.common}</h1>
       <p>Area: ${area}</P>
       <p>islam: ${region}</P>
       <img src="${flags.png}" alt="">
   </div>
 `;

}

// const getCountriesHTML = (country) => {
//        const {name, flags, maps,} = country;
//         return `
//         <div class="country">
//            <h1>${name.common}</h1>
//            <img src="${flags.png}" alt="">
//           <p>${maps.googleMaps}<\p>
//        </div>
//      `;
     
//     }

loadCountries()