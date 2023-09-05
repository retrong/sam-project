import React from 'react';
import { imagespath, nine } from '../../assets/characterDesign';
import { pic1, pic2, pic3, pic4 } from '../../assets/vd';
import styles from '../../style';


const images = ['one', 'two', 'three']
const medias = ['five', 'six', 'seven']
const drops = ['four', 'eight']

export default function CharacterDesign() {
    
  return (
		<section className="w-full overflow-hidden">
			<div
				className={`${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}
			>
				<div className={`${styles.boxWidth} px-10`}>
					<h1
						className={`font-poppins font-semibold xs:text-[36px] text-[30px] text-white xs:leading-[65.8px] leading-[48.8px] w-full text-center mainlogo px-5 mb-20`}
					>
						Visual Development & Character Design
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
						<div className="grid gap-4 flex-row">
							<div>
								<img
									src={nine}
									alt="character design"
									className="h-auto max-w-full rounded-lg"
								/>
							</div>
						</div>
						<div>
							<img
								src={pic3}
								alt="character design"
								className="h-auto max-w-full rounded-lg"
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="grid gap-4">
							<div>
								{images.map((image) => (
									<img
										src={imagespath[image]}
										alt="character image"
										key={image}
										className="h-auto max-w-full rounded-lg"
									/>
								))}
								<div>
									<img
										src={pic1}
										alt="visual dev"
										className="h-auto max-w-full rounded-lg mt-10"
									/>
								</div>
							</div>
						</div>
						<div className="grid gap-4">
							<div>
								<div>
									<img
										src={pic2}
										alt="visual dev"
										className="h-auto max-w-full rounded-lg mt-10"
									/>
								</div>
								{medias.map((media) => (
									<img
										src={imagespath[media]}
										alt="character image"
										key={media}
										className="h-[250px] w-[1006px]  rounded-lg object-contain mb-10"
									/>
								))}
							</div>
						</div>
						<div className="grid gap-4">
							<div>
								{drops.map((drop) => (
									<img
										src={imagespath[drop]}
										alt="character image"
										key={drop}
										className="h-auto max-w-full rounded-lg mb-14"
									/>
								))}
								<div>
									<img
										src={pic4}
										alt="visual dev"
										className="h-auto max-w-full rounded-lg mt-10"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
