import { SocialImgs } from "../componnents/constants"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="flex flex-col items-center">
                <a href="/">Visit my blog</a>

            </div>
            <div className="socials">
                {SocialImgs.map((img)=>(
                    <a className="icon" target="_blank" href={img.path} key={img.image}> 
                    <img src={img.image} alt="" />
                    </a>
                ))}
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-center md:text-end">
                    ©{new Date().getFullYear()} Luca | All right reserved

                </p>

            </div>
        </div>
    </footer>
  )
}

export default Footer