import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import avatarPng from '@/assets/pinguin.png';
import catJpg from '@/assets/Cat.jpg';
import ImgSvg from '@/assets/gorilla.svg'

export const App = () => {
	const [counter, setCounter] = useState<number>(0);

	const increment = () => setCounter(prev => prev + 1);

	return (
		<div data-testid={'App'}>
			<h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
			<div>
				<div>
					<img width={100} height={100} src={avatarPng} alt="" />
					<img width={100} height={100} src={catJpg} alt="" />
					{/* <img width={100} height={100} src={ImgSvg} alt="" /> */}
					<ImgSvg stroke='red' fill='red' width={300} height={300} />
				</div>
				<Link to={'/about'} className={classes.gap}>about</Link>
				<Link to={'/shop'}>shop</Link>
				<h1>{counter}</h1>
				<button className={classes.button} onClick={increment}><span>incr</span></button>
				<Outlet />
			</div>
		</div>
	);
}
