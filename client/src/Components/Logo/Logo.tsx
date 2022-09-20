import AppBar from "@material-ui/core/AppBar";
import Icon from "@material-ui/core/Icon";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { alpha, Button, Menu, MenuProps, styled } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import React, { Dispatch, FC, SetStateAction } from "react";
import "../Logo/Logo.css";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

interface LogoProps {
  showTrip: Dispatch<SetStateAction<boolean>>;
  showGraph: Dispatch<SetStateAction<boolean>>;
}

// TODO: This entire component needs refactoring due to changes to the app and to better reflect intent behind it
const Logo: FC<LogoProps> = ({ showTrip, showGraph }) => {
  const dummyCategories = [
    "Trip Data",
    "Car Data",
    "Data Visualization",
    "Data Exploration",
  ];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => {
          if (text === "Trip Data") {
            // This is a terrible way to toggle, but is Proof of Concept
            return (
              <ListItem
                button
                key={text}
                onClick={() => {
                  handleClose();
                  showTrip(true);
                  showGraph(false);
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            );
          } else if (text === "Data Visualization") {
            // This is a terrible way to toggle, but is Proof of Concept
            return (
              <ListItem
                button
                key={text}
                onClick={() => {
                  handleClose();
                  showGraph(true);
                  showTrip(false);
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            );
          } else {
            return (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            );
          }
        })}
      </List>
    </div>
  );
  const theme = useTheme();

  return (
    <AppBar
      style={{
        background: "white",
        boxShadow: "none",
        maxWidth: "15%",
        left: "0",
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
      }}
    >
      <Toolbar>
        <div className="wrap" style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="text"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <MenuIcon />
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {drawer}
            </StyledMenu>
          </div>
          <Icon style={{ minHeight: "59px", minWidth: "194px" }}>
            <img src="/lira-logo.svg" alt="app logo" />
          </Icon>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Logo;
