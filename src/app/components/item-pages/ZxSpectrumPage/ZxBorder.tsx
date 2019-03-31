import * as React from 'react'
import styled, {css} from 'app/styled-components'
import {media} from 'app/helpers/css'

const ZxBorder: React.StatelessComponent = ({children}) => (
  <Border>
    <PreloadingStep/>
    <StartingStep/>
    <LoadingStep/>
    <Content>
      {children}
    </Content>
  </Border>
)

const Content = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  min-height: calc(100% - 10rem);
  width: calc(100% - 10rem);
  z-index: 1;

  ${media.max.smartphone`
    min-height: calc(100% - 5rem);
    width: calc(100% - 5rem);
  `}
`

const Border = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
  position: relative;
`

const stepCommonCss = css`
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  visibility: hidden;
  width: 100%;
`

const loadingOverlayCommonCss = css`
  background-position: top left;
  background-repeat: repeat-y;
  background-size: 100% 2rem;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  ${media.min.desktop`
    background-size: 100% 4rem;
  `}
`

const PreloadingStep = styled.div`
  ${stepCommonCss}

  animation: preloading 4s step-end forwards;
  background-color: cyan;

  @keyframes preloading {
    0% {
      visibility: visible;
    }
    40% {
      background-color: red;
    }
    75% {
      background-color: cyan;
    }
    100% {
      visibility: hidden;
    }
  }
`

const StartingStep = styled.div`
  ${stepCommonCss}

  animation: starting 5s step-end 4s forwards;
  background-color: cyan;

  &::after {
    ${loadingOverlayCommonCss}

    animation: telnyashka 0.8s linear infinite;
    background-image: linear-gradient(to bottom,\
                                      rgba(255, 0, 0, 0) 0%,
                                      rgba(255, 0, 0, 0) 49%,
                                      rgba(255, 0, 0, 1) 50%,
                                      rgba(255, 0, 0, 1) 100%);
  }

  @keyframes telnyashka {
    0% {
      background-position-y: 0;
    }
    100% {
      background-position-y: -4rem
    }
  }

  @keyframes starting {
    0% {
      visibility: visible;
    }
    100% {
      visibility: hidden;
    }
  }
`

const LoadingStep = styled.div`
  ${stepCommonCss}

  animation: loading 10s step-end 9s infinite;
  background-color: yellow;

  &::before {
    ${loadingOverlayCommonCss}

    animation: sample1 .25s step-start infinite;
    background-image: linear-gradient(to bottom,
                                      blue 0%,
                                      blue 24%,
                                      rgba(0, 0, 0, 0) 25%);

    ${media.min.desktop`
      animation: sample1-desktop .25s step-start infinite;
    `}
  }

  &::after {
    ${loadingOverlayCommonCss}

    animation: sample2 1s step-start infinite;
    background-image: linear-gradient(to bottom,
                                      blue 0%,
                                      blue 24%,
                                      rgba(0, 0, 0, 0) 25%);

    ${media.min.desktop`
      animation: sample2-desktop 1s step-start infinite;
    `}
  }

  @keyframes sample1 {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: 0.5rem;
    }
    50% {
      background-position-y: 1rem;
    }
    75% {
      background-position-y: 1.5rem;
    }
    100% {
      background-position-y: 2rem;
    }
  }

  @keyframes sample2 {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: -0.5rem;
    }
    50% {
      background-position-y: -1rem;
    }
    75% {
      background-position-y: -1.5rem;
    }
    100% {
      background-position-y: -2rem;
    }
  }

  @keyframes sample1-desktop {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: 1rem;
    }
    50% {
      background-position-y: 2rem;
    }
    75% {
      background-position-y: 3rem;
    }
    100% {
      background-position-y: 4rem;
    }
  }

  @keyframes sample2-desktop {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: -1rem;
    }
    50% {
      background-position-y: -2rem;
    }
    75% {
      background-position-y: -3rem;
    }
    100% {
      background-position-y: -4rem;
    }
  }

  @keyframes loading {
    0% {
      visibility: visible;
    }
  }
`

export default ZxBorder
