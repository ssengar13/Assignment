import React from 'react'

import dashboard from '../img/home-startup-business-process.jpg'

const Revenue = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="details">
          <div className="content">
            <h4>Optimize Business with Tailored Processes</h4>
            <div className="steps">
              <div className="step">
                <div className="number">1</div>
                <div className="text">
                  <h5>Strategic Planning</h5>
                  <p>
                    Identify key business needs and formulate a roadmap for success through tailored strategies. This ensures alignment with specific goals and market demands.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="number">2</div>
                <div className="text">
                  <h5>Innovative Solutions</h5>
                  <p>
                    Implement cutting-edge technologies like automation, AI-driven systems, and scalable applications to modernize business operations and enhance efficiency.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="number">3</div>
                <div className="text">
                  <h5>Continuous Optimization</h5>
                  <p>
                    Regularly monitor, analyze, and improve processes to unlock growth opportunities and ensure long-term sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="phone-wrap">
            <img src={dashboard} alt="Revenue Dashboard" />
          </div>
        </div>
      </section>


    </>
  )
}

export default Revenue