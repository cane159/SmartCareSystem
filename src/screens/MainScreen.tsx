import React from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Colors from '../utils/Colors';
import FontSize from '../utils/FontSize';
import { RequestModel } from '../models/RequestModel';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import CustomRequestCard from '../components/CustomRequestCard';
import { useForm, Controller } from 'react-hook-form';
import CustomTextInput from '../components/CustomTextInput';
import MainContainer from '../components/MainContainer';
import CustomButton from '../components/CustomButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

interface SearchForm {
  search: string;
}

const MainScreen = ({ navigation }: Props) => {
  const listRequest = useAppSelector(state => state.main.listRequest);

  const { control, handleSubmit } = useForm<SearchForm>({
    defaultValues: {
      search: '',
    },
  });

  const onSubmitSearch = (data: SearchForm) => {
    const foundItem = listRequest.find(item => item.id === data.search);

    if (!foundItem) {
      Alert.alert('ไม่พบข้อมูล');
      return;
    }

    navigation.navigate('RequestDetail', {
      requestDetail: foundItem,
    });
  };

  const onPressedRequestCard = (data: RequestModel) => {
    navigation.navigate('RequestDetail', { requestDetail: data });
  };

  const onPressedAddRequest = () => {
    navigation.navigate('AddRequest');
  };

  return (
    <MainContainer>
      <View style={styles.container}>
        <Text style={styles.title}>{'MainScreen'}</Text>
        <Controller
          control={control}
          name="search"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput value={value} onChangeText={onChange} />
          )}
        />
        <CustomButton
          buttonText="Search"
          onPress={handleSubmit(onSubmitSearch)}
        />
        <FlatList
          data={listRequest}
          renderItem={({ item: listRequest }) => {
            return (
              <CustomRequestCard
                cardId={listRequest.id}
                title={listRequest.title}
                onPress={() => {
                  onPressedRequestCard(listRequest);
                }}
              />
            );
          }}
        />
        <TouchableOpacity
          style={styles.addRequest}
          onPress={() => {
            onPressedAddRequest();
          }}
        >
          <Text>{'Add Request'}</Text>
          <FontAwesome6
            name="plus"
            iconStyle="solid"
            color={Colors.black}
            size={16}
          />
        </TouchableOpacity>
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
  smartCareCard: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
  },
  detail: {
    fontSize: FontSize.l,
    color: Colors.black,
  },
  addRequest: {
    padding: 10,
    borderRadius: 100,
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderWidth: 1,
    borderColor: Colors.black,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  searchButton: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    margin: 10,
  },
});

export default MainScreen;
