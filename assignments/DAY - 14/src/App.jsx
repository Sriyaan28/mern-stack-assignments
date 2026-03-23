import './App.css'
import ProductComponent from './components/productComponent.jsx';
import Navbar from './components/navbar.jsx';
import User from './components/user.jsx';
import Footer from './components/footer.jsx';
import Counter from './components/counter.jsx';
function App()
{
  //return product component
  // return productComponent();
  /*
    --------------Assignment - 1 --------------------
      <ProductComponent/>


    --------------Assignment -2 ---------------------
      <Navbar/>
      <User/>
      <Footer/>
   */
  return(
    <div className="bg-blue-50">
      <Navbar/>
      <User/>
      <Footer/>
      <hr />
      <Counter/>
    </div>
  )
}
export default App;