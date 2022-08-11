
import './lib/lib';
import $ from './lib/lib';

$('#first').click(()=> {
    $('div').eq(1).fadeToggle(1000);
});
$('[data-count="second"]').click(()=> {
    $('div').eq(2).fadeToggle(1000);
});
$('button').eq(2).click(()=> {
    $('.w-500').fadeToggle(1000);
});
$('.wrap').innerHtml(
    `
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle-2" id="dropdownMenuButton-3">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id ='dropdownMenuButton-3'>
                <a href="#" class="dropdown-item">Action#1</a>
                <a href="#" class="dropdown-item">Action#2</a>
                <a href="#" class="dropdown-item">Action#3</a>
            </div>
        </div>
    `
);
$('.dropdown-toggle-2').dropdown();



// const btn = document.querySelector('[data-toggle="modal"]'),
// modalWindow = document.querySelector(btn.getAttribute('data-target'));
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     modalWindow.style.display = 'block';
// });

