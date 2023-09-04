import React from 'react';
// import { gt, gt2 } from '../../assets';
import { images } from '../../constants';
import styles from '../../style';

const Body = () => {
  return (
    <section className={`w-full ${styles.paddingY} ${styles.flexCenter}`}>
        <div className='w-[100%]'>
            {/* <div className=''>
                <img src={gt} alt="img"  className='w-[100%] h-[300px] sm:h-[400px] object-cover object-bottom'/>
            </div>
            <div className='mt-10'>
                <img src={gt2} alt="img"  className='w-[100%] h-[450px] object-cover object-bottom'/>
            </div> */}

            {images.map((image, index) => (
                <div key={image.id} className={`w-[100%] px-10 sm:px-28 ${index !== images.length - 1 ? 'mb-20' : 'mb-0' }`}>
                    <img 
                        src={image.icon} 
                        alt={image.id}
                        className='w-[100%] h-[400px] object-cover object-center'
                    />
                    <p className='bg-black text-dimWhite py-2 px-4 flex justify-end'>
                        {image.title}
                    </p>

                </div>
            ))}


        </div>
    </section>
  )
}

export default Body