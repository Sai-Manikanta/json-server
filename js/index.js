window.addEventListener('DOMContentLoaded', () => fetchBlogs());

const apiEndPoint = "http://localhost:3000";

async function fetchBlogs() {
    const res = await fetch('http://localhost:3000/blogs');
    const data = await res.json();
    
    console.log(data);
}