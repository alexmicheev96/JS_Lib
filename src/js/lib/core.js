
// const $ = function(selector) {
//     //!каждый раз будет создаваться новый обьект, и сразу же будет вызываться метод который будет записан в прототипе функции конструктора в свойстве prototype
//     return new $.prototype.init(selector);  //* создаем объект в котором будет информация о элементах которые получены по селектору, а также их количество, и самое главное, у этого объекта будут доступны все методы функции $
// };

// $.prototype.init = function(selector) {
//     if(!selector) {
//         return this;  //*  возвращаем пустой {}
//     }

//     Object.assign(this, document.querySelectorAll(selector));
//     this.length = document.querySelectorAll(selector).length;
//     return this;

// };
// //! обращаемся к прототипу функции $ это обьект со свойством cinstructor и методом(функцией init) => далее обращаемя к функции init у которой прототип будет также обьект со свойством constructor, далее мы заменяем конструктор нашего метода на конструктор функции $
// //* {constructor: $, все методы}  => func init() => {constructor = init()} === {constructor: $, все методы}
// $.prototype.init.prototype = $.prototype;  
// //! САМОЕ ГЛАВНОЕ теперь при создании обьекта при помощи функции $ мы можем использовать все методы которые есть в свойстве prototype этой  функции $ 

// window.$ = $;   //* записываем в глобальный обьект нашу функцию

// export default $;

const $ = function(selector) {
    return new $.prototype.init(selector);  
};

$.prototype.init = function(selector) {
    if(!selector) {
        return this; //* {}
    }
    //! проверка если наш элемент который мы обрабатываем пришел из обработчика в качестве узла
    if(selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }                           //*   0    1    2
                                //* [div, div,div]
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;

};

$.prototype.init.prototype = $.prototype;  


window.$ = $;  

export default $;