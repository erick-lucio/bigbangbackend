const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports={
    dest:path.resolve(__dirname,'..','imgRepository'),
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,path.resolve(__dirname,'..','imgRepository'))
        },
        filename:(req,file,cb)=>{
            crypto.randomBytes(16,(err,hash)=>{
                if(err)cb(err);

                const fileName = hash.toString("hex")+file.originalname
                req.filename = fileName
                cb(null,fileName  )
            })
            
        }
    }),
    limits:{
        fileSize: 5 * 1024 * 1024
    },
    fileFilter:(req,file,cb)=>{
        const allowMimes = [
            'image/jpeg',
            'image/jpg',
            'image/png'
        ];
        if(allowMimes.includes(file.mimetype)){
            cb(null,true)
        }else{
            cb(new Error('Tipo nao aceito'))
        }
    }

}