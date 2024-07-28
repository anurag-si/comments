import React, { useState } from "react";
import SingleComment from "./SingleComment/SingleComment";
import { data } from "../../Data/Data";
import NewComment from "./AddComment/AddComment";
import Modal from "../Modal/Modal";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import { useBodyOverflow } from "../../Hooks/useBodyOverflow";

const Comments = () => {
  const [showModal, setShowModal] = useState(false);

  const showSignUpModal = () => {
    setShowModal(!showModal);
  };

  useBodyOverflow(showModal);

  return (
    <div
      className="flex justify-center items-center pt-[100px]  max-lg:pt-[30px] max-lg:p-[30px]"
      role="main"
      aria-labelledby="comments-section"
    >
      <div className="flex flex-col gap-[40px]">

      <WelcomeUser username={data.username} />
      <section
        className="flex flex-col gap-[20px]"
        id="comments-section"
        aria-label="Comments Section"
      >
        <NewComment handleShowModal={showSignUpModal} />
        {data.posts.map((post) => (
          <SingleComment
            key={post.id}
            post={post}
            handleShowModal={showSignUpModal}
          />
        ))}
      </section>
      {showModal && <Modal handleShowModal={showSignUpModal} />}
      </div>

    </div>
  );
};

export default Comments;
