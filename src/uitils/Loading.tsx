import React from "react";
import "../styles/loading.scss";
import { DarkModeContext } from "../contexts/DarkModeContext";
import '../responsivestyles/container.scss'

type childrenType = {
  children: React.ReactNode;
};

const Loading: React.FC<childrenType> = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const { darkmode } = React.useContext(DarkModeContext)!;

  return (
    <React.Fragment>
      {loading ? (
        <div className={`loading-container ${darkmode ? 'loading-dark-mode' : ""}`}>
          <h2 id="load-name">
               <span id="loading-icon"></span>
               {children}
          </h2>

        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Loading;
