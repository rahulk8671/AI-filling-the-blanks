import { useEffect } from 'react'
import './App.css'
import Gemini from './api/Gemini'

function App() {
  useEffect(() => {
    (async () => {
      const gemini = new Gemini()
      const content = await gemini.generateContent({ message: 'This is day I want to' })

      console.log('the content =>', content)
    })()
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
