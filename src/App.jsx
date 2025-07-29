import Navbar from './components/Navbar'
import './styles/global.css'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        <h2>Bienvenido a nuestra tienda</h2>
        <p>Explora nuestros productos próximamente...</p>
      </main>
    </>
  )
}

export default App
