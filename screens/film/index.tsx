import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "@/components/ui/view";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

const FilmDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>(); // Menangkap 'id' dari URL sebagai string
  const router = useRouter(); // Menggunakan router untuk navigasi

  return (
    <View>
      <Text>Detail Film {id}</Text>
      <Button onPress={() => router.push(`/play/${id}`)}>
        <Text>Play Film</Text>
      </Button>

      {/* Kamu bisa menambahkan informasi detail film lainnya di sini */}
    </View>
  );
};

export default FilmDetail;
