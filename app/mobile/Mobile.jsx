'use client';
import { useEffect } from 'react';
import Hero from './sections/Hero';
import gsap from 'gsap';
import About from './sections/About';
import Lenis from '@studio-freight/lenis';

const Mobile = () => {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<main className=''>
			<Hero />
			<About />
		</main>
	);
};

export default Mobile;
