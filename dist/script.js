/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id = "${id}"]`).fadeToggle(500);
    });
  }
};

(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    //* получаем содержимое атрибута, по которому мы будем вызывать наше модальное окно
    const target = this[i].getAttribute('data-target');
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      //* предоврашаем стандартное поведение браузера
      e.preventDefault(); //* получаем элемент со страницы с данным идентификатором #target

      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
    }); //* получаем все элементы с данным атрибутом, это крестик и кнопка красная 

    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(target).remove();
        }
      });
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
        if (e.target.classList.contains('modal')) {
          (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
          document.body.style.overflow = '';

          if (created) {
            document.querySelector(target).remove();
          }
        }
      });
    });
  }
}; //* получаем кнопку применяем к ней метод modal()


(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  let {
    text,
    btns
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); //! btns = {count: num, settings: [[text, classNames = [], close, callback]]}

    const buttons = [];

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement('button');
      btn.classList.add('btn', ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];

      if (btns.settings[j][2]) {
        btn.setAttribute('data-close', 'true');
      }

      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
            <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${text.title}
                    </div>
                </div>
                <div class="modal-body">
                    ${text.body}
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
        `;
    modal.querySelector('.modal-footer').append(...buttons);
    document.body.appendChild(modal);
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target')).fadeIn(500);
  }

  ;
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item--active').siblings().removeClass('tab-item--active').closest('.tab').find('.tab-content').removeClass('tab-content--active').eq((0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass('tab-content--active');
    });
  }
};

(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; //* {}
  } //! проверка если наш элемент который мы обрабатываем пришел из обработчика в качестве узла


  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  } //*   0    1    2
  //* [div, div,div]


  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
//* файл экспортов для всего









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // !Метод меняюший быстро HTML структуру

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.innerHtml = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      //* вернум структуру HTML элемента(контент) поэтому дальше работать с методами библиотеки не сможем
      return this[i].innerHTML;
    }
  }

  return this;
}; //! Функция по получению элемента из выборки


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i]; //* используем не this.length так как в нашем обьекте могут быть еще свойства 

  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    //* поностью удалеям все свойства нашего обьекта для того чтобы сохранить методы в прототипе
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
}; //! Функция по получению номера элемента по порядку(среди тех элементов которые имеют общего родителя) - конечный будет возвращать число


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  //* получаем родителя искомого элемента, так как мы знаем что бyдем работать с одним элементом поэтому this[0]
  const parent = this[0].parentNode; //* все потомки родителя(зачем развернули спредом, так как мы получаем коллекцию а не массив то у него нету методов которые нам нужны, поэтому оборачиваем в скобки и с помощью спреда создаем наш массив)

  const childs = [...parent.children]; //* все дети и не только с заданным тегом или классом и т.д.

  const findMyIndex = item => {
    return item === this[0];
  };

  return childs.findIndex(findMyIndex);
}; //! метод для получения элемента с определенным селектором, у уже найденных


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  //* за общее количество
  let numberOfItems = 0; //* отвечает за количество новых записанных элементов которые мы записали в this (ключ обьекта)

  let counter = 0; //* неглубокая копия нашего обтека this

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    //* содержит элементы которыe получаем при каждой итерации
    const array = copyObj[i].querySelectorAll(selector); //* если в элементе ничего не было получено

    if (array.length === 0) {
      continue;
    }

    for (let j = 0; j < array.length; j++) {
      this[counter] = array[j]; //* this[0], this[1]

      counter++;
    }

    numberOfItems += array.length; //* === 2
  }

  this.length = numberOfItems; //* === 2

  const objLength = Object.keys(this).length; //* === колву ключей в обьекте первоначальном

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems]; //* this[2] и т.д.
  }

  return this;
}; //! Получаем ближайший родительский элемент


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  //* количество элементов которые мы нашли с помощью метода closest 
  let counter = 0;
  let newLength = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector)) {
      this[i] = this[i].closest(selector);
      newLength++;
      counter++;
    } else {
      return this;
    }
  }

  this.length = newLength;
  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter]; //* this[2] и т.д.
  }

  return this;
}; //! получаем все соседние элементы не включая сам элемент


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  //* за общее количество
  let numberOfItems = 0; //* отвечает за количество новых записанных элементов которые мы записали в this

  let counter = 0; //* неглубокая копия нашего обтека this чтобы избежать багов

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const array = copyObj[i].parentNode.children;

    for (let j = 0; j < array.length; j++) {
      if (copyObj[i] === array[j]) {
        continue;
      }

      this[counter] = array[j];
      counter++;
    }

    numberOfItems += array.length - 1; //* === 2
  }

  this.length = numberOfItems; //* === 2

  const objLength = Object.keys(this).length; //* === колву ключей в обьекте

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems]; //* this[2] и т.д.
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 //* метод по добавлению классов 

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  //* rest operator
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.add(...arguments); //* spread operator
    } else {
      return this;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.remove(...arguments);
    } else {
      return this;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.toggle(classNames);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addAtribute = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(name, value);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttribute = function (nameAtribute) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(nameAtribute);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttribute = function (nameAtribute, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(nameAtribute)) {
      this[i].removeAttribute(nameAtribute);
    } else {
      this[i].setAttribute(nameAtribute, value);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      //* проверка элементов у которых нету свойства style
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleDisplay = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time; //* стартовое время
    } //* отслеживает время выполнения анимации


    let timeEllapsed = time - timeStart; //* отвечает за изменение параметров на странице

    let complection = Math.min(timeEllapsed / dur, 1);
    cb(complection);

    if (timeEllapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur) {
  let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
  let fin = arguments.length > 2 ? arguments[2] : undefined;

  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display;

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = 'none';
      }

      ;
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this[i].style.display = display || 'block';

      const _fadeIn = complection => {
        this[i].style.opacity = complection;
      };

      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = complection => {
        this[i].style.opacity = 1 - complection;

        if (complection === 1) {
          this[i].style.display = 'none';
        }

        ;
      };

      const ani = this.animateOverTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

 // $('#first').click(()=> {
//     $('div').eq(1).fadeToggle(1000);
// });
// $('[data-count="second"]').click(()=> {
//     $('div').eq(2).fadeToggle(1000);
// });
// $('button').eq(2).click(()=> {
//     $('.w-500').fadeToggle(1000);
// });
//* Динамическое создание выпадающего меню
// $('.wrap').innerHtml(
//     `
//         <div class="dropdown">
//             <button class="btn btn-primary dropdown-toggle-2" id="dropdownMenuButton-3">Dropdown button</button>
//             <div class="dropdown-menu" data-toggle-id ='dropdownMenuButton-3'>
//                 <a href="#" class="dropdown-item">Action#1</a>
//                 <a href="#" class="dropdown-item">Action#2</a>
//                 <a href="#" class="dropdown-item">Action#3</a>
//             </div>
//         </div>
//     `
// );

(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle-2').dropdown();
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').click(() => (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam minima voluptatibus vel voluptatem quia harum consectetur! Corrupti, natus in!'
  },
  btns: {
    count: 3,
    settings: [['Close', ['btn-danger', 'mr-10'], true], ['Save changes', ['btn-success'], false, () => {
      alert('Данные сохранены');
    }], ['Another btn', ['btn-warning', 'ml-10'], false, () => {
      alert('Hellow world');
    }]]
  }
}));
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#triggerTwoCard').click(() => (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#triggerTwoCard').createModal({
  text: {
    title: 'Modal title Two card',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam minima voluptatibus vel voluptatem quia harum consectetur! Corrupti, natus in!'
  },
  btns: {
    count: 1,
    settings: [['Close', ['btn-danger', 'mr-10'], true]]
  }
}));
})();

/******/ })()
;
//# sourceMappingURL=script.js.map