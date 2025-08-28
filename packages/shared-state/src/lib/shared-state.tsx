import {
  useQuery,
  useMutation,
  QueryClient,
  QueryClientProvider,
  // QueryClientProvider,
} from '@tanstack/react-query'
import { createContext } from 'react';

export const queryClient = new QueryClient()

const context = createContext<QueryClient | undefined>(queryClient)

export const productQuery = useQuery({ queryKey: ['products'], queryFn: Promise.resolve, context })

export const prodctMutation = useMutation({
  mutationFn: async (newProduct) => {
    return newProduct
  },
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})


export function GlobalProductProvider({ children }: { children: any }) {
  <QueryClientProvider client={queryClient} context={context} >
    {children}
  </QueryClientProvider>
}

