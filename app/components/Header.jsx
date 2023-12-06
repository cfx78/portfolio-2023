'use client';
import { Sacramento } from 'next/font/google';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const sacramento = Sacramento({
	subsets: ['latin'],
	weight: '400',
});

const Header = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<header
			className={`${sacramento.className} top-0 left-0 p-2 flex justify-between items-center `}>
			<h2 className='text-xl '>Cortez Foxx</h2>

			<Hamburger toggled={isOpen} toggle={setOpen} rounded size={25} />
		</header>
	);
};

export default Header;
