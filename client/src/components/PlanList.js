import React, {useContext} from 'react'
import ItemsContext from '../context'
import './PlanList.css'

function PlanList() {
    const {state, dispatch} = useContext(ItemsContext)
    const title = state.items.length > 0 ? `You have ${state.items.length} fitness goals` : "You have any current fitness plans"


    return(
        <div>
            <h3 className="mb-2">{title}</h3>
            <ul>
                {state.items.map(item => (
                    <li key={item.id} 
                    className="px-2 flex flex-col mb-4" >
                        <span>{item.day}</span>
                        <span>{item.toTrain}</span>
                        <span>{item.muscleGroup}</span> 
                        <span>{item.isFood}</span>
                        <div>
                            <input className="cursor-pointer" type="checkbox"
                             onClick = {()=> dispatch({type:"TOGGLE_COMPLETE", payload:item})}/>
                        </div>
                        <div className="flex flex-row space-x-4">
                        <button type="button" onClick={() => dispatch({type:"SET_CURRENT_ITEM", payload:item})}>Edit</button>
                        <button type="button" onClick={() => dispatch({type:"REMOVE_ITEM", payload:item})}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PlanList
