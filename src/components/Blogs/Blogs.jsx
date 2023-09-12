import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);

    return (
        <section className='md:col-span-2 border border-blue-400 rounded'>
            <h2 className="text-2xl">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </section>
    );
};

export default Blogs;