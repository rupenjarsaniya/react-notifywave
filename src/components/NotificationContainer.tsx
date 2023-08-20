import {
  CSSProperties,
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useState,
} from "react";
import { Notification } from "./Notification";
import { Correct, Info, Warning, Wrong } from "../images";
import {
  NotificationContextType,
  NotificationProps,
  NotificationProviderProps,
  NotificationType,
  NotificationVariant,
} from "../types";

const s: { [key: string]: CSSProperties } = {
  app: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
    position: "fixed",
  },
  app_top_right: {
    top: 0,
    right: 0,
  },
  app_bottom_right: {
    bottom: 0,
    right: 0,
  },
  app_bottom_left: {
    bottom: 0,
    left: 0,
  },
  app_top_left: {
    top: 0,
    left: 0,
  },
  app_top_center: {
    top: 0,
    left: "50%",
    transform: "translate(-50%, 0)",
  },
  app_bottom_center: {
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 0)",
  },
};

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export const NotificationProvider: FC<
  PropsWithChildren<NotificationProviderProps>
> = ({ children, position = "top_center", general_duration = 3000 }) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const icon = useCallback((type: NotificationType, variant: string) => {
    switch (type) {
      case "success":
        return <Correct variant={variant} />;
      case "error":
        return <Wrong variant={variant} />;
      case "warning":
        return <Warning variant={variant} />;
      case "info":
        return <Info variant={variant} />;
    }
  }, []);

  const notify = (
    label: string,
    type: NotificationType,
    duration?: number,
    variant?: NotificationVariant
  ) => {
    const newNotification: NotificationProps = {
      id: Date.now(),
      label,
      type,
      variant: variant ?? "contained",
      icon: icon(type, variant ?? "contained"),
    };

    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);

    const id = setTimeout(() => {
      closeNotification(newNotification.id);
      clearTimeout(id);
    }, duration ?? general_duration);
  };

  const closeNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <div style={{ ...s.app, ...s?.["app_" + position] }}>
        {notifications.map((item) => (
          <Notification
            key={item.id}
            id={item.id}
            label={item.label}
            type={item.type}
            variant={item.variant}
            icon={item.icon}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
