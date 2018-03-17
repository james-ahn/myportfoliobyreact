import React from 'react';
import styles from './Content2.scss';
import classNames from 'classnames/bind';
/*images*/
import angular from '../../styles/img/angular.png';
import bootstrap from '../../styles/img/bootstrap.png';
import cordova from '../../styles/img/cordova.jpg';
import css from '../../styles/img/css.png';
import git from '../../styles/img/git.png';
import html from '../../styles/img/html.png';
import ionic from '../../styles/img/ionic.png';
import java from '../../styles/img/java.png';
import jquery from '../../styles/img/jquery.png';
import js from '../../styles/img/js.png';
import node from '../../styles/img/node.png';
import vue from '../../styles/img/vue.png';
import react from '../../styles/img/react.png';
import vuetify from '../../styles/img/vuetify.png';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

const cx = classNames.bind(styles);

const Content2 = ({scroll}) => {

    return (
            <Container fluid={true} id="skills" className={cx('contents2-row')}>
                <Row>
                    <Col >
                        <div className={cx('contents2-head')}> FEATURED SKILLS</div>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <div className={cx('contents2-subHead')}>  I like the JavaScript and all things web</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={js} alt="js"/>
                        <p>JavaScript</p>
                    </Col>
                    <Col>
                        <img src={html} alt="html"/>
                        <p>HTML 5</p>
                    </Col>
                    <Col>
                        <img src={css} alt="css"/>
                        <p>CSS 3</p>
                    </Col>
                    <Col>
                        <img src={vue} alt="vue"/>
                        <p>Vue</p>
                    </Col>
                    <Col>
                        <img src={react} alt="react"/>
                        <p>React</p>
                    </Col>
                    <Col>
                        <img src={angular} alt="angular"/>
                        <p>Angular</p>
                    </Col>
                    <Col>
                        <img src={jquery} alt="jquery"/>
                        <p>jQuery</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src={node} alt="node"/>
                        <p>Node</p>
                    </Col>
                    <Col>
                        <img src={cordova} alt="cordova"/>
                        <p>Cordova</p>
                    </Col>
                    <Col>
                        <img src={ionic} alt="ionic"/>
                        <p>Ionic</p>
                    </Col>
                    <Col>
                        <img src={git} alt="git"/>
                        <p>Git</p>
                    </Col>
                    <Col>
                        <img src={java} alt="java"/>
                        <p>Java</p>
                    </Col>
                    <Col>
                        <img src={bootstrap} alt="bootstrap"/>
                        <p>Bootstrap</p>
                    </Col>
                    <Col>
                        <img src={vuetify} alt="vuetify"/>
                        <p>Vuetify</p>
                    </Col>
                </Row>
            </Container>

    );
};

export default Content2;