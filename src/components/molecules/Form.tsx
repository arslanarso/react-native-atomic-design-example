// FormMolecule.js
import React, {FC, ReactElement, useState} from 'react';
import {View} from 'react-native';
import UsernameInput from '../atoms/UserNameInput';
import Button from '../atoms/Button';
import PasswordInput from '../atoms/PasswordInput';

/**
 * FormMolecule component props.
 */
interface FormMoleculeProps {
  /**
   * Function to be called when the form is submitted.
   */
  onSubmit: () => void;
}

/**
 * FormMolecule component.
 *
 * @param {FormMoleculeProps} props - Component properties.
 * @returns {ReactElement} - Rendered component.
 */
const FormMolecule: FC<FormMoleculeProps> = ({
  onSubmit,
}: FormMoleculeProps): ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <UsernameInput onChange={text => setUsername(text)} />
      <PasswordInput onChange={text => setPassword(text)} />
      <Button onPress={onSubmit} label="Submit" />
    </View>
  );
};

export default FormMolecule;
