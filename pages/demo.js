import React from 'react';
import Navbar from '../components/navbar';
import DemoApp from '../components/DemoApp'
import MigrationLog from '../components/MigrationLog';
import SectionTitle from '../components/sectionTitle';

const DemoPage = () => {
  return (
    <div>
       <Navbar />
       <div className='text-sm text-center text-gray-600 dark:text-gray-400'>
        Give SQLens a shot!
      </div>
      {/* <p>This is the demo page for showcasing how routing works in Next.js.</p> */}
      <DemoApp />
       <div className='text-sm text-center text-gray-600 dark:text-gray-400'>
       Below is an example of your migration file
      </div>
      <div className='w-1/2'>
        <MigrationLog />
      </div>
    </div>
  );
};

export default DemoPage;
