import React from 'react';
import styles from './Content.scss';
import classNames from 'classnames/bind';
import { Alert } from 'reactstrap';

const cx = classNames.bind(styles);

const Content = ({mediaType, url}) => {

    return (
        <div>
            <Alert color="primary">
                This is a primary alert — check it out!
            </Alert>
        </div>
    );
};

export default Content;