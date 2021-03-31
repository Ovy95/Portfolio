import React from 'react';
import { FaBars } from 'react-icons/fa';

 import { useGlobalContext } from './context';

const Home = () => {
const { openSidebar } = useGlobalContext();
  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars />
      </button>
     
    </main>
  );
};

export default Home;