import { useState, useEffect, useRef, useCallback } from 'react';
import io from 'socket.io-client';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'

export default function TextState() {
    
    
    const wrapperRef = useCallback( (wrapper) => {
        wrapper.innerHTML = ""
        const editor = document.createElement('div')
        wrapper.append(editor)
        new Quill(editor, {theme: "snow"})
    }, [])

    return (
        <div id="text-editor-contianer" ref={wrapperRef}></div>
    );
}