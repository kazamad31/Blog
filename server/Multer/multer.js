import multer, { diskStorage } from 'multer';

const storage= multer.diskStorage({destination: (req,file,cb)=>{
    cb(null, 'uploads/');
}, filename:(req,file,cb)=>{
    const fileOriginalName= Date.now()+'_'+file.originalname;
    cb(null,fileOriginalName);
}});
const upload=multer({storage:storage}).single('file');
const uploadMiddleware =(req,res,next)=>{
    upload(req,res,(err)=>{
        if(err){
            return next(err);
        }
        req.uploadedFile = req.file.filename;
        return next();

    });
}

export default uploadMiddleware;