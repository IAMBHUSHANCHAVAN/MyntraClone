import React from 'react'
import { Link } from 'react-router-dom'
import Header from './partials/header'
const Homeandliving = () => {
  return (
    <div>
       <Header/> 
     <div className="row">
     <div>
        <h1 className='p-5'>
            nice to see you, come on in
        </h1>
    </div>
    <div className="col-8 border">
    <div className="row container-fluid">
        <div className="col-6">
        <img src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2050.jpg?size=626&ext=jpg&ga=GA1.1.558078751.1682159926&semt=ais" class="img-fluid" alt="..."/>
        </div>
        <div className="col-6">
        <img src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2053.jpg?size=626&ext=jpg&ga=GA1.1.558078751.1682159926&semt=ais" class="img-fluid" alt="..."/>
        </div>
        <div className="col-6">
        <img src="https://img.freepik.com/free-photo/sofa-green-living-room-with-copy-space_43614-905.jpg?size=626&ext=jpg&ga=GA1.1.558078751.1682159926&semt=ais" class="img-fluid" alt="..."/>
        </div>
        <div className="col-6">
        <img src="https://img.freepik.com/free-photo/gray-sofa-white-living-room-with-copy-space_43614-909.jpg?size=626&ext=jpg&ga=GA1.1.558078751.1682159926&semt=ais" class="img-fluid" alt="..."/>
        </div>
        <div className="col-6">
        <img src="https://img.freepik.com/free-photo/dining-area-comfortable-studio-flat-hotel-room_1262-12324.jpg?size=626&ext=jpg&ga=GA1.1.558078751.1682159926&semt=ais" class="img-fluid" alt="..."/>
        </div>
        <div className="col-6">
        <img src="https://img.freepik.com/free-photo/dining-area-comfortable-studio-flat-hotel-room_1262-12324.jpg?size=626&ext=jpg&ga=GA1.1.558078751.1682159926&semt=ais" class="img-fluid" alt="..."/>
        </div>
    </div>
    </div>
    <div className="col-2">
       <p> <a href="http://">lamp</a></p>
       <p> <a href="http://">lights</a></p>
       <p> <a href="http://">candels</a></p>
       <p> <a href="http://">others</a></p>
        
    </div>
    </div> 
<div className='' style={{backgroundColor:"#d4cccb", height:"80vh",marginTop:"5rem"}}>
    <h1 className='p-5'>TRENDS TO TAKE HOME </h1>
    <div className="row ">
    <div className="col-4">
        <img src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2050.jpg?size=626&ext=jpg&ga=GA1.1.558078751.1682159926&semt=ais" class="img-fluid" alt="..."/>
       <h3>WEEDING CHECKLIST</h3>
        </div>
        <div className="col-4">
        <img src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1934.jpg?w=1380&t=st=1688208214~exp=1688208814~hmac=afe82a4ae7f8fe0ad215793a989da8aae6c0e99dfe33b3a4f4881b47094e0199" class="img-fluid" alt="..."/>
        <h3>COLOR OF THE SEASON - WHITE</h3>
        </div>
        <div className="col-4">
        <img src="https://img.freepik.com/free-photo/close-up-woman-painting-clay-pot_23-2148944985.jpg?size=626&ext=jpg&ga=GA1.1.558078751.1682159926&semt=sph" class="img-fluid" alt="..."/>
        <h3>HANDCRAFTED</h3>
        </div>
    </div>
 </div>
    </div>
  )
}

export default Homeandliving
