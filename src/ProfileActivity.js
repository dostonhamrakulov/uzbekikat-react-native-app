import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import styles from './Style';

class ProfileActivity extends React.Component {
    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: '#73C6B6',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonViewContainer}>
                    <View style={styles.buttonStyle} >
                        <Button
                            title="Go to Home"
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                    </View>
                </View>
                <View style={styles.buttonViewContainer}>
                    <View style={styles.buttonStyle} >
                        <Button
                            title="New Profile"
                            onPress={() => this.props.navigation.push('Profile')}
                        />
                    </View>
                </View>
                <View style={styles.buttonViewContainer}>
                    <View style={styles.buttonStyle} >
                        <Button
                            title="Gallery"
                            onPress={() => this.props.navigation.navigate('Gallery')}
                        />
                    </View>
                </View>
                <View style={styles.buttonViewContainer}>
                    <View style={styles.buttonStyle} >
                        <Button
                            title="Go Back"
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles1 = StyleSheet.create({
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
});

export default ProfileActivity;
