import { Animated } from "react-native";
import { useState } from "react";
import { Screen } from "../components/Screen";
import { Card } from "../components/Card";
import { HEADER_HEIGHT, LIST_MARGIN } from "../constants";
import { AnimatedListHeader } from "../components/AnimatedListHeader";

export default function SearchScreen() {
  const properties = [
    {
      id: 1,
      images: [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q5Eunmn9ENDDwvQPZBCRdwHaE7%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.P4DMJbCaao_dpIs5dCb6IgHaLH%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Oe74GIp-Ini-tIVYe0bH6wHaE7%26pid%3DApi&f=1",
      ],
      rentLow: 3750,
      rentHigh: 31054,
      bedroomLow: 1,
      bedroomHigh: 5,
      name: "The Hamilton",
      street: "555 NE 34th St",
      city: "Miami",
      state: "Florida",
      zip: 33137,
      tags: ["Parking"],
    },
    {
      id: 2,
      images: [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iE7mcw3w2aFFDhXP9A1lggHaE8%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sN1pVaQ7SMfmzIydnPSKcgHaH1%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q5Eunmn9ENDDwvQPZBCRdwHaE7%26pid%3DApi&f=1",
      ],
      rentLow: 2466,
      rentHigh: 15455,
      bedroomLow: 1,
      bedroomHigh: 3,
      name: "The Hamilton",
      street: "555 NE 34th St",
      city: "Miami",
      state: "Florida",
      zip: 44600,
      tags: ["Parking", "villa", "pool"],
    },
    {
      id: 3,
      images: [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iE7mcw3w2aFFDhXP9A1lggHaE8%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sN1pVaQ7SMfmzIydnPSKcgHaH1%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q5Eunmn9ENDDwvQPZBCRdwHaE7%26pid%3DApi&f=1",
      ],
      rentLow: 2466,
      rentHigh: 15455,
      bedroomLow: 1,
      bedroomHigh: 3,
      name: "The Hamilton",
      street: "555 NE 34th St",
      city: "Miami",
      state: "Florida",
      zip: 44600,
      tags: ["Parking", "villa", "pool"],
    },
    {
      id: 4,
      images: [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q5Eunmn9ENDDwvQPZBCRdwHaE7%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.P4DMJbCaao_dpIs5dCb6IgHaLH%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Oe74GIp-Ini-tIVYe0bH6wHaE7%26pid%3DApi&f=1",
      ],
      rentLow: 3750,
      rentHigh: 31054,
      bedroomLow: 1,
      bedroomHigh: 5,
      name: "The Hamilton",
      street: "555 NE 34th St",
      city: "Miami",
      state: "Florida",
      zip: 33137,
      tags: ["Parking"],
    },
  ];
  const [scrollAnimation] = useState(new Animated.Value(0));

  return (
    <Screen>
      <AnimatedListHeader scrollAnimation={scrollAnimation} />
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
        style={{ marginHorizontal: LIST_MARGIN }}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 5 }} property={item} />
        )}
      ></Animated.FlatList>
    </Screen>
  );
}
