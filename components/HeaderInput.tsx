import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import { Row } from "./Row";

export const HeaderInput = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("Navigate to input screen")}
    >
      <Row style={{ alignItems: "center" }}>
        <MaterialCommunityIcons
          name="magnify"
          color={theme["color-primary-500"]}
          size={28}
        />
        <Text style={styles.text}>Find a Location</Text>
      </Row>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: theme["color-gray"],
    borderRadius: 30,
    padding: 10,
  },
  text: { marginLeft: 10 },
});
