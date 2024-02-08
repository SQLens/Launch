import React from 'react';
import Navbar from '../components/navbar';
import DemoApp from '../components/DemoApp'
import MigrationLog from '../components/MigrationLog';
import SectionTitle from '../components/sectionTitle';

const DemoPage = () => {
  return (
    <div>
       <Navbar />
       <div className='text-lg text-center '>
        Interact with our mock database...
      </div>
      {/* <p>This is the demo page for showcasing how routing works in Next.js.</p> */}
      <div className=''><DemoApp /></div>
       <div className='text-lg text-center '>
       ...and see your migration log update live
      </div>
      <div className='lg:w-3/4'>
        <MigrationLog />
      </div>
    </div>
  );
};

export default DemoPage;
