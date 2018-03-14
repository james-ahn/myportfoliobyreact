import React from 'react';
import styles from './Content2.scss';
import classNames from 'classnames/bind';

import {
    Container,
    Row,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';


const cx = classNames.bind(styles);

const Content2 = ({}) => {

    return (
        <section>
            <Row className={cx('second-row')}>
            </Row>
        </section>
    );
};

export default Content2;