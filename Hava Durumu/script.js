


let cityInput = document.querySelector('#searchBar');
let btn = document.querySelector('.ara');
btn.addEventListener('click',() => {
    getData(cityInput.value);
})

// function getData(name) {
//     let api = "97999bdbf47a2bf57d779d8cd6c29f0c"; 
//     let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api}&lang=tr&units=metric`;

//     fetch(baseUrl)
//         .then(res => res.json())
//         .then(data => {
//             let { name: cityName, main: { temp }, weather: [{ description }], main: { temp_min, temp_max } } = data;

//             console.log(cityName);
//             console.log(temp);
//             console.log(description);
//             console.log(temp_min);
//             console.log(temp_max);

//             let cityy = document.querySelector('.sehir')
//             let derec = document.querySelector('.derece')
//             let durum = document.querySelector('.durum')
//             let minmax = document.querySelector ('.minmax')

//             cityy.textContent = `${name}`
//             derec.textContent = `${temp}°`
//             durum.textContent = `${description}`
//             minmax.textContent = `${temp_min}/${temp_max}`
//         })
//         .catch(error => {
//             console.error('Hata oluştu:', error);
//         });
// }

function getData(name) {
    let api = "97999bdbf47a2bf57d779d8cd6c29f0c"; 
    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api}&lang=tr&units=metric`;

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            let { name: cityName, main: { temp }, weather: [{ description }], main: { temp_min, temp_max } } = data;

            // Tam sayıya yuvarla
            let roundedTemp = Math.round(temp);
            let roundedTempMin = Math.round(temp_min);
            let roundedTempMax = Math.round(temp_max);

            console.log(cityName);
            console.log(roundedTemp);
            console.log(description);
            console.log(roundedTempMin);
            console.log(roundedTempMax);

            let cityy = document.querySelector('.sehir')
            let derec = document.querySelector('.derece')
            let durum = document.querySelector('.durum')
            let minmax = document.querySelector ('.minmax')

            cityy.textContent = cityName;
            derec.textContent = `${roundedTemp}c°`;
            durum.textContent = description;
            minmax.textContent = `${roundedTempMin}c°/${roundedTempMax}c°`;
        })
        .catch(error => {
            console.error('Hata oluştu:', error);
        });
}
