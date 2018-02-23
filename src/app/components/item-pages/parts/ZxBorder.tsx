import * as React from 'react'
import styled from 'styled-components'
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
  background-color: white;
  height: calc(100% - 10em);
  width: calc(100% - 10em);
  z-index: 1;

  ${media.max.smartphone`
    height: calc(100% - 5em);
    width: calc(100% - 5em);
  `}
`

const Border = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
`

const PreloadingStep = styled.div`
  animation: preloading 4s step-end forwards;
  background-color: cyan;
  display: block;
  height: 100%;
  position: absolute;
  visibility: hidden;
  width: 100%;

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
  animation: starting 5s step-end 4s forwards;
  background-color: cyan;
  display: block;
  height: 100%;
  position: absolute;
  visibility: hidden;
  width: 100%;

  &::after {
    animation: telnyashka 0.8s linear infinite;
    background-image: linear-gradient(to bottom,\
                                      rgba(255, 0, 0, 0) 0%,
                                      rgba(255, 0, 0, 0) 49%,
                                      rgba(255, 0, 0, 1) 50%,
                                      rgba(255, 0, 0, 1) 100%);
    background-position: top left;
    background-repeat: repeat-y;
    background-size: 100% 2em;
    content: '';
    display: block;
    height: 100%;
    position: relative;
    width: 100%;

    ${media.min.desktop`
      background-size: 100% 4em;
    `}
  }

  @keyframes telnyashka {
    0% {
      background-position-y: 0;
    }
    100% {
      background-position-y: -4em
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
  animation: loading 10s step-end 9s infinite;
  background-color: yellow;
  display: block;
  height: 100%;
  position: absolute;
  visibility: hidden;
  width: 100%;

  &::before {
    animation: sample1 .25s step-start infinite;
    background-image: linear-gradient(to bottom,
                                      blue 0%,
                                      blue 24%,
                                      rgba(0, 0, 0, 0) 25%);
    background-position: top left;
    background-repeat: repeat-y;
    background-size: 100% 2em;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    ${media.min.desktop`
      animation: sample1-desktop .25s step-start infinite;
      background-size: 100% 4em;
    `}
  }

  &::after {
    animation: sample2 1s step-start infinite;
    background-image: linear-gradient(to bottom,
                                      blue 0%,
                                      blue 24%,
                                      rgba(0, 0, 0, 0) 25%);
    background-position: top left;
    background-repeat: repeat-y;
    background-size: 100% 2em;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    ${media.min.desktop`
      animation: sample2-desktop 1s step-start infinite;
      background-size: 100% 4em;
    `}
  }

  @keyframes sample1 {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: 0.5em;
    }
    50% {
      background-position-y: 1em;
    }
    75% {
      background-position-y: 1.5em;
    }
    100% {
      background-position-y: 2em;
    }
  }

  @keyframes sample2 {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: -0.5em;
    }
    50% {
      background-position-y: -1em;
    }
    75% {
      background-position-y: -1.5em;
    }
    100% {
      background-position-y: -2em;
    }
  }

  @keyframes sample1-desktop {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: 1em;
    }
    50% {
      background-position-y: 2em;
    }
    75% {
      background-position-y: 3em;
    }
    100% {
      background-position-y: 4em;
    }
  }

  @keyframes sample2-desktop {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: -1em;
    }
    50% {
      background-position-y: -2em;
    }
    75% {
      background-position-y: -3em;
    }
    100% {
      background-position-y: -4em;
    }
  }

  @keyframes loading {
    0% {
      visibility: visible;
    }
  }
`

export default ZxBorder