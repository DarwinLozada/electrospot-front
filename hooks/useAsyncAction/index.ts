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

/**
 * Hook that allows doing async calls in any moment and provides
 * several ways to consume the state of the process.
 *
 * @param options The hook options.
 * @returns - The `callAsync` function to do asynchronous processes.
 * - The `data` returned by the callback.
 *  - The `isLoading` and `error` state describers.
 */
export default function useAsyncAction<T, P = any>(
  options?: UseAsyncActionOptions<T>
) {
  const onComplete = options?.onComplete
  const onError = options?.onError

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
