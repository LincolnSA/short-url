"use client";

import { useParams } from "next/navigation";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { shortenUrl, redirectUrl, listUrls, deleteUrl } from "@/services/api";
import { QUERY_KEYS } from "@/constants/react-query";

export function useUrl() {
  const queryClient = useQueryClient();
  const params = useParams();
  const slug = params.slug as string;

  const invalidateListUrls = () => {
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.URL_LIST() });
  }

  return {
    shortenUrl: useMutation({
      mutationKey: QUERY_KEYS.URL_SHORTEN(),
      mutationFn: shortenUrl,
      onSuccess: () => {
        toast.success("URL encurtada com sucesso");
        invalidateListUrls();
      },
      onError: () => {
        toast.error("Erro ao encurtar URL");
      },
    }),
    redirectUrl: useQuery({
      queryKey: QUERY_KEYS.URL_REDIRECT(),
      queryFn: () => redirectUrl({ url: slug as string }),
    }),
    listUrls: useQuery({
      queryKey: QUERY_KEYS.URL_LIST(),
      queryFn: listUrls,
    }),
    deleteUrl: useMutation({
      mutationKey: QUERY_KEYS.URL_DELETE(),
      mutationFn: deleteUrl,
      onSuccess: () => {
        toast.success("URL deletada com sucesso");
        invalidateListUrls();
      },
      onError: () => {
        toast.error("Erro ao deletar URL");
      },
    }),
  }
}