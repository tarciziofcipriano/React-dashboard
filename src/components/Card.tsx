import { Box, Divider, Paper, Typography } from "@mui/material";
import "c3/c3.css";

interface CardProps {
  title: string;
  keyTitle: string;
  value: number;
  icon: JSX.Element;
}

const Card = ({ title, keyTitle, value, icon }: CardProps) => {
  return (
    <Paper
      sx={{
        width: 170,
        height: 180,
        borderRadius: 3,
        backgroundColor: "#13385B",
        color: "white",
      }}
      elevation={3}
    >
      <Box display="flex" justifyContent="center" pt={2} pb={1.5}>
        {icon}
        <Typography fontSize="18px">{title}</Typography>
      </Box>
      <Divider sx={{ backgroundColor: "black" }} />
      <Typography textAlign="center" fontSize="20px" fontWeight={500} mt={2}>
        {keyTitle}
      </Typography>
      <Typography textAlign="center" variant="h5" fontWeight={600} mt={1}>
        {`US$: ${value}`}
      </Typography>
    </Paper>
  );
};

export default Card;
