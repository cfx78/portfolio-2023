import Navbar from '@/app/components/Navbar';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: '700',
});

export default function Home() {
	return (
		<main className='flex min-h-screen bg-primary py-16 '>
			<Navbar />
			<section className='h-[90vh] pt-96 pl-4 bottom-0 left-0 w-full text-start flex flex-col items-baseline justify-start -space-y-96'>
				<h1
					className={`${ubuntu.className} text-[16rem] prose-2xl font-outline-2-w `}>
					FrontEnd
				</h1>
				<h1
					className={`${ubuntu.className} text-[16rem] prose-2xl -rotate-6 text-neutral stroke-accent font-outline-4 pt-20 `}>
					Developer
				</h1>
			</section>
		</main>
	);
}
