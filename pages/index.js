import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
////

const Home = () => {
  return (
    <>
      <Head>
        <title>SQLens</title>
        <meta
          name="description"
          content="SQLens is an Open Source SQL visualizer"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        title="Why SQLens">
        SQLens is locally hosted, ensuring your data remains under your control. The application makes complex relationships in your database more accessible, making management straightforward and secure. Experience clarity and security with SQLens.
      </SectionTitle>
      <SectionTitle
        pretitle="Try our demo tab to see it live!"
        title="Visualize your data with ease">
        Foreign and primary key relationships at the touch of your fingers.
      </SectionTitle>
      <Video />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Who's using our product">
        Check out other amazing products that have used SQLens!
      </SectionTitle>
      <Testimonials /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;