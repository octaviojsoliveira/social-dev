import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
  user: {
    id: 1,
    name: 'Octávio Oliveira',
    username: 'octaviojsoliveira',
    email: 'octavio@gmail.com',
    avatar: '/images/avatars/avatar_1.png',
  },
});

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== 'octavio@gmail.com' || password !== 'admin') {
    return [400, { message: 'Seu e-mail ou senha estão incorretos' }];
  }

  const user = {
    id: 1,
    name: 'Octávio Oliveira',
    username: 'octaviojsoliveira',
    email: 'octavio@gmail.com',
    avatar: '/images/avatars/avatar_1.png',
  };

  return [200, { user }];
});

mock.onGet('/api/home/user/octaviojsoliveira').reply(200, {
  id: 1,
  name: 'Octávio Oliveira',
  username: 'octaviojsoliveira',
  email: 'octavio@gmail.com',
  accessToken: 'dadadadadadadad',
  avatar: '/images/avatars/avatar_1.png',
  joinedIn: '06 de janeiro, 2020',
  work: 'Arquiteto de Software',
  totalPost: '388',
});