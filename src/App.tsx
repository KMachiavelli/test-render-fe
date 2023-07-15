import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function App() {
  const [isLub, setIsLub] = useState(false);

  return (
    <>
      {!isLub ? (
        <Button variant="contained" onClick={() => setIsLub(true)}>
          Climcc me
        </Button>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FavoriteBorderIcon />
          <Typography>I lub U</Typography>
        </div>
      )}
    </>
  );
}

export default App;
