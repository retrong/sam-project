import React from 'react';
import { one, six, three, two } from '../../assets';
import { drawings, img6 } from '../../assets/liveDrawing';
import { pic1, pic2, pic3, pic4 } from '../../assets/visual-design';
import { images } from '../../constants';
import styles from '../../style';

const drawn = ['img1', 'img2', 'img3', 'img4', 'img5']

const Body = () => {
  return (
		<section className={`w-full ${styles.paddingY} ${styles.flexCenter}`}>
			<div className="w-[95%] md:w-[85%]">
				<div>
					{drawn.map((draw) => (
						<img
							src={drawings[draw]}
							alt="living drawing"
							key={draw}
							className="w-[100%] h-auto rounded mb-20"
							loading="lazy"
						/>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
					<div className="grid gap-4 flex-row">
						<div>
							<img
								src={img6}
								alt="character design"
								className="h-auto max-w-full rounded-lg"
							/>
						</div>
					</div>
					<div>
						<img
							src={img6}
							alt="character design"
							className="h-auto max-w-full rounded-lg"
						/>
					</div>
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

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
					<div className="grid gap-4 flex-row">
						<div>
							<img
								src={pic1}
								alt="character design"
								className="h-[100%] max-w-full rounded-lg"
							/>
						</div>
					</div>
					<div>
						<img
							src={pic2}
							alt="character design"
							className="h-auto max-w-full rounded-lg"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
					<div className="grid gap-4 flex-row">
						<div>
							<img
								src={pic3}
								alt="character design"
								className="h-auto max-w-full rounded-lg"
							/>
						</div>
					</div>
					<div>
						<img
							src={pic4}
							alt="character design"
							className="h-[100%] max-w-full rounded-lg"
						/>
					</div>
				</div>

				<div className="mb-20">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={two} loading="lazy" />
					</video>
				</div>
				<div className="mb-20">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={six} loading="lazy" />
					</video>
				</div>
				<div className="mb-20">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={one} loading="lazy" />
					</video>
				</div>
				<div className="mb-10">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={three} loading="lazy" />
					</video>
				</div>
			</div>
		</section>
	);
}

export default Body