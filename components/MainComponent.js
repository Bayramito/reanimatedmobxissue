import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { inject, observer } from "mobx-react";
import { useAnimatedStyle } from "react-native-reanimated";

const MainComponent = inject("global")(
  observer(({ global }) => {
    const rreanimatedStyle = useAnimatedStyle(() => {
      return {}
    })
    return (
      <View style={{flex:1,justifyContent: "center",
      alignItems: "center",}}>
        <Text>{global.user}</Text>
      </View>
    );
  }),
);



export default MainComponent;
