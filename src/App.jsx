import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/coffeeCard';

function App() {
  const allCoffee = useLoaderData();

  return (
    <div className=' m-20'>
      <p className=' text-center'> --- Sip & Savor --- </p>
      <h2 className=' text-center text-5xl font-bold my-2'>Starbucks Popular Products</h2>
      <div className='grid md:grid-cols-2 gap-10 mt-10'>
        {
          allCoffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
