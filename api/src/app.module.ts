import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [UserModule, AuthModule, PostModule, FileModule],
})
export class AppModule {}
