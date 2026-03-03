import path from 'path';
import fs from 'fs';
import { Express } from 'express';

export class FileService {

    uploadFile(file: Express.Multer.File) {
        if (!file) {
            return { message: 'File is required!' };
        }
 // Here you can add additional logic to save file information to a database if needed
        return {
            message: 'File uploaded successfully',
            filename: file.filename,
            path: file.path
        };
    }

    getAllFiles() {
        const uploadPath = path.join(process.cwd(), 'uploads');

        if (!fs.existsSync(uploadPath)) {
            return { files: [] };
        }

        const files = fs.readdirSync(uploadPath);

        return {
            count: files.length,
            files: files
        };
    }
}