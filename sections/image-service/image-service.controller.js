const { convertImageUseCase } = require("./image-service.usecase");

const convertImageController = async( req,res) =>{
    try {
        const {type , w , h , q , ...others}  = req.query;
        const response = await convertImageUseCase({type,w,h,q,others});
        res.status(200).json({message:"Convert success." , response:response});
    } catch (error) {
        
        res.status(400).json({message:"Convert failed." , error:error.message})
    }
}

const compressImageController = async(req,res)=>{
  try {
    const response = await compressUseCase();
    res.status(200).json({message:"Compress success." , response:response});
  } catch (error) {
    res.status(400).json({message:"Compress failed." , error:error.message})
  }
}


module.exports={convertImageController,compressImageController}