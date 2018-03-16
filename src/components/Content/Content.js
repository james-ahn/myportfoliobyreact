import React from 'react';
import styles from './Content.scss';
import classNames from 'classnames/bind';
import main from '../../styles/img/main.mp4';

import {
    Container,
    Row,
} from 'reactstrap';


const cx = classNames.bind(styles);

const Content = ({}) => {

    return (
        <Container fluid={true}>
            <Row className={cx('content-row')}>
                <video autoPlay loop muted className={cx('video-background')}>
                    <source src = {main} type = "video/mp4"/>
                </video>
                <div className={cx('content-group')} >
                    <div className={cx('content-text')}>
                        <h1>James Ahn</h1>
                        <p>Web Application Developer</p>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Content;