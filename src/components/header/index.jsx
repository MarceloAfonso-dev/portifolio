import ImageComponent from '../imageComponent/index.jsx';
import style from './style.module.css';
import { meImage } from '../../utils/images';

export default function Header(){
    return( 
        <div className={style.headerContainer}>
          <div>
            <h1>Hi, i´m Marcelo! 👋</h1>
            <h2>Software Engineer</h2>
          </div>
          <ImageComponent
            src={meImage}
            alt="Marcelo Photo"
            width={325}
            height={310}
            priority
          />
        </div>
    );
}