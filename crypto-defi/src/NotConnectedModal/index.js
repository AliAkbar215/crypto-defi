import React, { useState } from "react";
import { StaticDialog, useDialog } from "react-st-modal";
// import Error from "./image.png";
import Error from "./img.jpeg";

function CustomDialogContent() {
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <div>
        <img src={Error} style={{ width: "100%" }} />
      </div>


    </div>
  );
}

function CustomStaticExample() {
  const [isOpen, setOpen] = useState(true);
  // React.useEffect(() => {
  //   if (isConnect === "not done") {
  //     setOpen(true);
  //   }

  // }, [isConnect]);
  return (
    <div>
      <StaticDialog
        style={{ backgroundColor: "red" }}
        isOpen={isOpen}
        // title="Custom static dialog"

        onAfterClose={(result) => {
          setOpen(false);
          // do something with dialog result
        }}
      >
        {/* see previous demo */}
        <CustomDialogContent />
      </StaticDialog>
      {/* <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Custom static
      </button> */}
    </div>
  );
}

export default CustomStaticExample;
