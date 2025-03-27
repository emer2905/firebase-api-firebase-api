const admin = require ('firebase-admin')
const collectioName = 'userCollection';

const addUser = async (req,res)=>{

    const db = admin.firestore();
    try {
        const data = req.body;
        data.FechaCreacion = new Date();        
        await db.collection(collectioName).add(data);
        res.status(200).send({
            message:'added'
        });
    }
    catch(error){
        res.status(404).json(error)
    }
}

const getUser = async (req,res)=>{

    const db = admin.firestore();
     try {
        
         const email = req.params.email;     
         const usersCollection = db.collection(collectioName); 
         const snapshot = await usersCollection.where('Email', '==', email).get();
    
        if (snapshot.empty) {
          return res.status(204).json({ message: 'No users found with this email' });
        }
    
        const user = snapshot.docs.map(doc => doc.data());

         res.status(200).json(user);
     }
     catch(error){
        res.status(404).json(error)
    }
 }

 module.exports = {
    addUser,
    getUser
 }