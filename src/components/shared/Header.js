import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/text.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
    const currentDate = getCurrentDate();

  return (
    <Box className="w-full py-10">
      <Container className="space-y-2">
        <Image className="mx-auto" src={headingImage} alt="Loading Logo" width={500} height={500} />
        <Typography textAlign="center" color="gray" variant="body2">
          Journalism Without Fear or Favour{" "}
        </Typography>
        <Typography textAlign="center" color="gray" variant="body1">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
