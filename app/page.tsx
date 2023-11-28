'use client';
import Navbar from '@/app/components/Navbar';
import { Ubuntu } from 'next/font/google';
import { motion } from 'framer-motion';

const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: '700',
});

export default function Home() {
	return (
		<main className='flex    '>
			<Navbar />
			<section className=' px-12 flex flex-col justify-center py -space-y-80'>
				<h1
					className={`${ubuntu.className}  -space-y-96 text-[27rem] prose-2xl pr-[75rem] self-center flex flex-col text-secondary `}>
					<motion.span
						initial={{
							opacity: 0,
							y: -300,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 1,
							delay: 1,
						}}
						className='end'>
						E
					</motion.span>
				</h1>
				<h1
					className={`${ubuntu.className} -space-x-3 text-[27rem] prose-2xl pl-5  tracking-tighter `}>
					<span>F</span>
					<span>R</span>
					<span>O</span>
					<motion.span
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: 1.25,
						}}
						className='text-secondary end'>
						N
					</motion.span>
					<span>T</span>
				</h1>
				<h1
					className={`${ubuntu.className} -space-x-3 text-[27rem] prose-2xl pl-[50rem] tracking-tighter`}>
					<motion.span
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: 1.5,
						}}
						className='text-secondary end'>
						D
					</motion.span>
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
		</main>
	);
}
