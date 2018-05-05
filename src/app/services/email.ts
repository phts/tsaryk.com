import * as emailjs from 'emailjs-com'

emailjs.init('user_C3T41f8F0pv1ekwT39nYw')

class EmailService {
  send(text: string) {
    return emailjs.send('tsarik.me', 'tsarik_me', {
      text,
    })
  }
}

export default new EmailService()
