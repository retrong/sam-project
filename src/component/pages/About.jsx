import React from 'react';
import { profile } from '../../assets';
import styles from '../../style';

export default function About() {
  return (
		<section className="w-full overflow-hidden h-full">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth} sm:py-20 py-10`}>
					<div className="flex flex-col md:flex-row sm:px-6 px-6 md:px-8 sm:py-6 py-3">
						<div className="flex justify-center items-center">
							<img
								src={profile}
								alt="profile-image"
								className="object-contain profile-img"
							/>
						</div>
						<div className="flex flex-col md:ms-20 ms-0 md:mt-0 mt-12 justify-center items-start">
							<h3 className='font-poppins text-[18px] leading-[24px] text-slate-500 italic tracking-widest'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
								quos laudantium vero recusandae, eaque nulla labore, ullam, ab
								magni consequuntur aliquid hic ea fugiat illum atque. Illum,
								itaque. Illum quae sunt magni, sint, odit maiores voluptate vero
								vitae dicta nisi ad eius quibusdam atque officia? Quisquam est
								dolorem soluta cum?
							</h3>
							<a href="" className='text-black text-[18px] font-bold mt-5'>Lorem@mail.com</a>
							<button className="about-btn rounded-full min-w-max">View resume</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
