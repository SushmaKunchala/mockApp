import React from 'react'

function Home() {
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand">Key Education Foundation</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#links">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="links">
                <div className="navbar-nav ms-auto">
                    <a className="nav-link">Home</a>
                    <a className="nav-link">Test Link</a>
                    <a className="nav-link">Profile</a>
                    <a className="nav-link">Queries</a>
                </div>
            </div>
        </div>
    </nav>

    <img src="edu.avif" alt="" width="100%" height="420px"/>

    <div className="text-center description mb-4">
        <h1 className="title mb-4">OUR VISION</h1>
        <p>We are working to transform the school education system in India to improve the learning outcomes of all
            children, especially from low-income communities. To achieve our goal, we provide support and partner with
            organizations working on innovative solutions in education, as well engage with the system to drive
            sustainable and positive impact. We also collaborate with other ecosystem stakeholders to build research and
            create effective proven tools around critical issues. </p>
    </div>

    <div className="modules">
        <div className="card">
            <button className="btn btn-dark"><a href="#"> Modules <i className='fas fa-arrow-right'></i></a></button>
        </div>
    </div>

    <div className="container-fluid footer mt-5">
        <div className="row">
            <div className="col-lg-6">
                <h6 style="color: white;">Key Education Foundation</h6>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-2">
                <a href="#"><i className="fa fa-facebook" style="color: white;"></i></a>
                <a href="#"><i className="fa fa-whatsapp" style="color: white;"></i></a>
                <a href="#"><i className="fa fa-instagram" style="color: white;"></i></a>
                <a href="#"><i className="fa fa-twitter" style="color: white;"></i></a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home;
