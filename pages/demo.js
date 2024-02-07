import React from 'react';
import Navbar from '../components/navbar';
import DemoApp from '../components/DemoApp'
import MigrationLog from '../components/MigrationLog';

const DemoPage = () => {
  return (
    <div>
       <Navbar />
      <h1>Demo Page</h1>
      <p>This is the demo page for showcasing how routing works in Next.js.</p>
      <DemoApp />
      <br></br>
      <p>Below is an example of your migration file</p>
      <MigrationLog />
    </div>
  );
};

export default DemoPage;
