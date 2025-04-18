import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled , setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    console.log('enabled', enabled)
    const handleMove = (event) => {
    const { clientX, clientY} = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <h1>Mouse Follower</h1>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'}</button>
    </>
  )
}

function App() {

  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <FollowMouse/>}
      <button onClick={() => setMounted(!mounted)}>{mounted ? 'Desactivar' : 'Activar'} Componente</button>
    </main>
  )
}

export default App
