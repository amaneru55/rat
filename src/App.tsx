import React from 'react';
import Test from "@/views/Test";
import {LangProvider, ThemeProvider} from "@/state/Provider";

function App() {
  return (
    <div className="App flex-center">
      <ThemeProvider>
        <LangProvider>
          <Test />
        </LangProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
