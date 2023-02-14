import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/revisi/adit_8.png',
    name: 'Adit',
    category: 'Project Manager',
    description:
      'A company developer originating from the city of Jepara who is pursuing a company exporting local products.',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 2,
    photo: '/images/revisi/DSC00125_6.png',
    name: 'Ardhian Sandy Perdana',
    category: 'Management',
    description:
      'Young entrepreneurs from Brebes who want to develop local handicrafts and become export entrepreneurs.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 3,
    photo: '/images/revisi/DSC00126_2.png',
    name: 'Bintan',
    category: 'Marketing Manager',
    description:
      'Young entrepreneurs from Brebes who want to develop local handicrafts and become export entrepreneurs.',
  },
]
