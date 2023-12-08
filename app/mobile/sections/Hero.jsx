'use client';
import { Aboreto, Gotu } from 'next/font/google';
import './sections.css';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';
import { LiaArrowDownSolid } from 'react-icons/lia';
import Header from '../components/Header';

const aboreto = Aboreto({
	subsets: ['latin'],
	weight: '400',
});

const gotu = Gotu({
	subsets: ['latin'],
	weight: '400',
});

const Hero = () => {
	const heroRef = useRef();
	useLayoutEffect(() => {
		const front = new SplitType('#front');
		const dev = new SplitType('#dev');
		const tl = gsap.timeline();

		let ctx = gsap.context(() => {
			tl.from(heroRef.current, {
				opacity: 0.75,
				transform: 'translateY(100%)',
				duration: 1.5,
				ease: 'power4.out',
			});
			tl.from('.char', {
				opacity: 0,
				y: 100,
				stagger: 0.1,
				duration: 1,
				ease: 'sine.inOut',
			});
			tl.from('.see-more', {
				opacity: 0,

				duration: 1,
				ease: 'power1.in',
			});
			tl.fromTo(
				'.arrow',
				{ opacity: 0 },
				{
					opacity: 1,
					y: 10,
					duration: 0.5,
					repeat: -1,
					yoyo: true,
					ease: 'sine.inOut',
				},
			);

			// tl.add(() => {
			// 	scrollTl.from('.arrow', {
			// 		opacity: 0,
			// 	});
			// 	scrollTl.to('.arrow', {
			// 		y: 10,
			// 		duration: 0.5,
			// 		repeat: -1,
			// 		yoyo: true,
			// 		ease: 'sine.inOut',
			// 	});
			// });
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<section className='section bg-primary text-secondary' ref={heroRef}>
			<Header />
			<div className={`${aboreto.className} my-auto  pl-7 text-5xl`}>
				<h1 id='front'>FRONTEND</h1>
				<h1 id='dev' className='pl-5'>
					DEVELOPER
				</h1>
			</div>
			<div className='flex justify-between items-center pb-3 px-2'>
				<div className='text-2xl arrow'>
					<LiaArrowDownSolid />
				</div>
				<h1 className={`${gotu.className} text-2xl see-more`}>
					Scroll to see more
				</h1>
			</div>
		</section>
	);
};

export default Hero;
