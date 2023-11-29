'use client';
import Navbar from '@/app/components/Navbar';

import {
	motion,
	useScroll,
	useTransform,
	AnimatePresence,
	useMotionValue,
} from 'framer-motion';
import { use, useEffect, useRef, useState } from 'react';
import Hero from './sections/Hero';

export default function Main() {
	// const [isMoving, setIsMoving] = useState(useMotionValue(0));
	// const ref = useRef(null);

	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// });
	// const left = useTransform(scrollYProgress, [0, 1], [0, 300]);

	// useEffect(() => {
	// 	setIsMoving(scrollYProgress);

	// 	console.log(isMoving);
	// 	console.log(left.get());
	// }, [scrollYProgress]);

	return (
		<main className='flex  flex-col h-full   '>
			<Navbar />
			<Hero />
			<section className='min-h-screen flex justify-center items-center'>
				<h1 className='text-4xl'>Hello</h1>
			</section>
		</main>
	);
}
