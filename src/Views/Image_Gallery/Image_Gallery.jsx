import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

import dokdo from '../../Images/000.jpg';
import dokdo1 from '../../Images/dok.jpg';
import dokdo2 from '../../Images/독도1.jpg';
import dokdo3 from '../../Images/독도2.jpg';
import dokdo4 from '../../Images/독도3.jpg';
import dokdo5 from '../../Images/독도4.jpg';
import dokdo6 from '../../Images/독도5.jpg';
import dokdo7 from '../../Images/dokdo_1.jpg';
import dokdo9 from '../../Images/dokdo_2.jpg';
import dokdo8 from '../../Images/dokdo.jpg';
import dokdo10 from '../../Images/dokdo_dogs.jpg';
import dokdo11 from '../../Images/images.jpg';
import dokdo12 from '../../Images/nature_dokdo.jpg';
import dokdo13 from '../../Images/nature_dokdo1.jpg';
import dokdo14 from '../../Images/images.jpg';
import './Image_Gallery.css';
class Image_Gallery extends Component {
    render() {
        return (
            <div
                className='container Image-Gallery-Section'
                style={{
                background: 'red'
            }}>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo2} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo3} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo4} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo5} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo6} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo7} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo8} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo9} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo10} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="Image-Wrapper">
                            <img src={dokdo11} alt=""/>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Image_Gallery;