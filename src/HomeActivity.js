import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

import styles from './Style';

class HomeActivity extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#03A9F4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonViewContainer}>
                    <View style={styles.buttonStyle} >
                        <Button
                            title="Profile"
                            onPress={() => this.props.navigation.navigate('Profile')}
                        />
                    </View>
                </View>
                <View style={styles.buttonViewContainer}>
                    <View style={styles.buttonStyle} >
                        <Button
                            style={styles.buttonStyle}
                            title="Gallery"
                            onPress={() => this.props.navigation.navigate('Gallery')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles1 = StyleSheet.create({
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

export default HomeActivity;
