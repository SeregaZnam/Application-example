import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getPosts(start: number, limit: number) {
    const posts = [
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `2Lorem ipsum dolor sit, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `3Lorem ipsum dolor sit, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `4Lorem ipsum dolor sit, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `5Lorem ipsum dolor sit, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `6Lorem ipsum dolor sit, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      },
      {
        id: 1,
        user: 'Name Surname',
        link: '@surname',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore expedita facere minima necessitatibus nesciunt quo.`,
        likes: 10
      }
    ];
    return posts.splice(start, limit);
  }
}
