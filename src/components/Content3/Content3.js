import React from 'react';
import styles from './Content3.scss';
import classNames from 'classnames/bind';

import joes from '../../styles/img/6joes.png';


/*skills*/
import angular from '../../styles/img/angular.png';
import bootstrap from '../../styles/img/bootstrap.png';
import cordova from '../../styles/img/cordova.jpg';
import css from '../../styles/img/css.png';
import git from '../../styles/img/git.png';
import html from '../../styles/img/html.png';
import ionic from '../../styles/img/ionic.png';
import java from '../../styles/img/java.png';
import jquery from '../../styles/img/jquery.png';
import node from '../../styles/img/node.png';
import js from '../../styles/img/js.png';
import vue from '../../styles/img/vue.png';
import react from '../../styles/img/react.png';
import vuetify from '../../styles/img/vuetify.png';

import {
    Container,
    Row,
    Fade,
    Button,
    Jumbotron,
    Col,
    Tooltip
} from 'reactstrap';

const cx = classNames.bind(styles);

const Content3 = ({
                      toggle,
                      fadeIn,
                      setTooltipJS,
                      setTooltipVue,
                      setTooltipVuetify,
                      setTooltipHtml,
                      setTooltipCss,
                      setTooltipCordova,
                      setTooltipGit,
                      toolTipJS,
                      toolTipVue,
                      toolTipVuetify,
                      toolTipHtml,
                      toolTipCss,
                      toolTipCordova,
                      toolTipGit
}) => {

    return (
            <Container fluid={true} id="skills" className={cx('contents3-row')}>
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="9">
                        <div className={cx('contents3-head')}> EXPERIENCE</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <div>
                            {/*<Button id="Popover1" onMouseOver={toggleMenu} onMouseOut={toggleMenu} onClick={toggle}>*/}
                            <ul className={cx('timeline')}>
                                <li>
                                    <div className={cx('timeline-image')} onMouseOver={toggle} >
                                        <img className="rounded-circle img-fluid" src={joes} />
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('timeline-image')} >
                                        <img className="rounded-circle img-fluid" src={react} />
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('timeline-image')} >
                                        <img className="rounded-circle img-fluid" src={react} />
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('timeline-image')} >
                                        <img className="rounded-circle img-fluid" src={react} />
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('timeline-image')} >
                                        <img className="rounded-circle img-fluid" src={react} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="9">
                        <div>
                            {/*<Fade in={fadeIn} tag="h5" className="mt-3">*/}
                            <Fade tag="h5" className="mt-3">

                                <Jumbotron>
                                    <h1 className="display-5">Web Application Developer</h1>
                                    <h1 className="display-6">6Joe's Software Inc.</h1>
                                    <p className="lead">Oct 2017 - Present</p>
                                    <p className="lead">Halifax, Canada</p>
                                    <hr/>
                                    <p>Developing the 6Joe's fantasy sports gaming platform for amateur Golf players and enthusiasts.</p>
                                    <img className={cx('skill-image-first')} src={js} id="toolTipJS"/>
                                    <img className={cx('skill-image')} src={vue} id="toolTipVue"/>
                                    <img className={cx('skill-image')} src={vuetify} id="toolTipVuetify"/>
                                    <img className={cx('skill-image')} src={html} id="toolTipHtml"/>
                                    <img className={cx('skill-image')} src={css} id="toolTipCss"/>
                                    <img className={cx('skill-image')} src={cordova} id="toolTipCordova"/>
                                    <img className={cx('skill-image')} src={git} id="toolTipGit"/>
                                </Jumbotron>

                                <Tooltip placement="bottom" isOpen={toolTipJS} target="toolTipJS" toggle={setTooltipJS}>
                                    JavaScript
                                </Tooltip>
                                <Tooltip placement="bottom" isOpen={toolTipVue} target="toolTipVue" toggle={setTooltipVue}>
                                    Vue JS
                                </Tooltip>
                                <Tooltip placement="bottom" isOpen={toolTipVuetify} target="toolTipVuetify" toggle={setTooltipVuetify}>
                                    Vuetify JS
                                </Tooltip>
                                <Tooltip placement="bottom" isOpen={toolTipHtml} target="toolTipHtml" toggle={setTooltipHtml}>
                                    HTML 5
                                </Tooltip>
                                <Tooltip placement="bottom" isOpen={toolTipCss} target="toolTipCss" toggle={setTooltipCss}>
                                    CSS 3
                                </Tooltip>
                                <Tooltip placement="bottom" isOpen={toolTipCordova} target="toolTipCordova" toggle={setTooltipCordova}>
                                    Cordova
                                </Tooltip>
                                <Tooltip placement="bottom" isOpen={toolTipGit} target="toolTipGit" toggle={setTooltipGit}>
                                    Git
                                </Tooltip>

                            </Fade>
                        </div>
                    </Col>
                </Row>
            </Container>

    );
};

export default Content3;
