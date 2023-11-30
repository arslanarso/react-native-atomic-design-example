import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import ButtonProps from '../../interfaces/ButtonProps/ButtonProps';

const Button: FC<ButtonProps> = ({onPress, label}: ButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
);

export default Button;
