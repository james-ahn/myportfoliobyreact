import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const cx = classNames.bind(styles);


const Header = ({toggleNavbar, collapsed}) => {

    return (

        <div className={cx('header-template')}>
            {/*web*/}
            <Navbar color="faded" light expand="md" className={cx('hidden-web')}>
                <NavbarBrand href="/">James Ahn</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#skills">SKILLS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#about">ABOUT</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact">CONTACT</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

            {/*mobile*/}
            <Navbar color="faded" light className={cx('hidden-mobile')}>
                <NavbarBrand href="/">James Ahn</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" className={cx('header-toggleNavbar')} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#skills">SKILLS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">CONTACT</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;