export interface IToast {
    message: string;
    position: "bottom" | "middle" | "top",
    color: "primary" | "secondary" | "warning" | "danger" | "success";
}