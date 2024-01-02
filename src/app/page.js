import LatestNews from "@/components/Ui/LatestNews";
import SideSection from "@/components/Ui/SideSection";
import { Grid } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <div className="mt-5">
      <Grid container rowSpacing={1} >
        <Grid xs={7}>
          <LatestNews />
        </Grid>
        <Grid xs={4}>
          <SideSection />
        </Grid>
        
      </Grid>
    </div>
  );
};

export default HomePage;
