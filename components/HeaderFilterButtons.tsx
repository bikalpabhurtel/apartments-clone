import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@ui-kitten/components";
import { FlatList, StyleSheet } from "react-native";
import { theme } from "../theme";

export const HeaderFilterButtons = ({}) => {
  const filterButtons = [
    {
      iconName: "filter-variant",
      onPress: () => console.log("filter all"),
    },
    {
      label: "Price",
      onPress: () => console.log("price"),
    },
    {
      label: "Move In Date",
      onPress: () => console.log("move in date"),
    },
    {
      label: "Pets",
      onPress: () => console.log("pets"),
    },
  ];
  return (
    <FlatList
      data={filterButtons}
      style={{ marginVertical: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => {
        if (item.iconName) {
          const icon = () => (
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={theme["color-primary-500"]}
            />
          );
          return (
            <Button
              appearance={"ghost"}
              style={[styles.button, { width: 48 }]}
              onPress={item.onPress}
              accessoryLeft={icon}
            ></Button>
          );
        }
        return (
          <Button
            appearance={"ghost"}
            style={styles.button}
            onPress={item.onPress}
          >
            {item.label}
          </Button>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    borderColor: theme["color-gray"],
    marginHorizontal: 3,
  },
});
