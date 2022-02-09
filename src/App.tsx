import React from 'react';
import UsingSimpleProps from './Components/BasicProps/UsingSimpleProps';
import './App.css'
import UsingObjectsAndArrayOfObjects from './Components/BasicProps/UsingObjectsAndArrayOfObjects';


function App() {
  const nameList = [
    {
      firstName: 'Deepthi',
      lastName: 'Sai',

    },
    {
      firstName: 'Abhinav',
      lastName: 'Vadrevu',
    }
  ]
  return (
    <div className="App">
      {/* <UsingSimpleProps stringProp="Deepthi" booleanProp_isLoggedIn={true} numberProps={10} /> */}
      <UsingObjectsAndArrayOfObjects names={nameList} />
    </div>
  );
}

export default App;
