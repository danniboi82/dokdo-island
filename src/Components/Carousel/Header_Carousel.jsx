import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import dokdo from '../../Images/High_Res/hd_dokdo2.jpg';
import dokdo1 from '../../Images/High_Res/hd_dokdo3.jpg';
import dokdo2 from '../../Images/High_Res/hd_dokdo4.jpg';
import dokdo5 from '../../Images/High_Res/hd_dokdo5.JPG';
import dokdo6 from '../../Images/High_Res/hd_dokdo6.jpg';

import dokdo10 from '../../Images/High_Res/hd_dokdo10.jpg';
import Fade from 'react-reveal/Fade';
import './Header_Carousel.css';

class Header_Carousel extends Component {
    render() {
        return (
            <Carousel interval={null} style={{
                width: "100%"
            }}>
                <Carousel.Item>
                    <img className='Header-Image' alt="900x500" src={dokdo}/>
                    <Fade top>
                        <Carousel.Caption className='Header-Content'>
                            <h2 className='Header-Title'>Dokdo Island on a Clear day can be seen from Korea</h2>
                            <p className='Header-Text'></p>
                        </Carousel.Caption>
                    </Fade>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='Header-Image' alt="900x500" src={dokdo1}/>
                    <Fade top>
                        <Carousel.Caption className='Header-Content'>
                            <h2 className='Header-Title'>A part of Korea since AD 512</h2>
                            <p className='Header-Text'></p>
                        </Carousel.Caption>
                    </Fade>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='Header-Image' alt="900x500" src={dokdo2}/>
                    <Fade top>
                        <Carousel.Caption className='Header-Content'>
                            <h2 className='Header-Title'>Japan's fallacious story in claiming ownership since WW2...
                            </h2>
                            <p className='Header-Text'></p>
                        </Carousel.Caption>
                    </Fade>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Header_Carousel;
