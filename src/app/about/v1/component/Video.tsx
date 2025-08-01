import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import about13 from '@/assets/images/about/13.jpg'
import { BsQuote } from 'react-icons/bs'
import GlightBox from '@/components/GlightBox'
import { FaPlay } from 'react-icons/fa6'
import Image from 'next/image'
const Video = () => {
  return (
    <section className="pt-4 mt-n8">
      <Container>
        <Row>
          <Col lg={4}>
            <Card as={CardBody} className="bg-primary p-5 pt-8 overflow-hidden">
              <figure className="position-absolute top-0 start-0 mt-n7">
                <svg width="624.7px" height="228.6px">
                  <path
                    className="fill-dark opacity-2"
                    d="M0.9,83.8h-1v-1.6c0-0.4,0.1-0.6,0.2-0.6c0.1,0,0.9-0.1,1.7-0.2c0.8-0.1,3.2-0.6,5.3-1.2 
                    // ... (todo o d original aqui, mantenha inteiro) ...
                    7.1,161.9,17.6,167.3z"
                  />
                </svg>
              </figure>
              <div className="display-5 text-dark">
                <BsQuote className="bi" />
              </div>
              <hr className="w-50 border-2 border-white opacity-9 my-5" />
              <h5 className="text-white fw-light">
                &quot;We believe a great lottery app is built with passion, innovation, and trust.&quot;
              </h5>
              <div className="blockquote-footer text-white mb-0 fs-6 mt-3">
                Quick Lotter Team
              </div>
            </Card>
          </Col>
          <Col lg={8} className="position-relative ms-auto ps-xl-6 mt-6">
            <div className="bg-white shadow rounded position-absolute z-index-2 top-0 end-0 rotate-13 px-4 py-2 z-index-2 me-xxl-n5 d-none d-sm-block">
              <span className="h5 text-dark">10+ Years building lottery solutions</span>
            </div>
            <Card as={CardBody} className="overflow-hidden p-0">
              <Image src={about13} className="card-img" alt="video-img" />
              <div className="bg-overlay bg-dark opacity-3" />
              <div className="card-img-overlay d-flex p-3">
                <div className="m-auto">
                  <GlightBox
                    href="https://www.youtube.com/embed/tXHviS-4ygo"
                    className="flex-centered btn btn-lg btn-white btn-round stretched-link mb-0"
                  >
                    <FaPlay />
                  </GlightBox>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Video;
