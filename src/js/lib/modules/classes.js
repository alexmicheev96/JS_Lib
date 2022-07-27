import $ from '../core';
//* метод по добавлению классов 
$.prototype.addClass = function(...classNames) {  //* rest operator
    for (let i = 0; i < this.length; i++) {
        if(this[i].classList) {
            this[i].classList.add(...classNames); //* spread operator
        } else {
            return this;
        }
        
    }
    return this;
};  

$.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if(this[i].classList) {
            this[i].classList.remove(...classNames);
        } else {
            return this;
        }
        
    }
    return this;
};  

$.prototype.toggleClass = function(classNames) {
    for (let i = 0; i < this.length; i++) {
        if(this[i].classList) {
            this[i].classList.toggle(classNames);
    }
        }
        
    return this;
};

$.prototype.addAtribute = function (name, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }
    return this;
};
 
$.prototype.removeAttribute = function (nameAtribute) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(nameAtribute)
    }
 
    return this;
};

$.prototype.toggleAttribute = function (nameAtribute, value) {
    for (let i = 0; i < this.length; i++) {
        if(this[i].hasAttribute(nameAtribute)) {
            this[i].removeAttribute(nameAtribute);
        } else {
            this[i].setAttribute(nameAtribute, value);
        }
        }
        
    return this;
};