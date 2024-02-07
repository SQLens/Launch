import React from 'react';
import Navbar from '../components/navbar';
import Benefits from "../components/benefits";
import { Jarod, Jenny, Margaret, Alex } from "../components/data";

const DemoPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20 max-w-4xl mx-auto">
          <Benefits data={Alex} />
          <Benefits data={Jenny} />
          <Benefits data={Jarod} />
          <Benefits data={Margaret} />
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
