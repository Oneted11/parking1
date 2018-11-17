import React, { Component } from 'react';
import { Container, Text } from 'native-base'
import MapView, { Marker } from 'react-native-maps'

const markersarr = [{ id: 1, title: 'marker1', description: '50/hr', occupied: true, latlng: { latitude: -1.2745, longitude: 36.8345 } },
{ id: 2, title: 'marker2', description: '60/hr', occupied: false, latlng: { latitude: -1.289714, longitude: 36.819615 } }]

export default class Tab1 extends Component {
    renderMarkers() {
        return (
            markersarr.map(item => <MapView.Marker key={item.id}
                title={item.title}
                description={item.description}
                coordinate={item.latlng}
                pinColor={item.occupied ? '#FF0000' : '#00FF00'}
            />)
        )
    }
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
                    {this.renderMarkers()}
                    
                </MapView>


            </Container >
        )
    }
}