import { CSSProperties, FC, useEffect } from "react";
import { NotificationProps } from "../types";

const animation = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const s: { [key: string]: CSSProperties } = {
  notification: {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    borderRadius: " 3px",
    padding: " 10px 16px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: " center",
    gap: "8px",
    animation: "fadeIn 0.3s ease-in-out forwards",
    opacity: 0,
    border: "1px solid transparent",
  },
  notification__text: {
    fontSize: "13px",
  },
  notification_contained_success: { background: "#4CAF50", color: "#ffffff" },
  notification_contained_error: { background: "#F44336", color: "#ffffff" },
  notification_contained_warning: { background: "#FF9800", color: "#ffffff" },
  notification_contained_info: { background: "#2196F3", color: "#ffffff" },
  notification_outlined_success: {
    background: "#E9F7E1",
    color: "#4CAF50",
    borderColor: "#4CAF50",
  },
  notification_outlined_error: {
    background: "#FFCDD2",
    color: "#F44336",
    border: "1px solid #F44336",
  },
  notification_outlined_warning: {
    background: "#FFF3E0",
    color: "#FF9800",
    border: "1px solid #FF9800",
  },
  notification_outlined_info: {
    background: "#E3F2FD",
    color: "#2196F3",
    border: "1px solid #2196F3",
  },
  notification_light_success: {
    background: "#ffffff",
    color: "#4CAF50",
  },
  notification_light_warning: {
    background: "#ffffff",
    color: "#FF9800",
  },
  notification_light_error: {
    background: "#ffffff",
    color: "#F44336",
  },
  notification_light_info: {
    background: "#ffffff",
    color: "#2196F3",
  },
  notification_dark_success: { background: "#263238", color: "#4CAF50" },
  notification_dark_warning: { background: "#263238", color: "#FF9800" },
  notification_dark_error: { background: "#263238", color: "#F44336" },
  notification_dark_info: { background: "#263238", color: "#2196F3" },
};

export const Notification: FC<NotificationProps> = ({
  label,
  type,
  icon,
  variant,
}) => {
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = animation;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div
      style={{
        ...s.notification,
        ...s?.["notification_" + variant + "_" + type],
      }}
    >
      {icon}
      <div style={s.notification__text}>{label}</div>
    </div>
  );
};
