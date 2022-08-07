import { Animated } from "react-native";
import { useState } from "react";
import { Screen } from "../components/Screen";
import { Card } from "../components/Card";
import { HEADER_HEIGHT } from "../constants";
import { AnimatedListHeader } from "../components/AnimatedListHeader";
import { properties } from "../data/properties";
import { Map } from "../components/Map";

export default function SearchScreen() {
  const [mapShown, setMapShown] = useState<boolean>(false);
  const [scrollAnimation] = useState(new Animated.Value(0));
  return (
    <Screen>
      <AnimatedListHeader
        scrollAnimation={scrollAnimation}
        mapShown={mapShown}
        setMapShown={setMapShown}
      />
      {mapShown ? (
        <Map properties={properties} />
      ) : (
        <Animated.FlatList
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollAnimation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          contentContainerStyle={{ paddingTop: HEADER_HEIGHT - 30 }}
          bounces={false}
          scrollEventThrottle={16}
          data={properties}
          keyExtractor={(item) => item.id.toLocaleString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card style={{ marginVertical: 5 }} property={item} />
          )}
        ></Animated.FlatList>
      )}
    </Screen>
  );
}
