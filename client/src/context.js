import React from 'react'

const ItemsContext = React.createContext({
    items:[
       {
        id:1,
        day: 'Monday',
        toTrain:'Bicep curls, Lat pull down',
        muscleGroup:'Biceps',
        isFood:'Potatoes',
        isCompleted: false
    },
    {
        id:2,
        day: 'Tuesday',
        toTrain:'Bench press',
        muscleGroup:'Chest',
        isFood:'Beef lavaganza',
        isCompleted:false
    },
    {
        id:3,
        day: 'Wednesday' , 
        toTrain:'Triceps extensions',
        muscleGroup:'Triceps',
        isFood:'Chicken soup',
        isCompleted:false
    }
    ],
    currentItem: {}
})

export default ItemsContext