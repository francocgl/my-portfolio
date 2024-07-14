import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Navbar } from "../../molecules";
import { menu } from "../../../const/menu";
import { i18n } from "../../../strings";
import { AnimatedText, ProgressBar } from "../../atoms";
import LangButtons from "../../molecules/LangButtons";

import "./header.css";

export default function Header() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      const titles = [".title-line-1", ".title-line-2", ".title-line-3"];

      t1.fromTo(
        titles,
        {
          y: 50,
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        },
        0
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <header
      id="header"
      ref={comp}
      className="relative flex flex-col items-center justify-center bg-white overflow-hidden"
      data-scroll-section
    >
      <ProgressBar />
      <Navbar menu={menu} />
      <div className="relative z-20">
        <h1 className="text-black text-right  font-extralight uppercase title">
          <span
            className="font-thin block title-line-1"
            data-scroll="0"
            data-scroll-speed="0.2"
          >
            <AnimatedText letters text="Franco" once />
          </span>
          <span
            className="block title-line-2"
            data-scroll="0"
            data-scroll-speed="-0.2"
          >
            <AnimatedText letters text="Martin" once />
          </span>
        </h1>
        <p
          data-scroll="0"
          data-scroll-speed="0.2"
          className="title-line-3 text-sm md:text-lg xl:text-xl font-bold absolute top-[-30px] right-5 text-black white-space-pre"
        >
          <AnimatedText text="Software Engineer." once />
        </p>
      </div>
      <div
        data-scroll="0"
        data-scroll-speed="-0.3"
        className="text-black absolute bottom-[10rem] xl:bottom-[8.5rem]"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            ease: "easeInOut",
            duration: 1,
            type: "sping",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="title-line-3 whitespace-pre"
        >
          {i18n("scrollDown")}
        </motion.p>
      </div>
      <div className="hidden md:block absolute left-10 top-1/2 -rotate-90 transform -translate-y-1/2">
        <LangButtons />
      </div>
      <div
        data-scroll="0"
        data-scroll-speed="-0.3"
        className="bg-shape bg-shape-1 top-6 left-20"
      />
      <div
        data-scroll="0"
        data-scroll-speed="-0.3"
        className="bg-shape bg-shape-1 top-1/2 left-1/2"
      />
    </header>
  );
}
