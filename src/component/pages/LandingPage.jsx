import React from 'react';
import styles from '../../style';
// import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

export default function LandingPage() {
  return (
    <section className='w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                {/* <Navbar /> */}
                <Footer />
            </div>
        </div>

    </section>
  )
}
