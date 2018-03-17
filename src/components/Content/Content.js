import React from 'react';
import styles from './Content.scss';
import classNames from 'classnames/bind';
import main from '../../styles/img/main.ogv';
import post from '../../styles/img/post.png';

import {
    Container,
    Row
} from 'reactstrap';


const cx = classNames.bind(styles);

const Content = ({Scroll}) => {

    return (
        <Container fluid={true} id="home">
            <Row className={cx('content-row')}>
                <video autoPlay loop muted className={cx('video-background')} poster={post}>
                    <source src = {main} type = "video/ogg"/>
                </video>
                <div className={cx('content-group')} >
                    <div className={cx('content-text')}>
                        <h1>James Ahn</h1>
                        <p>Web Application Developer</p>
                    </div>
                    <Scroll type="id" element="skills" offset={-50}>
                        <button className={cx('content-button')}>More</button>
                    </Scroll>

                </div>
            </Row>
        </Container>
    );
};

export default Content;