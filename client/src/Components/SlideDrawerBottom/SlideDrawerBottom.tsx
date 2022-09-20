import { Drawer, Typography } from "@mui/material";

const SlideDrawerBottom = () => {
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiPaper-root": {
          marginBottom: "3vh",
          marginLeft: "15vw",
          marginRight: "5vw",
          height: "35vh",
        },
      }}
      variant="persistent"
      anchor="bottom"
      open={true}
    >
      <Typography>
        This will contain the graphs once we have data flowing through the
        middleware from back-end
      </Typography>
    </Drawer>
  );
};

export default SlideDrawerBottom;
