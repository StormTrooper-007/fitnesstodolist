import React, {useContext, useReducer} from 'react'
import ItemsContext from './context'
import itemsReducer from './reducer'

import PlanList from './components/PlanList'
import PlanForm from './components/PlanForm'


function App() {
  const initialState = useContext(ItemsContext)
  const [state, dispatch] = useReducer(itemsReducer, initialState)

  return(
    <ItemsContext.Provider value = {{state, dispatch}}>
     <div className="flex flex-row">
       <div className="w-1/4 h-screen">
         <PlanList/>
       </div>
       <div className= "px-2 w-3/4 bg-orange-300 h-screen">
         <PlanForm/>
       </div>
     </div>
    </ItemsContext.Provider>
  )
}

export default App

