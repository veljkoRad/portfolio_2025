export const projectTabs = {
  marginY: '50px',
  '& .MuiTabs-indicator': {
    display: 'none !important'
  },
  '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
    borderRadius: '12px',
    color: '#fff !important'
  },

  '& .MuiTab-root': {
    fontWeight: '600 '
  },
  '& .MuiTabs-list.MuiTabs-flexContainer': {
    flexWrap: 'wrap ',
    justifyContent: { xs: 'center', md: 'start' }
  }

}