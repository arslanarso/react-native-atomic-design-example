import React, {FC} from 'react';
import {View, Text, TextStyle} from 'react-native';
import LoginForm from '../organisms/LoginForm';

/**
 * AuthTemplate component.
 *
 * @returns {React.ReactElement} - Rendered component.
 */
const AuthTemplate: FC = () => (
  <View style={styles.container}>
    <Text>Welcome to our App!</Text>
    <LoginForm />
  </View>
);

interface Styles {
  container: TextStyle;
}

const styles: Styles = {
  container: {},
};

export default AuthTemplate;
