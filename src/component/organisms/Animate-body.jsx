import React from 'react';
import { five, four, one, six, three, two } from '../../assets';
import { img1, img2, img3, img4, img5 } from '../../assets/liveDrawing';

const Animate = () => {
  return (
		<div loading="lazy">
			<video className="w-full h-auto mb-20 object-cover" controls>
				<source src={three} />
			</video>
			<video className="w-full h-auto mb-20 object-cover" controls>
				<source src={six} />
			</video>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="grid gap-4">
					<div>
						<img
							src={img1}
							alt="live drawing"
							className="h-auto max-w-full rounded-lg"
						/>
					</div>
					<div>
						<img
							src={img2}
							alt="live drawing"
							className="h-auto max-w-full rounded-lg mt-5"
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<img
							src={img4}
							alt="live drawing"
							className="h-full max-w-full rounded-lg"
						/>
					</div>
					<div>
						<img
							src={img3}
							alt="live drawing"
							className="h-full max-w-full rounded-lg mt-2 "
						/>
					</div>
				</div>
			</div>
			<div className="w-full h-auto mt-10">
				<img
					src={img5}
					alt="live drawing"
					className="h-auto max-w-full rounded-lg"
				/>
			</div>

			<video className="w-full h-auto mb-20 mt-10 object-cover" controls>
				<source src={four} />
			</video>
			<video className="w-full h-auto mb-20 object-cover" controls>
				<source src={two} />
			</video>
			<video className="w-full h-auto mb-20 object-cover" controls>
				<source src={one} />
			</video>
			<video className="w-full h-auto mb-20 object-cover" controls>
				<source src={five} />
			</video>
		</div>
	);
}

export default Animate