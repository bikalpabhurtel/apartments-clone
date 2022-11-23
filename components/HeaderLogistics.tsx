import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LIST_MARGIN } from "../constants";
import { theme } from "../theme";
import { Row } from "./Row";

const HeaderLogisticsButton = ({
  label,
  onPress,
  iconName,
  style,
}: {
  label: string;
  onPress: () => void;
  iconName?: any;
  style?: any;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Row style={[styles.row, style]}>
        {iconName ? (
          <MaterialCommunityIcons
            name={iconName}
            color={theme["color-info-300"]}
            size={18}
          />
        ) : null}
        <Text category={"c1"} style={styles.button}>
          {label}
        </Text>
      </Row>
    </TouchableOpacity>
  );
};

export const HeaderLogistics = ({
  mapShown,
  setMapShown,
}: {
  mapShown: boolean;
  setMapShown: (bool: boolean) => void;
}) => {
  const navigation = useNavigation();
  const handleMapPress = () => {
    navigation.setOptions({ tabBarStyle: { display: "flex" } });
    if (mapShown) return setMapShown(false);
    setMapShown(true);
  };
  return (
    <Row style={styles.container}>
      <Row style={styles.row}>
        <MaterialCommunityIcons
          name="map-marker"
          size={18}
          color={theme["color-primary-500"]}
        />
        <Text category={"c1"} appearance={"hint"}>
          12 Available
        </Text>
        <HeaderLogisticsButton
          onPress={() => console.log("Save")}
          label={"Save"}
          style={{ marginLeft: 10 }}
        />
      </Row>
      <Row>
        <HeaderLogisticsButton
          onPress={() => console.log("Sort")}
          iconName={"sort"}
          label={"Sort"}
        />
        {mapShown ? (
          <HeaderLogisticsButton
            onPress={handleMapPress}
            style={{ marginLeft: 20 }}
            iconName={"format-list-bulleted"}
            label={"List"}
          />
        ) : (
          <HeaderLogisticsButton
            onPress={handleMapPress}
            style={{ marginLeft: 20 }}
            iconName={"map-outline"}
            label={"Map"}
          />
        )}
      </Row>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: LIST_MARGIN,
    marginVertical: 5,
  },
  row: {
    alignItems: "center",
  },
  button: {
    color: theme["color-info-300"],
    fontWeight: "bold",
    marginLeft: 5,
  },
});
