import { useState } from 'react'
import { Box, Pagination, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import * as style from './projectCardStyle';


const ProjectCard = ({ cardData }) => {
  // Pagination start
  const [page, setPage] = useState(1);
  const pageChange = (item, value) => setPage(value);
  const cardsPerPage = 4;
  const firstCard = (cardsPerPage * page) - cardsPerPage
  const lastCard = cardsPerPage * page
  const filterCard = cardData.slice(firstCard, lastCard);
  const totalPage = Math.ceil(cardData.length /cardsPerPage);
  // Pagination End

  return (
    <>
      <Stack flexDirection='row' justifyContent='space-between' gap='24px' flexWrap='wrap'>
        {filterCard.map((item, index) => (
          <Box
            key={item.name}
            component={motion.div}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -300 : 300
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <Box
              component='a'
              href={item.link}
              target='_blank'
              sx={style.hoverBox}
              rel="noopener noreferrer">
                
              <Box
                component='img'
                src={`images/${item.image}`}
                sx={{ width: '100%' }}
                alt={item.name} />
              <Stack
                sx={{ marginTop: '24px', width: '100%' }}
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
                gap='30px' >
                <Stack>
                  <Typography className='projectTitleHover' variant='h4'>{item.name}</Typography>
                  <Typography color='text.secondary' sx={{ marginTop: '16px' }} variant='subtitle2'>{item.desc}</Typography>
                </Stack>
                <Box className='projectIconContainer' sx={style.iconContainer}>
                  <ArrowOutwardOutlinedIcon className='projectIconHover' sx={{ fontSize: '28px', color: '#1f1f24' }} />
                </Box>
              </Stack>
            </Box>
          </Box>
        ))
        }

      </Stack >
      {/* I must put ? after cardData because cardData is props, and props(or api) in initial render is 0 */}
      {cardData?.length >= cardsPerPage && <Pagination  count={totalPage} page={page} onChange={pageChange} sx={{ marginTop: '20px' }} color='text' shape='rounded'  />}

    </>

  )
}

export default ProjectCard