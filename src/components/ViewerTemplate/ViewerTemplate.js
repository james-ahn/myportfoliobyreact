import React from 'react';
import styles from './ViewerTemplate.scss';
import classNames from 'classnames/bind';
import { Alert } from 'reactstrap';


const cx = classNames.bind(styles);

const ViewerTemplate = ({ menu,viewer}) => (
    <div className={cx('viewer-template')}>
        <div>{menu}</div>

        {/*<header>*/}
            {/*Astronomy Picture of the Day*/}
        {/*</header>*/}
        {/*<div className={cx('viewer-wrapper')}>*/}
             {/*{viewer}*/}
        {/*</div>*/}
        <div>
            <Alert color="primary">
                This is a primary alert — check it out!
            </Alert>
        </div>
    </div>
);

export default ViewerTemplate;