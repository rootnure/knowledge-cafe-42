import PropTypes from 'prop-types';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, title, cover_img, author, author_img, reading_time, posted_date, hashtags} = blog;
    let isBookmarked = false;

    const days = parseInt((new Date() - new Date(posted_date)) / (1000*60*60*24));
    const posted = days > 100 ? 'Long Time Ago' : days > 30 ? parseInt(days/30) + 'month(s) ago' : days > 2 ? days + ' days ago' : days > 1 ? 'Yesterday' : 'Today';

    return (
        <div className='mb-14 space-y-2'>
            <img className='w-full rounded-xl' src={cover_img} alt={title + ' cover image'} />
            <div className='flex justify-between items-center py-2'>
                <div className='flex items-center gap-x-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h4 className="text-xl font-semibold">{author}</h4>
                        <p>{posted_date} ({posted})</p>
                    </div>
                </div>
                <div className='flex gap-x-2 items-center'>
                    <p>{reading_time} mins read</p>
                    <p
                        onClick={() => handleAddToBookmark(blog)}
                        title='Click to bookmark' 
                        className='text-gray-500 cursor-pointer'>       
                            {isBookmarked ? 
                            <span className='text-blue-400'>
                                <BsFillBookmarkFill></BsFillBookmarkFill>
                            </span> : 
                            <BsBookmark></BsBookmark>}
                    </p>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className='text-gray-400'>
                {
                    hashtags.map((tag, idx) => <span className='me-2' key={blog.id + idx}><a href="">#{tag}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-blue-600 underline font-semibold text-md' href="">Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;