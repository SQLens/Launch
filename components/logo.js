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
    <div
      className="logo-container"
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <figure
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="100px"
          height="68px"
          viewBox="0 0 148 128"
          xmlns="http://www.w3.org/2000/svg"
          ref={logoRef}
        >
                <defs>
                <mask id="circle-mask">
                  <rect fill="white" width="100%" height="100%"></rect>
                  <circle
                    id="logo-mask"
                    fill="black"
                    cx="120"
                    cy="96"
                    r="28"
                  ></circle>
                </mask>
              </defs>
          <polygon
            id="logo-hexagon"
            fill="#646cff"
            points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96"
            mask="url(#circle-mask)"
          ></polygon>
          <circle
            id="logo-circle"
            fill="#e92a67"
            cx="120"
            cy="96"
            r="20"
          ></circle>
        </svg>
      </figure>
      <div
        className="site-title"
        style={{ textAlign: 'left', marginLeft: '-5px' }}
      >
        <div
          id="logo-text"
          className="site-title-text"
          style={{ fontSize: '28px', color: '#646cff', fontFamily: 'Fira mono, monospace' }}
        >
          SQL<span style={{ color: '#e92a67' }}>ens</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
