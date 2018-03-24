import React, { Component } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class BlockComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.productId,
            image: this.props.image,
            title: this.props.title,
            subTitle: this.props.subTitle,
            text: this.props.text,
            button: 'ใส่ตะกร้า'
        }
    }

    componentWillReceiveProps(next) {
        this.setState({
            productId: this.props.productId,
            title: next.title,
            subTitle: next.subTitle,
            text: next.text,
        });
    }

    updateCart = () => {
        this.props.updateCart(this.state.productId, this.state.title);
    }

    render() {
        return (
            <Card>
                <CardImg top width="100%" src={this.state.image} />
                <CardBody>
                    <CardTitle>{this.state.title}</CardTitle>
                    <CardSubtitle>{this.state.subTitle}</CardSubtitle>
                    <CardText>{this.state.text}</CardText>
                    <Button color='primary' onClick={() => { this.updateCart() }} >{this.state.button}</Button>
                </CardBody>
            </Card>
        )
    }
}
