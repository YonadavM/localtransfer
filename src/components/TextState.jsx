import { useState, useEffect, useRef, useCallback } from 'react';
import io from 'socket.io-client';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'

export default function TextState(props) {

    const [quill, setQuill] = useState();

    const TOOLBAR_OPTIONS = [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        [{ align: [] }],
        ["image", "blockquote", "code-block"],
        ["clean"],
      ]
    
    const wrapperRef = useCallback( (wrapper) => {
        
        if (!wrapper) {
            return;
        }
        
        wrapper.innerHTML = ""
        const editor = document.createElement('div')
        wrapper.append(editor)
        const q = new Quill(editor, {theme: "snow", modules: {toolbar: TOOLBAR_OPTIONS}})
        setQuill(q);
        console.log("strange ", q)
    }, [])

    useEffect(() => {
        if (quill == null || props.socket == null) return;
        const textChangeHandler = (delta, oldDelta, source) => {
            if (source !== 'user') return;
            console.log(delta)
            props.socket.emit('send-text-changes', delta)
        };
        
        quill.on('text-change', textChangeHandler);
        
        return () => {    
            quill.off('text-change', textChangeHandler);
        }
    }, [quill, props.socket])

    useEffect(() => {
        if (quill == null || props.socket == null) return;
        const textChangeHandler = (delta) => {
            quill.updateContents(delta)
        };
        
        props.socket.on('receive-text-changes', textChangeHandler);
        
        return () => {    
            props.socket.off('receive-text-changes', textChangeHandler);
        }
    }, [quill, props.socket])
    
    
    return (
        <div id="text-editor-contianer" ref={wrapperRef}></div>
    );
}