import React from 'react';
import styles from './Content3.scss';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import {
    toggleMobileMenu,
    tooltipJs,
    tooltipVue,
    tooltipVuetify,
    tooltipHtml,
    tooltipCss,
    tooltipCordova,
    tooltipGit,
    compnayJoes,
    compnayLg,
    compnayKyung,
    compnayFinger
} from '../../actions';

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


class Content3 extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
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
                                    <img className={cx('timeline-image')} onMouseOver={this.props.onCompnayJoes} onMouseOut={this.props.onCompnayJoes} src={joes} alt={''} />
                                </li>
                                <li>
                                    <img className={cx('timeline-image')} onMouseOver={this.props.onCompnayLg} onMouseOut={this.props.onCompnayLg} src={lg} alt={''}/>
                                </li>
                                <li>
                                    <img className={cx('timeline-image')} onMouseOver={this.props.onCompnayKyung} onMouseOut={this.props.onCompnayKyung} src={bank} alt={''} />
                                </li>
                                <li>
                                    <img className={cx('timeline-image')} onMouseOver={this.props.onCompnayFinger} onMouseOut={this.props.onCompnayFinger} src={finger} alt={''} />
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="9">
                        <div style={{display: this.props.showJoes ? 'block' : 'none' }}>
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

                            <Tooltip placement="bottom" isOpen={this.props.toolTipJS} target="toolTipJS" toggle={this.props.onTooltipJs}>JavaScript</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipVue} target="toolTipVue" toggle={this.props.onTooltipVue}>Vue JS</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipVuetify} target="toolTipVuetify" toggle={this.props.onTooltipVuetify}>Vuetify JS</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipHtml} target="toolTipHtml" toggle={this.props.onTooltipHtml}>HTML 5</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipCss} target="toolTipCss" toggle={this.props.onTooltipCss}>CSS 3</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipCordova} target="toolTipCordova" toggle={this.props.onTooltipCordova}>Cordova</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipGit} target="toolTipGit" toggle={this.props.onTooltipGit}>Git</Tooltip>
                        </div>
                        <div style={{display: this.props.showLG ? 'block' : 'none' }}>
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

                            <Tooltip placement="bottom" isOpen={this.props.toolTipJS} target="toolTipJS_LG" toggle={this.props.onTooltipJs}>JavaScript</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipVue} target="toolTipVue_LG" toggle={this.props.onTooltipVue}>Angular JS</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipHtml} target="toolTipHtml_LG" toggle={this.props.onTooltipHtml}>HTML 5</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipCss} target="toolTipCss_LG" toggle={this.props.onTooltipCss}>CSS 3</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipCordova} target="toolTipCordova_LG" toggle={this.props.onTooltipCordova}>Cordova</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipGit} target="toolTipNode_LG" toggle={this.props.onTooltipGit}>Node JS</Tooltip>
                        </div>
                        <div style={{display: this.props.showKyung ? 'block' : 'none' }}>
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
                            <Tooltip placement="bottom" isOpen={this.props.toolTipVue} target="toolTipVue_Kyung" toggle={this.props.onTooltipVue}>Java</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipJS} target="toolTipJS_Kyung" toggle={this.props.onTooltipJs}>JavaScript</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipHtml} target="toolTipHtml_Kyung" toggle={this.props.onTooltipHtml}>HTML 5</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipCss} target="toolTipCss_Kyung" toggle={this.props.onTooltipCss}>CSS 3</Tooltip>
                        </div>
                        <div style={{display: this.props.showFinger ? 'block' : 'none' }}>
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
                            <Tooltip placement="bottom" isOpen={this.props.toolTipVue} target="toolTipVue_Finger" toggle={this.props.onTooltipVue}>Java</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipJS} target="toolTipJS_Finger" toggle={this.props.onTooltipJs}>JavaScript</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipCordova} target="toolTipJquery_Finger" toggle={this.props.onTooltipCordova}>jQuery</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipHtml} target="toolTipHtml_Finger" toggle={this.props.onTooltipHtml}>HTML 5</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.props.toolTipCss} target="toolTipCss_Finger" toggle={this.props.onTooltipCss}>CSS 3</Tooltip>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

let mapStateToProps = (state) => {

    return {
        toolTipJS: state.content3.toolTipJS,
        toolTipVue: state.content3.toolTipVue,
        toolTipVuetify: state.content3.toolTipVuetify,
        toolTipHtml: state.content3.toolTipHtml,
        toolTipCss: state.content3.toolTipCss,
        toolTipCordova: state.content3.toolTipCordova,
        toolTipGit: state.content3.toolTipGit,
        showJoes:state.content3.showJoes,
        showLG:state.content3.showLG,
        showKyung:state.content3.showKyung,
        showFinger:state.content3.showFinger
    };

}

let mapDispatchToProps = (dispatch) => {
    return {
        onToggleMobileMenu: () => dispatch(toggleMobileMenu()),
        onTooltipJs: () => dispatch(tooltipJs()),
        onTooltipVue: () => dispatch(tooltipVue()),
        onTooltipVuetify: () => dispatch(tooltipVuetify()),
        onTooltipHtml: () => dispatch(tooltipHtml()),
        onTooltipCss: () => dispatch(tooltipCss()),
        onTooltipCordova: () => dispatch(tooltipCordova()),
        onTooltipGit: () => dispatch(tooltipGit()),
        onCompnayJoes: () => dispatch(compnayJoes()),
        onCompnayLg: () => dispatch(compnayLg()),
        onCompnayKyung: () => dispatch(compnayKyung()),
        onCompnayFinger: () => dispatch(compnayFinger())
    }
}


Content3 = connect(mapStateToProps,mapDispatchToProps)(Content3);


export default Content3;
