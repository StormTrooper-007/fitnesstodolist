import React, {useState, useEffect, useContext} from 'react'
import ItemsContext from '../context'

function PlanForm() {
    let InitialState =
    {
        day:'',
        toTrain:'',
        muscleGroup:'',
        isFood:''
    }

    const {state:{currentItem = {}}, dispatch} = useContext(ItemsContext)
    const [values, setValues] = useState(InitialState)

    useEffect(() => {
        if(currentItem.InitialState){
            setValues(currentItem.InitialState)
        }
    }, [currentItem.id])


    function handleChange(e){
        e.persist()
        setValues(previousValues => ({
            ...previousValues,
            [e.target.name]:e.target.value
        }))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:'ADD_ITEM', payload:values})
        setValues(InitialState)
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                  <label>
                      Day
                     <input type="text" name = "day" value={values.day} onChange={handleChange}/> 
                  </label>
              </div>
            </div>
            <div>
                <div>
                    <label>Training Exercise</label>
                    <textarea className="resize border rounded 
                    focus:outline-none focus:shadow-outline" name="toTrain" value={values.toTrain} onChange={handleChange}></textarea>
                    <p>Describe what training exercises would you like to do today?</p>
                    <div>
                        <label>Muscle group</label>
                        <input type="text" name = "muscleGroup" value={values.muscleGroup} onChange={handleChange}/>
                        <p>what muscle group would you like to train today?</p>
                    </div>
                    <div>
                        <label>Nourishment</label>
                        <input type="text" name = "isFood" value={values.isFood} onChange={handleChange}/>
                        <p>what would you like to eat today?</p>
                    </div>
                </div>
            </div>
            <button className= "bg-red-600 rounded py-2 px-4" type="submit">Submit</button>
          </form>
        </div>
    )
}

export default PlanForm
