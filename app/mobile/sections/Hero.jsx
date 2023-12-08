'use client';
import { Aboreto } from 'next/font/google';
import './sections.css';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';

const aboreto = Aboreto({
	subsets: ['latin'],
	weight: '400',
});

const Hero = () => {
	const heroRef = useRef();
	useLayoutEffect(() => {
		const front = new SplitType('#front');
		const dev = new SplitType('#dev');

		let ctx = gsap.context(() => {
			gsap.from('.char', {
				opacity: 0,
				y: 100,
				stagger: 0.2,
				duration: 1,
				ease: 'sine.inOut',
			});
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={heroRef}>
			<div className={`${aboreto.className} my-auto pb-36 pl-7 text-5xl`}>
				<h1 id='front'>FRONTEND</h1>
				<h1 id='dev' className='pl-5'>
					DEVELOPER
				</h1>
			</div>
		</section>
	);
};

export default Hero;
