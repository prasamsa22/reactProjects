import React, { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const display = (value) => {
    setInputValue(inputValue + value);
  };
  const cal = () => {
    var ans = eval(inputValue);
    setInputValue(ans);
  };
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleColor = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log("a");
  };
  return (
    <>
      {/* <div className="btn-container"> */}
      <div className={`btn-container ${isDarkTheme ? "dark" : "light"}`}>
        <button
          className={`btn ${isDarkTheme ? "btndark" : "btnlight"}`}
          onClick={() => toggleColor()}
        >
          Color Theme
        </button>
      </div>
      <div className={`cal-container ${isDarkTheme ? "dark" : "light"}`}>
        <form className="calculator">
          <input
            type="text"
            value={inputValue}
            className={`value  ${isDarkTheme ? "value dark" : "value light"}`}
            readOnly
          />
          <span className="num clear" onClick={() => setInputValue("")}>
            C
          </span>
          <span
            className="divide"
            onClick={(e) => setInputValue(e.target.value)}
          >
            /
          </span>
          <span className="multiply">*</span>
          <span onClick={() => display("7")}>7</span>
          <span onClick={() => display("8")}>8</span>
          <span onClick={() => display("9")}>9</span>
          <span onClick={() => display("-")}>-</span>
          <span onClick={() => display("4")}>4</span>
          <span onClick={() => display("5")}>5</span>
          <span onClick={() => display("6")}>6</span>
          <span className="plus" onClick={() => display("+")}>
            +
          </span>
          <span onClick={() => display("1")}>1</span>
          <span onClick={() => display("2")}>2</span>
          <span onClick={() => display("3")}>3</span>
          <span onClick={() => display("0")}>0</span>
          <span onClick={() => display("00")}>00</span>
          <span onClick={() => display(".")}>.</span>
          <span className="num equal" onClick={() => cal()}>
            =
          </span>
        </form>
      </div>
    </>
  );
};

export default Calculator;
