const form = document.getElementById('form');

async function createBlog(e){
    e.preventDefault();

    let blog = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }
    
    await fetch('http://localhost:3000/blogs', {
        method: "POST",
        body: JSON.stringify(blog),
        headers: { 'Content-Type': 'application/json' }
    })

    window.location.replace('/');
}

form.addEventListener('submit', createBlog);