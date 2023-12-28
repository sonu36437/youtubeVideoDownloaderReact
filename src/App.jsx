import { useState } from "react";
import "./App.css";

function App(props) {
  
  return (
    <>
      <form className="flex items-center space-x-6" action="/">
        <label className="block">
          <input
            type="text"
            className="bg-red-200 inputBox"
            placeholder="enter the url"
            name="url"
            required
            onChange={(e) => {
              props.setUrl(e.target.value);
            }}
          />
        </label>
        <button onClick={props.getDetails} disabled={props.isLoading}>
          {props.isLoading ? "Loading..." : "Get Details"}
        </button>
      </form>
    </>
  );
}

export default App;
