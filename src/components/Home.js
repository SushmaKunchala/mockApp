import React from 'react'

import Header from './Header';
function Home(props) {
    console.log(props.status);
  return (
     
<div>
     <Header />
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
</div>
    
  )
}

export default Home;
