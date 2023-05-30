import React from 'react';
import { ice, zut5, zict1} from './imports';
import './brand.css';

const Brand = () =>{
    return(
        <div className="zictc__brands section__padding">
            <div className="zictc__brands-container">
                <div className="zictc__brands-container__main">
                    <a href="#">
                        <img src={ice} className='zictc__brands-container__main-img' alt="ice one" />
                        <div className="zictc__brands-container__main-text">
                            <h3>Smart Center</h3>
                            <p>The most advanced  ICT training center in Zambia</p>
                        </div>
                    </a>
                </div>
                <div className="zictc__blog-container__smaller">
                    <div className='zictc__blog-container__smaller-inner'>
                        <a href="#">
                            <img src={zut5} className='zictc__brands-container__main-img' alt="ice one" />
                            <div className="zictc__brands-container__smaller-text">
                                <h3>Our Programs</h3>
                                <p>View the list of all programs offered at our university</p>
                            </div>
                        </a>
                    </div>

                    <div className='zictc__blog-container__smaller-inner'>
                        <a href="#">
                            <img src={zict1} className='zictc__brands-container__main-img' alt="ice one" />
                            <div className="zictc__brands-container__smaller-text">
                                <h3>Explore Our Campus</h3>
                                <p>Take a tour around our school and see the beauty</p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Brand;