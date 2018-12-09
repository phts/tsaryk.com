/* tslint:disable:ter-max-len */
import * as React from 'react'

export type AnyComponentClass<P> = React.ComponentClass<P> | React.StatelessComponent<P>

export type Hoc<WrappedComponentPropsType, ReturnComponentType> =
  (WrappedComponent: AnyComponentClass<WrappedComponentPropsType>) =>
    ReturnComponentType

export type CommonElementProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, {}>
export type InputElementProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type FormElementProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
export type ButtonElementProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, {}>
export type ImageElementProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, {}>
