import React, { Component } from 'react';
import { Header, Body, Container, Title } from 'native-base';



export default class BasicHeader extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Smart Parking</Title>
                    </Body>
                </Header>
             </Container>
        );
    }
}