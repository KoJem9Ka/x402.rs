import { useMutation } from '@tanstack/react-query';
import { MUTATION_KEYS } from '@/shared/backbone/QUERY_KEYS';
import { z } from 'zod/v4';
import { openInNewTab } from '@/shared/utils/open-in-new-tab';
import { CONFIG } from '@/shared/backbone/config';


export function useSubscribeToNewsletterMutation() {
  return useMutation({
    mutationKey: MUTATION_KEYS.SUBSCRIBE_TO_NEWSLETTER(),
    mutationFn: async (email: string): Promise<void> => {
      const res = await fetch(`https://app.kit.com/forms/${CONFIG.emailFormKitId}/subscriptions`, {
        method: 'POST',
        body: (() => {
          const formData = new FormData();
          formData.append('email_address', email);
          return formData;
        })(),
        headers: { 'Accept': 'application/json' },
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to subscribe: ${res.status} ${text}`);
      }

      const data = SubscribeRes.parse(await res.json());

      openInNewTab(data.redirect_url);
    },
    onError: (error) => {
      alert(`Can't subscribe to newsletter. Please try again later.\n\n${error.message}`);
      console.error('Error while subscribing to newsletter', error);
    },
  });
}

const SubscribeRes = z.object({
  // consent: z.object({
  //   enabled: z.boolean(),
  //   url: z.url(),
  // }),
  // status: z.string(),
  redirect_url: z.url(),
});
