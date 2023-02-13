import { ReactComponent as HomeSVG } from '../icons/Home.svg';
import { useEffect, useRef } from 'react';

export default function HomeIcon(props) {

    const ref = useRef(null);

    useEffect(() => {
        const handleClick = event => {
            props.setScreenState(0)
        }
        
        ref.current.addEventListener('click', handleClick);
        return () => {
            ref.current.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <HomeSVG ref={ref} className="svg"/>
    );
}