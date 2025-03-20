const btnShowPosts = document.getElementById('btn-show-posts');
const posts = document.getElementById('posts');

const postsArray = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
]

function getPosts(){
    setTimeout(()=>{
        postsArray.forEach((post)=>{
            const li = document.createElement('li');
            li.classList = 'post';
            li.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            posts.appendChild(li);
            let something = document.querySelector('.something');
            something.classList.remove('hidden');
            something.style.background= '#008000'
        })
    },1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            let err = false;
            if(!err){
                postsArray.push(post);
                resolve();

            }else{
                reject('Error: Cant access the posts!')
            }
            
        }, 2000);
    })
}

btnShowPosts.addEventListener('click', ()=>{
    createPost({title:'post three', body:'This is post three'}).then(getPosts)
    .catch((err)=>{
        const h3 = document.createElement('h3');
        h3.style.color='#d90429';
        h3.innerHTML = `<strong>${err}</strong>`;
        document.getElementById('posts').appendChild(h3);
        document.querySelector('.something').classList.remove('hidden');
    });
    

});