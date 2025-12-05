
import React from "react";
import { Toaster } from "react-hot-toast";




function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <Route
            path="/properties"
            element={
              <PrivateRoute>
                <AddProperties />
              </PrivateRoute>
            }
          />
    </>
    
         
  );
}

export default App;

