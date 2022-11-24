import React from "react";

import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useSubmitValid } from "./SubmitValidContext";
import type { CheckerTypes } from "./types";

export interface AgreeCheckBoxProps {
  type: CheckerTypes;
  label: string;
}

const AgreeCheckBox: React.FC<AgreeCheckBoxProps> = ({ type, label }) => {
  const [value, setValue] = React.useState(false);
  const { setValids } = useSubmitValid();

  const handleAgree = (e: React.ChangeEvent<HTMLInputElement>) => setValue(Boolean(e.target.value));

  React.useEffect(() => {
    setValids(type, value);
  }, [type, value]);

  return (
    <Grid item xs={12}>
      <FormControlLabel control={<Checkbox onChange={handleAgree} color="primary" />} label={label} />
    </Grid>
  );
};

export default AgreeCheckBox;
