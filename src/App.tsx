import React from 'react';
import Test from "@/views/Test";
import {ThemeProvider} from "@/state/Provider";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Test />
      </ThemeProvider>
    </div>
  );
}

export default App;
