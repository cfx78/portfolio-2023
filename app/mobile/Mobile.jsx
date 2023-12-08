'use client';
import { useLayoutEffect, useRef } from 'react';
import Hero from './sections/Hero';
import gsap from 'gsap';

const Mobile = () => {
	// const ref = useRef(null);
	// useLayoutEffect(() => {
	// 	gsap.fromTo(
	// 		ref.current,
	// 		{ opacity: 0, transform: 'translateY(100%)' },
	// 		{
	// 			opacity: 1,
	// 			duration: 2,
	// 			ease: 'power4.out',
	// 			transform: 'translateY(0%)',
	// 		},
	// 	);
	// }, []);
	return (
		<main className=''>
			<Hero />
		</main>
	);
};

export default Mobile;
