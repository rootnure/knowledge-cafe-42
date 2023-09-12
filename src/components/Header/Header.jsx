import userProfile from '../../assets/images/user.png';
const Header = () => {
    return (
        <header className='py-8 border-b-2'>
            <div className='flex justify-between items-center container mx-auto'>
                <h1 className='text-4xl font-semibold'>Knowledge Cafe</h1>
                <img src={userProfile} alt="" />
            </div>
        </header>
    );
};

export default Header;