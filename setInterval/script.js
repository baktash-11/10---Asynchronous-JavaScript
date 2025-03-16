btnStartInterval = document.getElementById('btn-start');
const btnStopInterval = document.getElementById('btn-stop');
const outPut = document.getElementById('colors-container');
const btnClear = document.getElementById('btn-clear');
let i =0;
let min =0;
let hour =0;
let intervalID='';
let colorIntervalID ='';
let randomColor= '';

outPut.innerText = 'Click start for Timer and random color';
function startRandomColor (){
    if(!colorIntervalID){

       colorIntervalID= setInterval(()=>{
            randomColor = Math.floor(Math.random()* 16777215).toString(16);
            outPut.style.borderColor = `#${randomColor}`;
            outPut.style.color= `#${randomColor}`;
        }, 1000);
    }
    
}
// timer .... 
function startTimer(){
    if(!intervalID){
            intervalID = setInterval(function(){
                if( i < 60){
                    i++;
                }else if(i === 60){
                    min += 1;
                    i = 0;
                    if(min === 60){
                        hour +=1;
                        min = 0;
                    }
                    
                }
                
                outPut.innerText=`Timer ${hour} : ${min} : ${i}: `
            },1000);
        }
    }

    function clearTimer (){
        if(!intervalID){
            outPut.innerHTML = 'There is not anything to delete!'
            return;
        }
        if(confirm('Are you sure')){

            clearInterval(intervalID)
            hour=0; 
            min =0; 
            i =0;
            intervalID =''
            outPut.innerText = 'Click start for Timer and random color';
        };
        
    }
    btnStartInterval.addEventListener('click', ()=>{
        startTimer();
        startRandomColor();
    });
    btnStopInterval.addEventListener('click', ()=>{
        clearInterval(intervalID)
        clearInterval(colorIntervalID);
        intervalID ='';
        colorIntervalID ='';
    });

    btnClear.addEventListener('click', clearTimer)