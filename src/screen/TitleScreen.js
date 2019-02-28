import React , {Component} from 'react';
import {StyleSheet , View , Text , Button} from'react-native';
import { Dimensions } from 'react-native';


let {width, height} = Dimensions.get('window');
export default class TitleScreen extends Component{

    render() {
        return (
            <View style={{flex:1, backgroundColor: "#424242"}}>
                <Button title={"this is button"}
                onPress={()=>this.props.navigation.navigate("Main")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});