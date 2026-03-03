import { JsonController, Post, Get, UploadedFile } from 'routing-controllers';
import { fileUploadOptions } from '../config/MulterConfig';
import { Express } from 'express';
import { FileService } from '../services/fileService';   

@JsonController('/files')
export class FileController {
    //controller
    private fileService = new FileService();  

    @Post('/upload')
    uploadFile(
        @UploadedFile('file', { options: fileUploadOptions }) file: Express.Multer.File
    ) {
        return this.fileService.uploadFile(file);  
    }
    //base url aokjklfj

    @Get('/')
    getAllFiles() {
        return this.fileService.getAllFiles();  
    }
}