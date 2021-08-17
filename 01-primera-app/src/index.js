import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'
import './index.css'
import VideoPlayer from './videoPlayer'

const divRoot = document.querySelector('#root')

//ReactDOM.render(<PrimeraApp saludo="hola soy goku"/>, divRoot)
ReactDOM.render( < VideoPlayer src = "http://localhost:8000/live/STREAM_NAME.flv" / > , divRoot)