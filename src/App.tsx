
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Pages/homePage/Home';
import { useEffect } from 'react';
import { UseDataContext } from './context/UseDataContext';
import { UseAuthContext } from './context/UseAuthContext';
import { Loading } from './shared/Loading';
import { BrowseCategory } from './Pages/BrowseCategoryPage/BrowseCategory';
import { Session } from './Pages/session/Session';
import { MyBusiness } from './My business/MyBusiness';
import { ProtectedRoutes } from './shared/ProtectedRoutes';
import { ToastContainer } from 'react-toastify';
import { GuestRoutes } from './shared/GuestRoutes';
import { BusinessListing } from './Pages/BusinessPage/BusinessListing';

function App() {
  const {loading, dispatch} = UseDataContext();
  const {user, dispatch:userDispatch, loading:userLoading} = UseAuthContext();

  //useEffect for authentication
  useEffect(() => {
  userDispatch({ type: 'loading', payload: true });

  const data = localStorage.getItem('user');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      const now = new Date().getTime();
      const expiryDays = 3;
      const expiryTime = expiryDays * 24 * 60 * 60 * 1000; // days to ms

      if (now - parsed.savedAt < expiryTime) {
        // Not expired
        userDispatch({ type: 'getUser', payload: parsed.user });
      } else {
        // Expired
        localStorage.removeItem('user');
      }
    } catch (e) {
      console.error('Failed to parse user data:', e);
      localStorage.removeItem('user');
    }
  }

  userDispatch({ type: 'loading', payload: false });
}, [userDispatch]);
  //fetch or check name
 useEffect(() => {
  dispatch({type:'setloading', payload:true});
  const getCountry = async () => {
    
    try {
      let countryData = null; // will hold { countryId, name }

const cached = localStorage.getItem("businesslistcountry");

if (cached) {
  try {
    countryData = JSON.parse(cached);
  } catch (err) {
    console.warn("Failed to parse cached name:", err);
  }
}

if (!countryData) {
  try {
    const res = await fetch("https://modernbusinesslistserver.vercel.app/getCountry");
    const json = await res.json();
    const { countryId, name } = json;

    if (!countryId) {
      console.warn("No countryId returned");
    } else {
      countryData = { countryId, name };
      localStorage.setItem("businesslistcountry", JSON.stringify(countryData));
    }
  } catch (err) {
    console.error("Failed to fetch name:", err);
  }
}

// countryData now safely contains { countryId, name } or null
      // fetch states
      const stateRes = await fetch(
        `https://modernbusinesslistserver.vercel.app/countries/${countryData.countryId}/states`
      );

      if (!stateRes.ok) {
        throw new Error("Failed to fetch states");
      }

      const stateJson = await stateRes.json();
      console.log(stateJson);

    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error));
    } finally {
      dispatch({ type: "setloading", payload: false });
    }
  };

  getCountry();

}, [dispatch]);
  //fetch categories
useEffect(() => {
  dispatch({ type: "setloading", payload: true });

  const getCategories = async () => {
    try {
      const CACHE_KEY = "modernbusinesslistcategory";
      const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

      const cached = localStorage.getItem(CACHE_KEY);

      if (cached) {
        const parsed = JSON.parse(cached);

        const now = Date.now();

        if (now - parsed.timestamp < CACHE_TIME) {
          dispatch({
            type: "getbusinesscategory",
            payload: parsed.data,
          });
          return;
        }
      }

      const res = await fetch(
        "https://modernbusinesslistserver.vercel.app/categories/withSubCategories"
      );

      if (!res.ok) {
        throw new Error("error fetching categories");
      }

      const json = await res.json();

      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          data: json,
          timestamp: Date.now(),
        })
      );

      dispatch({ type: "getbusinesscategory", payload: json });

    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error));
    } finally {
      dispatch({ type: "setloading", payload: false });
    }
  };

  getCategories();
}, [dispatch]);
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
   if(loading || userLoading){
    return <Loading/>
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='categories' element={<Outlet/>}>
        <Route index element={<BrowseCategory/>} />
        <Route path=':catId/:id/business' element={<BusinessListing/>}/>
      </Route>
      <Route path='session' element={<GuestRoutes user={user}><Session/></GuestRoutes>}/>
      <Route path='myBusiness' element={<ProtectedRoutes user={user}><MyBusiness/></ProtectedRoutes>}/>

    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
