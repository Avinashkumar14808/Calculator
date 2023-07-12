(function(){
    let screen=document.querySelector('.screen');
    
    let buttons=document.querySelectorAll('.btn');

    let equal=document.querySelector('.eq');

    let clear=document.querySelector('.clr');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value=e.target.dataset.num;
            screen.value+=value;
        })
    });
})();