import { Button, Typography } from "@mui/material"
import { useTranslation } from 'react-i18next';
import { WalletButton } from "../components/WalletButton";

const MainPage = () => {
    const { t } = useTranslation('profiles');

    return (
        <div className="App">
            <Typography variant="h2" color='primary'>{t('moto')}</Typography>
            <WalletButton />
            <p>{t('description.part2')}</p>
            <Button variant="contained" color="primary">Hello this</Button>
            <Button variant="contained" color='secondary'>Hello this</Button>
        </div>
    )
}

export default MainPage
