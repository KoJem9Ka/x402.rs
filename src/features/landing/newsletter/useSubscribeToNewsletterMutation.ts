import { useMutation } from '@tanstack/react-query';
import { MUTATION_KEYS } from '@/shared/backbone/QUERY_KEYS';


export function useSubscribeToNewsletterMutation() {
  return useMutation({
    mutationKey: MUTATION_KEYS.SUBSCRIBE_TO_NEWSLETTER(),
    mutationFn: async (email: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert(`Mocked response: subscribed to newsletter: ${email}`);
    },
    onError: (error) => {
      alert(`Can't subscribe to newsletter: ${error.message}`);
    },
  });
}
