
import './lib/lib';
import $ from './lib/lib';

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
$('.dropdown-toggle-2').dropdown();



$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam minima voluptatibus vel voluptatem quia harum consectetur! Corrupti, natus in!',
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true,  
            ],
            [
                'Save changes',
                ['btn-success'],
                false, 
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false, 
                () => {
                    alert('Hellow world');
                }
            ],

        ],
        
    }
}));
$('#triggerTwoCard').click(() => $('#triggerTwoCard').createModal({
    text: {
        title: 'Modal title Two card',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam minima voluptatibus vel voluptatem quia harum consectetur! Corrupti, natus in!',
    },
    btns: {
        count: 1,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true,  
            ],
        ],
        
    }
}));
