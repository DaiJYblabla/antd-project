import { Link, Outlet } from 'umi';
import styles from './index.less';
import HomePage from '@/pages';

export default function Layout() {
  return (
    <HomePage />
  //   // <Demo />
  //   // <div className={styles.navs}>
  //   //   <ul>
  //   //     <li>
  //   //       <Link to="/">Home</Link>
  //   //     </li>
  //   //     <li>
  //   //       <Link to="/docs">Docs</Link>
  //   //     </li>
  //   //     <li>
  //   //       <a href="https://github.com/umijs/umi">Github</a>
  //   //     </li>
  //   //   </ul>
  //   //   <Outlet />
  //   // </div>
  );
}
