const admin = require ('firebase-admin')
const collectionName = 'taskCollection'

const addTask = async (req,res)=>{

    const db = admin.firestore();
    try {
        const data = req.body;
        data.FechaCreacion = new Date();        
        await db.collection(collectionName).add(data);
        res.status(200).send({
            message: "added"
         });
    }
    catch(error){
        res.status(404).json(error)
    }
}

const getTasks = async (req,res)=>{

    const db = admin.firestore();
     try {
         const snapshot = await db.collection(collectionName).get()
         const data = snapshot.docs.map(doc=>({id: doc.id,         
            FechaCreacionFormatted : doc.data().FechaCreacion.toDate(),   
             ...doc.data()}))

         res.status(200).json(data);
     }
     catch(error){
         res.status(404).json(error);
    }
 }

const getTask = async (req,res)=>{

    const db = admin.firestore();
     try {
         const id = req.params.id;
         const task = await db.collection(collectionName).doc(id);         
         const data = await task.get();
         res.status(200).json(data.data());
     }
     catch(error){
         res.status(404).json(error);
    }
 }

 
const updateTask = async (req,res)=>{

    const db = admin.firestore();
     try {
         const id = req.params.id;
         const data = req.body;
         const task = await db.collection(collectionName).doc(id);         
         await task.update(data);
         res.status(200).json({
            message: "updated"
         });
     }
     catch(error){
         res.status(404).json(error);
    }
 }

 const deleteTask =  async (req,res)=>{

    const db = admin.firestore();
     try {
         const id = req.params.id;
         const task = await db.collection(collectionName).doc(id).delete();         
         res.status(200).send({
            message: "deleted"
         });
     }
     catch(error){
         res.status(404).json(error);
    }
 }

module.exports = {
    addTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}