import React from "react";
import { About, Header, Contact, Work, Experience } from "../organisms";
import { useLocoScroll } from "../../hooks/useLocoScroll";

const Portfolio = () => {
  useLocoScroll();
  throw new Error("asd");
  return (
    <main className="bg-black text-white" data-scroll-container>
      <Header />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
};

export default Portfolio;
