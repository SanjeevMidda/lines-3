import "./index.css";
import Line from "./components/Line";

function App() {
  return (
    <div className="App">
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />

      <svg
        width="234"
        height="234"
        viewBox="0 0 234 234"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="117"
          cy="117"
          r="115.5"
          // stroke="white"
          stroke-width="2"
          id="circle"
          fill="none"
        />

        <text>
          <textPath href="#circle" className="text">
            sloth / envy / anger / lust / pride / greed / gluttony
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default App;
