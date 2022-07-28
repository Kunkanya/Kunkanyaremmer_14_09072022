import React  from 'react'
import Logo from '../../asset/logo.png'
import {   createTheme, ThemeProvider  } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'


/**
 * 
 * @param {string} text //HeaderText 
 * @returns 
 */
const Header = (text) => {
    const theme = createTheme({
        palette: {
            primary: {
                light: '#93AD18',
                main: '#6D850C',
                dark: '#586D04',
                contrastText: '#fff',
            }
        }
    })


    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" >
                <Container maxWidth="xl" height="100px" >
                    <Toolbar>
                    <Link  to="/">

                        <Box width={80} height={80} margin='auto' display='flex' justifyContent='center' alignItems='center'>
                            <React.Suspense fallback="Loading...">
                                <img src={Logo} alt="logo" width="60px" height="60px" />
                            </React.Suspense>
                        </Box>
                        </Link>
                        <Typography variant="h5" component="h5" sx={{ flexGrow: 1, marginLeft: "20px" }}>
                            HRnet
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Typography
                                variant="h5"
                            >{text.text}</Typography>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header
