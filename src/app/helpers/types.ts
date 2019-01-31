/* tslint:disable:ter-max-len */
import * as React from 'react'

export type AnyComponentClass<P> = React.ComponentClass<P> | React.StatelessComponent<P>

export type Hoc<WrappedComponentPropsType, ReturnComponentType> =
  (WrappedComponent: AnyComponentClass<WrappedComponentPropsType>) =>
    ReturnComponentType

export type CommonElementProps<T> = React.HTMLAttributes<T>
export type InputElementProps = React.InputHTMLAttributes<HTMLInputElement>
export type FormElementProps = React.FormHTMLAttributes<HTMLFormElement>
export type ButtonElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>
export type ImageElementProps = React.ImgHTMLAttributes<HTMLImageElement>
