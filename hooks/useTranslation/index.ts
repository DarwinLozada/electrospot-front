import useTranslation from 'next-translate/useTranslation'

export type AvaliableNamespaces = 'common' | 'feedback'

export default function useTranslations(namespace: AvaliableNamespaces) {
  const { t: translate, lang } = useTranslation(namespace)

const t: Tr =  () => {

}

  return {
    t,
  }
}
