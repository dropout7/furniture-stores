import React, { FC, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import MasonryLayout from '../masonry/masonry-layout'
import images from '../masonry/image-all.json'

const HomeGallery: FC = () => {
  const [categoryImage, setCategoryImage] = useState(images.categories.all)
  return (
    <Box id="gallery" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
      <Container>
        <MasonryLayout images={categoryImage} />
      </Container>
    </Box>
  )
}

export default HomeGallery
