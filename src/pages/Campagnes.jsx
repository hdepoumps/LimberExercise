import React, { useState } from 'react';
import '../style/campagnes.css'
import campagnedata from '../data/campagne.json'
import Campagne from '../components/Campagnes'
import notifIcon from '../img/notification-icon.svg'
import profil from '../img/profilePicture.png'
import arrow from '../img/fleche-icon.svg'
import search from '../img/search-icon.svg'
import nextArrow from '../img/next-arrow.svg'
function Campagnes(){
    const [nombreDeResultats, setNombreDeResultats] = useState(5); // Par défaut, afficher 5 résultats
    const [startIndex, setStartIndex] = useState(0); // Indice de départ pour slice
    const [rechercheTerm, setRechercheTerm] = useState('');
    // Gérer le changement de la sélection
    const handleSelectChange = (e) => {
        const selectedValue = parseInt(e.target.value, 10); // Convertir en nombre
        setNombreDeResultats(selectedValue);
        setStartIndex(0); // Réinitialiser l'indice de départ à 0 lorsque vous changez le nombre de résultats
    };


    // Afficher les résultats actuellement visibles
    const handleNextClick = () => {
        setStartIndex(startIndex + nombreDeResultats);
    };

    // Gérer le bouton "Précédent"
    const handlePreviousClick = () => {
        if (startIndex - nombreDeResultats >= 0) {
            setStartIndex(startIndex - nombreDeResultats);
        }
    };

    // Calculer le numéro de la page actuelle
    const currentPage = Math.ceil((startIndex + 1) / nombreDeResultats);
    const totalPages = Math.ceil(campagnedata.length / nombreDeResultats);

    const printNextButton = startIndex + nombreDeResultats < campagnedata.length;
    const printPrevButton = startIndex > 0;

    const handleRechercheChange = (e) => {
        setRechercheTerm(e.target.value);
    };

    // Filtrer les données en fonction du terme de recherche
    const campagnesFiltrees = campagnedata.filter((item) =>
        item.nom.toLowerCase().includes(rechercheTerm.toLowerCase())
    );
    const campagnesAffichees = campagnesFiltrees.slice(startIndex, startIndex + nombreDeResultats).map((item, index) => (
        <Campagne
            key={index}
            nom={item.nom}
            type={item.type}
            partage={item.nombre_de_partage}
            attente={item.nombre_de_partage_en_attente}
            clic={item.nombre_de_clic}
            contact={item.nombre_de_contact}
        />
    ));

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
                    <button className={"newCampaign"} type="button">Nouvelle campagne</button>
                </div>
                <div className={"recherche"}>
                    <select>
                        <option value={0}>Date de création. desc.</option>
                        <option value={1}>Date de création. asc.</option>
                        <option value={2}>Date de modification. desc.</option>
                        <option value={3}>Date de modification. asc.</option>
                    </select>
                    <div>
                        <input type="search"
                               placeholder="Recherche..."
                               value={rechercheTerm}
                               onChange={handleRechercheChange}
                        />
                        <button >
                            <img className={"search"} src={search} alt={"loupe"}/>
                        </button>

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
                {campagnesAffichees}

                <div className={"printPage"}>
                    <select onChange={handleSelectChange} value={nombreDeResultats}>
                        <option value={5}>Afficher 5 résultats</option>
                        <option value={10}>Afficher 10 résultats</option>
                        <option value={20}>Afficher 20 résultats</option>
                    </select>

                    <div className={"changePage"}>

                            <button
                                className={'rotateArrow'}
                                onClick={handlePreviousClick}
                                disabled={startIndex === 0}
                            >
                                { printPrevButton && (
                                    <img src={nextArrow} alt={"fleche pour afficher les résultat suivant"}/>
                                )}
                            </button>

                        <p>
                            {currentPage}/{totalPages}
                        </p>
                        {/* Bouton "Suivant" (désactivé si nous sommes à la fin) */}

                            <button
                                onClick={handleNextClick}
                                disabled={startIndex + nombreDeResultats >= campagnedata.length}
                            >
                                { printNextButton && (
                                    <img src={nextArrow} alt={"fleche pour afficher les résultat suivant"}/>
                                )}
                            </button>


                    </div>
                </div>

            </section>
        </main>
    )
}
export default Campagnes