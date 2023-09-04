import React, { Suspense } from 'react';
import { one, three, two } from '../../assets/characterDesign';
import styles from '../../style';

export default function CharacterDesign() {
    const images = [one, two, three]
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <section className='w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    {images.map((image, i) => {
                        <img 
                            src={image} 
                            alt="character image"
                            key={i} 
                        />
                    })}
                </div>
            </div>

        </section>
    </Suspense>
  )
}
