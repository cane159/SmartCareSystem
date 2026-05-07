import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontSize from '../utils/FontSize';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import Colors from '../utils/Colors';
import moment from 'moment/min/moment-with-locales';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import MainContainer from '../components/MainContainer';

type Props = NativeStackScreenProps<RootStackParamList, 'RequestDetail'>;

const RequestDetailScreen = ({ navigation, route }: Props) => {
  const { requestDetail } = route.params;

  const onPressedGoback = () => {
    navigation.pop();
  };

  return (
    <MainContainer>
      <View style={styles.container}>
        <Pressable
          style={{
            padding: 10,
          }}
          onPress={() => {
            onPressedGoback();
          }}
        >
          <FontAwesome6
            name="chevron-left"
            iconStyle="solid"
            color={Colors.black}
            size={20}
          />
        </Pressable>
        <Text style={styles.title}>{'RequestDetailScreen'}</Text>
        <View style={styles.detailContainer}>
          <Text
            style={styles.detail}
          >{`Smart Care ID: ${requestDetail.id}`}</Text>
          <Text style={styles.detail}>{`Title: ${requestDetail.title}`}</Text>
          <Text
            style={styles.detail}
          >{`Description: ${requestDetail.description}`}</Text>
          <Text style={styles.detail}>{`Timestamp: ${moment(
            requestDetail.createdAt,
          ).format('DD/MMMM/YYYY hh:mm:ss')}`}</Text>
        </View>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.xxl,
    alignSelf: 'center',
  },
  detailContainer: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.black,
    margin: 10,
  },
  detail: {
    fontSize: FontSize.l,
    marginVertical: 10,
  },
});

export default RequestDetailScreen;
