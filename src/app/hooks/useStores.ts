import React from 'react'
import {MobXProviderContext} from 'mobx-react'

import stores from 'stores'

type Stores = typeof stores

export default function useStores(): Stores {
  return React.useContext(MobXProviderContext) as Stores
}
