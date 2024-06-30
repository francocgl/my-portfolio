import { useContext } from "react";
import { Context } from "../context/ContextProvider";

const useContextApp = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useContextApp must be used within a Provider");
  }

  const { lang, setLang } = context;
  return { lang, setLang };
};

export default useContextApp;
