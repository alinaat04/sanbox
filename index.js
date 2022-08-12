// Площадь прямоугольника

/*let a = Number(prompt('Введите первое число!'));
let b = Number(prompt('Введите второе число!'))
function areaOfRectangle(a,b){
    return a * b;
}
let result = areaOfRectangle(a,b);
alert('Square = ' + result);*/


// Длина окружности
/*let radius = Number(prompt('Введите радиус окружности'));
function circumference(radius){
    return Math.PI * radius;
}
let resultOfRadius = circumference(radius);
alert('Circumference = ' + resultOfRadius);*/


//Обьем циллиндра

/*let d = Number(prompt('Введите диаметр окружности'));
let H = Number(prompt('Введите высоту циллиндра'));
function V(d,H){
    return Math.PI * (d / 2)**2 * H;
}
let VOfCylinder = V(d,H);
alert('V = ' + VOfCylinder);*/


// Деление на 5

/*let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
for (let i = 0; i < num2; i++){
    if (i > num1 && i % 5 == 0){
        console.log(i);
    }
}*/


//FizzBuzz

/*for (let i = 1; i <= 100; i++){
    if (i % 3 == 0){
        if (i % 5 == 0){
            console.log('FizzBuzz');
        } else {
            console.log('Fizz');
        };
    } else if (i % 5 == 0){
        console.log('Buzz');
    } else console.log(i);
}*/


//Задание со звёздочкой

/*let a = Number(prompt('Введите значение a'));
let b = Number(prompt('Введите значение b'));
let c = Number(prompt('Введите значение c'));


let disc = (b**2) - (4 * a * c);
    if(disc < 0){
        console.log('Корней нет');
    }else {
        let x1 = (-(b) + Math.sqrt(disc)) / (2 * a);
        let x2 = (-(b) - Math.sqrt(disc)) / (2 * a);
        console.log(x1, x2);
    }*/