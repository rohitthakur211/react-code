import React from "react";

import { Checkbox, TextField, Select, Grid } from "@mui/material";

function DynamicForm(props) {
  const { data } = props;

  return (
    <form>
      {data
        ? data.map((item, index) => (
            <Grid container spacing={5} direction='row'>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "textfield" ? <TextField /> : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "checkbox" ? <Checkbox /> : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "select" ? <Select /> : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "textfield" ? <TextField /> : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "checkbox" ? <Checkbox /> : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "select" ? <Select /> : null}
              </Grid>
            </Grid>
          ))
        : null}
    </form>
  );
}
export default DynamicForm;
