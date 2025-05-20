import { TextField as MuiTextField } from "@mui/material";

interface TextFieldProps {
  extraClasses?: string;
  label?: string;
  placeHolder?: string;
  rows?: number;
}

export function TextField(props: TextFieldProps) {
  return (
    <div className={props.extraClasses ?? ""}>
      <p className="font-semibold text-primary-70 truncate mb-1">
        {props?.label ?? ""}
      </p>
      <MuiTextField
        className="!w-full"
        multiline={!!props.rows}
        rows={props.rows ?? 1}
        sx={{
          div: {
            padding: 0,
          },
          "input, textarea": {
            padding: "10px",
            color: "var(--color-primary) !important",
            fontFamily: "nunito",
          },
          fieldset: {
            borderRadius: 3,
            borderColor: "rgba(60, 37, 179, 60) !important",
            fontFamily: "nunito",
          },
        }}
        placeholder={props.placeHolder}
        variant="outlined"
      />
    </div>
  );
}
