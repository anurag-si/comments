import React from "react";

interface WelcomeUserProps {
  username: string;
}

const WelcomeUser: React.FC<WelcomeUserProps> = ({ username }) => {
  return (
    <header>
      <h1
        className="w-[700px] text-3xl font-semibold text-foreground text-white-font"
        aria-label={`Greeting message for ${username}`}
        role="heading"
        aria-level={1}
      >
        Hello {username}
      </h1>
      <p className="text-grey-font mt-2" aria-label="Follow-up question">
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
    </header>
  );
};

export default WelcomeUser;
