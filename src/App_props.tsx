import React from 'react';
import UsingSimpleProps from './Components/BasicProps/UsingSimpleProps';
import './App.css'
import UsingObjectsAndArrayOfObjects from './Components/BasicProps/UsingObjectsAndArrayOfObjects';
import Heading from './Components/Advancedprops/Heading';
import Status from './Components/Advancedprops/SpecificPropValue';
import ChildrenInsideComponent from './Components/Advancedprops/ChildrenInsideComponent';


function App_props() {
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

      <UsingSimpleProps stringProp="Deepthi" booleanProp_isLoggedIn={true} numberProps={10} />
      <UsingObjectsAndArrayOfObjects names={nameList} />
      <Status status="loading" />
      <Heading>This is placeholder  </Heading> {// throws error -- add children in component heading as props} 
      }
      <ChildrenInsideComponent >  <Heading>This is placeholder  </Heading> </ChildrenInsideComponent>

      <UsingSimpleProps />
    </div>
  );
}

export default App_props;
