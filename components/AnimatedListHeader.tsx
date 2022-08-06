import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Divider, Text } from "@ui-kitten/components";
import { useState } from "react";
import {
  Animated,
  FlatList,
  LayoutChangeEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { HEADER_HEIGHT, LIST_MARGIN } from "../constants";
import { theme } from "../theme";
import { HeaderFilterButtons } from "./HeaderFilterButtons";
import { HeaderInput } from "./HeaderInput";
import { HeaderLogistics } from "./HeaderLogistics";
import { Row } from "./Row";

export const AnimatedListHeader = ({
  scrollAnimation,
}: {
  scrollAnimation: Animated.Value;
}) => {
  const [offsetAnimation] = useState(new Animated.Value(0));
  const [clampedScroll, setClampedScroll] = useState(
    Animated.diffClamp(
      Animated.add(
        scrollAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolateLeft: "clamp",
        }),
        offsetAnimation
      ),
      0,
      1
    )
  );

  const navbarTranslate = clampedScroll.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: "clamp",
  });

  const onLayout = (event: LayoutChangeEvent) => {
    let { height } = event.nativeEvent.layout;
    setClampedScroll(
      Animated.diffClamp(
        Animated.add(
          scrollAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: "clamp",
          }),
          offsetAnimation
        ),
        0,
        height
      )
    );
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: navbarTranslate }],
        },
      ]}
      onLayout={onLayout}
    >
      <View style={styles.defaultMarginHorizontal}>
        <HeaderInput />
        <HeaderFilterButtons />
      </View>
      <Divider style={styles.divider} />
      <HeaderLogistics />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
    height: HEADER_HEIGHT,
    backgroundColor: "#fff",
  },
  defaultMarginHorizontal: { marginHorizontal: LIST_MARGIN },
  divider: { backgroundColor: theme["color-gray"] },
});
