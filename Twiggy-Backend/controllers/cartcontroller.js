import usermodel from "../models/usermodel.js";


//add items to user cart

const addToCart = async(req,res) => {
    try{
        let userData = await usermodel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await usermodel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true,message:"Added To Cart"});
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove items from user cart
const removeFromCart = async (req,res) => {
    try{
        let userData = await usermodel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]){
            cartData[req.body.itemId] -= 1;
        }
        await usermodel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed From Cart"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//fetchuser cart data

const getCart = async (req, res) => {
    try {
        let userData = await usermodel.findById(req.body.userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
}

export { addToCart, getCart, removeFromCart };
