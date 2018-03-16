import React from 'react';
import styles from './Content4.scss';
import classNames from 'classnames/bind';
/*images*/
import james from '../../styles/img/james.jpeg';
//icons
import TiSocialLinkedinCircular from 'react-icons/lib/ti/social-linkedin-circular';
import TiSocialGithubCircular from 'react-icons/lib/ti/social-github-circular';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const cx = classNames.bind(styles);

const Content4 = ({}) => {

    return (
            <Container fluid={true} id="contact" className={cx('contents4-row')}>
                <Row>
                    <Col>
                        <div className={cx('contents4-head')}>CONTACT ME</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={cx('contents4-subHead')}>I will be a good candidate</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img className={cx('timeline-image')} src={james}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{textAlign:'center'}}>
                            <h3 style={{fontWeight:'bold'}}>James Ahn</h3>
                            <h5>Web Application developer</h5>
                            <h5 className={cx('contents4-email')}>jamesahn.dev@gmail.com</h5>
                            <a href="https://www.linkedin.com/in/james-ahn-70b95b93/"><TiSocialLinkedinCircular className={cx('content4-icons')}/></a>
                            <a href="https://github.com/james-ahn"><TiSocialGithubCircular className={cx('content4-icons')}/></a>
                        </div>
                    </Col>
                </Row>
            </Container>

    );
};

export default Content4;