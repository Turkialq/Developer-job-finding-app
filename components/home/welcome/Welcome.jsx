import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";

import { icons, SIZE, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [avtiveJobType, setAvtiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Turki</Text>
        <Text style={styles.welcomeMessage}>Find Development jobs</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          horizontal
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(avtiveJobType, item)}
              onPress={() => {
                setAvtiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(avtiveJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
