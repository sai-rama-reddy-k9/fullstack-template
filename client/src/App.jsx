import React from "react";
import { Button } from "./components/ui/button";
import { Home } from "lucide-react";

const App = () => {
  return (
    <>
      <div className="text-6xl">App</div>
      <Button>Demon Slayer</Button>
      <Home color="gold" size={32} />
    </>
  );
};

export default App;
