import React from 'react'
import { Col, Row } from 'react-bootstrap';

const DatesList = ({person}) => {
  return (
    <>
    <Row className="justify-content-center">
            <Col sm="8" className="">
              <div className="rectangle p-2">
                {person.length ? (
                  person.map((per) => {
                    return (
                      <div key={per.id} className="d-flex border-bottom mx-3 my-2">
                        <img className="img-avatar" src={per.img} alt="pic" />
                        <div className="px-3">
                          <p className="d-inline fs-5">{per.name}</p>
                          <p className="fs-6">{per.date}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // null
                  <h2 className="p-5 text-center">لا يوجد مواعيد اليوم</h2>
                )}
              </div>
            </Col>
          </Row></>
  )
}

export default DatesList
