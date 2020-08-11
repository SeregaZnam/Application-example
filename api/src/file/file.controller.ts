import { Controller, Get, Res, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/api/file')
export class FileController {
  @Get()
  @UseInterceptors(FileInterceptor('file'))
  getFile(@Res() response) {
    response.download('./src/file/documents/pdf.pdf');
  }
}
