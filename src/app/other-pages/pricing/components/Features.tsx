import { currency } from '@/states/constants'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsCheckCircle, BsXCircle } from 'react-icons/bs'
import { features } from '../data'
import Link from 'next/link'

const Features = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <h2 className="mb-4">Features included in every plan</h2>
          <p className="mb-0">
            Our passion for customer excellence is just one reason why we are the market leader. We&apos;ve always worked very hard to give our customers
            the best experience.
          </p>
        </div>

        <Row className="g-4 g-lg-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Col md={4} className="text-center" key={idx}>
                <Card className="card-body border bg-light">
                  <div className="icon-lg text-primary mx-auto mb-3">
                    <Icon className="fa-xl" size={28} />
                  </div>
                  <h6>{feature.title}</h6>
                  <p>{feature.description}</p>
                </Card>
              </Col>
            )
          })}
        </Row>

        <div className="table-responsive-xl mt-5">
          <table className="table table-border align-middle">
            <thead className="align-top">
              <tr>
                <th scope="col"></th>

                <th scope="col">
                  <div className="text-center p-3">
                    <span className="mb-3 heading-color">Starter</span>
                    <p className="mb-3">
                      <span className="h2 mb-0 plan-price" data-monthly-price="$12.99" data-annual-price="$49.99">
                        {currency}12.99
                      </span>
                      /month
                    </p>
                    <Link href="" className="btn btn-sm btn-dark mb-0">
                      Get started
                    </Link>
                  </div>
                </th>

                <th scope="col">
                  <div className="text-center p-3">
                    <span className="mb-3 heading-color">Pro</span>
                    <p className="mb-3">
                      <span className="h2 mb-0 plan-price" data-monthly-price="$19.99" data-annual-price="$79.99">
                        {currency}19.99
                      </span>
                      /month
                    </p>
                    <Link href="" className="btn btn-sm btn-dark mb-0">
                      Get started
                    </Link>
                  </div>
                </th>

                <th scope="col">
                  <div className="text-center p-3">
                    <span className="mb-3 heading-color">Unlimited</span>
                    <p className="mb-3">
                      <span className="h2 mb-0 plan-price" data-monthly-price="$35.99" data-annual-price="$99.99">
                        {currency}35.99
                      </span>
                      /month
                    </p>
                    <Link href="" className="btn btn-sm btn-dark mb-0">
                      Get started
                    </Link>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="border-top-0">
              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Smart Game Generation</span>
                </th>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">AI Game Generation</span>
                </th>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Manual Filters</span>
                </th>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">AI FIlters (SmartFIlter)</span>
                </th>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Advanced Analysis</span>
                </th>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Overview Insights</span>
                </th>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Saved Games</span>
                </th>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                  <span className='text-dark'> (up to 5 lines)</span> 
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" /> 
                  <span className='text-dark'> (unlimited)</span> 
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" /> 
                  <span className='text-dark'> (unlimited)</span> 
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Mobile & web Access</span>
                </th>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Ticket Printing Limit</span>
                </th>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                  <span className='text-dark'> (up to 10 lines/month)</span> 
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" /> 
                  <span className='text-dark'> (unlimited)</span> 
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" /> 
                  <span className='text-dark'> (unlimited)</span> 
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Ticket Checker</span>
                </th>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Dedicated Support</span>
                </th>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" /> 
                  <span className='text-dark'> Priority</span> 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}

export default Features
