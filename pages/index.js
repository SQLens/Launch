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

const Home = () => {
  return (
    <>
      <Head>
        <title>SQLens - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        title=" Why should you use SQLens?">
        SQLens is an open source product with security in mind, that's why we never save your URI or any incoming data and is locally hosted so your data never has to leave your local enviroment.
      </SectionTitle>
      <SectionTitle
        pretitle="Check out the demo tab to see it live!"
        title="Visualize your data easily">
        A cool sentence.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Who's using our product">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;