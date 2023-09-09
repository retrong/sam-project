import React, { lazy, Suspense } from 'react';
import styles from '../../style';
import Loading from '../organisms/Loading';
// import Animate from '../organisms/Animate-body';

const Animate = lazy(() => import('../organisms/Animate-body'))


export default function AnimationPage() {
  return (
		<section className="w-full overflow-hidden">
			<div className={`${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}
			>
				<div className={`${styles.boxWidth} w-[95%] md:w-[85%]`}>
                    <Suspense fallback={<Loading/>}>
                        <Animate />
                    </Suspense>
					
				</div>
			</div>
		</section>
	);
}
