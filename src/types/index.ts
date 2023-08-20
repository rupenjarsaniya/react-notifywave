import { ReactNode } from "react";

export type NotificationType = "success" | "error" | "info" | "warning";

export type NotificationVariant = "contained" | "outlined" | "light" | "dark";

export type NotificationPosition =
  | "top_left"
  | "top_right"
  | "bottom_left"
  | "bottom_right"
  | "top_center"
  | "bottom_center";

export interface NotificationProps {
  id: number;
  label: string;
  type: NotificationType;
  variant?: NotificationVariant;
  icon?: ReactNode;
}

export interface NotificationContextType {
  notify: (
    content: string,
    type: NotificationType,
    duration?: number,
    variant?: NotificationVariant
  ) => void;
}

export interface NotificationProviderProps {
  position?: NotificationPosition;
  general_duration?: number;
}
