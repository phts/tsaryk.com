import React from 'react'
import {MobXProviderContext} from 'mobx-react'

import stores from 'stores'

export default function useStores(): typeof stores {
  return React.useContext(MobXProviderContext)
}
