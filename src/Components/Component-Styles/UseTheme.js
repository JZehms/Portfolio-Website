import { useState, useEffect } from "react";

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return { isDarkTheme, toggleTheme };
};

export default useTheme;


// TODO: Need to actully add this in. Needs to be global but have the symbol in the navBar.