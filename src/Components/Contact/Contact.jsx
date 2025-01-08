
import Style from "./Contact.module.css"

export const Contact = () => {
  return (
    <div className={Style.contact}>
       <section className={Style.title}>
          <div>
            <div className={Style.bar}>
                <span className={Style.barName}>Contact</span>
            </div>
          </div>
        </section>
        <div className={Style.pInfo}>
            Visit Our Walk In Store
        </div>
        <div className={Style.googleMap}>
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126866.81061511279!2d3.4409950847584034!3d6.446931111460397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6f25a88038f%3A0x4e8c2f0b30faf2cd!2sLekki%2FIkate%20And%20Environs%2C%20Lagos!5e0!3m2!1sen!2sng!4v1736264199685!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{
              width: "100%",height: "400px",  border: "0",
            }}>
          </iframe>
        </div>
    </div>
  )
}
