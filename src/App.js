
import './App.css';
import Weather from "./Weather";

 export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="JOhannesburg" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/TandiweBeta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tandiwe Beta
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/TandiweBeta/weather-react"
            target="_blank"
            rel="nonpener noreferrer"
          >
            {" "}
            open sourced on Github
          </a>
          {" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/aquamarine-swan-234b32/deploys/66c3cbed7757ed42547fb798"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

 

