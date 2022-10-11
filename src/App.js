import React, { useState } from 'react'
import Header from './components/Header.js'
import Home from './Pages/Home.js'
import MyItem from './Pages/MyItem.js'
import Howto from './Pages/Howto.js'
import ItemPage from './Pages/ItemPage.js'
import { Routes, Route } from "react-router-dom"
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./Graph";
import userToken from "./sharedData"
import './components/stylesheets/customcss/Header.css'
import './components/stylesheets/customcss/itemCard.css'
import './components/stylesheets/customcss/itemPage.css'
import './components/stylesheets/css/em-unity-1.7.1.css'
import './components/stylesheets/css/em-unity-1.7.1.min.css'
import { PageLayout } from './components/PageLayout.js'



function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
      console.error(e);
    });
  }
  const name = accounts[0] && accounts[0].name;

  // function RequestProfileData() {
  const request = {
    ...loginRequest,
    account: accounts[0]
  };

  // Silently acquires an access token which is then attached to a request for Microsoft Graph data
  instance.acquireTokenSilent(request).then((response) => {
    // callMsGraph(response.accessToken).then(response => setGraphData(response));
    sessionStorage.setItem('Mytoken', response.accessToken)
  }).catch((e) => {
    instance.acquireTokenPopup(request).then((response) => {
      // callMsGraph(response.accessToken).then(response => setGraphData(response));
    });
  });

  return (
    <>
      {/* <h5 className="card-title">Welcome {name}</h5> */}
      {/* {graphData ? 
              <ProfileData graphData={graphData} />
              :
              <button variant="secondary" onClick={RequestProfileData}>Request Profile Information</button>
          } */}
    </>
  );
};

function App() {
  return (
    <>

      <Header />
      <PageLayout>
        <AuthenticatedTemplate>
          <ProfileContent />
          <div className='#'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
            </Routes>
          </div>
          <div className='#'>
            <Routes>
              <Route path='/howto' element={<Howto />}></Route>
            </Routes>
          </div>
          <div className='#'>
            <Routes>
              <Route path='/myitem' element={<MyItem />}></Route>
            </Routes>
          </div>
          <Routes>
            <Route path='/item/:id' element={<ItemPage />}></Route>
          </Routes>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p>You are not signed in! Please sign in.</p>
        </UnauthenticatedTemplate>
      </PageLayout>


    </>
  );
}


export default App