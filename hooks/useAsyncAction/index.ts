import { useState } from 'react'

/*
  Types: 
    <T>: The return type of the async function
    <P>: Interface for onComplete callback params
*/

export interface UseAsyncActionOptions<T, P> {
  onComplete?: (data: T, onCompleteParams: P) => any
  onError?: (error: Error) => any
}

export type CallAsync<T, P> = (
  asyncFunc: () => Promise<T>,
  onCompleteParams?: P
) => void

/**
 * Hook that allows doing async calls in any moment and provides
 * several ways to consume the state of the process.
 *
 * @param options The hook options.
 * @returns - The `callAsync` function to do asynchronous processes.
 * - The `data` returned by the callback.
 *  - The `isLoading` and `error` state describers.
 */
export default function useAsyncAction<T, P = {}>(
  options?: UseAsyncActionOptions<T, P>
) {
  const onComplete = options?.onComplete
  const onError = options?.onError

  const [data, setData] = useState<null | T>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | Error>(null)

  const callAsync: CallAsync<T, P> = (asyncFunc, onCompleteParams) => {
    setIsLoading(true)

    asyncFunc()
      .then((data: T) => {
        setData(data)
        setIsLoading(false)

        if (onComplete) {
          onComplete(data, onCompleteParams as P)
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
