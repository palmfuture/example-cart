import { Container, Row, Col } from 'reactstrap';
import React, { Component, Fragment } from 'react';

import Block from '../component/Block';
import Nav from '../component/Nav';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updateCart: this.updateCart.bind(this),
            productTotal: 0
        }
    }

    updateCart = (id) => {
        this.setState({ productTotal: this.state.productTotal + 1 });
    }

    render() {
        const image = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180';
        return (
            <Fragment>
                <Nav product={this.state.productTotal} />
                <Container>
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
            </Fragment>
        )
    }
}
