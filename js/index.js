window.addEventListener('DOMContentLoaded', () => fetchBlogs());

const apiEndPoint = "http://localhost:3000";

async function fetchBlogs() {
    const res = await fetch('http://localhost:3000/blogs');
    const blogs = await res.json();
    
    const blogsDiv = document.getElementById('blogs');
    let template = '';

    blogs.forEach(blog => {
        template += `
            <div class="blog">
               <h1>${blog.title}</h1>
               <p>${blog.body}</p>
            </div>
        `;
    })

    blogsDiv.innerHTML = template;
}