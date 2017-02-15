/* ДЗ 3 - объекты и массивы */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
};

forEach (['a', 'b', 'c'], function (el, index, arr) {
    return el;
});

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(fn(array[i], i, array));
    }
    return result;
}
map ([2, 3, 4], function (el) {
    return el * 2;
});

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var result, i;
    
    if(initial == undefined){
        result = array[0];
        i = 1;
    } else {
        result = initial;
        i = 0;
    };
    for (; i < array.length; i++) {
        result = fn(result, array[i], i, array);
    };
    return result;
}

reduce ([2, 3, 4], function ( sum, item ) {
    sum = sum + item;
    return sum;
});

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var result =[];
    for ( var prop in obj) {
        result.push(prop);
    }
    return result;
}
var letterObj = {
    a: 1,
    b: 2,
    c: 3
};
getEnumProps(letterObj);

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var result = [];
    for ( var prop in obj) {
        result.push( prop.toUpperCase() );
    }
    return result;
};
var letter = {
    a: 'one',
    b: 'two',
    c: 'three'
};
upperProps(letter);

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
