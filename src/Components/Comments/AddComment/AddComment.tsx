import React from "react";

interface NewCommentProps {
  handleShowModal: () => void;
}

const NewComment: React.FC<NewCommentProps> = ({ handleShowModal }) => {
  return (
    <article
      className="flex flex-col gap-4 max-w-[700px] border-2 border-[#27292D] rounded-lg bg-comment-background p-6"
      aria-labelledby="new-comment-header"
      aria-describedby="new-comment-instructions"
    >
      <header>
        <h2 id="new-comment-header" className="block text-white-font text-lg">
          Create post
        </h2>
      </header>
      <article className="p-4 bg-[#191920] rounded-lg flex flex-row items-start gap-4">
        <div
          className="flex justify-center items-center w-12 h-12 rounded-full bg-modal-background"
          aria-hidden="true"
        >
          <span className="emoji" role="img" aria-label="comment">
            💬
          </span>
        </div>
        <textarea
          id="new-comment"
          className="pr-3 py-2 resize-none rounded-lg w-full bg-[#191920] focus:outline-none focus:ring-[#27292D] caret-white-font text-white-font"
          placeholder="How are you feeling today?"
          rows={2}
          aria-describedby="new-comment-instructions"
        />
      </article>
      <footer className="flex justify-end">
        <button
          className="bg-button-background text-white hover:bg-primary/80 w-35 p-2 rounded pl-8 pr-8"
          onClick={handleShowModal}
          aria-label="Post comment"
        >
          Post
        </button>
      </footer>
    </article>
  );
};

export default NewComment;
