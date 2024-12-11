import Logo from './Logo';
import Navbar from './Navbar';
import Auth from './Auth';





async function Header() {

  return (
    <header className='bg-[#191919] p-4 '>
      <div className='max-w-screen-2xl mx-auto flex flex-row justify-between items-center'>
        {/* <Logo /> */}
        <Navbar />
        <Auth />
      
      </div>
    </header>
  );
}

export default Header;
