import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';
import LoginPage from './src/components/pages/LoginPage';

/**
 * App component.
 *
 * @returns {React.ReactElement} - Rendered component.
 */
const App: FC = () => (
  <View style={styles.container}>
    <LoginPage />
  </View>
);

interface Styles {
  container: ViewStyle;
}

const styles: Styles = {
  container: {},
};

export default App;
