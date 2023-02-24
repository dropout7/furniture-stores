import React, { FC } from 'react'
import Box from '@mui/material/Box'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import Link from 'next/link'

const HomeNewsLetter: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Contact Us For More
          </Typography>
          <Typography sx={{ mb: 6 }}>Contact about our product and discuss with us on email or WhatsApp.</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 360 },
              mx: 'auto',
            }}
          >
            <Link href="mailto:airdrop.adexe@example.com" passHref>
              <Box>
                <StyledButton startIcon={<EmailIcon />} size="large">
                  E-Mail
                </StyledButton>
              </Box>
            </Link>
            <Link href="https://wa.me/081318188889" passHref>
              <Box>
                <StyledButton startIcon={<WhatsAppIcon />} size="large">
                  WhatsApp
                </StyledButton>
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
