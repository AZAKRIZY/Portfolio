import { useEffect, useState } from "react"


const Navbar = () => {
    const [scrolled,setsScrolled]=useState(false);
    useEffect(()=>{
        const handleScroll =()=>{
            
            setsScrolled(true)
        }
        window.addEventListener('scroll',handleScroll)
        return()=>window.removeEventListener('scroll',handleScroll)
    },[])
const navLinks=[
    {
        name:"work",
        link:"#work",
    },
  
        {
        name:"Skills",
        link:'#skills'
    },
    {
        name:"Technology",
        link:"#technology"
    }

]
    return (
    
    <header className={`navbar ${scrolled?'scrolled':'nost-scrolled'}`}>
        <div className="inner">
            <a href="#hero" className="logo">ANDRIANTSITOHAINA H.Luca</a>
            <nav className="desktop">
                <ul>
                {navLinks.map(({link,name})=>(
                    <li key={name} className="group">
                        <a href={link}>
                            <span>{name}</span>
                            <span className="underline"/>
                        </a>
                    </li>
                ))}
                </ul>
            </nav>
            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact Me</span>
                </div>

            </a>
        </div>

    </header>
  )
}

export default Navbar