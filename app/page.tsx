'use client';
import Navbar from '@/app/components/Navbar';

import { use, useEffect, useRef, useState } from 'react';
import Hero from './sections/Hero';
import Lenis from '@studio-freight/lenis';

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

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
