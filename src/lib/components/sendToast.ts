import toast from "svelte-french-toast"

export const sendToast = (message: string, error: boolean = false) => {
  let className = 'h-8 text-sm';
  className += error ? ' !bg-red-300' : ' !bg-green-300';
  toast(message, {
    className
  });
}