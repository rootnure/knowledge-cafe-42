import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    return (
        <>
            <h3 className='text-4xl bg-blue-100 font-bold rounded-lg my-4 p-2'>{bookmark.title}</h3>
        </>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;