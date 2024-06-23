import { FC, useState } from "react";
import { Field } from "./components/Inputs/Field";

const App: FC = () => {
  const [yay, setYay] = useState("");

  return (
    <div>
      <Field id="yayId" value={yay} onChange={(e) => setYay(e.target.value)}>
        Yay
      </Field>
    </div>
  );
};

export default App;
