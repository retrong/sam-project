import React, { lazy, Suspense } from 'react';
import styles from '../../style';
import Footer from '../organisms/Footer';
// import Body from '../organisms/Body';
const Body = lazy(() => import('../organisms/Body'))

export default function LandingPage() {
  return (

    <Suspense fallback={<div>Loading...</div>}>
        <section className='w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Body />
                    <Footer />
                </div>
            </div>

        </section>
    </Suspense>
  )
}
