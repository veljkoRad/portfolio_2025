import { Box } from "@mui/material"


const IconButton = ({ children, href }) => (
  <Box
    component='a'
    target='_blank'
    href={href}
    sx={{
      cursor: 'pointer',
      border: '3px solid #8f8f92',
      borderRadius: '50%',
      color: "#8f8f92",
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: "all 0.3s ease 0s",
      '&:hover': { background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', color: "#fff", border: 'none', transform: 'translateY(-3px)' }
    }} >
    {children}
  </Box >
)

export default IconButton