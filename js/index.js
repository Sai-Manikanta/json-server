window.addEventListener('DOMContentLoaded', fetchBlogs);

const apiEndPoint = "http://localhost:3000";

async function fetchBlogs() {
    const res = await fetch('http://localhost:3000/blogs');
    const blogs = await res.json();
    
    const blogsDiv = document.getElementById('blogs');
    let template = '';

    blogs.forEach(blog => {
        template += `
            <div class="blog">
               <h2>${blog.title}</h2>
               <p>${blog.body.slice(0, 100)}</p>
               <a class="link" href="/details.html?id=${blog.id}">Read More...</a>
            </div>
        `;
    })

    blogsDiv.innerHTML = template;
}