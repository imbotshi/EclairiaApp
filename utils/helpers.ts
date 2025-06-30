export const reverseString = (str: string) : string => {
  return str.split('').reverse().join('')
}

export const encodeString = (str: string): string => {
  return reverseString(btoa(str + process.env.APP_ENCRYPT_KEY))
}

export const decodeString = (strEncoded: string): string => {
  strEncoded = strEncoded ? strEncoded : ''
  const separator = '' + process.env.APP_ENCRYPT_KEY
  
  return atob(reverseString(strEncoded)).split(separator)[0]
}

function btoa(str: string): string {
  return Buffer.from(str).toString('base64')
}

function atob(b64Encoded: string): string {
  return Buffer.from(b64Encoded, 'base64').toString()
}