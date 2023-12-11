import Link from 'next/link';
import './sections.css';
import { Aboreto } from 'next/font/google';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const aboreto = Aboreto({
	subsets: ['latin'],
	weight: '400',
});

const info = [
	{
		a: 'Name',
		b: 'Cortez Foxx',
	},
	{
		a: 'Based In',
		b: 'Memphis, TN',
	},

	{
		a: 'Degree',
		b: 'Management Information Systems',
	},
	{
		a: 'College',
		b: 'University of Memphis',
	},

	{
		a: 'My Web Development Journey Began',
		b: '2022',
	},
	{
		a: 'Current Employer',
		b: 'USPS',
	},
	{
		a: 'Hobbies',
		b: 'Gaming, Sample-Based Music Production, and Web Development',
	},
];

const Links = () => {
	const ref = useRef(null);

	useLayoutEffect(() => {
		const tl = gsap.timeline();
		const ctx = gsap.context(() => {
			tl.from('h1', {
				scrollTrigger: {
					trigger: ref.current,
					start: 'top center',
				},
			});
		}, ref);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={ref}
			className={`${aboreto.className} bg-primary text-secondary pt-16`}>
			<h1 className='text-4xl text-center '>About</h1>

			<div className='grid space-y-10 py-16'>
				{info.map((item, i) => {
					return (
						<div
							className='flex-row justify-between items-center text-center flex w-full  border-b-2 border-secondary p-5 text-xl '
							key={i}>
							<span>{item.a}</span>
							<span>{item.b}</span>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Links;
