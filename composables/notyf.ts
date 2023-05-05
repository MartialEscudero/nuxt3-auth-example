import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export function useNotyf(type: string, message: string, duration = 3000) {
  const notyf = new Notyf();

  notyf.open({
    type,
    message,
    duration,
  });
}