import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import dokdo from '../../Images/High_Res/hd_dokdo2.jpg';
import dokdo1 from '../../Images/High_Res/hd_dokdo3.jpg';
import dokdo2 from '../../Images/High_Res/hd_dokdo4.jpg';
import dokdo5 from '../../Images/High_Res/hd_dokdo5.JPG';
import dokdo6 from '../../Images/High_Res/hd_dokdo6.jpg';

import dokdo10 from '../../Images/High_Res/hd_dokdo10.jpg';
import './Header_Carousel.css';

class Header_Carousel extends Component {
    render() {
        return (
            <Carousel style={{width: "100%"}}>
                <Carousel.Item>
                    <img
                        className='Header-Image'
                        alt="900x500"
                        src={dokdo}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='Header-Image'
                        alt="900x500"
                        src={dokdo1}/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='Header-Image'
                        alt="900x500"
                        src={dokdo2}/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Header_Carousel;
