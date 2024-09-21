const sequelize = require('./config/connection');
const { User, Post, Comment } = require('./models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create users
  const users = await User.bulkCreate([
    {
      username: 'testuser1',
      email: 'testuser1@example.com',
      password: 'password123',
    },
    {
      username: 'testuser2',
      email: 'testuser2@example.com',
      password: 'password123',
    },
  ], { individualHooks: true });

  // Create posts
  const posts = await Post.bulkCreate([
    {
      title: 'Post Title 1',
      content: 'Content for post 1',
      user_id: users[0].id,
    },
    {
      title: 'Post Title 2',
      content: 'Content for post 2',
      user_id: users[1].id,
    },
  ]);

  // Create comments
  const comments = await Comment.bulkCreate([
    {
      content: 'Great post!',
      user_id: users[1].id,
      post_id: posts[0].id,
    },
    {
      content: 'Thanks for sharing!',
      user_id: users[0].id,
      post_id: posts[1].id,
    },
  ]);

  process.exit(0);
};

seedDatabase();
