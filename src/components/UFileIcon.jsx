import { ReactComponent as UFileSVG } from '../icons/Upload File.svg';
import { useEffect, useRef } from 'react';

export default function UFileIcon(props) {
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = event => {
            props.setScreenState(2)
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