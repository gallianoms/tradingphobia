'use client'
//
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Image from 'next/legacy/image'

const CardDiscounts = ({
  title,
  description,
  image,
  img_alt,
  button_background,
  button_color,
  promo,
}: {
  title: string
  description: string
  image: string
  img_alt: string
  button_background: string
  button_color: string
  promo: string
}) => {
  return (
    <Card
      sx={{
        maxWidth: 280,
        borderRadius: 3,
        boxShadow:
          '0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1)',
        '&:hover': {
          boxShadow:
            '0 20px 25px -5px rgb(255 255 255 / 0.1), 0 8px 10px -6px rgb(255 255 255 / 0.1)',
        },
      }}
    >
      <CardActionArea>
        <CardMedia sx={{ position: 'relative' }}>
          <Image
            src={'http://localhost:1337' + image}
            alt={img_alt}
            width={280}
            height={136}
            layout='responsive'
            objectFit='cover'
            priority
          />
          <Box
            sx={{
              position: 'absolute',
              width: '40%',
              height: 30,
              bottom: 0,
              right: 0,
              backgroundColor: 'rgba(241,245,249)',
              borderRadius: 1,
              mb: 1,
              mr: 1,
            }}
          >
            <Typography
              textAlign='left'
              variant='subtitle2'
              fontWeight={700}
              sx={{
                color: '#111827',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {title}
            </Typography>
          </Box>
        </CardMedia>
      </CardActionArea>
      <CardContent sx={{ bgcolor: '#1e293b' }}>
        <Typography gutterBottom variant='subtitle2' color='text.secondary'>
          <Box
            component='span'
            sx={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 800,
            }}
          >
            {promo}
          </Box>{' '}
          {description}
        </Typography>
        <Button
          size='small'
          variant='contained'
          // @ts-ignore
          color={button_background}
          endIcon={<ArrowRightAltIcon />}
          sx={{
            mt: 1,
            fontWeight: 700,
            color: button_color === 'dark' ? '#000' : '#fff',
          }}
        >
          Lo quiero
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardDiscounts
