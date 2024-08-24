/*クリックして回す*/
let start02 = document.getElementById('start02');
let min02 = document.getElementById('min02');
let sec02 = document.getElementById('sec02');

start02.addEventListener('click', () => {
    
    min02.animate(
    [
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(3600deg)'}
    ],

    {fill: 'forwards',
    duration: 6000
        }
    )

    sec02.animate(
    [
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(360deg)'}
    ],
        
    {fill: 'forwards',
    duration: 6000
        }

    );
});

/*クリックして回す*/
let start03 = document.getElementById('start03');
let min03 = document.getElementById('min03');
let sec03 = document.getElementById('sec03');
let const03 = 0;


document.getElementById('start03').onclick = function() {
    count =+ 1;
    console.log(parseInt('const'));
    if (1 == 2 % 'const' ); {
        console.log(ok);
    }  
       console.log(ok2); 
    }
    
//     min03.animate(
//     [
//     {transform: 'rotate(0deg)'},
//     {transform: 'rotate(3600deg)'}
//     ],

//     {fill: 'forwards',
//     duration: 6000
//         }
//     )

//     sec03.animate(
//     [
//     {transform: 'rotate(0deg)'},
//     {transform: 'rotate(360deg)'}
//     ],
        
//     {fill: 'forwards',
//     duration: 6000
//         }

//     );
// };