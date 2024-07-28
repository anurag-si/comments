import React, { useState } from "react";
import CrossIcon from "../../SVG/CrossIcon";
import PasswordEye from "../../SVG/PasswordEye";

interface ModalProps {
  handleShowModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ handleShowModal }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div className="bg-modal-background py-8 px-6 rounded-lg border-2 w-[463px] min-h-[420px]">
        <CrossIcon closeModal={handleShowModal} aria-label="Close modal" />
        <header className="flex flex-col items-center">
          <h4 id="modalTitle" className="text-light-gray">
            {showLoginModal ? "WELCOME BACK" : "SIGN UP"}
          </h4>
          <h4 id="modalDescription" className="text-white text-lg">
            {showLoginModal
              ? "Log into your account"
              : "Create an account to continue"}
          </h4>
        </header>
        <section className="mt-8">
          <form>
            <label
              className="block mb-2 text-white-font text-sm"
              htmlFor="email"
            >
              {showLoginModal ? "Email or Username" : "Email"}
            </label>
            <input
              className="caret-white-font text-white-font w-full p-2 border-input-border border-[1.5px] rounded mb-4 bg-modal-background placeholder-text-placeholder"
              type="email"
              id="email"
              placeholder={
                showLoginModal
                  ? "Enter your email or username"
                  : "Enter your email"
              }
              required
              aria-required="true"
            />
            {!showLoginModal && (
              <>
                <label
                  className="block mb-2 text-white-font text-sm"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="caret-white-font text-white-font w-full p-2 border-input-border border-[1.5px] rounded mb-4 bg-modal-background placeholder-text-placeholder"
                  type="text"
                  id="username"
                  placeholder="Choose a preferred username"
                  required
                  aria-required="true"
                />
              </>
            )}
            <div className="flex justify-between">
              <label
                className="block mb-2 text-white-font text-sm"
                htmlFor="password"
              >
                Password
              </label>
              {showLoginModal && (
                <p
                  className="text-xs text-white-font cursor-pointer"
                  aria-live="polite"
                >
                  Forgot password?
                </p>
              )}
            </div>
            <div className="relative flex">
              <input
                className="caret-white-font text-white-font w-full p-2 border-input-border border-[1.5px] rounded mb-4 bg-modal-background placeholder-text-placeholder"
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder={
                  showLoginModal
                    ? "Enter your password"
                    : "Choose a strong password"
                }
                required
                aria-required="true"
              />
              <button
                type="button"
                className="absolute right-2 top-2 transform -translate-y-1/2 bg-none border-none cursor-pointer text-white"
                onClick={togglePasswordVisibility}
                aria-label={passwordVisible ? "Hide password" : "Show password"}
                aria-expanded={passwordVisible ? "true" : "false"}
                style={{ top: "20px" }}
              >
                <PasswordEye />
              </button>
            </div>
            <button
              type="button"
              onClick={handleShowModal}
              className="bg-button-background text-white hover:bg-primary/80 w-full p-2 rounded"
            >
              {showLoginModal ? "Login now" : "Continue"}
            </button>
          </form>
          <div className="text-grey-font mt-4" aria-live="polite">
            {showLoginModal ? (
              <p>
                Not registered yet? &nbsp;
                <a
                  href="#"
                  className="text-white-font"
                  onClick={() => setShowLoginModal(false)}
                >
                  Register →
                </a>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-white-font"
                  onClick={() => setShowLoginModal(true)}
                >
                  Login →
                </a>
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
