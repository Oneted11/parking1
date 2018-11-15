import React, { Component } from 'react'
import { Container, Text, Content } from 'native-base'
import Login from './Login'
import Register from './Register'
import Occupation from './Occupation'
export default class Tab2 extends Component {
    render() {
        return (
            <Container>
                <Content>
                    {/* <Login />
                    <Register /> */}
                    <Occupation />
                </Content>
            </Container>
        )
    }
}