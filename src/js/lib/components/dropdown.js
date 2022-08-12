import $ from "../core";

$.prototype.dropdown = function() {
    for(let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        //* изменяем обязательно id у кнопки , и data атрубут у контейнера dropdown-menu
        $(this[i]).click( () => {
            $(`[data-toggle-id = "${id}"]`).fadeToggle(500);
        });
    }
};

$('.dropdown-toggle').dropdown();
