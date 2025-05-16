
import './App.css'

function App() {
  fetch(`https://api.frankfurter.dev/v1/latest?base=usd&symbols=inr`)
        .then((res)=>res.json())
        .then((res)=> console.log(res.base))
  return (
    <>
      <h1 className='text-xl-300 bg-orange-500'>Currency Converter</h1>
    </>
  )
}

export default App
