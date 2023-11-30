import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';
import Form from '../molecules/Form';

/**
 * LoginForm component.
 *
 * @returns {React.ReactElement} - Rendered component.
 */
const LoginForm: FC = () => (
  <View style={styles.container}>
    <Form onSubmit={() => console.log('Form submitted')} />
  </View>
);

interface Styles {
  container: ViewStyle;
}

const styles: Styles = {
  container: {},
};

export default LoginForm;
