// import React from "react";

import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Contact from "../../src/components/Contact";
import Header from "../../src/components/Header";
import HomeContent from "../../src/components/HomeContent";

const LandingPage = () => {
  const router = useRouter();
  return (
    //main container
    <Box
      sx={{
        flexGrow: 1,
        boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
        width: "75%",
        margin: "100px auto",
        background: "white",
        borderRadius: 5,
        p: "3rem 8rem",
        position: "static",
      }}
    >
      <Header />
      {router?.pathname && router?.pathname?.includes("contact") ? (
        <Contact />
      ) : (
        <HomeContent />
      )}
    </Box>
  );
};

export default LandingPage;
