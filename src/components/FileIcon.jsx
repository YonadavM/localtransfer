import { ReactComponent as FileSVG } from '../icons/File.svg';
import { useEffect, useRef } from 'react';

export default function FileIcon(props) {

    const ref = useRef(null);

    useEffect(() => {
        const handleClick = event => {
            props.setScreenState(1)
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