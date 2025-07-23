import React, { useState } from 'react';
import './CommentList.css';
const CommentItem = ({ comment }) => {
  return (
    <div>
      <strong>{comment.author}</strong> ({comment.date}): {comment.text}
    </div>
  );
};

const CommentList = ({ comments }) => {
  const [newAuthor, setNewAuthor] = useState('');
  const [newText, setNewText] = useState('');
  const [commentList, setCommentList] = useState(comments);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newAuthor && newText) {
      const newComment = {
        author: newAuthor,
        text: newText,
        date: new Date().toLocaleDateString(),
        id: Date.now()
      };

      setCommentList([...commentList, newComment]);
      setNewAuthor('');
      setNewText('');
    }
  };


  return (
    <div>
      {commentList.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          placeholder="Имя"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <textarea
          placeholder="Комментарий"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button type="submit">Добавить комментарий</button>
      </form>
    </div>
  );
};

export default CommentList;