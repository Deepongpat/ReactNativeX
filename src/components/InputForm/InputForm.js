import React from "react";
import { View } from "react-native";
import Style from "./Style";
import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements';
import PropTypes from 'prop-types'


const errorMessageDefault = "!InputForm Invalid"
export default class InputForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputType: "",
            errorMessage: "",
            placeholder: "Input Demo",
            keyboardType: "default",
            editable: true,
            autoCapitalize: null,
            textInput: "",
            secureText: false,

            leftIcon: "envelope",

            rightIcon: "question-circle",

        };
        this.onValidate = this.onValidate.bind(this);
        this.validationForm = this.validationForm.bind(this);

    }
    async componentDidMount() {
        console.log("componentWillMount");
        await this.setState({ ...this.props });
    }

    async onValidate(text) {
        console.log("onValidate : ", text);
        let result = true;
        //Validate Type
        if (this.props.CustomValidateForm) {
            result = await this.props.CustomValidateForm(text);
            console.log("CustomValidateForm : ", result);
        } else {
            const regType = this.props.ValidateForm;
            result = this.validationForm(regType, text);
            console.log("ValidationForm : ", result);
        }
        this.setState({ textInput: text });
        //Error Message
        if (result) {
            this.setState({ errorMessage: "" });
        } else {
            this.setState({ errorMessage: this.props.inputErrorMessage ? this.props.inputErrorMessage : errorMessageDefault });
        }
        if (this.props.onChangeText) {
            this.props.onChangeText(text);
        }


    }

    validationForm(regType, str) {
        if (str === "") {
            return true;
        }
        switch (regType) {
            case "email": {
                let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return pattern.test(str);
            }
            case "phone": {
                let pattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
                return pattern.test(str);
            }
            case "number": {
                let pattern = /^\d+$/;
                return pattern.test(str);
            }
            default: {
                return true;
            }
        }


    }

    renderInput() {
        let { secureText, inputType, editable
            , keyboardType, placeholder, errorMessage,
            textInput, leftIcon, rightIcon
        } = this.state;

        return (
            <Input
                containerStyle={{ width: "100%", paddingTop: 5 }}
                inputContainerStyle={Style.inputContainerStyle}
                inputStyle={Style.inputStyle}

                value={textInput}
                textInput={textInput}
                editable={editable}
                keyboardType={keyboardType}
                placeholder={placeholder}
                errorStyle={{ color: 'red' }}
                errorMessage={errorMessage}


                onChangeText={this.onValidate}
                onFocus={() => { console.log("onFocus") }}
                onBlur={() => { console.log("onBlur") }}
                onKeyPress={() => { console.log("onKeyPress") }}
                shake={true}
                secureTextEntry={secureText}

                leftIconContainerStyle={{ paddingRight: 10 }}
                leftIcon={
                    <Icon
                        iconStyle={Style.Icon}
                        name={leftIcon}
                        type='font-awesome'
                        color='#2E86C1'
                        size={25}
                    />

                }

                rightIcon={
                    <Icon
                        iconStyle={Style.Icon}
                        name={rightIcon}
                        type='font-awesome'
                        color='red'
                        size={25}
                    />
                }
            />
        )
    }
    render() {
        return (
            <View style={Style.bodyRoot}>
                <View>

                </View>
                {this.renderInput()}

            </View>

        );
    }
}
InputForm.propTypes = {
    inputType: PropTypes.string,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    editable: PropTypes.bool,
    autoCapitalize: PropTypes.bool,
    textInput: PropTypes.string,
    secureText: PropTypes.bool,

    leftIcon:PropTypes.string,
    rightIcon: PropTypes.string,
    validationForm:PropTypes.string.isRequired,
};

InputForm.defaultProps = {
    regType:"",
    inputType: "",
    placeholder: "Input Demo",
    keyboardType: "default",
    editable: true,
    autoCapitalize: null,
    textInput: "",
    secureText: false,

    leftIcon: "envelope",

    rightIcon: "question-circle",
    validationForm:"default"

};