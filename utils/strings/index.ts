export const takeFirstName = (fullname: string | null | undefined) => {
  return fullname ? fullname.split(' ')[0] : ''
}
