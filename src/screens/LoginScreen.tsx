import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FontSize from '../utils/FontSize';
import CustomTextInput from '../components/CustomTextInput';
import Colors from '../utils/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import MainContainer from '../components/MainContainer';
import CustomButton from '../components/CustomButton';

const schema = z.object({
  username: z
    .string()
    .min(1, 'กรุณากรอกข้อมูล')
    .refine(
      value => {
        const isNumberOnly = /^[0-9]+$/.test(value);
        if (!isNumberOnly) return false;

        return value.length === 10 || value.length === 13;
      },
      {
        message: 'ข้อมูลบัตรประชาชน หรือเบอร์โทรไม่ถูกต้อง',
      },
    ),
});

type FormData = {
  username: string;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = (data: FormData) => {
    if (data.username.length === 10 || data.username.length === 13)
      navigation.replace('Main');
  };

  return (
    <MainContainer>
      <View style={styles.container}>
        <Text style={styles.title}>{'LoginScreen'}</Text>

        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              value={value}
              onChangeText={onChange}
              maxLength={13}
              keyboardType="numeric"
            />
          )}
        />

        {errors.username && (
          <Text style={styles.errorText}>{errors.username.message}</Text>
        )}
        <CustomButton buttonText="Login" onPress={handleSubmit(onSubmit)} />
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
  errorText: {
    color: Colors.red,
  },
});

export default LoginScreen;
