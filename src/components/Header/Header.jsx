import React from 'react'
import Logo from '../../asset/logo.png'
import { AppBar, Container, Box, Toolbar, createTheme, ThemeProvider, Typography, Stack } from '@mui/material'
const Header = () => {
    const theme = createTheme({
        palette: {
            primary: {
                light: '#93AD18',
                main: '#6D850C',
                dark: '#586D04',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" >
                <Container maxWidth="xl" height="100px" >
                    <Toolbar>
                        <img src={Logo} alt="logo" className='logo' />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "20px" }}>
                            HRnet
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            <Typography>Create Employee</Typography>

                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header
