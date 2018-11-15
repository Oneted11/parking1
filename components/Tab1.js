import React, { Component } from 'react';
import { Container, Text } from 'native-base'
import MapView from 'react-native-maps'

export default class Tab1 extends Component {
    render() {
        return (
            <Container>
                <MapView
                    style={{
                        flex: 1,
                    }}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: -1.2921,
                        longitude: 36.8219,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                </MapView>
            </Container>
        )
    }
}