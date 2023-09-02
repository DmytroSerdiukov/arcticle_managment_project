import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export const CustomField = ({ label, field, error, ...props }: any) => {
  return (
    <>
      <TextField
        {...field}
        {...props}
        label={label}
        helperText={error ? error : ""}
        margin="normal"
      />
    </>
  );
};

export const CheckBox = ({ label, field, error, ...props }: any) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox {...field} {...props} />}
        label={label}
      />
    </FormGroup>
  );
};
