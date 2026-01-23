import { Box, Container, Stack, Typography } from '@mui/material'
import IconButton from '../../components/IconButton'
import LinkedIn from '../../icons/LinkedIn'
import Facebook from '../../icons/Facebook'
import Instagram from '../../icons/Instagram'
import Github from '../../icons/Github'
import * as style from './footerStyle'

const Footer = () => {
  return (
    <Box sx={style.footerBg} >
      <Container fixed sx={{ paddingY: '80px' }}>
        <Stack
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          flexWrap='wrap'
          gap='30px' >
          <Typography sx={style.nameText}>Veljko <br /> Radivojević</Typography>
          <Stack sx={{ flex: 1 }} flexDirection='row' justifyContent='center' gap='10px'>
            <IconButton href="https://rs.linkedin.com/"  ><LinkedIn /></IconButton>
            <IconButton href="https://github.com/"  ><Github /></IconButton>
            <IconButton href="https://www.facebook.com//"  ><Facebook /></IconButton>
            <IconButton href="https://www.instagram.com/"  ><Instagram /></IconButton>
          </Stack>
          <Typography sx={style.copyright} color='text.secondary'>Copyright © 2025 Veljko Radivojević. <br />  All Rights Reserved.</Typography>
        </Stack>
      </Container>
    </Box >
  )
}

export default Footer