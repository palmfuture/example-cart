import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';

import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class NavComponent extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            productTotal: parseInt(localStorage.getItem('productTotal'))
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentWillReceiveProps(next) {
        this.setState({
            productTotal: next.productTotal
        });
    }

    renderBadge = () => {
        return (
            <Badge color="danger">{this.state.productTotal}</Badge>
        )
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <Link to='/' replace>
                        <NavbarBrand>
                            Cosmetic Shopping Cart
                    </NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to='/cart'>
                                    <NavLink >
                                        ตะกร้าสินค้า
                                        { this.state.productTotal ? this.renderBadge() : ''}
                                    </NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
