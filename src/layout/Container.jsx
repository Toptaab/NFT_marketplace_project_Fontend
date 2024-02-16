import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Container() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
