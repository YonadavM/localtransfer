import { ReactComponent as HomeIcon } from '../icons/Home.svg';
import { ReactComponent as FileIcon } from '../icons/File.svg';
import { ReactComponent as UFileIcon } from '../icons/Upload File.svg';
import { ReactComponent as UserIcon } from '../icons/8-account.svg';


export default function Navigation() {
  
  return (
    <div className="nav">
      <ul>
          <li>
            <HomeIcon className="svg"/>
          </li>
          <li>
            <FileIcon className="svg"/>
          </li>
          <li>
            <UFileIcon className="svg"/>
          </li>
      </ul>
    </div>
  )   
}