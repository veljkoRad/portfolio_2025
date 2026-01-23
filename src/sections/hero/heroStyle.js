export const heroBg= { backgroundImage: "url('/images/crissxcross.png')", height: '93vh', display: 'flex', position: 'relative' }

export const buttonWork ={ border: '1px solid #3b82f6', width: '145px', color: (theme) => theme.palette.text.primary,textTransform:'none' }

export const heroStack ={ display: { xs: 'none', sm: 'flex' }, position: { xs: 'absolute', lg: 'relative' }, zIndex: '1', maxWidth: { sm: '300px', md: '350px', lg: '600px' }, bottom: { xs: 0, lg: 'auto' }, right: { xs: '15px', lg: 'auto' }, alignSelf: 'flex-end' }

export const heroImg ={ color: '#3b82f6', width: "63%", position: 'absolute', zIndex: '-1', top: '24%', left: '-6%', animation: 'spin 28s linear infinite', '@keyframes spin': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } } }