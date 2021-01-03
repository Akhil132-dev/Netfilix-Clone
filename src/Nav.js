import React, { useState } from "react";
import "./Nav.css";
import { useEffect } from "react";

function Nav() {
    const  [show ,handleshow] =useState((false))
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
    return ()=>{
        window.removeEventListener("scroll")
    }
  },[]);
  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <img
        className="netfilx_logo"
        src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/netflix.png"
        alt="Netfilx logo"
      />

      <img
        className="nav_avtar"
        src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1"
        alt="Netfilx logo"
      />
    </div>
  );
}

export default Nav;
