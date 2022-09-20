import { Drawer, Typography } from "@mui/material";

const SlideDrawerLeft = () => {
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiPaper-root": {
          marginTop: "10vh",
          marginLeft: "1vw",
          height: "80vh",
        },
      }}
      variant="persistent"
      anchor="left"
      open={true}
    >
      <Typography>Example Trip Data Response</Typography>
    </Drawer>
  );
};

export default SlideDrawerLeft;
