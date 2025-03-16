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
        })
    },1000);
}

function createPost(post, cb){
    setTimeout(()=>{
        postsArray.push(post);
        cb();
    }, 3000);
}

btnShowPosts.addEventListener('click', ()=>{
    createPost({title:'post three', body:'This is post three'}, getPosts);
    

});