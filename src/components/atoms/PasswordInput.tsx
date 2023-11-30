import React, {FC, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

/**
 * PasswordInput component props.
 */
interface PasswordInputProps {
  /**
   * Function to be called when the password value changes.
   */
  onChange: (password: string) => void;
}

/**
 * PasswordInput component.
 *
 * @param {PasswordInputProps} props - Component properties.
 * @returns {React.ReactElement} - Rendered component.
 */
const PasswordInputAtom: FC<PasswordInputProps> = ({
  onChange,
}: PasswordInputProps) => {
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  /**
   * Toggles the visibility of the password.
   */
  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={(text: string): void => {
          setPassword(text);
          onChange(text);
        }}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Text style={styles.toggleText}>
          {showPassword ? 'Hide' : 'Show'} Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  toggleText: {
    color: 'blue',
    textAlign: 'right',
  },
});

export default PasswordInputAtom;
