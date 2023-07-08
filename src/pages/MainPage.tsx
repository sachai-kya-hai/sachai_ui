import { Button,Typography } from "@mui/material"
import ProfileCard from "../components/ProfileCard";
import { useTranslation } from 'react-i18next';
import ResponsiveAppBar from "../components/Navbar/ResponsiveAppbar";


const MainPage = () => {
    const {t} = useTranslation('profiles');
    
    return (
        <div className="App">
           <Typography variant="h2" color='primary'>{t('moto')}</Typography>
            
            <p>{t('description.part2')}</p>
            <Button variant="contained" color="primary">Hello this</Button>
            <Button variant="contained" color='secondary'>Hello this</Button>
            <ResponsiveAppBar />
            
        </div>
    )
}

export default MainPage
