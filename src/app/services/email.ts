import {init, send} from '@emailjs/browser'
import browserLocale from 'browser-locale'

import langStore from 'stores/langStore'

const SERVICE_ID = 'feedback_tsaryk_com'
const TEMPLATE_ID = 'tsaryk_com'

init('user_C3T41f8F0pv1ekwT39nYw')

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type TemplateParams = {
  appLang: string
  innerHeight: number
  innerWidth: number
  locale: string
  localTime: string
  referrer: string
  screenHeight: number
  screenWidth: number
  text: string
  userAgent: string
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
    return send(SERVICE_ID, TEMPLATE_ID, params)
  }
}

export default new EmailService()
