import React from 'react';
import {
  StyleSheet,
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {Text} from './text';
import {
  FormikErrors,
  FormikTouched,
  FormikHandlers,
  FormikValues,
} from 'formik';
import {Colors} from '@/utils/colors';

interface Props<FormValues> extends RNTextInputProps {
  label: string;
  fieldName: keyof FormValues;
  values: FormValues;
  touched: FormikTouched<FormValues>;
  errors: FormikErrors<FormValues>;
  handleChange: FormikHandlers['handleChange'];
  handleBlur: FormikHandlers['handleBlur'];
}

export const FormikTextInput = <T extends FormikValues>({
  label,
  placeholder,
  fieldName,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  ...restProps
}: Props<T>) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}:</Text>}
      <RNTextInput
        style={styles.input}
        value={values[fieldName]?.toString()}
        onChangeText={handleChange(fieldName.toString())}
        onBlur={handleBlur(fieldName.toString())}
        {...restProps}
      />
      <Text color={Colors.red}>{errors[fieldName]?.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  label: {},
  input: {
    fontSize: 16,
    color: Colors.black,
    paddingHorizontal: 10,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,
  },
  error: {},
});
