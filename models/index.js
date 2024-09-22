const User = require('./User');
const Post = require('./Post');

const Comment = require('./Comment');

// Associations

// A User can have many Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// A Post belongs to a User
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// A Post can have many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

// A Comment belongs to a User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// A Comment belongs to a Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// A User can have many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment };
