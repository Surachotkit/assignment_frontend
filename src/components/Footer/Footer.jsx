import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        position: 'absolute',
        top: 950,
        left: 0,
        backgroundColor: '#1F3A8B', 
        p: 4,
      
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} >
          <Grid item xs={12} sm={2} >
            <Typography variant="h3" color="white" gutterBottom sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              LOGO
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} >
            <Typography variant="h6" color="white" gutterBottom sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
              Amethyst Solutions Co.,Ltd.
            </Typography>
            <Typography variant="body2" color="white" sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
              252/93(N) 17th Fl., Muang Thai-Phatra Complex Tower B, Rachdaphisek Road, Huaykwnag, Bangkok 10310
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', padding: '5px'}}>

            <Link href="https://www.facebook.com/" >
              <Facebook />
            </Link>

            <Link
              href="https://www.instagram.com/"
             
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" >
              <Twitter />
            </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
 
  );
}
