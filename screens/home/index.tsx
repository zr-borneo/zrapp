import { VStack } from "@/components/ui/vstack";
import { SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import films from "@/data/film.json";
import { FlatList } from "react-native";
import FilmCard from "@/components/film-card"; // Import komponen FilmCard

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <VStack className="justify-between">
        <FlatList
          data={films.films.slice(0, 5)} // Hanya menampilkan beberapa film
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FilmCard
              id={item.id}
              name={item.name}
              foto={item.foto}
              episodes={item.episodes}
              category={item.category}
            />
          )}
        />
      </VStack>
    </SafeAreaView>
  );
}
