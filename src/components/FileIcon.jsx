import { ReactComponent as FileSVG } from '../icons/File.svg';
import { useEffect, useRef } from 'react';

export default function HomeIcon() {

    console.log("Enter")

    const ref = useRef(null);

    useEffect(() => {
        const handleClick = event => {
        console.log('File Clicked');
        };
        ref.current.addEventListener('click', handleClick);
        return () => {
        ref.current.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <FileSVG ref={ref} className="svg"/>
    );
}