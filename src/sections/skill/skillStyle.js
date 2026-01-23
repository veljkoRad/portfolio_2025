export const container={ 
  backgroundImage: "url('images/crissxcross.png')", 
  backgroundPosition: 'center', 
  backgroundSize: 'auto', 
  backgroundRepeat: { 
    xs: "repeat-y !important", 
    sm: 'no-repeat !important' 
  } 
}

export const cardContainer=(theme) => ({ 
  width: '100%', 
  height:'100%',
  maxWidth: { 
    xs: '100%', 
    sm: '336px', 
    md: '288px', 
    lg: '392px' }, 
    padding: { xs: '33px 25px', lg: '52px 39px' }, 
  background: { 
    xs: 'linear-gradient(to right, #3b82f6, #2563eb)', 
    sm: theme.palette.primary.main }, 
  borderRadius: '10px', 
  cursor: 'pointer', 
  transition: "all 0.3s ease 0s", 
  '&:hover': { 
    background: 'linear-gradient(to right, #3b82f6, #2563eb)', transform: 'translateY(-5px)' }, 
  '&:hover .iconHover': { color: '#fff', }, 
  '&:hover .titleHover': { color: '#fff', }, 
  '&:hover .descHover': { color: '#fff', }, 
})
