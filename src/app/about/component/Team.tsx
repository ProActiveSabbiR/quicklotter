import { Col, Container, Row } from 'react-bootstrap'
import MemberCard from './MemberCard'
import { teamMembers } from '../data'

const Team = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <h2>Meet our lottery experts</h2>
          <p className="mb-0">Our passionate team is dedicated to bringing you the smartest, safest, and most fun lottery experience.</p>
        </div>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-4 justify-content-center">
          {teamMembers.map((member, idx) => (
            <Col key={idx}>
              <MemberCard member={member} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Team
