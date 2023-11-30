import {GestureResponderEvent} from 'react-native';

/**
 * Button component props.
 */
interface ButtonProps {
  /**
   * Function to be called when the button is pressed.
   */
  onPress: (event: GestureResponderEvent) => void;

  /**
   * The label text for the button.
   */
  label: string;
}

/**
 * Button component.
 *
 * @param {ButtonProps} props - Component properties.
 * @returns {JSX.Element} - Rendered component.
 */

export default ButtonProps;
