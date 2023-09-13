import PropTypes from 'prop-types';
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <section className="border bg-gray-300 relative p-4 text-center rounded-lg">
            <h2 className="text-3xl font-semibold">Bookmarked Blogs: {bookmarks.length}</h2>
            <hr className='border border-gray-400 my-4' />
            <div className='sticky top-4 max-h-[calc(100vh-50px)] overflow-auto'>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark
                        key={bookmark.id + idx}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </section>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
};

export default Bookmarks;