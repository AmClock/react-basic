import React , {Component} from'react';
import {StyleSheet , View , Text }from'react-native';
import { Dimensions } from 'react-native'
import {color , fz} from '../style/StyleSheet'

let {width, height} = Dimensions.get('window');

export default class CustomHead  extends  Component{

    static defaultProps={
        title:"notTitle",
        bg:"#000"
    };

    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return(
             <View style={[ styles.headWrap, {backgroundColor: this.props.bg}]}>
                 <Text style={[fz.c,styles.headText]}>{this.props.title}</Text>
             </View>
        );
    }
}

const  styles = StyleSheet.create({

    headWrap:{
        width:width,
        height:height*0.09,
        justifyContent:'center',
        alignItems:'center',
    },
    headText: {
        color:"#fff",
    },

});