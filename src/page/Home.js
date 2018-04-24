import { Container, Row, Col, Fade } from 'reactstrap';
import React, { Component, Fragment } from 'react';

import Block from '../component/Block';
import Nav from '../component/Nav';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updateCart: this.updateCart.bind(this),
            productTotal: parseInt(localStorage.getItem('productTotal')),
            products: JSON.parse(localStorage.getItem('products'))
        }
    }

    componentDidMount() {
        const productTotal = parseInt(localStorage.getItem('productTotal'));
        this.setState({ productTotal: productTotal ? productTotal : 0 });
    }

    componentWillReceiveProps(next) {
        const productTotal = parseInt(localStorage.getItem('productTotal'));
        this.setState({ productTotal: productTotal ? productTotal : 0 });
    }

    updateCart = (id, title) => {
        // count product in cart
        this.setState({ productTotal: this.state.productTotal + 1 });
        localStorage.setItem('productTotal', this.state.productTotal + 1);
        // add product to cart
        if (!this.state.products) {
            let product = {
                id,
                name: title,
                amount: 1,
                price: 50
            }
            let products = [];
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));
            this.setState({ products });
            return;
        }
        let index = this.state.products.filter(product => {
            return (product.id === id)
        });
        if (index.length === 0) {
            let product = {
                id,
                name: title,
                amount: 1,
                price: 50
            }
            localStorage.setItem('products', JSON.stringify([...this.state.products, product]));
            this.setState({ products: [...this.state.products, product] });
        } else {
            let product = {
                id,
                name: title,
                amount: index[0].amount + 1,
                price: 50
            }
            let products = this.state.products;
            products[products.findIndex(el => el.id === product.id)] = product;
            localStorage.setItem('products', JSON.stringify(products));
            this.setState({ products: products });
        }
    }

    render() {
        const image = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180';
        return (
            <Fragment>
                <Nav productTotal={this.state.productTotal} />
                <Fade>
                    <Container style={{ paddingTop: '5%' }}>
                        <Row>
                            <Col>
                                <Block updateCart={this.state.updateCart} productId='1' title='แป้ง' subTitle='50 บาท' text='Some quick example text to build on the card title and make up the bulk of the cards content.' image={image} />
                            </Col>
                            <Col>
                                <Block updateCart={this.state.updateCart} productId='2' title='ลิป' subTitle='50 บาท' text='Some quick example text to build on the card title and make up the bulk of the cards content.' image={image} />
                            </Col>
                            <Col>
                                <Block updateCart={this.state.updateCart} productId='3' title='เมือก' subTitle='50 บาท' text='Some quick example text to build on the card title and make up the bulk of the cards content.' image={image} />
                            </Col>
                        </Row>
                    </Container>
                </Fade>
            </Fragment>
        )
    }
}
