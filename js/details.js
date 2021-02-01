const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

window.addEventListener('DOMContentLoaded', blogDetails);

async function blogDetails() {
    const res = await fetch(`http://localhost:3000/blogs/${id}`);
    const blog = await res.json();

    // console.log(blog);
    let template = `
       <h1>${blog.title}</h1>
       <p>${blog.body}</p>
       <p><small>${blog.likes} likes</small></p>
    `;

    document.querySelector('body').innerHTML = template;
}