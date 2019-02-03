import React from "react";
import { View } from "react-native";
import Style from "./Style";
import InputForm from './../../components/InputForm/InputForm'
import ListView from './../../components/ListView/ListView'

var TAG = "[LoginTemplate]";


export default class LoginTemplate extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }



    render() {
        return (
            <View style={Style.body}>
                <InputForm
                    
                
                />
                <ListView />

            </View>

        );
    }
}
