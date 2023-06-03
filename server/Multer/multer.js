import multer, { diskStorage } from 'multer';

const storage= multer.diskStorage({destination: (req,file,cb)=>{
    cb(null, 'Images')
}, filename:(req,file,cb)=>{
    cb(null,file.fieldname+'_'+Date.mow())
}});
const upload=multer({storage:storage}).single('fileName');

export default upload;