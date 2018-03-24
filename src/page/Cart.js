import { Container, Row, Col, Table, Fade, NavItem, Nav, NavLink, Button } from 'reactstrap';
import React, { Component, Fragment } from 'react';

import Navbar from '../component/Nav';

export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: JSON.parse(localStorage.getItem('products'))
        }
    }

    renderBody = () => {
        return this.state.products.map(product => {
            return (
                <tr>
                    <th scope="row">{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.amount}</td>
                </tr>
            )
        })
    }

    handleClick = () => {
        localStorage.setItem('productTotal', 0);
        localStorage.setItem('products', JSON.stringify([]));
        this.setState({ products: JSON.parse(localStorage.getItem('products')) })
    }

    render() {
        return (
            <Fragment>
                <Navbar />
                <Fade>
                    <Container style={{ paddingTop: '5%' }}>
                        <Row>
                            <h1 style={{ paddingBottom: '2%' }} >รายการสินค้า</h1>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>ลำดับ</th>
                                        <th>รายการ</th>
                                        <th>ราคาต่อหน่วย</th>
                                        <th>จำนวน</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderBody()}
                                </tbody>
                            </Table>
                        </Row>
                        <Row>
                            <Button outline color="danger" size="sm" onClick={() => this.handleClick()} >ล้างตะกร้าสินค้า</Button>
                        </Row>
                    </Container>
                </Fade>
            </Fragment>
        )
    }
}
