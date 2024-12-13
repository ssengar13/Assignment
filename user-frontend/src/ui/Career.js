import React, { useState } from "react";
import careerHeader from "../img/blog-header.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";

const Career = () => {
  const [filters, setFilters] = useState({
    jobType: "",
    jobLocation: "",
    jobCategory: "",
  });

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      location: "Pune",
      experience: "2-4 years",
      type: "Full-Time",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "Bangalore",
      experience: "1-3 years",
      type: "Part-Time",
    },
    {
      id: 3,
      title: "Project Manager",
      location: "Remote",
      experience: "5+ years",
      type: "Contract",
    },
    {
      id: 4,
      title: "Front End Developer",
      location: "Pune",
      experience: "5+ years",
      type: "Full-Time",
    },
    {
      id: 5,
      title: "Backend Developer",
      location: "Pune",
      experience: "5+ years",
      type: "Part-Time",
    },
    {
      id: 6,
      title: "Devops Engineer",
      location: "Pune",
      experience: "5+ years",
      type: "Contract",
    },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.jobType === "" || job.type === filters.jobType) &&
      (filters.jobLocation === "" || job.location === filters.jobLocation) &&
      (filters.jobCategory === "" || job.title.includes(filters.jobCategory))
    );
  });

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Careers"} img={careerHeader} />

      <main id="main">
        <section id="careers" className="careers">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Join Our Team</h2>
              <p>Find a role that suits your passion and skills</p>
            </div>

            {/* Filters */}
            <div className="filters row gy-4 mb-4">
              <div className="col-lg-4">
                <select
                  name="jobType"
                  value={filters.jobType}
                  onChange={handleFilterChange}
                  className="form-select"
                >
                  <option value="">Select Job Type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div className="col-lg-4">
                <select
                  name="jobLocation"
                  value={filters.jobLocation}
                  onChange={handleFilterChange}
                  className="form-select"
                >
                  <option value="">Select Location</option>
                  <option value="Pune">Pune</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  name="jobCategory"
                  value={filters.jobCategory}
                  onChange={handleFilterChange}
                  placeholder="Search by Job Title"
                  className="form-control"
                />
              </div>
            </div>

            {/* Job Cards */}
            <div className="row gy-4">
              {filteredJobs.map((job) => (
                <div key={job.id} className="col-lg-4">
                  <div className="job-card">
                    <h5 className="job-title">{job.title}</h5>
                    <p className="job-location">{job.location}</p>
                    <p className="job-experience">{job.experience}</p>
                    <p className="job-type">{job.type}</p>
                    <a
                      href="/apply-now"
                      className="btn btn-primary mt-3 apply-btn"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Career;
