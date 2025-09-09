import { GraphQLClient } from 'graphql-request'

export const useGraphQL = () => {
  const config = useRuntimeConfig()
  
  const client = new GraphQLClient(config.public.hasuraUrl as string, {
    headers: {
      'x-hasura-admin-secret': config.public.hasuraAdminSecret as string,
      'Content-Type': 'application/json',
    },
  })

  const query = async <T = unknown>(query: string, variables?: Record<string, unknown>): Promise<T> => {
    try {
      const data = await client.request<T>(query, variables)
      return data
    } catch (error) {
      console.error('GraphQL Query Error:', error)
      throw error
    }
  }

  const mutation = async <T = unknown>(mutation: string, variables?: Record<string, unknown>): Promise<T> => {
    try {
      const data = await client.request<T>(mutation, variables)
      return data
    } catch (error) {
      console.error('GraphQL Mutation Error:', error)
      throw error
    }
  }

  return {
    client,
    query,
    mutation,
  }
}
