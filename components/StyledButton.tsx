import {
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";

import global from "../assets/styles/global";

type StyledButtonProps = {
  title: string;
} & TouchableHighlightProps;

export default function StyledButton({ title, ...props }: StyledButtonProps) {
  return (
    <TouchableHighlight {...props} style={[global.button, props.style]}>
      <Text style={global.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
}
