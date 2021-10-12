export const takeFirstName = (fullname: string | null | undefined) => {
  return fullname ? fullname.split(' ')[0] : ''
}

export const filterToTranslate = (str: string) => {
  let newString = str
  newString = newString.replaceAll(' ', '')
  newString = newString.replaceAll('.', '')
  newString = newString.replaceAll(':', '')

  return newString
}
