import '../style/componentCampagnes.css'
import modifyIcon from '../img/modify-icon.svg'
import shareIcon from '../img/share-icon.svg'
import settingIcon from '../img/setting-icon.svg'
function Campagne(props){
    return(
        <div className={"card_campaign"}>
            <div className={"campaignName"}>
                <p>Fonctionalité {props.nom}</p>
                <div className={"campaignType"}>
                    {props.type[0] && <p>{props.type[0]}</p>}
                    {props.type[1] && <p>{props.type[1]}</p>}
                    {props.type[2] && <p>{props.type[2]}</p>}
                </div>
            </div>
            <div className={"campaignNumber"}>

                <div className={"campaignPhoto"}>
                    {props.image &&
                        <img src={props.image} alt={"profil de l'utilisateur qui est sur la campagne"}/>
                    }
                </div>

                <div className={"campaignShare"}>
                    <p>{props.partage}</p>
                    <p>({props.attente} en attente)</p>
                </div>
                <p className={"campaignClick"}>{props.clic}</p>
                <p className={"campaignContact"}>{props.contact}</p>
            </div>
            <div className={"campaignModif"}>
                <div className={"imgModify"}>
                    <img src={shareIcon} alt={"icone de partage"}/>
                </div>
                <div className={"imgModify"}>
                    <img src={modifyIcon} alt={"icone de modification"}/>
                </div>
                <div className={"imgModify"}>
                    <img src={settingIcon} alt={"icone de paramètre"}/>
                </div>

            </div>

        </div>
    )
}
export default Campagne