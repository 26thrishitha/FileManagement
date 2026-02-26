import multer, { Options } from 'multer';
import path from 'path';
import fs from 'fs';


const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

export const fileUploadOptions: Options = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
            // Naming convention  
            const cleanName = file.originalname.replace(/\s+/g, '-');
            cb(null, `${Date.now()}-${cleanName}`);
        }
    }),
    fileFilter: (req, file, cb) => {
        // Validation: Allow only PDF, Video, and Audio
        const allowedMimeTypes = [
            'application/pdf',
            'video/mp4', 'video/mpeg', 'video/quicktime',
            'audio/mpeg', 'audio/wav', 'audio/mp3'
        ];

        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only PDF, Video, and Audio are allowed.'));
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 50 //50MB
    }
};