import React from 'react'

const Facts = () => {
  return (
    <>

      <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="section-header">
                <h2 className="text-white">Our Footprints</h2>
                <p>Delivering exceptional service and innovative solutions to clients across the globe, fostering lasting partnerships and driving success.</p>
              </div>
              <div className="row counters">
                <div className="col-lg-3 col-6 text-center">
                  <span className="purecounter">50+</span>
                  <h3> Innovative Solutions </h3>
                  <p> Tailored to meet specific client needs </p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span className="purecounter">90%</span>
                  <h3> Repeat Business </h3>
                  <p>Building long-term relationships with our clients</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span className="purecounter">85%</span>
                  <h3> Repeat Business</h3>
                  <p>Building long-term relationships with our clients</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span className="purecounter">10+</span>
                  <h3> Industries Served</h3>
                  <p>Spanning across technology, healthcare, finance, and more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Facts