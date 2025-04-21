import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/theme";

// Define TypoProps inline with index signature
interface TypoProps {
  size?: number;
  color?: string;
  fontWeight?: string;
  children?: React.ReactNode;
  style?: any;
  [key: string]: any; // Allows additional Text props
}

const Typo = ({
  size,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  ...textProps
}: TypoProps) => {
  return (
    <View>
      <Text {...textProps} style={style}>
        {children}
      </Text>
    </View>
  );
};

export default Typo;

const styles = StyleSheet.create({});