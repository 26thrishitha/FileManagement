import path from 'path';
import fs from 'fs';
import { Express } from 'express';

export class FileService {

    uploadFile(file: Express.Multer.File) {
        if (!file) {
            return { message: 'File is required!' };
        }

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