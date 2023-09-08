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
                    <p>{props.type[0]}</p>
                    <p>{props.type[1]}</p>
                    <p>{props.type[2]}</p>
                </div>
            </div>
            <div className={"campaignNumber"}>
                <div className={"campaignPhoto"}>

                </div>
                <div className={"campaignShare"}>
                    <p>{props.partage}</p>
                    <p>({props.attente} en attente)</p>
                </div>
                <p className={"campaignClick"}>{props.clic}</p>
                <p className={"campaignContact"}>{props.contact}</p>
            </div>
            <div className={"campaignModif"}>
                <img src={shareIcon} alt={"icone de partage"}/>
                <img src={modifyIcon} alt={"icone de modification"}/>
                <img src={settingIcon} alt={"icone de paramètre"}/>
            </div>

        </div>
    )
}
export default Campagne