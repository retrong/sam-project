import React from 'react';
import { profile } from '../../assets';
import styles from '../../style';

export default function About() {
  return (
		<section className="w-full overflow-hidden h-full">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth} sm:py-20 py-10`}>
					<div className="flex flex-col md:flex-row sm:px-6 px-6 md:px-12 sm:py-6 py-3">
						<div className="flex justify-center items-center basis-1/2">
							<img
								src={profile}
								alt="profile-image"
								className="object-contain profile-img"
							/>
						</div>
						<div className="flex flex-col md:ms-20 ms-0 md:mt-0 mt-12 justify-center items-start basis-1/2">
							<h3 className="font-poppins text-[18px] leading-[24px] text-slate-500 italic tracking-widest pb-5">
								Hello! My name is Azor , I live in Lagos, Nigeria and ever since
								I was a kid, I’ve been fascinated with art and animation. I used
								to hurry home from school to watch shows like Ben 10 and TMNT,
								not just because they were hella cool, but because I loved to
								draw them and create my own variations of the characters. I love
								to create and bring my ideas to life in my own unique way.
							</h3>
							<h3 className="font-poppins text-[18px] leading-[24px] text-slate-500 italic tracking-widest pb-5">
								I started digital drawing in 2020 during lockdown and animation
								the year after that. My portfolio shows my work so far.
							</h3>
							<h3 className="font-poppins text-[18px] leading-[24px] text-slate-500 italic tracking-widest">
                                It’s my dream to work with creatives like myself, making visually
								outstanding and captivating shows to inspire the next generation
								of artists just as I was inspired.
							</h3>
							<a href="" className="text-black text-[18px] font-bold py-9">
								azornedo@gmail.com
							</a>
							<button className="about-btn rounded-full min-w-max">
								View resume
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
