import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Pressable } from "@/components/ui/pressable";
import { useRouter } from "expo-router";

interface FilmCardProps {
  id: number;
  name: string;
  foto: string;
  episodes: { Episodeid: number }[];
  category: string;
}

const FilmCard = ({ id, name, foto, episodes, category }: FilmCardProps) => {
  const router = useRouter();
  const episodeCount = episodes.length; // Menghitung jumlah episode

  return (
    <Pressable onPress={() => router.push(`/film/${id}`)}>
      <Box className="p-2">
        {/* Gambar Film Full Width */}
        <Box className="relative">
          <Image
            source={{ uri: foto }}
            alt={name}
            className="w-full h-64 rounded-md" // Membuat gambar full width dengan tinggi tetap
            resizeMode="cover" // Menyesuaikan gambar dengan lebar dan tinggi card
          />

          {/* Keterangan Episode dan Kategori di dalam Gambar */}
          <Box className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 flex-row justify-between items-center">
            <Text className="text-sm font-medium text-white">
              {episodeCount} Episode
            </Text>
            <Text className="text-sm font-medium text-white">{category}</Text>
          </Box>
        </Box>

        {/* Judul Film di Bawah Gambar */}
        <Text className="mt-2 text-lg font-bold text-typography-800">
          {name}
        </Text>
      </Box>
    </Pressable>
  );
};

export default FilmCard;
