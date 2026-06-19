import express from "express";
const router = express.Router();

import Person from './../models/Person.js';


//post route to add a person
router.post('/',async(req,res)=>{
    try{
      const data = req.body  //Assuming the request body contains the person data

    //create a new person document using mongoose model
    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);

    }
    catch(err){
       console.log(err);
       res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/', async(req, res) => {
    const data= await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
})

router.get('/:workType', async(req, res)=>{
  try{
      const workType = req.params.workType;
      if(workType=='chef' || workType=='manager'|| workType=='waiter'){
          const response = await Person.find({work: workType});
          console.log('response fetched');
          res.status(200).json(response);
      }
      else{
          res.status(404).json({error: 'Invalid work type'});
      }
  }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'}); 
  }
})


router.put('/:id', async(req,res)=>{
    try{

        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        })
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'}); 
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data delete');
        res.status(200).json('Person deleted successfully');
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})


export default router;
