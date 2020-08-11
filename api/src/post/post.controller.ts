import { Controller, Get, Query } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('/api/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts(
    @Query('start') start: number,
    @Query('limit') limit: number
  ) {
    return this.postService.getPosts(start, limit);
  }
}
