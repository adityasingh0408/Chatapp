import mongoose from "mongoose";
const conversationschema = mongoose.Schema({
    participants:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
}],
   messages : [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"message",
    default:[]
   },
   ]
},{timestamps:true});

const conversation = mongoose.model("conversation" , conversationschema);
export default conversation