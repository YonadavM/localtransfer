import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import OpeningState from './OpeningState';
import TextState from './TextState';
import FileState from './FileState';

export default function MainScreen(props) {
    const socket = io('http://192.168.1.122:3001');
    
    useEffect(() => {
        console.log(props.screenState)
    }, [props.screenState])

  return (
    <div className="main-container">
        {
            props.screenState === 0 ? (
                <OpeningState socket={socket}/>
            ) : (
                props.screenState === 1 ? (
                    <TextState/>
                ) : (
                    props.screenState === 2 ? (
                        <FileState />
                    ) : (
                        props.setScreenState(0)
                        )
                )
            )
            
        }
    </div>
  );
}
