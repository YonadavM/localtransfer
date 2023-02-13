import { useEffect } from 'react';
import FileIcon from './FileIcon';
import HomeIcon from './HomeIcon';
import UFileIcon from './UFileIcon';

export default function Navigation(props) {
  
  return (
    <div className="nav">
      <ul>
          <li>
            <HomeIcon setScreenState={props.setScreenState}/>
          </li>
          <li>
            <FileIcon setScreenState={props.setScreenState}/>
          </li>
          <li>
            <UFileIcon setScreenState={props.setScreenState}/>
          </li>
      </ul>
    </div>
  )   
}