import { useMemo } from "react";

export const useBodyOverflow = (showModal: unknown) => {
  useMemo(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);
};
