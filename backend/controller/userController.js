import sam from '../model/usermodel.js';

export const create=async(req,res)=>{
    try{
        let userdata=new sam(req.body);
        let {email}=userdata
        const userExist=await sam.findOne({email});
        if(userExist)
        {
            return res.status(400).json({message:"user already exist"})
        }
        const saveduser=await userdata.save();
        res.status(200).json({saveduser});

    }
    catch(err)
    {
        res.status(500).json({error:"error"})
    }
}

export const fetch=async(req,res)=>{
    try{
        const users=await sam.find();
        if(users.length===0)
        {
            return res.status(400).json({messaage:"no user found"});
        }
        res.status(200).json({users})
    }
    catch(err)
    {
        res.status(404).json({error:"internal server error"})
    }
}

export const fetchpar=async(req,res)=>{
    try{
        const id=req.params.id;
        const users=await sam.findOne({_id:id});
        if(users.length===0)
        {
            return res.status(400).json({messaage:"no user found"});
        }
        res.status(200).json({users})
    }
    catch(err)
    {
        res.status(404).json({error:"internal server error"})
    }
}
export const update=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await sam.findOne({_id:id});
        if(!userExist)
        {
            return res.status(500).json({error:"user not found"})
        }
        const updateuser=await sam.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updateuser})

    }
    catch(err)
    {
        res.status(500).json({error:"internal server error"});
    }
}

export const delet=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await sam.findOne({_id:id});
        if(!userExist)
        {
            return res.status(500).json({error:"user not found"})
        }
      await sam.findByIdAndDelete(id);
        res.status(200).json({message:'user deleted successfully'})

    }
    catch(err)
    {
        res.status(500).json({error:"internal server error"});
    }
}