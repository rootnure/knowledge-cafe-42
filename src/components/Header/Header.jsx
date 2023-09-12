import userProfile from '../../assets/images/user.png';
const Header = () => {
    return (
        <header className='flex justify-between items-center py-8 border-b-2'>
            <h1 className='text-4xl font-semibold'>Knowledge Cafe</h1>
            <img src={userProfile} alt="" />
        </header>
    );
};

export default Header;