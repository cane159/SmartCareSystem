import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  StyleProp,
  TextStyle,
  KeyboardTypeOptions,
  ColorValue,
  ViewStyle,
} from 'react-native';
import Colors from '../utils/Colors';

interface CustomTextInPutProps {
  style?: StyleProp<TextStyle> | undefined;
  editable?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  placeholder?: string | undefined;
  placeholderTextColor?: ColorValue | undefined;
  defaultValue?: string | undefined;
  value?: string | undefined;
  maxLength?: number | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  multiline?: boolean | undefined;
}

const CustomTextInput: React.FC<CustomTextInPutProps> = ({
  style,
  editable = true,
  keyboardType,
  onChangeText = () => {},
  placeholder,
  placeholderTextColor,
  defaultValue,
  value,
  maxLength,
  autoCapitalize,
  multiline,
}) => {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <TextInput
      style={[styles.defaultTextInputStyle, style]}
      editable={editable}
      keyboardType={keyboardType}
      onChangeText={value => onChangeText(value)}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      defaultValue={defaultValue}
      value={value}
      maxLength={maxLength}
      autoCapitalize={autoCapitalize}
      multiline={multiline}
    />
  );
};

const styles = StyleSheet.create({
  defaultTextInputStyle: {
    color: Colors.black,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.black,
    margin: 10,
  },
});

export default CustomTextInput;
