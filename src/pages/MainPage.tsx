import { Box, Typography } from "@mui/material"
import { useTranslation } from 'react-i18next';


const MainPage = () => {
  const { t } = useTranslation('profiles', { keyPrefix: 'main-page' });

  return (
    <Box sx={{}}>
      <Typography variant="h3" color='primary'>{t('title')}</Typography>

      <p>{t('description.part2')}</p>

    </Box>
  )
}

export default MainPage
