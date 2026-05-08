import React from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  TouchableOpacity,
  Text,
} from 'react-native';
import Colors from '../utils/Colors';
import FontSize from '../utils/FontSize';

interface CustomButtonProps {
  style?: StyleProp<ViewStyle> | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  buttonText?: string | undefined;
  disabled?: boolean | undefined;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  style,
  onPress,
  buttonText,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
  },
});

export default CustomButton;
