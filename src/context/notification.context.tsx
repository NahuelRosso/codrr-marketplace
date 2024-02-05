import React from "react";
import { Notification } from "../components";
import { AlertColor } from "@mui/material";

type ContexProps = {
  getError: (message: string) => void;
};
const NotificationContext = React.createContext<ContexProps | null>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState<AlertColor | undefined>(
    undefined
  );
  const handleClose = () => {
    setOpen(false);
  };
  const getError = (message: string) => {
    setSeverity("error");
    setOpen(true);
    setMessage(message);
  };
  const value = { getError };

  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        message={message}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification=()=>{
    const context = React.useContext(NotificationContext)
    if(!context)throw new Error("No existe contexto")
    return context;
}