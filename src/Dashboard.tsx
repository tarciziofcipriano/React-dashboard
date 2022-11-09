import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  KeyboardDoubleArrowUpOutlined as KeyboardDoubleArrowUpOutlinedIcon,
  KeyboardDoubleArrowDownOutlined as KeyboardDoubleArrowDownOutlinedIcon,
  MonetizationOnOutlined as MonetizationOnOutlinedIcon,
} from "@mui/icons-material";

import "c3/c3.css";
import Bar from "./charts/Bar";
import Donut from "./charts/Donut";
import Gauge from "./charts/Gauge";
import { highest, highestKey, lowest, lowestKey } from "./parse";
import Line from "./charts/Line";
import Card from "./components/Card";
import Table from "./components/table";

const Dashboard = () => {
  return (
    <Box m={3} sx={{ textAlign: "-webkit-center" }}>
      <Box display="flex" mt={3} mb={3} justifyContent="center">
        <MonetizationOnOutlinedIcon sx={{ fontSize: "40px" }} />
        <Typography ml={1} mt={0.5} variant="h6">
          Top 10 marcas de luxo mais valiosas do mundo em 2022 (em US$ Bilhões)
        </Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          p: 4,
          pb: 3,
          maxWidth: 950,
          backgroundColor: "#E9EDF0",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
          mb={4}
        >
          <Grid item>
            <Paper elevation={3} sx={{ borderRadius: 3, mr: 0.5 }}>
              <Bar />
            </Paper>
          </Grid>
          <Grid item>
            <Card
              title="Mais valiosa"
              keyTitle={highestKey}
              value={highest as number}
              icon={
                <KeyboardDoubleArrowUpOutlinedIcon
                  sx={{ fontSize: "30px" }}
                  color="success"
                />
              }
            />
          </Grid>
          <Grid item>
            <Card
              title="Menos valiosa"
              keyTitle={lowestKey as string}
              value={lowest as number}
              icon={
                <KeyboardDoubleArrowDownOutlinedIcon
                  sx={{ fontSize: "30px" }}
                  color="error"
                />
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item>
            <Paper elevation={3} sx={{ borderRadius: 3, mb: 4 }}>
              <Line />
            </Paper>
            <Paper elevation={3} sx={{ borderRadius: 3, mb: 4 }}>
              <Table />
            </Paper>
          </Grid>
          <Grid item ml={2}>
            <Box />
            <Paper elevation={3} sx={{ borderRadius: 3, pt: 2, pb: 2 }}>
              <Donut />
              <Gauge />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Dashboard;
