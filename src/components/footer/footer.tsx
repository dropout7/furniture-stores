import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'
import { SxProps } from '@mui/system'
import Link from 'next/link'
import MuiLink from '@mui/material/Link'

const fabStyle = {
  position: 'fixed',
  bottom: 64,
  right: 32,
}

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                Macrame International
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Macrame is a company that provides various furniture and decoration products
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
      <Link href="https://wa.me/+6281318188889" passHref>
        <MuiLink
          underline="hover"
          sx={{
            display: 'block',
            mb: 1,
            color: 'primary.contrastText',
          }}
        >
          <Fab sx={fabStyle as SxProps} aria-label="Contact" color="primary">
            <WhatsAppIcon />
          </Fab>
        </MuiLink>
      </Link>
    </Box>
  )
}

export default Footer
