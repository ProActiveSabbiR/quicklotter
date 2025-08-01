
'use client'

import Image from 'next/image'
import HeroMockup from '@/assets/images/how-it-work/app-image-portrait.png'

const Hero = () => {
  return (
    <section
      id="hero"
      className="position-relative d-flex justify-content-center align-items-start px-3  pb-0"
      style={{ overflow: 'hidden' , paddingTop:'160px'}}
    >
      {/* Background Grid Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-n1">
        <div
          className="w-100 h-100"
          style={{
            backgroundImage: `
              linear-gradient(to right, #80808012 1px, transparent 1px),
              linear-gradient(to bottom, #80808012 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            WebkitMaskImage:
              'radial-gradient(ellipse 50% 50% at 50% 50%, #000 60%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 50% 50% at 50% 50%, #000 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Bottom Blur Gradient */}
      <div
        className="position-absolute bottom-0 start-0 end-0"
        style={{
          height: '160px',
          pointerEvents: 'none',
          backdropFilter: 'blur(2px)',
          background:
            'linear-gradient(to bottom, transparent, rgba(233,238,255,0.5), rgba(202,208,230,0.5))',
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div className="text-center w-100">
        <h1 className="fw-bold text-dark mx-auto mb-3" style={{ maxWidth: '720px', fontSize: '3.75rem' }}>
          Smart, Secure, Simple Financial Management
        </h1>
        <p className="text-dark mx-auto mb-5" style={{ maxWidth: '540px' }}>
          From effortless budgeting to real-time investment insights, Finwise puts you in control of your money like never before
        </p>
        {/* Buttons */}
        <div className="d-flex flex-column flex-sm-row align-items-center gap-3 justify-content-center mt-4 ">
          <a href="#">
            <button
              type="button"
              className="btn d-flex align-items-center text-white"
              style={{
                backgroundColor: '#000',
                borderRadius: '999px',
                minWidth: '205px',
                height: '56px',
                padding: '0 24px',
              }}
            >
              <div className="me-3">
                <svg viewBox="0 0 384 512" width="30" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
              </div>
              <div className="text-start">
                <div className="small">Download on the</div>
                <div className="fw-semibold fs-5">App Store</div>
              </div>
            </button>
          </a>
          <a href="#">
            <button
              type="button"
              className="btn d-flex align-items-center text-white"
              style={{
                backgroundColor: '#000',
                borderRadius: '999px',
                minWidth: '205px',
                height: '56px',
                padding: '0 24px',
              }}
            >
              <div className="me-3">
                <svg viewBox="30 336.7 120.9 129.2" width="30">
                  <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
                  <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1z" />
                  <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
                  <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
                </svg>
              </div>
              <div className="text-start">
                <div className="small">GET IT ON</div>
                <div className="fw-semibold fs-5">Google Play</div>
              </div>
            </button>
          </a>
        </div>
        {/* App Image */}
        <div className="position-relative" style={{ zIndex: 1 }}>
          <Image
            src={HeroMockup}
            alt="app mockup"
            width={384}
            height={340}
            priority
            className="d-block mx-auto mt-5 z-1"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
