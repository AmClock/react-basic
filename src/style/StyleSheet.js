import { Dimensions } from 'react-native'
import {StyleSheet}from'react-native';
let {width, height} = Dimensions.get('window');

const fz = StyleSheet.create({
    a:{
        fontSize: width/5/1.5,
    },
    b:{
        fontSize: width/7/1.5,
    },
    c:{
        fontSize: width/9/1.5,
    },
    d:{
        fontSize: width/11/1.5,
    },
    e:{
        fontSize: width/13/1.5,
    },
    f:{
        fontSize: width/15/1.5,
    },
    g:{
        fontSize: width/17/1.5,
    },
    h:{
        fontSize: width/19/1.5,
    },
    i:{
        fontSize: width/21/1.5,
    },
    j:{
        fontSize: width/23/1.5,
    },
    k:{
        fontSize: width/25/1.5,
    },
});


const box = StyleSheet.create({

    fullBox:{
        width:width,
        height:height,
    },
    halfBox:{
        width:width,
        height:height/2,
    },

});
export {fz , box};