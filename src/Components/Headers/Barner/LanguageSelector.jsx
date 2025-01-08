import  { useState } from "react";
import Style from "./LanguageSelector.module.css"

export const LanguageSelector = () => {

        const [isOpen, setIsOpen] = useState(false);
        const [selectedLanguage, setSelectedLanguage] = useState({
          name: "English",
          flag: "/Images/englishlang.png",
        });
      
        const languages = [
          { name: "English", flag: "/Images/englishlang.png" },
          { name: "French", flag: "/Images/frenchlang.png" },
          { name: "Spanish", flag: "/Images/spanishlang.png" },
          { name: "German", flag: "/Images/germanlang.png" },
          { name: "Italy", flag: "/Images/italylang.png" },
          { name: "Hindi", flag: "/Images/indialang.png" },
          { name: "Russian", flag: "/Images/russianlang.png" },
        ];
      
        const handleLanguageChange = (lang) => {
          setSelectedLanguage(lang);
          setIsOpen(false);
        };





  return (
    <div className={Style.lang}>
      <div className={Style.currentOption} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedLanguage.name}</span>
        <img className={Style.langFlag} src={selectedLanguage.flag}alt={`${selectedLanguage.name} flag`} />
      </div>
      {isOpen && (
        <ul className={Style.dropdown}>{languages.map((lang) => (
            <li key={lang.name} className={Style.dropdownItem} onClick={() => handleLanguageChange(lang)} >
              <span>{lang.name}</span>
              <img className={Style.langFlag} src={lang.flag} alt={`${lang.name} flag`} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
