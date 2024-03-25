import Toastify from "toastify-js";

export const createToast = (message: string, isError = false) => {
  Toastify({
    text: message,
    position: "center",
    duration: 3000,
    style: {
      background: isError ? "var(--color-red-1)" : "var(--color-green-2)",
      color: isError ? "var(--color-white)" : "var(--color-black)",
    },
  }).showToast();
};
