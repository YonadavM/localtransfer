import { ReactComponent as UFileSVG } from '../icons/Upload File.svg';
import { useEffect, useRef } from 'react';

export default function HomeIcon() {

    console.log("Enter")

    const ref = useRef(null);

    useEffect(() => {
        const handleClick = event => {
        console.log('UFile Clicked');
        };
        ref.current.addEventListener('click', handleClick);
        return () => {
        ref.current.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <UFileSVG ref={ref} className="svg"/>
    );
}