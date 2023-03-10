'use client'
//
import { Avatar, Box, Grid, Link, Typography } from '@mui/material'
import Image from 'next/legacy/image'

const CardFixtures = ({
  title,
  description,
  image,
  image_alt,
  bgColor,
}: {
  title: string
  description: string
  image: string
  image_alt: string
  bgColor: string
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      display='flex'
      justifyContent='center'
      sx={{
        my: { xs: 2, sm: 4, md: 3, lg: 3 },
      }}
    >
      <Link href='#' underline='none' color='CaptionText'>
        <Box
          sx={{
            width: 276,
            height: 104,
            borderRadius: 6,
            backgroundColor: `#${bgColor}`,
            boxShadow:
              '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            '&:hover': {
              boxShadow:
                '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            },
          }}
        >
          <Grid
            container
            display='flex'
            justifyContent='space-between'
            sx={{
              height: '100%',
              px: 2,
              boxShadow:
                ' 0 10px 15px -3px rgb( 255 255 255/ 0.1), 0 4px 6px -4px rgb( 255 255 255/ 0.1)',
            }}
          >
            <Grid
              item
              xs={4}
              md={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
              }}
            >
              <Avatar sx={{ width: 70, height: 70, background: 'none' }}>
                <Image
                  src={'http://localhost:1337' + image}
                  layout='fill'
                  objectFit='cover'
                  alt={image_alt}
                  priority
                />
              </Avatar>
            </Grid>
            <Grid
              item
              xs={8}
              md={8}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                pl: 2,
              }}
            >
              <Box>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: '800', fontSize: 16 }}
                >
                  {title}
                </Typography>
                <Typography variant='body2'>{description}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Grid>
  )
}

export default CardFixtures
