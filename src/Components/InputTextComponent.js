import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export default InputTextComponent = ({
  placeInput = "",
  keyboardTypeOfInput ,
  textType,
}) => {
  return (
    <View>
      <TextInput
        style={{
          ...styles.inputStyle,
        }}
        placeholder={placeInput}
        placeholderTextColor={"rgba(255,255,255,1)"}
        keyboardType={keyboardTypeOfInput}
        secureTextEntry={textType}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    fontWeight: "200",
    fontSize: 14,
    color: "rgba(255,255,255,1)",
  },
});
