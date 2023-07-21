import { Box, Typography } from "@mui/material"
import { useTranslation } from 'react-i18next';


const MainPage = () => {
    const { t } = useTranslation('profiles', { keyPrefix: 'main-page' });

    return (
        <Box sx={{}}>
            <Typography variant="h2" color='primary'>{t('moto')}</Typography>
            <p>{t('description.part1')}</p>
            <p>{t('description.part2')}</p>

        </Box>
    )
}

export default MainPage
