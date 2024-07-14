import React from "react";
import { motion } from "framer-motion";
import useContextApp from "../../../hooks/useContextApp";
import { Lang } from "../../../context/ContextProvider";

const LangButtons = () => {
  const { lang, setLang } = useContextApp();

  const buttons = [Lang.EN, Lang.ES];

  const isActive = "text-black border-b-2 border-black";

  const changeLang = (selectedLang: Lang) => {
    setLang(selectedLang);
  };

  return (
    <div className="flex gap-6">
      {buttons.map((language, index) => {
        return (
          <div className="overflow-hidden">
            <motion.button
              initial={{ x: "-100%" }}
              animate={{ x: "0" }}
              transition={{ duration: 1, delay: index * 0.5 }}
              viewport={{ once: true }}
              className={`hover:border-b-2 py-[0.5px] text-xl ${
                language === lang
                  ? isActive
                  : "text-secondary hover:border-secondary"
              }`}
              onClick={() => changeLang(language)}
            >
              {language}
            </motion.button>
          </div>
        );
      })}
    </div>
  );
};

export default LangButtons;
