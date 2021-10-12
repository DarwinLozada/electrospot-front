import { useState } from 'react'

/*
  Types: 
    <T>: The return type of the async function
    <P>: Async function params interface
*/

export interface UseAsyncActionOptions<T> {
  onComplete?: (data: T) => any
  onError?: (error: Error) => any
}

export default function useAsyncAction<T, P = any>(
  options: UseAsyncActionOptions<T>
) {
  const { onComplete, onError } = options

  const [data, setData] = useState<null | T>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | Error>(null)

  const callAsync = (asyncFunc: (...args: P[]) => Promise<T>) => {
    setIsLoading(true)

    asyncFunc()
      .then((data: T) => {
        setData(data)
        setIsLoading(false)

        if (onComplete) {
          onComplete(data)
        }
      })
      .catch((error: Error) => {
        setError(error)
        setIsLoading(false)
        if (onError) {
          onError(error)
        }
      })
  }

  return {
    callAsync,
    data,
    isLoading,
    error,
  }
}
