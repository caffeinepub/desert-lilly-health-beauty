import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Offer } from "../backend.d";
import { useActor } from "./useActor";

export function useGetOffers() {
  const { actor, isFetching } = useActor();
  return useQuery<Offer[]>({
    queryKey: ["offers"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getOffers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePostOffer() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      title: string;
      description: string;
      imageUrl: string;
      link: string;
      contactName: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.postOffer(
        data.title,
        data.description,
        data.imageUrl,
        data.link,
        data.contactName,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["offers"] });
    },
  });
}
