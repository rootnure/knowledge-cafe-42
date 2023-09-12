import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <section className='md:col-span-2 border border-blue-400 rounded'>
            {/* <h2 className="text-2xl">Blogs: {blogs.length}</h2> */}
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookmark={handleBookmark}
                ></Blog>)
            }
        </section>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired
}

export default Blogs;