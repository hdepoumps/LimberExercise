import '../style/campagnes.css'
import campagnedata from '../data/campagne.json'
import Campagne from '../components/campagne'
import notifIcon from '../img/notification-icon.svg'
import profil from '../img/profilePicture.png'
import arrow from '../img/fleche-icon.svg'
import search from '../img/search-icon.svg'
function Campagnes(){
    const campagneData =campagnedata.map((item,index) => {
        return(
                <Campagne
                    key={index}
                    nom={item.nom}
                    type={item.type}
                    partage={item.nombre_de_partage}
                    attente={item.nombre_de_partage_en_attente}
                    clic={item.nombre_de_clic}
                    contact={item.nombre_de_conntact}
                />
            )
    })
    return(
        <main>
            <section className={"entete"}>
                <h2>Campagnes</h2>
                <div className={"compte"}>
                    <img src={notifIcon} alt={"icone de notification"}/>
                    <p>Jeremy</p>
                    <img src={profil} alt={"photo de profil"}/>
                    <img src={arrow} alt={"icone de flèche"}/>
                </div>
            </section>
            <section className={"filtre"}>
                <div className={"gestioncampagne"}>
                    <p>Campagnes</p>
                    <p>Mots-clés</p>
                    <button type="button">Nouvelle campagne</button>
                </div>
                <div className={"recherche"}>
                    <select>
                        <option value={0}>Date de création. desc.</option>
                        <option value={1}>Date de création. asc.</option>
                        <option value={2}>Date de modification. desc.</option>
                        <option value={3}>Date de modification. asc.</option>
                    </select>
                    <div>
                        <input type="search" name="q" placeholder="Recherche..." />
                        <img className={"search"} src={search} alt={"loupe"}/>
                    </div>
                </div>
            </section>
            <section className={"campagnes"}>
                <div className={"legend"}>
                    <p>Nom</p>
                    <p>Partages</p>
                    <p>Clics</p>
                    <p>Contacts</p>
                </div>

            </section>
        </main>
    )
}
export default Campagnes