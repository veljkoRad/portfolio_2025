export const navBg = {
  display: 'flex',
  position: 'fixed',
  top: 0, transition: 'top 0.3s ease',
  flexDirection: 'row',
  background: (theme) => theme.palette.primary.navbar
}

export const navName = {
  fontSize: { xs: '16px', sm: '20px' },
  fontWeight: "600",
  lineHeight: { xs: '18px', sm: '22px' },
  letterSpacing: 1.5
}

export const navIcon = {
  background: { md: 'rgba(255,255,255, 0.2)' }, borderRadius: '0px',
  width: { xs: 'max-content', md: '78px' },
  height: '78px',
  marginLeft: '8px'
}

export const navNameMobile = {
  fontSize: { xs: '18px' },
  fontWeight: "700",
  lineHeight: '20px',
  letterSpacing: 1.5
}

export const navCloseIcon = {
  width: '40px',
  borderRadius: '0',
  marginLeft: 'auto',
  color: (theme) => theme.palette.text.main
}