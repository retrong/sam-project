import React from 'react';
import { one, six, three, two } from '../../assets';
import { images } from '../../constants';
import styles from '../../style';

const Body = () => {
  return (
		<section className={`w-full ${styles.paddingY} ${styles.flexCenter}`}>
			<div className="w-[95%] md:w-[85%]">
				<div className='mb-20'>
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={one} loading="lazy" />
					</video>
					<p className="bg-black text-dimWhite py-2 px-4 flex justify-end">
						azornedo@gmail.com | Ifinedo Azor
					</p>
				</div>

				{images.map((image, index) => (
					<div
						key={image.id}
						className={`w-[100%] ${
							index !== images.length - 1 ? 'mb-20' : 'mb-20'
						}`}
					>
						<img
							src={image.icon}
							alt={image.id}
							className="w-[100%] h-full object-cover object-top"
							loading="lazy"
						/>
						<p className="bg-black text-dimWhite py-2 px-4 flex justify-end">
							{image.title}
						</p>
					</div>
				))}

				<div className="mb-20">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={two} loading="lazy" />
					</video>
					<p className="bg-black text-dimWhite py-2 px-4 flex justify-end">
						azornedo@gmail.com | Ifinedo Azor
					</p>
				</div>
				<div className="mb-20">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={six} loading="lazy" />
					</video>
					<p className="bg-black text-dimWhite py-2 px-4 flex justify-end">
						azornedo@gmail.com | Ifinedo Azor
					</p>
				</div>
				<div className="mb-10">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={three} loading="lazy" />
					</video>
					<p className="bg-black text-dimWhite py-2 px-4 flex justify-end">
						azornedo@gmail.com | Ifinedo Azor
					</p>
				</div>
			</div>
		</section>
	);
}

export default Body