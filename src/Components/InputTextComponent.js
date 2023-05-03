import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../styles/colors";
export default InputTextComponent = ({
  placeInput = "",
  keyboardTypeOfInput,
  textType,
  lengthOfInputs,
  onChangeTextValue,
  autoFocusOnKeyboard,
  multilineText,
  myValueToAdd
}) => {
  return (
    <View>
      <TextInput
        style={{
          ...styles.inputStyle,
        }}
        autoFocus={autoFocusOnKeyboard}
        maxLength={lengthOfInputs}
        placeholder={placeInput}
        placeholderTextColor={colors.white}
        keyboardType={keyboardTypeOfInput}
        secureTextEntry={textType}
        onChangeText={onChangeTextValue}
        numberOfLines={5}
        value={myValueToAdd}
         multiline={multilineText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    fontWeight: "200",
    fontSize: 14,
    color: colors.white,
  },
});
