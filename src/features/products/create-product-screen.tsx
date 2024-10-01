import {Button, StyleSheet, View} from "react-native"

import {
  DismissKeyboard,
  FormikTextInput,
  KeyboardAvoidingView,
  ScreenWrapper,
  Text
} from "@/shared/components"
import {useAppNavigation} from "@/shared/hooks"
import {useCreateProductMutation} from "@/store/services/products"

import {productSchema, ProductSchemaType} from "./schemas"

import {useFormik} from "formik"

import {Colors} from "@/utils/colors"

const initialValues: ProductSchemaType = {
  title: "",
  price: undefined!,
  description: ""
}

export const CreateProductScreen = () => {
  const [createProduct, {isLoading, isError}] = useCreateProductMutation()
  const {goBack} = useAppNavigation()

  const handleSubmitForm = async (body: ProductSchemaType) => {
    try {
      await createProduct(body).unwrap()
      goBack()
    } catch (error) {
      console.log(error)
    }
  }

  const {values, touched, errors, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: productSchema,
    onSubmit: handleSubmitForm
  })

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView>
        <DismissKeyboard>
          <View style={styles.formContainer}>
            <FormikTextInput
              label="Title"
              fieldName="title"
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormikTextInput
              label="Price"
              fieldName="price"
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              keyboardType="numeric"
            />
            <FormikTextInput
              label="Description"
              fieldName="description"
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Text color={Colors.red}>{isError ? "Something went wrong" : ""}</Text>
          </View>
          <Button disabled={isLoading} onPress={() => handleSubmit()} title="Submit" />
        </DismissKeyboard>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    flexGrow: 1
  }
})
