import "./App.css";
import CountBox from "./components/CountBox";
import counterStore from "./stores/counterStore";

function App() {
  const { count, increase, increaseBy, decrease, decreaseBy,reset } = counterStore();

  return (
    <div className="container">

        <div className="title-area">
          <h1 className="title">
            Zustand Counter
          </h1>
        </div>

      <div className="box">

        <div className="result-box">
          <h1 className="result">결과값: {count}</h1>
          {/* <CountBox /> */}
        </div>

        <div className="button-box">
          <div className="de-buttons">
            <button className="de-one" onClick={decrease}>-1</button>
            <button className="de-num" onClick={() => decreaseBy(10)}>-10</button>
          </div>
          <div className="in-buttons">
            <button className="in-one" onClick={increase}>+1</button>
            <button className="in-num" onClick={() => increaseBy(10)}>+10</button>
          </div>
        </div>

        <div>
          <button className="reset-button" onClick={reset}>reset</button>
        </div>

      </div>

      <div class="triangle-wrapper">
  <div class="triangle-border"></div>
  <div class="triangle-inner"></div>
</div>

    </div>
  );
}

export default App;
