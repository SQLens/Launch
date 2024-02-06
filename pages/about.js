import React from 'react';
import Navbar from '../components/navbar';
import Benefits from "../components/benefits";
import { Jarod, Jenny, Margaret, Alex } from "../components/data";

const DemoPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Benefits data={Alex} />
        <Benefits imgPos="right" data={Jenny} />
        <Benefits data={Jarod} />
        <Benefits imgPos="right" data={Margaret} />
      </div>
    </div>
  );
};

export default DemoPage;
