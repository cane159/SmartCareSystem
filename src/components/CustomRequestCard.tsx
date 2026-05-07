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

interface CustomRequestCardProps {
  style?: StyleProp<ViewStyle> | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  cardId?: string | undefined;
  title?: string | undefined;
}

const CustomRequestCard: React.FC<CustomRequestCardProps> = ({
  style,
  onPress,
  cardId,
  title,
}) => {
  return (
    <TouchableOpacity style={[styles.smartCareCard, style]} onPress={onPress}>
      <Text style={styles.detail}>{`ID: ${cardId}`}</Text>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.detail}
      >{`Title: ${title}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  smartCareCard: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
  },
  title: {
    fontSize: FontSize.xxl,
    alignSelf: 'center',
  },
  detail: {
    fontSize: FontSize.l,
    color: Colors.black,
  },
});

export default CustomRequestCard;
