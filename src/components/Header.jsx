import { Link } from 'react-router-dom'
import '../style/header.css'
import logo from '../img/limber-logo-114.png'
import accueilIcon from '../img/header-icon/icon-accueil.svg'
import contenusIcon from '../img/header-icon/icon-contenus.svg'
import calendrierIcon from '../img/header-icon/icon-calendrier.svg'
import scenariosIcon from '../img/header-icon/icon-scenarios.svg'
import conversionIcon from '../img/header-icon/icon-conversion.svg'
import analyticsIcon from '../img/header-icon/icon-analytics.svg'
import mursIcon from '../img/header-icon/icon-murs.svg'
import campagnesIcon from '../img/header-icon/icon-campagnes.svg'

function Header() {

    return (
        <header>
            <img className={"logo"} src={logo} alt={"logo Limber"}/>
            <nav>
                <Link to={`/accueil`}>
                    <div className={"menuBouton"}>
                        <img src={accueilIcon} alt={"icone accueil"}/>
                        <p>Accueil</p>
                    </div>
                </Link>
                <Link to={`/murs`}>
                    <div className={"menuBouton"}>
                        <img src={mursIcon} alt={"icone accueil"}/>
                        <p>Murs</p>
                    </div>
                </Link>
                <Link to={`/contenus`}>
                    <div className={"menuBouton"}>
                        <img src={contenusIcon} alt={"icone accueil"}/>
                        <p>Contenus</p>
                    </div>
                </Link>
                <Link to={`/campagnes`}>
                    <div className={"menuBouton"}>
                        <img src={campagnesIcon} alt={"logo accueil"}/>
                        <p>Campagnes</p>
                    </div>
                </Link>
                <Link to={`/calendrier`}>
                    <div className={"menuBouton"}>
                        <img src={calendrierIcon} alt={"logo accueil"}/>
                        <p>Calendrier</p>
                    </div>
                </Link>
                <Link to={`/scenarios`}>
                    <div className={"menuBouton"}>
                        <img src={scenariosIcon} alt={"logo accueil"}/>
                        <p>Scénarios</p>
                    </div>
                </Link>
                <Link to={`/conversion`}>
                    <div className={"menuBouton"}>
                        <img src={conversionIcon} alt={"logo accueil"}/>
                        <p>Conversion</p>
                    </div>
                </Link>
                <Link to={`/analytics`}>
                    <div className={"menuBouton"}>
                        <img src={analyticsIcon} alt={"logo accueil"}/>
                        <p>Analytics</p>
                    </div>
                </Link>










            </nav>
        </header>
    )
}

export default Header