import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

// function CountriesLoad() {
//   const [countries, setcountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setcountries(data))
//   }, [])
//   return (
//     <div>
//       <h1>Visiting Every Countries Of The World</h1>
//       <h2>Available Countries:{countries.length}</h2>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h4>Country-Name:- {props.name}</h4>
//       <h6>Population:- {props.population}</h6>
//     </div>
//   )
// }

export default App;
