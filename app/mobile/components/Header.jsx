'use client';
import { Sacramento } from 'next/font/google';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const sacramento = Sacramento({
	subsets: ['latin'],
	weight: '400',
});

const Header = () => {
	const ref = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.fromTo(
				'h2',
				{
					opacity: 0,
					x: -100,
				},
				{
					opacity: 1,
					x: 0,
					ease: 'power4.out',
					duration: 1,
					delay: 1.25,
				},
			);
		}, ref);
		return () => ctx.revert();
	}, []);

	return (
		<header
			ref={ref}
			className={`${sacramento.className} top-0 left-0 p-7 flex items-center `}>
			<h2 className='text-xl '>Cortez Foxx</h2>
		</header>
	);
};

export default Header;
