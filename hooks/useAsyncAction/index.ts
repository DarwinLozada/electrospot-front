import { useState } from 'react'

/*
  Types: 
    <T>: The return type of the async function
    <P>: Async function params interface
*/

export default function useAsyncAction<T, P = any>() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | Error>(null)

  const callAsync = (asyncFunc: (...args: P[]) => Promise<T>) => {
    setIsLoading(true)

    asyncFunc()
      .then((value: T) => {
        setIsLoading(false)
        return value
      })
      .catch((error: Error) => {
        setError(error)
        setIsLoading(false)
      })
  }

  return {
    callAsync,
    isLoading,
    error,
  }
}
