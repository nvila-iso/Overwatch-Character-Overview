import useQuery from "../api/useQuery";

export default function useOverwatch() {
  return useQuery("https://overfast-api.tekrop.fr/heroes");
}
