//ternary operator
const number = 0

const className = number % 2 ? 'odd' : 'even'; 

console.log(className);

// basit bir fonksiyon denemesi
const plus = (a, b) => {
    return a + b
}

const result = plus(2, 3);

// Math.random denemesi
// const random = Math.random(3, 6) * 10;

// console.log(random);

// .innerHTML denemesi
const changeText = document.querySelector('.text');

changeText.innerHTML = "Ekin"


// fonksiyon sayesinde button ile text değişimi
const textChanger = document.getElementById('headline');

const set_headline = () => {
    textChanger.innerHTML = 'Javascript functions'
}

// dogum tarihinden yaş hesaplama -----------
// const textForAge = document.querySelector('.text2');

// let birthYear = Number(prompt('Enter your birth year:'));

// let age = 2022 - birthYear;

// textForAge.innerHTML = 'Your age is ' + age;


// celsius to Fahrenheit -----------------

// let tempF = prompt('Temperature in Fahrnheit: ');

// tempF = Number(tempF.replace(',', '.'));

// const celsius = Math.round((tempF - 32) / 1.8);

// document.write('Your heat in celsius is: ' + celsius);


// dice rolls -------------------
const dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);

