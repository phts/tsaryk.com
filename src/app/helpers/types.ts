import * as React from 'react'

export type AnyComponentClass<P> = React.ComponentClass<P> | React.StatelessComponent<P>

export type Hoc<WrappedComponentPropsType, ReturnComponentType> =
  (WrappedComponent: AnyComponentClass<WrappedComponentPropsType>) =>
    ReturnComponentType
