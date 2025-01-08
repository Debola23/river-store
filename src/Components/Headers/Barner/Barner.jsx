import Style from "./Barner.module.css"
import { LanguageSelector } from "./LanguageSelector"

export const Barner = () => {

  return (
    <div className={Style.barner}>
      <div className={Style.barnerText}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a href=""> shop now</a>
      </div>
      <LanguageSelector/>
    </div>

   
  )
}
