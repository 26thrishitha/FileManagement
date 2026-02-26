// File Management System Project
import 'reflect-metadata'; 
import { createExpressServer } from 'routing-controllers';
import { FileController } from './controllers/FileController';

const app = createExpressServer({           
    controllers: [FileController], 
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}/files/upload`);
});
