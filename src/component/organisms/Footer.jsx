import React from 'react'
import { socialMedia } from '../../constants'
import styles from '../../style'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY}`}>
        <div className='flex flex-row flex-wrap w-full justify-center items-center'>
            {socialMedia.map((social, index) =>(
                <img 
                    key={social.id}
                    src={social.icon} 
                    alt={social.id}
                    className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
                />
            ))}
        </div>
        
    </section>
  )
}

export default Footer