import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { close, menu } from '../../assets';
import { navLinks } from '../../constants';
import styles from '../../style';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    
  return (
    <section className='w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <nav className='w-full flex py-6 justify-between items-center'>
                    <div className='logo'>
                        <NavLink to='/' >
                            <h1 
                                className={`${(isActive, isPending) => {isPending ? "pending" : isActive ? "active" : ""}} mainlogo md:text-[38px] text-[28px]`}>
                                    Ifinedo Azor
                            </h1>
                        </NavLink>
                        <p className='text-slate-600 xs:w-full w-[250px] '>character design | visual development</p>
                    </div>

                    <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li 
                                key={nav.id}
                                className={`font-poppins font-normal hover:text-secondary cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-8' } text-slate-600`}>
                                <NavLink to={`${nav.id}`}>
                                    {nav.title}
                                </NavLink>
                            </li>
                        ))}

                    </ul>

                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        <img 
                            src={toggle ? close : menu} alt="menu"
                            className='w-[28px] h-[28px] object-contain'  
                            onClick={() => setToggle((prev) => !prev)}
                        />

                        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-slate-50 border-2 absolute top-0 left-0 h-full z-[100] max-w-[80%]`}>
                            
                            <ul className='list-none flex flex-col items-start px-6 py-4 flex-1'>
                                {navLinks.map((nav, index) => (
                                    <li 
                                        key={nav.id} 
                                        className={`font-poppins font-normal hover:text-secondary cursor-pointer text-[30px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-2' } text-slate-600`}>
                                        <a href={`${nav.id}`}>
                                            {nav.title}
                                        </a>

                                    </li>
                                ))}

                            </ul>

                        </div>
                        

                    </div>
                    
                </nav>
            </div>
        </div>
    </section>
  )
}

export default Navbar