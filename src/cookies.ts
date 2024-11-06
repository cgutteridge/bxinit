const name = 'dudes'
const oneDay: number = 24 * 60 * 60 * 1000;

export function setCookie (value: object) {
  const date = new Date()
  date.setTime(date.getTime() + oneDay * 365 * 30 ) // 30 years from now
  const expires = 'expires=' + date.toUTCString()
  const jsonValue = JSON.stringify(value)
  document.cookie = `${name}=${jsonValue};${expires};path=/;SameSite=Strict`
}

export function getCookie (): object | undefined {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) {
      const jsonValue = c.substring(nameEQ.length, c.length)
      return JSON.parse(jsonValue)
    }
  }
  return undefined
}
