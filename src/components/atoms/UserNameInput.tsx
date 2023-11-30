import React, {FC, ReactElement, useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

/**
 * UsernameInput component props.
 */
interface UsernameInputProps {
  /**
   * Function to be called when the username changes.
   */
  onChange: (username: string) => void;
}

/**
 * UsernameInput component.
 *
 * @param {UsernameInputProps} props - Component properties.
 * @returns {ReactElement} - Rendered component.
 */
const UsernameInput: FC<UsernameInputProps> = ({
  onChange,
}: UsernameInputProps): ReactElement => {
  const [username, setUsername] = useState('');

  return (
    <TextInput
      style={styles.input}
      placeholder="Username"
      value={username}
      onChangeText={text => {
        setUsername(text);
        onChange(text);
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default UsernameInput;
