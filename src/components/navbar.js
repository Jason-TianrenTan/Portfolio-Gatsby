import React, {useState, useEffect} from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import data from "../yourdata"
import debounce from 'lodash.debounce'

const Navbar = () => {
    let listener = null;
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        //scrolling up
        console.log(prevScrollPos - currentScrollPos)
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0) || currentScrollPos < 10);

        //update prev value
        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className={visible ? "section navbar-active" : "section navbar-inactive"} id="navbar">
      <div className="container">
        <div className="navbar-wrapper">
            <div className="logo-wrapper">
                <img className="navbar-logo" src={data.logos.logo}/>
            </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#skills")}>Skills</button>
            <button onClick={() => scrollTo("#work")}>Projects</button>
            <button onClick={() => scrollTo("#resume")}>Resume</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
