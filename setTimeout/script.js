let output = document.querySelector('.output');
btnClear = document.getElementById('btn-clear');
let setTimeId =setTimeout(function(){
    output.innerText = "here is the setTimeout() in javascript";
    document.querySelector('.fa-igloo').style.color ='#d90429';
    console.log(setTimeId)
    btnClear.style.background='#ef233c';
    
    
}, 3000)

btnClear.addEventListener('click', ()=>{
    clearTimeout(setTimeId);
})
btnClear.style.backgroundColor = 'green';