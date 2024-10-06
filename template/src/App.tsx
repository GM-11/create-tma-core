import React, { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

interface User {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

interface ThemeParams {
  bg_color: string;
  text_color: string;
  hint_color: string;
  link_color: string;
  button_color: string;
  button_text_color: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [chatType, setChatType] = useState<string | null>(null);
  const [themeParams, setThemeParams] = useState<ThemeParams | null>(null);

  useEffect(() => {
    WebApp.ready();

    const initData = WebApp.initDataUnsafe;
    if (initData.user) {
      setUser(initData.user as User);
    }

    setChatType(WebApp.platform);
    setThemeParams(WebApp.themeParams as ThemeParams);

    WebApp.MainButton.setText("Share My Info");
    WebApp.MainButton.show();

    WebApp.MainButton.onClick(handleShareInfo);

    return () => {
      WebApp.MainButton.offClick(handleShareInfo);
    };
  }, []);

  const handleShareInfo = (): void => {
    if (user) {
      WebApp.showAlert(
        `Sharing info for ${user.first_name} ${user.last_name || ""}`,
      );
      WebApp.sendData(JSON.stringify({ action: "share", userId: user.id }));
    } else {
      WebApp.showAlert("No user data available");
    }
  };

  return (
    <div
      className="App"
      style={{
        color: themeParams?.text_color,
        backgroundColor: themeParams?.bg_color,
      }}
    >
      <h1>Welcome to my Telegram Mini App!</h1>
      {user && (
        <div>
          <h2>User Info:</h2>
          <p>
            Name: {user.first_name} {user.last_name || ""}
          </p>
          <p>Username: {user.username || "Not provided"}</p>
          <p>Language: {user.language_code || "Not provided"}</p>
        </div>
      )}
      <p>Chat Type: {chatType || "Unknown"}</p>
      <p>Click the button below to share your info!</p>
    </div>
  );
};

export default App;
