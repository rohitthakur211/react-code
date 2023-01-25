import React from "react";

import { TextField, Select, Grid } from "@mui/material";

function DynamicForm(props) {
  const { data } = props;

  return (
    <form>
      {data
        ? data.map((item, index) => (
            <Grid container spacing={5} direction="row">
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "textfield" ? <TextField /> : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "textfield" ? <TextField /> : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "textfield" ? <TextField /> : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "textfield" ? <TextField /> : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "textfield" ? <TextField /> : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "textfield" ? <TextField /> : null}
              </Grid>

              <Grid item xs={4} spacing={5}>
                {item.fieldName === "select" ? <Select /> : null}
              </Grid>

              <Grid item xs={4} spacing={5}>
                {item.fieldName === "select" ? <Select /> : null}
              </Grid>

              <Grid item xs={4} spacing={5}>
                {item.fieldName === "select" ? <Select /> : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "select" ? (
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                ) : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "select" ? (
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                ) : null}
              </Grid>
              <Grid item xs={4} spacing={5}>
                {item.fieldName === "select" ? (
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                ) : null}
              </Grid>
            </Grid>
          ))
        : null}
    </form>
  );
}
export default DynamicForm;
