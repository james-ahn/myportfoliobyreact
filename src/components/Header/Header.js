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


const Header = ({toggleNavbar, collapsed,Scroll}) => {

    return (

        <div className={cx('header-template')}>
            {/*web*/}
            <Navbar color="faded" light expand="md" className={cx('hidden-web')}>
                <Scroll type="id" element="home" offset={-50}>
                    <NavbarBrand>James Ahn</NavbarBrand>
                </Scroll>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Scroll type="id" element="skills" offset={-50}>
                            <NavLink>SKILLS</NavLink>
                        </Scroll>
                    </NavItem>
                    <NavItem>
                        <Scroll type="id" element="about" offset={-50}>
                            <NavLink>ABOUT</NavLink>
                        </Scroll>
                    </NavItem>
                    <NavItem>
                        <Scroll type="id" element="contact" offset={-50}>
                            <NavLink>CONTACT</NavLink>
                        </Scroll>
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
                            <Scroll type="id" element="skills" offset={-50}>
                                <NavLink>SKILLS</NavLink>
                            </Scroll>
                        </NavItem>
                        <NavItem>
                            <Scroll type="id" element="about" offset={-50}>
                                <NavLink>ABOUT</NavLink>
                            </Scroll>
                        </NavItem>
                        <NavItem>
                            <Scroll type="id" element="contact" offset={-50}>
                                <NavLink>CONTACT</NavLink>
                            </Scroll>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;