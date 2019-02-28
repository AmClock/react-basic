import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CustomHead from "../component/CustomHead";
import {box} from "../style/StyleSheet";

export default class MainScreen extends Component {
    render() {
        return (
            <View style={box.fullBox}>
                <CustomHead/>


            </View>
        );
    }
}

const styles = StyleSheet.create({

});