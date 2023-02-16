import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// const stripePromise = loadStripe("pk_test_51HeTsAKnASpiKD9XVR6t2MPQyT5ZtI0mL6IHHUJTaojXagEuVsFC1buiRIswJXPcL1OEAeCzTrm41lcs4qBzlhbN00pAYOt0pm");

function App() {
  
  /*const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);*/

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
