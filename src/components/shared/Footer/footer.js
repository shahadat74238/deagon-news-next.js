import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
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

  return (
    <div>
      <Box className="py-10 px-2 bg-[#011321]">
        <Container>
          <Box
            className="w-full text-center"
            sx={{
              "& svg": {
                color: "white",
              },
            }}
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
          </Box>
          <Box className="w-full text-center">
            {navLinks.map((item) => (
              <Link key={item} href={item.path}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Typography textAlign="center" color="gray" variant="body2">@2023 Dragon News. Design by Dragon News</Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
