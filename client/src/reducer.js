import { v4 as uuidv4 } from 'uuid'

function reducer(state, action){
    switch(action.type){
        case "ADD_ITEM":
            const  newItem = {
                id:uuidv4(),
                day:action.payload.day,
                toTrain:action.payload.toTrain,
                muscleGroup:action.payload.muscleGroup,
                isFood:action.payload.isFood,
                isCompleted:false
            }
        
            const addedItems = [...state.items, newItem]

            return{
                ...state,
                items:addedItems
            }

        case "SET_CURRENT_ITEM":
            return{
                ...state,
                currentItem: action.payload
            }   

        case "TOGGLE_COMPLETE":
        const toggledItems = state.items.map(i =>
             i.id === action.payload.id ? {...action.payload, isCompleted:!action.payload.isCompleted}:i
             )
             return {
                 ...state,
                 items:toggledItems
             }
        case "REMOVE_ITEM":
            const filteredItems = state.items.filter(i => i.id !== action.payload.id)
            return {
                ...state,
                items:filteredItems
            }
            default:
                return state
    }
}

export default reducer