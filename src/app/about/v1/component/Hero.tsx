import { Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const Hero = () => {
  const list = ['Generate 400+ types of lottery games', 'Customize your experience easily', 'Instant results, blazing fast', 'Fully responsive on all devices']

  return (
    <section className="bg-dark pt-sm-8 pb-9" data-bs-theme="dark">
      <Container className="pt-4 pt-sm-0">
        <Row className="g-4 g-xxl-5">
          <Col lg={8}>
            <h1 className="mb-0 lh-base">Modern &amp; creative way to master lottery games</h1>
            <p className="mb-0 mt-4">
              We believe anyone can play smarter. Quick Lotter combines technology and passion so every player can enjoy the thrill — and the strategy — of the lottery.
            </p>
          </Col>
          <Col lg={4} xl={3} className="ms-auto position-relative">
            <ul className="list-group list-group-borderless mb-4">
              {list.map((item, idx) => (
                <li key={idx} className="list-group-item d-flex heading-color pb-0 icons-center">
                  <BsPatchCheck className="text-primary me-2" />
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
