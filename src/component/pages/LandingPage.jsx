import React, { lazy, Suspense } from 'react';
import styles from '../../style';
import Loading from '../organisms/Loading';
const Body = lazy(() => import('../organisms/Body'))

export default function LandingPage() {
  return (

    <Suspense fallback={<Loading/>}>
        <section className='w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Body />
                </div>
            </div>

        </section>
    </Suspense>
  )
}
