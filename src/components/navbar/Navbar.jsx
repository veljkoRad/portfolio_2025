import { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Stack, Container, Drawer, IconButton, List, ListItem, ListItemButton } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from "@mui/icons-material/Menu";
import * as style from './navbarStyle'

const Navbar = ({ toggleMode, mode, active, sections }) => {

    const [toggleMobile, setToggleMobile] = useState(false);
    const toggleMobileMenu = () => setToggleMobile(!toggleMobile);
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <AppBar sx={style.navBg} >
            <Container fixed>
                <Toolbar disableGutters>
                    <Stack direction='row' alignItems='center' justifyContent='space-between' width='100%'>

                        {/* logo */}
                        <Stack
                            onClick={() => scrollTop()}
                            sx={{ width: '100%', cursor: 'pointer', }}  >
                            <Typography color='text.white' variant='body1' sx={style.navName}>
                                Veljko <br /> Radivojević
                            </Typography>
                        </Stack>

                        {/* desktop navigation items */}
                        <Stack direction='row' alignItems='center'>
                            <List sx={{ display: { xs: 'none', md: 'flex' } }} >
                                {sections.map((item) => {
                                    return (
                                        <ListItem key={item.id} disablePadding>
                                            <ListItemButton selected={active === item.id} onClick={() => {
                                                item.ref.current?.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                            }}  >
                                                <Typography sx={{ fontWeight: 500, transition: "all 0.1s ease-in-out", "&:hover": { color: '#fff' } }}>{item.label}</Typography>
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                })}
                            </List>
                            {/* Light/Dark Button */}
                            <IconButton onClick={toggleMode} disableFocusRipple disableRipple sx={style.navIcon} aria-label="Toggle light and dark mode"  >
                                {mode === "light" ? <DarkModeIcon sx={{ color: '#fff' }} /> : <LightModeIcon sx={{ color: '#ffc107' }} />}
                            </IconButton>

                            {/* Menu Mobile Button */}
                            <IconButton onClick={toggleMobileMenu} sx={{
                                display: { md: 'none' },
                                borderRadius: '0px',
                            }} aria-label="Open mobile menu" >
                                <MenuIcon sx={{ color: '#fff', fontSize: '30px' }} />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Toolbar>
            </Container>

            {/* Mobile */}
            <Drawer anchor='right' open={toggleMobile} onClose={() => setToggleMobile(false)}>
                <Box>
                    <Stack

                        sx={{ width: '100%' }}
                        direction='row'
                        alignItems='center'
                        padding='20px 24px'>
                        <Stack
                            onClick={() => {
                                scrollTop()
                                setToggleMobile(false);
                            }}
                            sx={{ width: '100%', cursor: 'pointer', }}  >
                            <Typography color='text.blue' variant='body1'
                                sx={style.navNameMobile}>
                                Veljko <br />Radivojević
                            </Typography>
                        </Stack>
                        <IconButton
                            onClick={() => setToggleMobile(false)}
                            size='large'
                            sx={style.navCloseIcon}
                            aria-label="Close navigation menu">
                            <CloseIcon fontSize='inherit' />
                        </IconButton>
                    </Stack>
                    <hr />
                    <List >
                        {sections.map((item) => (
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton
                                    sx={{ padding: '8px 30px' }}
                                    onClick={() => {
                                        setToggleMobile(false)
                                        item.ref.current?.scrollIntoView({ behavior: 'smooth' })
                                    }}>
                                    <Typography variant='subtitle2' sx={{ fontWeight: 500 }} color='text.primary'>
                                        {item.label}
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar >
    )
}

export default Navbar