import React, { useState } from 'react';
import '../style/campagnes.css'
import campagnedata from '../data/campagne.json'
import Campagne from '../components/Campagnes'
import notifIcon from '../img/notification-icon.svg'
import profil from '../img/profilePicture.png'
import arrow from '../img/fleche-icon.svg'
import search from '../img/search-icon.svg'
import nextArrow from '../img/next-arrow.svg'

// Define the Campagnes function component
function Campagnes() {
    // Define state variables using the useState hook
    const [nombreDeResultats, setNombreDeResultats] = useState(5); // By default, show 5 results
    const [startIndex, setStartIndex] = useState(0); // Starting index for slicing
    const [rechercheTerm, setRechercheTerm] = useState('');

    // Handle the change in result selection
    const handleSelectChange = (e) => {
        const selectedValue = parseInt(e.target.value, 10); // Convert to a number
        setNombreDeResultats(selectedValue);
        setStartIndex(0); // Reset the starting index to 0 when changing the number of results
    };

    // Handle the "Next" button click
    const handleNextClick = () => {
        setStartIndex(startIndex + nombreDeResultats);
    };

    // Handle the "Previous" button click
    const handlePreviousClick = () => {
        if (startIndex - nombreDeResultats >= 0) {
            setStartIndex(startIndex - nombreDeResultats);
        }
    };

    // Calculate the current page number
    const currentPage = Math.ceil((startIndex + 1) / nombreDeResultats);
    const totalPages = Math.ceil(campagnedata.length / nombreDeResultats);

    // Determine whether to print the "Next" and "Previous" buttons
    const printNextButton = startIndex + nombreDeResultats < campagnedata.length;
    const printPrevButton = startIndex > 0;

    // Handle the change in search term input
    const handleRechercheChange = (e) => {
        setRechercheTerm(e.target.value);
    };

    // Filter the data based on the search term
    const campagnesFiltrees = campagnedata.filter((item) =>
        item.nom.toLowerCase().includes(rechercheTerm.toLowerCase())
    );

    // Slice and map the displayed campaigns
    const campagnesAffichees = campagnesFiltrees.slice(startIndex, startIndex + nombreDeResultats).map((item, index) => (
        <Campagne
            key={index}
            nom={item.nom}
            type={item.type}
            image={item.image}
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
                <div className={"line"}></div>
                <div className={"gestioncampagne"}>
                    <p>Campagnes</p>
                    <p className={"keyWord"}>Mots-clés</p>
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