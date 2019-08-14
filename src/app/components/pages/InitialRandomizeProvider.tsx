import React, {useEffect} from 'react'

import useStores from 'hooks/useStores'

const InitialRandomizeProvider: React.FunctionComponent = ({children}) => {
  const {listStore, widthsStore} = useStores()
  useEffect(() => {
    widthsStore.randomize(listStore.list)
  }, [])
  return <>{children}</>
}

export default InitialRandomizeProvider
