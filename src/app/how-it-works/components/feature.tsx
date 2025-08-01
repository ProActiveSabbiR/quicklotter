import React from 'react';
import FeatureImg from '@/assets/images/how-it-work/play-left.png'
import FeatureImg2 from '@/assets/images/how-it-work/06-left.png'
import FeatureImg3 from '@/assets/images/how-it-work/05-left.png'
import Image from 'next/image'


const FeaturesSection = () => {
  return (
    <section className="py-3">
      <div className="container">
        {/* Section 1: First Feature */}
        <div className="row align-items-center mb-5 pb-5" 
        style={{maxWidth:'980px', margin:"0 auto"}}>
          <div className="col-lg-6 order-lg-1">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center">
                <Image
                  src={FeatureImg}
                  alt="app mockup"
                  width={384}
                  height={340}
                  priority
                  className="d-block mx-auto mt-5 z-1"
                />
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 order-lg-2">
            <div className="ps-lg-5">
              <h2 className="display-5 fw-bold mb-2 fs-2">First Feature Title</h2>
              <p className=" mb-4"
              style={{ fontSize: '1.1rem'}}
              >
                Take the guesswork out of managing your money. Our AI-powered budgeting tool adapts to your lifestyle and helps you stay on track.
              </p>
              
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 mt-1">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                      <span className="text-white small">⭐</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1 fs-6">Feature One</h5>
                    <p className=" mb-0">Description of the first feature.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 mt-1">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                      <span className="text-white small">⭐</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1 fs-6">Feature Two</h5>
                    <p className=" mb-0">Description of the second feature.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start">
                  <div className="me-3 mt-1">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                      <span className="text-white small">⭐</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1 fs-6">Feature Three</h5>
                    <p className=" mb-0">Description of the third feature.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section 2: Second Feature */}
        <div className="row align-items-center mb-5 pb-5"
        style={{maxWidth:'980px', margin:"0 auto"}}>
          <div className="col-lg-6 order-lg-2">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center" >
                <Image
                  src={FeatureImg2}
                  alt="app mockup"
                  width={384}
                  height={340}
                  priority
                  className="d-block mx-auto mt-5 z-1"
                />
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 order-lg-1">
            <div className="pe-lg-5">
              <h2 className="display-5 fw-bold mb-2 fs-2">Second Feature Title</h2>
              <p className=" mb-4"
              style={{ fontSize: '1.1rem'}}
              >
                Take the guesswork out of managing your money. Our AI-powered budgeting tool adapts to your lifestyle and helps you stay on track.
              </p>
              
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 mt-1">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                      <span className="text-white small">⭐</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1 fs-6">Feature One</h5>
                    <p className="text-muted mb-0">Description of the first feature.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 mt-1">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                      <span className="text-white small">⭐</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1 fs-6">Feature Two</h5>
                    <p className="text-muted mb-0">Description of the second feature.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start">
                  <div className="me-3 mt-1">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                      <span className="text-white small">⭐</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1 fs-6">Feature Three</h5>
                    <p className="text-muted mb-0">Description of the third feature.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section 3: Placeholder for third section */}
        <div className="row align-items-center" 
        style={{maxWidth:'980px', margin:"0 auto"}}>
          <div className="col-lg-6 order-lg-1">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center" >
                <Image
                  src={FeatureImg3}
                  alt="app mockup"
                  width={384}
                  height={340}
                  priority
                  className="d-block mx-auto mt-5 z-1"
                />
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 order-lg-2">
            <div className="ps-lg-5">
              <h2 className="display-5 fw-bold mb-4 fs-2">Third Feature Title</h2>
              <p className=" mb-4"
              style={{ fontSize: '1.1rem'}}
              >
                Take the guesswork out of managing your money. Our AI-powered budgeting tool adapts to your lifestyle and helps you stay on track.
              </p>
              
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 mt-1">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                      <span className="text-white small">⭐</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1 fs-6">Feature One</h5>
                    <p className="text-muted mb-0">Description of the first feature.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 mt-1">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                      <span className="text-white small">⭐</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1 fs-6">Feature Two</h5>
                    <p className="text-muted mb-0">Description of the second feature.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start">
                  <div className="me-3 mt-1">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                      <span className="text-white small">⭐</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1 fs-6">Feature Three</h5>
                    <p className="text-muted mb-0">Description of the third feature.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;