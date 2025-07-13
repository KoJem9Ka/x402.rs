import type { PartialDeep } from 'type-fest';


export const QUERY_KEYS = {
  // PRIVATE: () => [{ username: $QUERY_KEYS_PRIVATE_USER.value, private: true }] as const,
  // PRIVATE_ANY: () => [{}] as const,
  // PRIVATE_TRUE: [{ private: true }] as const,
};

export const MUTATION_KEYS = {
  SUBSCRIBE_TO_NEWSLETTER: () => ['subscribe-to-newsletter'] as const,
};


type GetQueryKeysUnion<T> =
// Is T a function?
  T extends (...args: never[]) => infer R
    // Then ensure that it returns tuple, because all functions must return tuple of query keys
    ? R extends ReadonlyArray<unknown> ? R : never
    // Else if T is a tuple of query keys
    : T extends ReadonlyArray<unknown> ? T
      // Else if T is an object, recursively get the union of its properties
      : T extends Record<string, unknown>
        ? { [K in keyof T]: GetQueryKeysUnion<T[K]> }[keyof T]
        : never;

type PartialArrayElements<Tuple extends ReadonlyArray<unknown>> = {
  [Key in keyof Tuple]?: PartialDeep<Tuple[Key]>;
};

export type QueryKeys = PartialArrayElements<GetQueryKeysUnion<typeof QUERY_KEYS>>;
export type MutationKeys = PartialArrayElements<GetQueryKeysUnion<typeof MUTATION_KEYS>>;
