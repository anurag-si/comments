import React from "react";
import { emojis } from "../../../Data/Emojis";
import CommentIcon from "../../../SVG/CommentIcon";

interface SingleCommentProps {
  post: {
    userimg: string;
    username: string;
    timestamp: string;
    edited: boolean;
    userreaction: string;
    content: string;
    commentsCount: number;
  };
  handleShowModal: () => void;
}

const SingleComment: React.FC<SingleCommentProps> = ({
  post,
  handleShowModal,
}) => {
  return (
    <article
      className="flex flex-col gap-4 w-[700px] border-2 border-[#27292D] rounded-lg bg-comment-background p-6"
      aria-labelledby={`comment-${post.username}`}
      aria-describedby={`comment-content-${post.username}`}
    >
      <header className="flex justify-between items-center">
        <div className="flex flex-row gap-[14px]">
          <div
            onClick={handleShowModal}
            className="flex justify-center items-center rounded-full w-[44px] h-[44px] overflow-hidden cursor-pointer"
            aria-label={`Profile picture of ${post.username}`}
          >
            <img
              className="w-full h-full"
              src={post.userimg}
              alt={`${post.username}'s profile`}
            />
          </div>
          <div>
            <span
              onClick={handleShowModal}
              className="block text-white-font text-lg cursor-pointer"
              id={`comment-${post.username}`}
            >
              {post.username}
            </span>
            <time className="text-sm text-grey-font">
              {post.timestamp} {post.edited ? "• Edited" : ""}
            </time>
          </div>
        </div>
        <button
          className="flex flex-row space-x-1 cursor-pointer h-8 items-center hover:bg-modal-background rounded-full w-8 justify-center align-middle transition-all disabled:opacity-50 disabled:shadow-none shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.5] active:shadow-none"
          aria-label="Options"
        >
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className="block w-1 h-1 bg-white-font rounded-full"
            ></span>
          ))}
        </button>
      </header>

      <section
        className="p-4 bg-[#191920] rounded-lg flex flex-row items-start gap-4 overflow-hidden"
        id={`comment-content-${post.username}`}
      >
        <div
          className="flex justify-center items-center w-12 h-12 rounded-full bg-modal-background overflow-hidden"
          aria-hidden={!emojis[post.userreaction] ? "true" : "false"}
        >
          <span className="emoji" role="img" aria-label={post.userreaction}>
            {emojis[post.userreaction]}
          </span>
        </div>
        <p className="w-[100%] pr-3 py-2 rounded-lg bg-[#191920] text-white-font break-words">
          {post.content}
        </p>
      </section>

      <footer className="flex justify-start gap-[10px] items-center">
        <CommentIcon />
        <button
          onClick={handleShowModal}
          className="text-sm text-grey-font cursor-pointer"
          aria-label={`Show ${post.commentsCount} ${
            post.commentsCount === 1 ? "comment" : "comments"
          }`}
        >
          {post.commentsCount}{" "}
          {post.commentsCount === 1 ? "comment" : "comments"}
        </button>
      </footer>
    </article>
  );
};

export default SingleComment;
