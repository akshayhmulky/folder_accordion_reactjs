import { useState } from "react";

const CallFolder = ({ folder }) => {
  const [show, setShow] = useState(false);

  if (folder.children) {
    // console.log(folder.children.length);
    return (
      <div>
        <div className={`folderroot ${show ? "active" : ""}`}>
          <span onClick={() => setShow(!show)} className="folder-title">
            {folder.name}
          </span>
          {folder.children ? (
            <span className="arrow-icon">&#10140;</span>
          ) : null}
        </div>

        <br />
        <div style={{ display: show ? "block" : "none", paddingLeft: "30px" }}>
          {folder.children.map((child) => {
            return <CallFolder folder={child} key={child.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        <span>{folder.name}</span>
      </div>
    );
  }
};

export default CallFolder;
