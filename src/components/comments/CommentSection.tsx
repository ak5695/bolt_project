import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

type Comment = {
  id: number;
  author: string;
  content: string;
  date: string;
};

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const { user, isGuest } = useAuth();

  const addComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: user ? user.email! : '访客',
      content: newComment,
      date: new Date().toLocaleDateString(),
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  if (!user && !isGuest) {
    return (
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
        <p className="text-gray-700 dark:text-gray-300">请登录后发表评论</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">评论</h3>
      
      <form onSubmit={addComment} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          placeholder="写下你的想法..."
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          发表评论
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 rounded-lg bg-white dark:bg-gray-700 shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium dark:text-white">{comment.author}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {comment.date}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}