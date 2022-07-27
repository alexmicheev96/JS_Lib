import $ from '../core';

// !Метод меняюший быстро HTML структуру

$.prototype.innerHtml = function(content) {
    for(let i = 0; i < this.length; i++) {
        if(content) {
            this[i].innerHTML = content;
        } else {
            //* вернум структуру HTML элемента(контент) поэтому дальше работать с методами библиотеки не сможем
            return this[i].innerHTML;  
        }
    }
    return this;
};

//! Функция по получению элемента из выборки
$.prototype.eq = function(i) {
    const swap = this[i];
    //* используем не this.length так как в нашем обьекте могут быть еще свойства 
    const objLength = Object.keys(this).length;

    for(let i = 0; i < objLength; i++) {
        //* поностью удалеям все свойства нашего обьекта для того чтобы сохранить методы в прототипе
        delete this[i];
    }
    this[0] = swap;
    this.length = 1;

    return this;
};
//! Функция по получению номера элемента по порядку(среди тех элементов которые имеют общего родителя) - конечный будет возвращать число
$.prototype.index = function() {
    //* получаем родителя искомого элемента, так как мы знаем что бyдем работать с одним элементом поэтому this[0]
    const parent = this[0].parentNode;
    //* все потомки родителя(зачем развернули спредом, так как мы получаем коллекцию а не массив то у него нету методов которые нам нужны, поэтому оборачиваем в скобки и с помощью спреда создаем наш массив)
    const childs = [...parent.children]; //* все дети и не только с заданным тегом или классом и т.д.
    const findMyIndex = (item) => {
        return item === this[0];
    };
    return childs.findIndex(findMyIndex);
};
//! метод для получения элемента с определенным селектором, у уже найденных
$.prototype.find = function(selector) {
    //* за общее количество
    let numberOfItems = 0;
    //* отвечает за количество новых записанных элементов которые мы записали в this (ключ обьекта)
    let counter = 0;
    //* неглубокая копия нашего обтека this
    const copyObj = Object.assign({}, this);

    for(let i = 0; i < copyObj.length; i++) {
        //* содержит элементы которыe получаем при каждой итерации
        const array = copyObj[i].querySelectorAll(selector);
        //* если в элементе ничего не было получено
        if(array.length === 0) {
            continue;
        }

        for(let j = 0; j < array.length; j++) {
            this[counter] = array[j];  //* this[0], this[1]
            counter++;
        }
        numberOfItems += array.length;     //* === 2
    }

    this.length = numberOfItems;  //* === 2
    const objLength = Object.keys(this).length;   //* === колву ключей в обьекте первоначальном
    for(; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];   //* this[2] и т.д.
    }


    return this;
};
//! Получаем ближайший родительский элемент
$.prototype.closest = function(selector) {
    //* количество элементов которые мы нашли с помощью метода closest 
    let counter = 0;
    let newLength = 0;
    for(let i = 0; i < this.length; i++) {
        if(this[i].closest(selector)) {
            this[i] = this[i].closest(selector);
            newLength++;
            counter++;
        } else {
            return this;
        }
        
    }
    this.length = newLength;
    const objLength = Object.keys(this).length;
    for(; counter < objLength; counter++) {
        delete this[counter];   //* this[2] и т.д.
    }
    
    return this;
};
//! получаем все соседние элементы не включая сам элемент
$.prototype.siblings = function() {
    //* за общее количество
    let numberOfItems = 0;
    //* отвечает за количество новых записанных элементов которые мы записали в this
    let counter = 0;
    //* неглубокая копия нашего обтека this чтобы избежать багов
    const copyObj = Object.assign({}, this);

    for(let i = 0; i < copyObj.length; i++) {
        const array = copyObj[i].parentNode.children;

        for(let j = 0; j < array.length; j++) {
            if(copyObj[i] === array[j]) {
                continue;
            }
            this[counter] = array[j];
            counter++;
        }
        
        numberOfItems += array.length - 1;     //* === 2
    }

    this.length = numberOfItems;  //* === 2
    const objLength = Object.keys(this).length;   //* === колву ключей в обьекте
    for(; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];   //* this[2] и т.д.
    }


    return this;
};