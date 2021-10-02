import { useState } from 'react'
import { UseAsyncActionOptions } from 'types/hooks/useAsyncAction'

/*
  Types: 
    <T>: The return type of the async function
    <P>: Async function params interface
*/

export default function useAsyncAction<T, P = any>(
  options?: UseAsyncActionOptions<T>
) {
  const [data, setData] = useState<null | T>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | Error>(null)

  const callAsync = (asyncFunc: (...args: P[]) => Promise<T>) => {
    setIsLoading(true)

    asyncFunc()
      .then((data: T) => {
        setData(data)
        setIsLoading(false)

        if (options?.onComplete) options.onComplete(data)
      })
      .catch((error: Error) => {
        setError(error)
        setIsLoading(false)
      })
  }

  return {
    callAsync,
    data,
    isLoading,
    error,
  }
}
