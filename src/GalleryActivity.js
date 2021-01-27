import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';

import Gallery from 'react-native-image-gallery';

export default class GalleryActivity extends React.Component {
    static navigationOptions = {
        title: 'Gallery',
        headerStyle: {
            backgroundColor: '#73C6B6',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Profile Activity</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Gallery
                    style={{ flex: 1, backgroundColor: 'black' }}
                    images={[
                        { source: require('../static/react.jpeg'), dimensions: { width: 150, height: 150 } },
                        { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                        { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                        { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                        { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
});
