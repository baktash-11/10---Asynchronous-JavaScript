
const btnNewJoke = document.getElementById('btn-show-joke');
const joke = document.querySelector('.joke');
const loader = document.querySelector('.loader');

function getChuckNorris(){
    const xhr = new XMLHttpRequest();
    xhr.open('Get', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange= function(){
        if(this.readyState === 4 & this.status === 200){
            
            joke.innerHTML = `${JSON.parse(this.responseText).value}`;
            
            joke.classList.remove('hidden');
            loader.classList.add('hidden');

        }
    }
    xhr.send();
}

btnNewJoke.addEventListener('click', getChuckNorris);
getChuckNorris();