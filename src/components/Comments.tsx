import React from 'react';
import { Comment } from '../types';
import './Comments.css';

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="comments-container">
      <h3 className="comments-title">Comentários ({comments.length})</h3>
      {comments.length === 0 ? (
        <p className="no-comments">Nenhum comentário ainda. Seja o primeiro a comentar!</p>
      ) : (
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <div className="comment-header">
                <span className="comment-author">{comment.nome}</span>
              </div>
              <div className="comment-content">
                <p>{comment.texto}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
