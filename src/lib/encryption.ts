// import crypto from "crypto"

// // Must be 32 characters for AES-256
// const ENCRYPTION_KEY = crypto
//   .createHash('sha256')
//   .update(String('my_secret_key')) // You can replace this with process.env.SECRET_KEY
//   .digest('base64')
//   .substring(0, 32)

// const IV = crypto.randomBytes(16) // 16 bytes for AES-CBC

// // Encrypt function
// function encrypt(text) {
//   const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), IV)
//   let encrypted = cipher.update(text, 'utf8', 'hex')
//   encrypted += cipher.final('hex')
//   return {
//     iv: IV.toString('hex'),
//     content: encrypted
//   }
// }

// // Decrypt function
// function decrypt(encrypted) {
//   const decipher = crypto.createDecipheriv(
//     'aes-256-cbc',
//     Buffer.from(ENCRYPTION_KEY),
//     Buffer.from(encrypted.iv, 'hex')
//   )
//   let decrypted = decipher.update(encrypted.content, 'hex', 'utf8')
//   decrypted += decipher.final('utf8')
//   return decrypted
// }

// // Example usage
// const encryptedData = encrypt('Hello World')
// console.log('Encrypted:', encryptedData)

// const decryptedData = decrypt(encryptedData)
// console.log('Decrypted:', decryptedData)
