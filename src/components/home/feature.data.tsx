import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Experienced',
    description: 'We are experienced in producing and exporting products to various countries',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Competitive Price',
    description: 'We provide the best and competitive prices for our customers',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Exelent Services',
    description: 'We always put customer satisfaction first',
    icon: <LocalLibraryIcon />,
  },
]
