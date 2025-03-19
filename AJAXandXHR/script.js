const xhr = new XMLHttpRequest();
xhr.open('GET', './movies.json');
const listContainer = document.getElementById('list-container');
xhr.onreadystatechange = function(){
    // console.log(this.readyState);
    // console.log(this.status);
    if(this.readyState === 4 && this.status === 200){
        // console.log(JSON.parse(this.responseText));
        const movies =JSON.parse(this.responseText);
        movies.forEach(movie => {
            const li = document.createElement('li'); 
            li.className = 'movie';
            li.innerHTML = `<span class="title">Year : ${movie.year}</span><br>Title : ${movie.title}`;
            listContainer.appendChild(li);
        });

    }
}

xhr.send();