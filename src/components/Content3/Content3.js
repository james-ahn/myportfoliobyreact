import React from 'react';
import styles from './Content3.scss';
import classNames from 'classnames/bind';

import {
    Container,
    Row,
    Media,
    Col
} from 'reactstrap';

const cx = classNames.bind(styles);

const Content2 = ({}) => {

    return (
            <Container fluid={true} id="skills" className={cx('contents3-row')}>
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

            </Container>

    );
};

export default Content2;