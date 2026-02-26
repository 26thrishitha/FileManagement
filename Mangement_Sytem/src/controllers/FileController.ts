import { JsonController, Post, Get, UploadedFile } from 'routing-controllers';
import { fileUploadOptions } from '../config/MulterConfig';
import { Express } from 'express';
import { FileService } from '../services/fileService';   

@JsonController('/files')
export class FileController {

    private fileService = new FileService();  

    @Post('/upload')
    uploadFile(
        @UploadedFile('file', { options: fileUploadOptions }) file: Express.Multer.File
    ) {
        return this.fileService.uploadFile(file);  
    }

    @Get('/')
    getAllFiles() {
        return this.fileService.getAllFiles();  
    }
}