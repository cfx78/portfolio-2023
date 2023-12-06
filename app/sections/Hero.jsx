'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Ubuntu } from 'next/font/google';
import { useLayoutEffect, useRef } from 'react';

const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: '700',
});

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const frontRef = useRef(null);
	const eRef = useRef(null);
	const devRef = useRef(null);

	useLayoutEffect(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			frontRef.current,
			{
				opacity: 0,
				scale: 5,
				delay: 0.5,
				duration: 1,
			},
			{
				x: 0,
				opacity: 1,
				duration: 1,
				scale: 1,

				ease: 'power2.inOut',
			},
		);

		tl.fromTo(
			devRef.current,
			{
				y: -100,
				opacity: 0,
				scale: 0.5,
				delay: 0.5,
				duration: 1,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				scale: 1,

				ease: 'power3.inOut',
			},
		);

		tl.fromTo(
			eRef.current,
			{
				y: -200,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				delay: 0.5,

				ease: 'power4.inOut',
			},
		);
		tl.to(eRef.current, {
			x: -500,
			scrollTrigger: {
				trigger: eRef.current,
				start: 'center 20%',
				end: 'bottom top',
				scrub: true,
			},
		});

		tl.to(frontRef.current, {
			x: '100%',

			scrollTrigger: {
				trigger: frontRef.current,
				start: 'center 40%',
				end: 'bottom top',
				scrub: true,
			},
		});
		tl.to(devRef.current, {
			x: '-100%',
			scrollTrigger: {
				trigger: devRef.current,
				start: 'top 30%',
				end: 'center top',
				scrub: true,
			},
		});
	}, []);

	return (
		<section className='min-h-full px-12 flex flex-col justify-center py-4 -space-y-80'>
			<h1
				ref={eRef}
				className={`${ubuntu.className}  -space-y-96 text-9xl lg:text-[27rem] lg:prose-2xl pr-[50rem] self-center flex flex-col text-secondary `}>
				<span className='end  '>E</span>
			</h1>

			<h1
				ref={frontRef}
				className={`${ubuntu.className} -space-x-3 text-9xl lg:text-[27rem] lg:prose-2xl   tracking-tighter `}>
				<span>F</span>
				<span>R</span>
				<span>O</span>
				<span className='text-secondary end'>N</span>
				<span>T</span>
			</h1>

			<h1
				ref={devRef}
				className={`${ubuntu.className} -space-x-3 text-9xl lg:text-[27rem] lg:prose-2xl pl-[48.5rem] tracking-tighter`}>
				<span className='text-secondary end'>D</span>
				<span>E</span>
				<span>V</span>
				<span>E</span>
				<span>L</span>
				<span>O</span>
				<span>P</span>
				<span>E</span>
				<span>R</span>
			</h1>
		</section>
	);
};

export default Hero;
