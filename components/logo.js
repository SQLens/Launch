import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
// import '../stylesheets/landingPage.scss';





const Logo = () => {
    const logoRef = useRef(null);
  
    useEffect(() => {
      const logoAnimation = anime.timeline({
        autoplay: true,
        delay: 200,
      });
  
      logoAnimation
        .add({
          targets: logoRef.current,
          translateY: [-100, 0],
          opacity: [0, 1],
          elasticity: 600,
          duration: 800,
        })
        .add({
          targets: '#logo-hexagon',
          rotate: [-90, 0],
          duration: 600,
          elasticity: 600,
          offset: 50,
        })
        .add({
          targets: '#logo-circle',
          scale: [0, 1],
          duration: 600,
          elasticity: 600,
          offset: 250,
        })
        .add({
          targets: '#logo-text',
          translateX: ['-100%', 0],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeOutExpo',
          offset: 500,
        });
    }, []);
  
    return (
      <div className="logo-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <figure style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="90px" height="78px" viewBox="0 0 228 168" xmlns="http://www.w3.org/2000/svg" ref={logoRef}>
            <polygon
              id="logo-hexagon"
              fill="#646cff"
              points="74 148 18.574 116 18.574 52 74 20 129.426 52 129.426 116"
            ></polygon>
            <circle
              id="logo-circle"
              fill="#e92a67"
              cx="150"
              cy="116"
              r="20"
            ></circle>
          </svg>
        </figure>
        <div className="site-title" style={{ textAlign: 'left', marginLeft: '-15px' }}> 
          <div id="logo-text" className="site-title-text" style={{ fontSize: '18px', color: '#646cff' }}>
            SQL<span style={{ color: '#e92a67' }}>ens</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Logo;