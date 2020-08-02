import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/api/posts', (req: Request, res: Response) => {
  const start = req.query.start as any;
  const limit = req.query.limit as any;
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
  const answer = posts.splice(start, limit);
  res.json(answer);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
