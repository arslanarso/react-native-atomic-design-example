import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import AuthTemplate from '../templates/AuthTemplate';

/**
 * LoginPage component.
 *
 * @returns {React.ReactElement} - Rendered component.
 */
const LoginPage: FC = () => (
  <SafeAreaView>
    <AuthTemplate />
  </SafeAreaView>
);

export default LoginPage;
