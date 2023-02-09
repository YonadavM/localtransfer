import { ReactComponent as HomeSVG } from '../icons/Home.svg';
import { useEffect, useRef } from 'react';

export default function HomeIcon() {

    console.log("Enter")

    const ref = useRef(null);

    useEffect(() => {
        const handleClick = event => {
        console.log('Home Clicked');
        };
        ref.current.addEventListener('click', handleClick);
        return () => {
        ref.current.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <HomeSVG ref={ref} className="svg"/>
    );
}