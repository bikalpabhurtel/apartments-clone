import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { theme } from "../theme";
import { Property } from "../types/property";
import { Row } from "./Row";

export const CardInformation = ({ property }: { property: Property }) => {
  return (
    <View style={styles.container}>
      <Row style={styles.defaultJustification}>
        <Text category={"s1"}>
          ${property.rentLow.toLocaleString()}-{" "}
          {property.rentHigh.toLocaleString()}
        </Text>
        <MaterialCommunityIcons
          name="heart-outline"
          color={theme["color-primary-500"]}
          size={24}
        />
      </Row>
      <Text category={"c1"}>
        {property.bedroomLow}- {property.bedroomHigh} Beds
      </Text>
      <Text category={"c1"}>{property.name}</Text>
      <Text category={"c1"}>{property.street}</Text>
      <Text category={"c1"}>
        {property.city},{property.state},{property.zip}
      </Text>
      <Text style={styles.defaultMarginTop} category={"c1"}>
        {property.tags.map((tag, index) =>
          index === property.tags.length - 1 ? tag : `${tag}, `
        )}
      </Text>
      <Row style={[styles.defaultMarginTop, styles.defaultJustification]}>
        <Button
          appearance={"ghost"}
          size={"small"}
          style={[
            styles.button,
            {
              borderColor: theme["color-primary-500"],
            },
          ]}
          onPress={() => console.log("Email Clicked")}
        >
          Email
        </Button>
        <Button
          appearance={"filled"}
          size={"small"}
          style={styles.button}
          onPress={() => console.log("Call Clicked")}
        >
          Call
        </Button>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: theme["color-gray"],
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#fff",
  },
  defaultMarginTop: {
    marginTop: 5,
  },
  defaultJustification: {
    justifyContent: "space-between",
  },
  button: {
    width: "49%",
  },
});
