import { Box, Button, Typography } from "@mui/material";
import { useCallback } from "react";

type Props = {
  date: String;
  city: String;
};

export default function SmallCardBody({ date, city }: Props) {
  const formatDate = useCallback((dateString: String): String => {
    const date = new Date(dateString as string);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
    };
    return date.toLocaleDateString(undefined, options);
  }, []);

  return (
    <Box
      marginTop={2}
      borderTop={1}
      borderBottom={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography className="one-line bold" variant="body2" color="primary">
        {formatDate(date)} | {city}
      </Typography>
      <Button variant="text" color="inherit">
        View
      </Button>
    </Box>
  );
}
