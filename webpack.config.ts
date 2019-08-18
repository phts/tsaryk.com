import prod from './config/webpack.prod'
import dev from './config/webpack.dev'
import {Options} from './config/webpack.common'

export default (env: Options = {}) => {
  if (env.prod) {
    return prod(env)
  } else {
    return dev(env)
  }
}
