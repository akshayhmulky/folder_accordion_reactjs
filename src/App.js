import "./styles.css";
import CallFolder from "./components/CallFolder";

const DATA = {
  path: "",
  name: "photos",
  type: "directory",
  children: [
    {
      path: "summer",
      name: "summer",
      type: "directory",
      children: [
        {
          path: "summer/june",
          name: "june",
          type: "directory",
          children: [
            {
              path: "summer/june/windsurf.jpg",
              name: "windsurf.jpg",
              type: "file"
            }
          ]
        }
      ]
    },
    {
      path: "winter",
      name: "winter",
      type: "directory",
      children: [
        {
          path: "winter/january",
          name: "january",
          type: "directory",
          children: [
            {
              path: "winter/january/ski.png",
              name: "ski.png",
              type: "file"
            },
            {
              path: "winter/january/snowboard.jpg",
              name: "snowboardsdfsddsf.jpg",
              type: "file"
            }
          ]
        }
      ]
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <h1>Folder Accordion </h1>
      <div class="container">
        <CallFolder folder={DATA} />
      </div>
    </div>
  );
}
