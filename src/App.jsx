import { PhotoCamera } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  buttons,
  cardGrid,
  container,
  icon,
  card,
  cardMedia,
  cardContent,
  footer,
} from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera sx={icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div sx={container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" gutterBottom>
              Photo Album
            </Typography>

            <Typography
              sx={{ color: "grey" }}
              variant="h6"
              align="center"
              paragraph
            >
              Hello, this an album of using material ui. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Maxime nobis illum porro
            </Typography>

            <div sx={buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained">See my photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Secondary action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container sx={cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={card}>
                  <CardMedia
                    sx={cardMedia}
                    image="https://plus.unsplash.com/premium_photo-1705808668720-30680abf0854?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
                    title="Image title"
                  />
                  <CardContent sx={cardContent}>
                    <Typography variant="h5">Jar of something</Typography>
                    <Typography>
                      Jar that brings happiness to all the toddlers.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small">view</Button>
                    <Button size="small">edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer sx={footer}>
        <Typography variant="h6" align="center">
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ color: "grey" }}>
          This the footer of the album.
        </Typography>
      </footer>
    </>
  );
}

export default App;
