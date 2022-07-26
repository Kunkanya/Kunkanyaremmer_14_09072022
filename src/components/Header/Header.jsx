import React from 'react'
import Logo from '../../asset/logo.png'
import { AppBar, Container, Toolbar, createTheme, ThemeProvider, Typography, Stack, Box } from '@mui/material'

//const Logo = React.lazy(()=> import('../../asset/logo.png'))
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
                        <Box width={80} height={80} margin='auto' display='flex' justifyContent='center' alignItems='center'>
                        <img src={Logo} alt="logo" className='logo' />
                        </Box>
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
