//! creat element

let div = document.createElement('div')
div.style.cssText = 'background: blue; color: white; font-size:30px; width:310px';

//? div değişkeni yeni ile yeni bir öğesi oluşturuldu
//? innerHTML methodunu kullanarak öğenin içerisine metin gönderebiliriz
 
// div.innerHTML = 'merhaba dünya';

//? appenChild() ile oluşturulan öğeyi sayfaya eklemek için kullanılan methoddur 

document.body.appendChild(div).style.color = 'red';


let divElement = document.getElementById('myDiv');

let paragraf1 = document.createElement('p');
paragraf1.innerHTML = 'bu 1. paragraf';

let paragraf2 = document.createElement('p');
paragraf2.innerHTML = 'bu 2. paragraf';
divElement.appendChild(paragraf1);
div.appendChild(paragraf2)

//! remove 
//* dom ağacında belirli bir öğeyikaldırmak için kullanılır

paragraf2.remove();


function bmiCalculator(kilo,boy){
    let hesap = kilo / Math.pow(boy,2) ;
    console.log( Math.floor(hesap));
}
bmiCalculator(65,1.8);



function ask (){

    let onePeople = prompt ("1.kişi");
    let twoPeople = prompt ("2.kişi");

    n = Math.random();
    n = n * 100;
    n = Math.floor(n)+1;
    console.log("arkadaşlık: " + n)
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        getNames();
    }
}

function ark (){
    n = Math.random();
    n = n * 100;
    n = Math.floor(n)+1;
    console.log(n)
}

function getNames() {
   let n = Math.random();
    n = n * 100;
    n = Math.floor(n)+1;
    console.log(n)
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    // const fullName = firstName +  + lastName;
    
    if(n >= 85){
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = "en iyi arkadaşlar: " + "%" + n  ;
    }
    else if(n >= 70){
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = "çok iyi arkadaşlar: " + "%" + n  ;
    }
    else if(n >= 50){
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = " iyi arkadaşlar: " + "%" + n  ;
    }
    else{
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = "arkadaşlığınız leş" + "%" + n;
    }

}


