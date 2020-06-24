const express = require('express')
const router = express.Router()

//item model
Item = require('../../models/Item')

//@routes Get api/items
router.get('/', (req, res) => {
    Item.find()
    .sort({date:-1})
    .then(items => res.json(items))
})

//@routes Get api/items
router.post('/', (req, res) => {
    const newItem = new Item({
        day:req.body.day,
        toTrain:req.body.toTrain,
        muscleGroup:req.body.muscleGroup,
        isFood:req.body.isFood,
        isCompleted:req.body.isCompleted
    })
    newItem.save().then(item => res.json(item))
})

//@routes delete api/items
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}))
})


module.exports = router