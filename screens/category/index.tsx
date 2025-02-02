import { useState } from "react";
import { View } from "@/components/ui/view";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import films from "@/data/film.json";
import FilmCard from "@/components/film-card";
import { Grid, GridItem } from "@/components/ui/grid";

export default function FilmCategoryScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Menambahkan kategori "Semua" secara dinamis
  const categories = [
    "Semua",
    ...new Set(films.films.map((film) => film.category)),
  ];

  // Filter film berdasarkan kategori yang dipilih
  const filteredFilms =
    selectedCategory === "Semua"
      ? films.films
      : films.films.filter((film) => film.category === selectedCategory);

  // Menghitung jumlah film berdasarkan kategori
  const getCategoryCount = (category: string) => {
    return category === "Semua"
      ? films.films.length
      : films.films.filter((film) => film.category === category).length;
  };

  return (
    <View className="flex-1 p-4">
      <Text className="text-lg font-bold mb-4">
        Kategori: {selectedCategory}
      </Text>

      {/* Kategori Filter */}
      <View className="flex-row mb-4">
        {categories.map((category) => (
          <Button
            key={category}
            onPress={() => setSelectedCategory(category)}
            className={`mr-2 ${
              selectedCategory === category ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <Text>
              {category} ({getCategoryCount(category)})
            </Text>
          </Button>
        ))}
      </View>

      {/* List Film menggunakan Grid untuk layout responsif */}
      <Grid
        _extra={{
          className: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6", // Kelas responsif untuk grid
        }}
        className="gap-3"
      >
        {filteredFilms.map((item) => (
          <GridItem
            key={item.id}
            _extra={{
              className: "", // Kosongkan atau atur sesuai kebutuhan
            }}
            className="p-2"
          >
            <FilmCard
              id={item.id}
              name={item.name}
              foto={item.foto}
              episodes={item.episodes}
              category={item.category}
            />
          </GridItem>
        ))}
      </Grid>
    </View>
  );
}
