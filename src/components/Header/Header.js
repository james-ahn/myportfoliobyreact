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


const Header = ({isMobile, toggleNavbar, collapsed}) => {

    return (

        <div className={cx('header-template')}>
            {/*web*/}
            <Navbar color="faded" light expand="md" className={isMobile ? cx('hidden'):''}>
                <NavbarBrand href="/">James Ahn</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="">ABOUT</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">CAREER</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">CONTACT</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

            {/*mobile*/}
            <Navbar color="faded" light className={isMobile ? '':cx('hidden')}>
                <NavbarBrand href="/" className="mr-auto">James Ahn</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" className={cx('header-toggleNavbar')} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">CAREER</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">CONTACT</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;