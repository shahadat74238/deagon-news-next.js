import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <div>
      <Box>
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image width={700} src={topNews} alt="Loading News" />
            </CardMedia>{" "}
            <CardContent>
              <p className="bg-rose-500 rounded my-5 px-3 text-white  w-28">
                Technology
              </p>
              <Typography gutterBottom variant="h4" component="div">
                Bitcoin Climbs As Elon Musk Says Tesla Likely to Accept It
                Again.
              </Typography>
              <Typography className="my-3">
                By Shahadat Hosen - Jan 01, 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                perferendis, veritatis magni cupiditate quisquam
                reprehenderit.......
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Grid className="my-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image width={800} src={topNews2} alt="Loading News" />
                </CardMedia>{" "}
                <CardContent>
                  <p className="bg-rose-500 rounded my-5 px-3 text-white  w-28">
                    Technology
                  </p>
                  <Typography gutterBottom variant="h4" component="div">
                    Bitcoin Climbs As Elon Musk Says Tesla Likely to Accept It
                    Again.
                  </Typography>
                  <Typography className="my-3">
                    By Shahadat Hosen - Jan 01, 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi perferendis, veritatis magni cupiditate quisquam
                    reprehenderit.......
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image width={800} src={topNews2} alt="Loading News" />
                </CardMedia>{" "}
                <CardContent>
                  <p className="bg-rose-500 rounded my-5 px-3 text-white  w-28">
                    Technology
                  </p>
                  <Typography gutterBottom variant="h4" component="div">
                    Bitcoin Climbs As Elon Musk Says Tesla Likely to Accept It
                    Again.
                  </Typography>
                  <Typography className="my-3">
                    By Shahadat Hosen - Jan 01, 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi perferendis, veritatis magni cupiditate quisquam
                    reprehenderit.......
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image width={800} src={topNews2} alt="Loading News" />
                </CardMedia>{" "}
                <CardContent>
                  <p className="bg-rose-500 rounded my-5 px-3 text-white  w-28">
                    Technology
                  </p>
                  <Typography gutterBottom variant="h4" component="div">
                    Bitcoin Climbs As Elon Musk Says Tesla Likely to Accept It
                    Again.
                  </Typography>
                  <Typography className="my-3">
                    By Shahadat Hosen - Jan 01, 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi perferendis, veritatis magni cupiditate quisquam
                    reprehenderit.......
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image width={800} src={topNews2} alt="Loading News" />
                </CardMedia>{" "}
                <CardContent>
                  <p className="bg-rose-500 rounded my-5 px-3 text-white  w-28">
                    Technology
                  </p>
                  <Typography gutterBottom variant="h4" component="div">
                    Bitcoin Climbs As Elon Musk Says Tesla Likely to Accept It
                    Again.
                  </Typography>
                  <Typography className="my-3">
                    By Shahadat Hosen - Jan 01, 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi perferendis, veritatis magni cupiditate quisquam
                    reprehenderit.......
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default LatestNews;
