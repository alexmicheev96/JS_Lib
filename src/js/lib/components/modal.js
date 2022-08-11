import $ from "../core";

$.prototype.modal = function() {
    for(let i = 0; i < this.length; i++) {
        //* получаем содержимое атрибута, по которому мы будем вызывать наше модальное окно
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            //* получаем элемент со страницы с данным идентификатором #target
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });
    }
    //* получаем все элементы с данным атрибутом, это крестик и кнопка красная 
    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
        });
        $('.modal').click(e => {
            if(e.target.classList.contains('modal')) {
                $('.modal').fadeOut(500);
                document.body.style.overflow = '';
            }
        });
    });
    
};

$('[data-toggle="modal"]').modal();
console.log($('[data-toggle="modal"]'));