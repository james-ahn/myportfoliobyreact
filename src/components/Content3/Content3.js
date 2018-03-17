import React from 'react';
import styles from './Content3.scss';
import classNames from 'classnames/bind';

// company logo
import joes from '../../styles/img/6joes.png';
import lg from '../../styles/img/lg.png';
import bank from '../../styles/img/bank_logo.jpg';
import finger from '../../styles/img/finger.png';


/*skills*/
import angular from '../../styles/img/angular.png';
import cordova from '../../styles/img/cordova.jpg';
import css from '../../styles/img/css.png';
import git from '../../styles/img/git.png';
import html from '../../styles/img/html.png';
import java from '../../styles/img/java.png';
import jquery from '../../styles/img/jquery.png';
import node from '../../styles/img/node.png';
import js from '../../styles/img/js.png';
import vue from '../../styles/img/vue.png';
import vuetify from '../../styles/img/vuetify.png';


//icons
import MdBusiness from 'react-icons/lib/md/business';
import TiSocialLinkedinCircular from 'react-icons/lib/ti/social-linkedin-circular';
import TiSocialGithubCircular from 'react-icons/lib/ti/social-github-circular';


import {
    Container,
    Row,
    Jumbotron,
    Col,
    Tooltip
} from 'reactstrap';

const cx = classNames.bind(styles);

const Content3 = ({
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
                      toolTipGit,
                      setShowJoes,
                      setShowLG,
                      setShowKyung,
                      setShowFinger,
                      showJoes,
                      showLG,
                      showKyung,
                      showFinger

}) => {

    return (
            <Container fluid={true} id="about" className={cx('contents3-row')}>
                <Row>
                    <Col xs="3"><MdBusiness className={cx('contents3-head-left')} /></Col>
                    <Col xs="4">
                        <div className={cx('contents3-head')}> EXPERIENCE</div>
                    </Col>
                    <Col xs="5">
                        <a href="https://github.com/james-ahn"><TiSocialGithubCircular className={cx('contents3-head-icons')}/></a>
                        <a href="https://www.linkedin.com/in/james-ahn-70b95b93/"><TiSocialLinkedinCircular className={cx('contents3-head-icons')}/></a>
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <div>
                            <ul className={cx('timeline')}>
                                <li>
                                    <img className={cx('timeline-image')} onMouseOver={setShowJoes} onMouseOut={setShowJoes} src={joes} alt={''} />
                                </li>
                                <li>
                                    <img className={cx('timeline-image')} onMouseOver={setShowLG} onMouseOut={setShowLG} src={lg} alt={''}/>
                                </li>
                                <li>
                                    <img className={cx('timeline-image')} onMouseOver={setShowKyung} onMouseOut={setShowKyung} src={bank} alt={''} />
                                </li>
                                <li>
                                    <img className={cx('timeline-image')} onMouseOver={setShowFinger} onMouseOut={setShowFinger} src={finger} alt={''} />
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="9">
                        <div style={{display: showJoes ? 'block' : 'none' }}>
                            <Jumbotron>
                                <h1 className="display-5">Web Application Developer</h1>
                                <h1 className="display-6">6Joe's Software Inc.</h1>
                                <p className="lead">Oct 2017 - Present</p>
                                <h5 className="lead">Halifax, Canada</h5>
                                <hr/>
                                <h5>Developing the 6Joe's fantasy sports gaming platform for amateur Golf players and enthusiasts.</h5>
                                <div style={{marginTop: '34px'}}>
                                <img className={cx('skill-image')} src={js} id="toolTipJS" alt={''}/>
                                <img className={cx('skill-image')} src={vue} id="toolTipVue" alt={''}/>
                                <img className={cx('skill-image')} src={vuetify} id="toolTipVuetify" alt={''}/>
                                <img className={cx('skill-image')} src={html} id="toolTipHtml" alt={''}/>
                                <img className={cx('skill-image')} src={css} id="toolTipCss" alt={''}/>
                                <img className={cx('skill-image')} src={cordova} id="toolTipCordova" alt={''}/>
                                <img className={cx('skill-image')} src={git} id="toolTipGit" alt={''}/>
                                </div>
                            </Jumbotron>

                            <Tooltip placement="bottom" isOpen={toolTipJS} target="toolTipJS" toggle={setTooltipJS}>JavaScript</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipVue} target="toolTipVue" toggle={setTooltipVue}>Vue JS</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipVuetify} target="toolTipVuetify" toggle={setTooltipVuetify}>Vuetify JS</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipHtml} target="toolTipHtml" toggle={setTooltipHtml}>HTML 5</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipCss} target="toolTipCss" toggle={setTooltipCss}>CSS 3</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipCordova} target="toolTipCordova" toggle={setTooltipCordova}>Cordova</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipGit} target="toolTipGit" toggle={setTooltipGit}>Git</Tooltip>
                        </div>
                        <div style={{display: showLG ? 'block' : 'none' }}>
                            <Jumbotron>
                                <h1 className="display-5">Web Application Developer</h1>
                                <h1 className="display-6">LG Electronics</h1>
                                <p className="lead">Aug 2015 - Jan 2016</p>
                                <h5 className="lead">Changwon, South Korea</h5>
                                <hr/>
                                <h5>Developed and evolved the LG Smart Thinq hybrid mobile application. Specifically responsible for features that allowed controlling of a robot cleaner via the application.</h5>
                                <div style={{marginTop: '34px'}}>
                                    <img className={cx('skill-image')} src={js} id="toolTipJS_LG" alt={''}/>
                                    <img className={cx('skill-image')} src={angular} id="toolTipVue_LG" alt={''}/>
                                    <img className={cx('skill-image')} src={html} id="toolTipHtml_LG" alt={''}/>
                                    <img className={cx('skill-image')} src={css} id="toolTipCss_LG" alt={''}/>
                                    <img className={cx('skill-image')} src={cordova} id="toolTipCordova_LG" alt={''}/>
                                    <img className={cx('skill-image')} src={node} id="toolTipNode_LG" alt={''}/>

                                </div>
                            </Jumbotron>

                            <Tooltip placement="bottom" isOpen={toolTipJS} target="toolTipJS_LG" toggle={setTooltipJS}>JavaScript</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipVue} target="toolTipVue_LG" toggle={setTooltipVue}>Angular JS</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipHtml} target="toolTipHtml_LG" toggle={setTooltipHtml}>HTML 5</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipCss} target="toolTipCss_LG" toggle={setTooltipCss}>CSS 3</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipCordova} target="toolTipCordova_LG" toggle={setTooltipCordova}>Cordova</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipGit} target="toolTipNode_LG" toggle={setTooltipGit}>Node JS</Tooltip>
                        </div>
                        <div style={{display: showKyung ? 'block' : 'none' }}>
                            <Jumbotron>
                                <h1 className="display-5">Web Developer</h1>
                                <h1 className="display-6">Kyongnam Bank</h1>
                                <p className="lead">Oct 2014 - Feb 2015</p>
                                <h5 className="lead">Seoul, South Korea</h5>
                                <hr/>
                                <h5>Developed and evolved an Internet banking system for the Kyongnam Bank.</h5>
                                <div style={{marginTop: '34px'}}>
                                    <img className={cx('skill-image')} src={java} id="toolTipVue_Kyung" alt={''}/>
                                    <img className={cx('skill-image')} src={js} id="toolTipJS_Kyung" alt={''}/>
                                    <img className={cx('skill-image')} src={html} id="toolTipHtml_Kyung" alt={''}/>
                                    <img className={cx('skill-image')} src={css} id="toolTipCss_Kyung" alt={''}/>

                                </div>
                            </Jumbotron>
                            <Tooltip placement="bottom" isOpen={toolTipVue} target="toolTipJS_Kyung" toggle={setTooltipVue}>Java</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipJS} target="toolTipVue_Kyung" toggle={setTooltipJS}>JavaScript</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipHtml} target="toolTipHtml_Kyung" toggle={setTooltipHtml}>HTML 5</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipCss} target="toolTipCss_Kyung" toggle={setTooltipCss}>CSS 3</Tooltip>
                        </div>
                        <div style={{display: showFinger ? 'block' : 'none' }}>
                            <Jumbotron>
                                <h1 className="display-5">Web Developer</h1>
                                <h1 className="display-6">Finger Inc</h1>
                                <p className="lead">Aug 2012 - Mar 2014</p>
                                <h5 className="lead">Seoul, South Korea</h5>
                                <hr/>
                                <h5>- A cross-platform banking web/mobile application called KB Star Banking 3.0</h5>
                                <h5>- An administrative website for the IBK Bank</h5>
                                <h5>- A mobile-first approached website for the ShinHan Bank</h5>

                                <div style={{marginTop: '34px'}}>
                                    <img className={cx('skill-image')} src={java} id="toolTipVue_Finger" alt={''}/>
                                    <img className={cx('skill-image')} src={js} id="toolTipJS_Finger" alt={''}/>
                                    <img className={cx('skill-image')} src={jquery} id="toolTipJquery_Finger" alt={''}/>
                                    <img className={cx('skill-image')} src={html} id="toolTipHtml_Finger" alt={''}/>
                                    <img className={cx('skill-image')} src={css} id="toolTipCss_Finger" alt={''}/>
                                </div>
                            </Jumbotron>
                            <Tooltip placement="bottom" isOpen={toolTipVue} target="toolTipVue_Finger" toggle={setTooltipVue}>Java</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipJS} target="toolTipJS_Finger" toggle={setTooltipJS}>JavaScript</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipCordova} target="toolTipJquery_Finger" toggle={setTooltipCordova}>jQuery</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipHtml} target="toolTipHtml_Finger" toggle={setTooltipHtml}>HTML 5</Tooltip>
                            <Tooltip placement="bottom" isOpen={toolTipCss} target="toolTipCss_Finger" toggle={setTooltipCss}>CSS 3</Tooltip>
                        </div>
                    </Col>
                </Row>
            </Container>

    );
};

export default Content3;
