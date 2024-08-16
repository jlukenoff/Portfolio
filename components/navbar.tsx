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
import Tab from "@mui/material/Tab";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";

const paths = [
  { label: "ABOUT", path: "/" },
  { label: "TECH", path: "/tech" },
  { label: "RESUME", path: "/resume" },
];

const NavBar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 576px)");
  const { pathname } = useRouter();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  return (
    <AppBar position="static" elevation={1}>
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
            value={paths.findIndex(({ path }) => path === pathname) || 0}
            indicatorColor="secondary"
            sx={{
              alignItems: "center",
              margin: "auto 0",
              fontWeight: "500",
            }}
          >
            {paths.map(({ label, path }) => (
              <Link href={path} passHref key={path}>
                <Tab label={label} sx={{ opacity: 1 }} />
              </Link>
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
            {paths.map(({ path, label }) => (
              <MenuItem key={path}>
                <Link href={path}>
                  <a onClick={() => setAnchorEl(null)}>{label}</a>
                </Link>
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
