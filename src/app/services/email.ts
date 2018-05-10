import * as emailjs from 'emailjs-com'
import browserLocale from 'browser-locale'

import langStore from 'app/stores/langStore'

emailjs.init('user_C3T41f8F0pv1ekwT39nYw')

type TemplateParams = {
  appLang: string,
  innerHeight: number,
  innerWidth: number,
  locale: string,
  localTime: string,
  referrer: string,
  screenHeight: number,
  screenWidth: number,
  text: string,
  userAgent: string,
}

class EmailService {
  send(text: string) {
    const params: TemplateParams = {
      appLang: langStore.lang,
      innerHeight,
      innerWidth,
      locale: browserLocale(),
      localTime: new Date().toString(),
      referrer: document.referrer,
      screenHeight: screen.height,
      screenWidth: screen.width,
      text,
      userAgent: navigator.userAgent,
    }
    return emailjs.send('tsarik.me', 'tsarik_me', params)
  }
}

export default new EmailService()
