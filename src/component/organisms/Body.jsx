import React from 'react';
import { cd3, cd4, cd5, cd6, cd7, cd8, cd9, five, four, one, six, three, two } from '../../assets';
import { drawings, img6 } from '../../assets/liveDrawing';
import { pic1, pic2, pic3, pic4 } from '../../assets/visual-design';
import { images } from '../../constants';
import styles from '../../style';
import ImageModal from './Modal-component';

const drawn = ['img1', 'img2', 'img3', 'img4', 'img5']

const Body = () => {
  return (
		<section className={`w-full ${styles.paddingY} ${styles.flexCenter}`}>
			<div className="w-[95%] md:w-[85%]">
				<div>
					{drawn.map((draw) => (
						<ImageModal
							imgSrc={drawings[draw]}
							altText="living drawing"
							key={draw}
							styles="w-[100%] h-auto rounded mb-10 sm:mb-20"
							loading="lazy"
						/>
					))}
				</div>

				<div className="flex justify-center align-middle">
					<div className="grid gap-4 w-[450px]">
						<div className="">
							<ImageModal
								imgSrc={img6}
								altText="character design"
								styles="h-auto max-w-full rounded-lg mb-10 sm:mb-20"
							/>
						</div>
					</div>
				</div>

				{images.map((image) => (
					<div key={image.id} className={`w-[100%] mb-10 sm:mb-20`}>
						<ImageModal
							imgSrc={image.icon}
							altText={image.id}
							styles="w-[100%] h-full object-cover object-top"
							loading="lazy"
						/>
						<p className="bg-black text-dimWhite py-2 px-4 flex justify-end">
							{image.title}
						</p>
					</div>
				))}

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
					<div className="grid gap-4 flex-row mb-5">
						<div>
							<ImageModal
								imgSrc={pic1}
								altText="character design"
								styles="h-[100%] max-w-full rounded-lg"
							/>
						</div>
					</div>
					<div>
						<ImageModal
							imgSrc={pic2}
							altText="character design"
							styles="h-auto max-w-full rounded-lg"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
					<div className="grid gap-4 flex-row mb-5">
						<div>
							<ImageModal
								imgSrc={pic3}
								altText="character design"
								styles="h-auto max-w-full rounded-lg"
							/>
						</div>
					</div>
					<div>
						<ImageModal
							imgSrc={pic4}
							altText="character design"
							styles="h-[100%] max-w-full rounded-lg"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
					<div className="grid gap-4 flex-row mb-5">
						<div>
							<ImageModal
								imgSrc={cd4}
								altText="character design"
								styles="h-[100%] max-w-full rounded-lg"
							/>
						</div>
					</div>
					<div>
						<ImageModal
							imgSrc={cd3}
							altText="character design"
							styles="h-auto max-w-full rounded-lg"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
					<div className="grid gap-4 flex-row mb-5">
						<div>
							<ImageModal
								imgSrc={cd9}
								altText="character design"
								styles="h-[100%] max-w-full rounded-lg"
							/>
						</div>
					</div>
					<div>
						<ImageModal
							imgSrc={cd5}
							altText="character design"
							styles="h-auto max-w-full rounded-lg"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
					<div className="grid gap-4 flex-row mb-5">
						<div>
							<ImageModal
								imgSrc={cd7}
								altText="character design"
								styles="h-[100%] max-w-full rounded-lg"
							/>
						</div>
					</div>
					<div>
						<ImageModal
							imgSrc={cd8}
							altText="character design"
							styles="h-auto max-w-full rounded-lg"
						/>
					</div>
				</div>

				<div className="flex justify-center align-middle">
					<div className="grid gap-4 w-[700px]">
						<div className="">
							<ImageModal
								imgSrc={cd6}
								altText="character design"
								styles="h-auto max-w-full rounded-lg mb-10 sm:mb-20"
							/>
						</div>
					</div>
				</div>

				<div className="mb-10 sm:mb-20">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={two} loading="lazy" />
					</video>
				</div>
				<div className="mb-10 sm:mb-20">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={six} loading="lazy" />
					</video>
				</div>
				<div className="mb-10 sm:mb-20">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={one} loading="lazy" />
					</video>
				</div>
				<div className="mb-10 sm:mb-20">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={three} loading="lazy" />
					</video>
				</div>
				<div className="mb-10 sm:mb-20">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={four} loading="lazy" />
					</video>
				</div>
				<div className="mb-10 sm:mb-20">
					<video
						className="w-full h-auto max-w-full object-cover object-bottom"
						controls
					>
						<source src={five} loading="lazy" />
					</video>
				</div>
			</div>
		</section>
	);
}

export default Body