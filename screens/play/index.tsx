import { Text, View } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

const PlayScreen = () => {
  const { id } = useLocalSearchParams(); // Mengakses parameter 'id' dari URL

  return (
    <View>
      <Text>Memutar Film {id}</Text>
      {/* Kamu bisa menambahkan informasi detail film lainnya di sini */}
    </View>
  );
};

export default PlayScreen;
