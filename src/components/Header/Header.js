import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { toggleMobileMenu } from '../../actions';
import Scroll from 'react-scroll-to-element';
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

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
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
                    <NavbarToggler onClick={this.props.onToggleMobileMenu} className="mr-2" className={cx('header-toggleNavbar')} />
                    <Collapse isOpen={!this.props.collapsed} navbar>
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
    }
}


let mapStateToProps = (state) => {

    return {
        collapsed: state.header.collapsed
    };

}

let mapDispatchToProps = (dispatch) => {
    return {
        onToggleMobileMenu: () => dispatch(toggleMobileMenu())
    }
}


Header = connect(mapStateToProps,mapDispatchToProps)(Header);

export default Header;