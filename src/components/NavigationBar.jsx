import FileIcon from './FileIcon';
import HomeIcon from './HomeIcon';
import UFileIcon from './UFileIcon';

export default function Navigation() {
  
  return (
    <div className="nav">
      <ul>
          <li>
            <HomeIcon />
          </li>
          <li>
            <FileIcon />
          </li>
          <li>
            <UFileIcon />
          </li>
      </ul>
    </div>
  )   
}