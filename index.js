//=============== установка и удаление билиотек

// const CC = require('currency-converter-lt');
// let currencyConverter = new CC({from:"USD", to:"BYN", amount:100});
// currencyConverter.convert().then((response) => {
//     console.log(`Result: ${response}`)
// })

//========================== Работа с модулями =====================
// const os = require('os'); // подключение встроенного модуля
// let res = os.platform();
// console.log(res);
//========================== Создание своего модуля =====================
//Это создание либо отдельной папки либо отдельного файла >> далее подключение этого файла внутри др файлов..это и есть
// создание модуля

const my_math = require('./my_math');

let res1 = my_math.add(4, 5);
console.log(res1)


