import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import FontSize from '../utils/FontSize';
import { Controller, useForm } from 'react-hook-form';
import CustomTextInput from '../components/CustomTextInput';
import MainContainer from '../components/MainContainer';
import CustomButton from '../components/CustomButton';
import { useAppDispatch } from '../store/hooks';
import { addRequest } from '../store/MainSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'AddRequest'>;

interface AddRequestForm {
  title: string;
  description: string;
}

const AddRequestScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<AddRequestForm>({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onAddRequest = (data: AddRequestForm) => {
    if (data.description == '' || data.title == '')
      return Alert.alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    dispatch(
      addRequest({
        title: data.title,
        description: data.description,
      }),
    );
    navigation.pop();
  };

  return (
    <MainContainer>
      <View style={styles.container}>
        <Text style={styles.title}>{'AddRequestScreen'}</Text>
        <Controller
          control={control}
          name="title"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              value={value}
              onChangeText={onChange}
              placeholder="Title"
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              value={value}
              onChangeText={onChange}
              placeholder="Description"
              style={{
                minHeight: 100,
                maxHeight: 100,
              }}
              multiline={true}
            />
          )}
        />
        <CustomButton
          buttonText="Add request"
          onPress={handleSubmit(onAddRequest)}
        />
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
});

export default AddRequestScreen;
