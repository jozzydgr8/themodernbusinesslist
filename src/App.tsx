
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Pages/homePage/Home';
import { useEffect } from 'react';
import { UseDataContext } from './context/UseDataContext';
import { Loading } from './shared/Loading';

function App() {
  const {loading, dispatch} = UseDataContext();
  //fetch or check country
 useEffect(() => {
  dispatch({type:'setloading', payload:true});
  const getCountry = async () => {
    
    try {
      let countryId;

      const cachedId = localStorage.getItem("country");

      if (cachedId) {
        countryId = JSON.parse(cachedId);
      } else {
        const fetchCountry = await fetch(
          "https://modernbusinesslistserver.vercel.app/getCountry"
        );

        const json = await fetchCountry.json();
        const { countryId: fetchedCountryId } = json;

        if (!fetchedCountryId) {
          console.warn("No countryId returned");
          return;
        }

        countryId = fetchedCountryId;

        // cache it
        localStorage.setItem("country", JSON.stringify(countryId));
      }

      // fetch states
      const stateRes = await fetch(
        `https://modernbusinesslistserver.vercel.app/countries/${countryId}/states`
      );

      if (!stateRes.ok) {
        throw new Error("Failed to fetch states");
      }

      const stateJson = await stateRes.json();
      console.log(stateJson);

    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error));
    } finally {
      // ✅ Only set loading false after everything finishes
      dispatch({ type: "setloading", payload: false });
    }
  };

  getCountry();

}, []);
  //animation
  useEffect(()=>{
    const animation = ()=>{
      var leftAnimate = document.querySelectorAll('.animate-left');
      var rightAnimate = document.querySelectorAll('.animate-right');
      var downAnimate = document.querySelectorAll('.animate-down');
      var upAnimate = document.querySelectorAll('.animate-up');

      var windowHeight = window.innerHeight;
      rightAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationRight')
        }

      })
      leftAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationLeft')
        }

      })
      upAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationUp')
        }

      })
      downAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationDown')
        }

      })
    }
    window.addEventListener('scroll', animation);
  },[]);

  
//load 
   if(loading){
    return <Loading/>
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />

    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
