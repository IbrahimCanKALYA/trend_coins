import { Text, type TextProps, StyleSheet } from 'react-native';

import {Colors} from "@/constants/Colors"
import { styles } from './styles';

export type TCTextProps = TextProps & {
  type?: keyof typeof styles;
  color?: keyof typeof Colors
};

export function TCText({
  style,
  type = 'default',
  color = "text",
  ...rest
}: TCTextProps) {

  return (
    <Text
      style={[styles[type], {color: Colors[color]}, style]}
      {...rest}
    />
  );
}


