import React from "react";
import { About, Header, Contact, Portfolio, Experience } from "../organisms";
import { useLocoScroll } from "../../hooks/useLocoScroll";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  useLocoScroll();

  return (
    <main className="bg-black text-white" data-scroll-container>
      <Analytics />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default App;
