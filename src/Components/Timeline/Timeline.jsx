import React, {Component} from 'react';
import './Timeline.css';
import timeline1 from '../../Images/history/삼국사기(AD505).jpg';
import timeline2 from '../../Images/history/세종실록(1454)a.jpg';
class Timeline extends Component {
    state = {
        open: false
    }

    timelineHandler = () => {
        console.log("you click me??")
    }

    render() {
        return (
            <div className="container timeline-section">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="text-center">Dok-do's Timeline</h3>
                        <p>
                           Dokdo was first discovered, where Shilla Dynasty (now Korea) claimed ownership of it since AD 502. Japan's, far-right (imperialist), are falsely claiming it as their land because Japan colonized Korea during World War II, which was returned to Korea with Japan's defeat in the war. 
                           This timeline is meant to show the major historical events in a subjective manner. (Includes evidence provided by Korea and Japan)  
                        </p>
                        <ul className="timeline">
                            <li>
                                <div className="timeline-image">
                                    <img
                                        className="img-circle img-responsive"
                                        src={timeline1}
                                        alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>AD 512 </h4>
                                        <h4 className="subheading">History of Three Kingdoms (삼국사기) </h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            Korean (then Shilla) conquers and takes ownership of Dokdo (then Wu-San Gook). 
                                        </p>
                                    </div>
                                </div>
                                <div className="line"></div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img
                                        className="img-circle img-responsive"
                                        src={timeline2}
                                        alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Step Two</h4>
                                        <h4 className="subheading">Subtitle</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                                <div className="line"></div>
                            </li>
                            <li>
                                <div className="timeline-image">
                                    <img
                                        className="img-circle img-responsive"
                                        src="http://lorempixel.com/250/250/cats/3"
                                        alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>Step Three</h4>
                                        <h4 className="subheading">Subtitle</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                                <div className="line"></div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img
                                        className="img-circle img-responsive"
                                        src="http://lorempixel.com/250/250/cats/4"
                                        alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Step Three</h4>
                                        <h4 className="subheading">Subtitle</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                                <div className="line"></div>
                            </li>
                            <li>
                                <div className="timeline-image">
                                    <img
                                        className="img-circle img-responsive"
                                        src="http://lorempixel.com/250/250/cats/5"
                                        alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Bonus Step</h4>
                                        <h4 className="subheading">Subtitle</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline;