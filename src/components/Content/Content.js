import React from 'react';
import styles from './Content.scss';
import classNames from 'classnames/bind';
import { Container,Row,Col  } from 'reactstrap';
import main from '../../styles/img/main.mp4';

const cx = classNames.bind(styles);

const Content = ({}) => {

    return (
        <Container fluid={true}>
            <Row className={cx('first-row')}>
                <video autoPlay loop muted id="video-background">
                    <source src = {main} type = "video/mp4"/>
                </video>
            </Row>
        </Container>
    );
};

export default Content;