import { useQuery } from "@tanstack/react-query";
import { getPokemonFormData } from "../fetchFunctions";

export default function useDefaultForm(query) {
  const { data } = useQuery({
    queryFn: async function convertToDefaultForm() {
      const formData = await getPokemonFormData(query);

      return formData.species.name;
    },
    queryKey: ["defaultForm"], //pokemons can have different forms based on their actual name (ex: venusaur-mega), this function gets the pokemon's actual pokemon name
  });

  return data;
}
