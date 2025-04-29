import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";

function App() {
  const currentTime = format(new Date(), "MMMM do yyyy, h:mm:ss a");

  return (
    <div className="App">
      <h1>{currentTime}</h1>
      <p className="App-intro">
        In React apps, we write JSX — it looks like HTML and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right alongside the HTML
        and also allows us to add components, which are separate, self-contained
        chunks of JSX.
      </p>
      <ExampleComponent />
    </div>
  );
}

export default App;

