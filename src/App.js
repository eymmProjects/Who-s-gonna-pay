import React from 'react';
import { MyProvider } from './context';
import User from './components/user';

const App = () =>{
  
  const users =[
    {id:1, name:'Francis'},
    {id:2, name:'Kata'},
    {id:3, name:'Lisa'}
  ]

    return(
      <>
          <MyProvider>
            <User/>

          </MyProvider>

      </>
    )
}



export default App;

