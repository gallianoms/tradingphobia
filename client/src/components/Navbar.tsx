'use client'
//
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import Menu from './Menu'

const Navbar = () => {
  const router = useRouter()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position='static'
          sx={{ mt: 2, px: 1, backgroundColor: '#10172A', color: '#000' }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={() => router.push('/')}
              sx={{ textTransform: 'lowercase' }}
            >
              {/* <Box
                sx={{
                  mr: 1.4,
                  mt: 0.4,
                  transform: 'rotate(-20deg)',
                }}
              > */}
              {/* <Image
                src='/img_navbar.png'
                width={28}
                height={28}
                alt=''
                priority
              /> */}
              {/* </Box> */}

              <Typography
                className='textHeader'
                variant='h6'
                noWrap
                component='div'
                sx={{
                  flexGrow: 1,
                  display: {
                    sm: 'block',
                    fontWeight: '600',
                    color: '#37BCF8',
                    fontSize: 24,
                    letterSpacing: 1.2,
                    fontFamily: 'Frijole',
                  },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                tradingphobia.com
              </Typography>
            </Button>
            <Box
              flexDirection='row'
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <Menu />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  )
}

export default Navbar
