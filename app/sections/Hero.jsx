'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Ubuntu } from 'next/font/google';
const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: '700',
});

const Hero = () => {
	return (
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
						delay: 1.5,
					}}
					className='end'>
					E
				</motion.span>
			</h1>

			<AnimatePresence>
				<motion.h1
					initial={{
						opacity: 0,
						x: -300,
					}}
					animate={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						duration: 1,
					}}
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
							delay: 1,
							duration: 1,
						}}
						className='text-secondary end'>
						N
					</motion.span>
					<span>T</span>
				</motion.h1>
			</AnimatePresence>

			<motion.h1
				initial={{
					opacity: 0,
					x: 300,
				}}
				animate={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					duration: 1,
				}}
				className={`${ubuntu.className} -space-x-3 text-[27rem] prose-2xl pl-[50rem] tracking-tighter`}>
				<motion.span
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						delay: 1,
						duration: 1,
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
			</motion.h1>
		</section>
	);
};

export default Hero;
