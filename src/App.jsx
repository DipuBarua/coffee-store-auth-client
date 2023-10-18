import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/coffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffee = useLoaderData();
  const [allCoffee, setAllCoffee] = useState(loadedCoffee);

  return (
    <div className=' m-20'>
      <p className=' text-center'> --- Sip & Savor --- </p>
      <h2 className=' text-center text-5xl font-bold my-2'>Starbucks Popular Products</h2>
      <Link to={'/signUp'}><button className=' btn btn-ghost'>sign up</button></Link>
      <Link to={'/addCoffee'}><button className=' btn btn-ghost'>Add Coffee</button></Link>
      <div className='grid md:grid-cols-2 gap-10 mt-10'>
        {
          allCoffee.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            allCoffee={allCoffee}
            setAllCoffee={setAllCoffee}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
