// import { StyleSheet, Text, TextStyle, View } from "react-native";
// import React from "react";
// import { colors } from "@/constants/theme";
// import { verticalScale } from "@/utils/styling";

// // Define TypoProps inline with index signature
// interface TypoProps {
//   size?: number;
//   color?: string;
//   fontWeight?: string;
//   children?: React.ReactNode;
//   style?: any;
//   [key: string]: any; // Allows additional Text props
// }

// const Typo = ({
//   size,
//   color = colors.text,
//   fontWeight = "400",
//   children,
//   style,
//   textProps = {},
// }: TypoProps) => {


//     const textStyle: TextStyle = {
//         fontSize: size? verticalScale(size): verticalScale(18),
//         color,
//        fontWeight,
//     };
//   return <Text style={[style]}>Typo</Text>

// };

// export default Typo;

// const styles = StyleSheet.create({});
import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { colors } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

// Define TypoProps inline with correct fontWeight type
interface TypoProps {
  size?: number;
  color?: string;
  fontWeight?: TextStyle["fontWeight"]; // Use TextStyle's fontWeight type
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
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };

  return (
    <Text style={[textStyle, style, textProps.style]}>
      {children || "Typo"} {/* Use children if provided, fallback to "Typo" */}
    </Text>
  );
};

export default Typo;

const styles = StyleSheet.create({});