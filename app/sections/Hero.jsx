'use client';
import { Aboreto } from 'next/font/google';
import './sections.css';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const aboreto = Aboreto({
	subsets: ['latin'],
	weight: '400',
});

const Hero = () => {
	const heroRef = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.fromTo(
				'h1',
				{
					opacity: 0,
					y: 100,
				},
				{
					opacity: 1,
					y: 0,
					stagger: 0.5,
					ease: 'power4.out',
					duration: 1,
				},
			);
		}, heroRef);
		return () => ctx.revert();
	}, []);

	return (
		<section ref={heroRef}>
			<div className={`${aboreto.className} my-auto pb-32 pl-7 text-5xl`}>
				<h1>FRONTEND</h1>
				<h1 className=' pl-5'>DEVELOPER</h1>
			</div>
		</section>
	);
};

export default Hero;
