"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const navLinks = [
  {
    route: "Home",
    path: "/",
  },
  {
    route: "Page",
    path: "/page",
  },
  {
    route: "Category",
    path: "/category",
  },
  {
    route: "News",
    path: "/news",
  },
  {
    route: "Posts",
    path: "/posts",
  },
  {
    route: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100} alt="logo" />
          <Box className="w-full text-center">
            {navLinks.map((item) => (
              <Link key={item} href={item.path}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack direction="row" sx={{
               "& svg": {
                  color: "white"
               }
            }}>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
