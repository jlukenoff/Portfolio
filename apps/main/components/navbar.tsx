import { ReactElement, useState } from "react";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Tab, { TabProps } from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

const paths = ["/about", "/experience"];

const StyledTab = styled(Tab)<
  // TODO: why isn't this prop getting recognized?
  TabProps & { component: (props: any) => ReactElement }
>(
  ({
    theme: {
      palette: {
        primary: { contrastText: color },
      },
    },
  }) => ({
    padding: "0 1rem",
    color,
    borderBottom: "0.3rem solid transparent",

    "&.Mui-selected": {
      color,
      borderBottom: `0.3rem solid ${color}`,
    },
  })
);

const NavBar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 576px)");
  const { pathname } = useRouter();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  return (
    <AppBar elevation={1}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography component={Link} href="/" variant="h4">
          John Lukenoff
        </Typography>
        {!isMobile ? (
          <Tabs
            value={pathname || paths[0]}
            sx={{
              alignItems: "center",
              margin: "auto 0",
            }}
          >
            {paths.map((path) => (
              <StyledTab
                key={path}
                value={path}
                component={(props) => {
                  // if (path === paths[0]) debugger;
                  return (
                    <Link href={path}>
                      <a {...props}>{path.slice(1).toUpperCase()}</a>
                    </Link>
                  );
                }}
                label={path.slice(1).toUpperCase()}
              />
            ))}
          </Tabs>
        ) : (
          <Menu
            open={!!anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {paths.map((path) => (
              <MenuItem key={path}>
                <Link href={path}></Link>
                <Typography component={"a"} onClick={() => setAnchorEl(null)}>
                  {path.slice(1)}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        )}
        {isMobile && (
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
