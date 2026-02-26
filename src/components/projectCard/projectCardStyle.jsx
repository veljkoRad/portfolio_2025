export const hoverBox= {
              width: '100%',
              maxWidth: { xs: 614, sm: 340, md: 450, lg: 620 },
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transition: "all 0.3s ease 0s",
              color: (theme) => theme.palette.text.primary,
              p: '24px',
              background: (theme) => theme.palette.background.default,
              borderRadius: '16px',
              cursor: 'pointer',
              '&:hover': { background: "#fff", border: '1px solid #3b82f6' },
              '&:hover .projectTitleHover': { color: (theme) => theme.palette.text.blue },
              '&:hover .projectIconContainer': { transform: 'rotate(45deg)', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', border: 'none' },
              '&:hover .projectIconHover': { color: '#fff' }
            }

            export const iconContainer ={ 
              transition: "all 0.3s ease 0s", 
              background: '#fff', 
              minWidth: '40px', 
              width: '40px', 
              height: '40px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              border: '1px solid #1f1f24', 
              borderRadius: '50%' 
            }