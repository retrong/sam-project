import React from 'react';
import { one, six, three, two } from '../../assets';
import { images } from '../../constants';
import styles from '../../style';

const Body = () => {
  return (
		<section className={`w-full ${styles.paddingY} ${styles.flexCenter}`}>
			<div className="w-[90%] md:w-[80%]">

				<video
					className="w-full h-[450px] max-w-full mb-20 object-cover object-bottom"
					controls
				>
					<source src={one} />
				</video>

				{images.map((image, index) => (
					<div
						key={image.id}
						className={`w-[100%] ${
							index !== images.length - 1 ? 'mb-20' : 'mb-0'
						}`}
					>
						<img
							src={image.icon}
							alt={image.id}
							className="w-[100%] max-h-96 object-cover object-top"
							loading="lazy"
						/>
						<p className="bg-black text-dimWhite py-2 px-4 flex justify-end">
							{image.title}
						</p>
					</div>
				))}

				<video
					className="w-full h-[450px] max-w-full mb-20 object-cover object-bottom"
					controls
				>
					<source src={two} />
				</video>
				<video
					className="w-full h-[450px] max-w-full mb-20 object-cover object-bottom"
					controls
				>
					<source src={six} />
				</video>
				<video
					className="w-full h-[450px] max-w-full mb-20 object-cover object-bottom"
					controls
				>
					<source src={three} />
				</video>
			</div>
		</section>
	);
}

export default Body