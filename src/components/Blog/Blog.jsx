import PropTypes from 'prop-types';
const Blog = ( {blog} ) => {
    const {title, cover_img, author, author_img, reading_time, posted_date, hashtags} = blog;

    const days = parseInt((new Date() - new Date(posted_date)) / (1000*60*60*24));
    const posted = days > 100 ? 'Long Time Ago' : days > 30 ? parseInt(days/30) + 'month(s) ago' : days > 2 ? days + ' days ago' : days > 1 ? 'Yesterday' : 'Today';

    return (
        <div className='mb-8'>
            <img className='w-full' src={cover_img} alt={title + ' cover image'} />
            <div className='flex justify-between items-center py-2'>
                <div className='flex items-center gap-x-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h4 className="text-xl font-semibold">{author}</h4>
                        <p>{posted_date} ({posted})</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time} mins read</p>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className='text-gray-400'>
                {
                    hashtags.map((tag, idx) => <span className='me-2' key={blog.id + idx}><a href="">#{tag}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;