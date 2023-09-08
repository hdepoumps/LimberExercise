import { Link } from 'react-router-dom'
import '../style/header.css'
import logo from '../img/limber-logo-114.png'
import { BrowserRouter, Route, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    console.log(lastSegment)
    return (
        <header>
            <div className={"logo"}>
                <img src={logo} alt={"logo Limber"}/>
            </div>

            <nav>
                <Link to={`/accueil`}>
                    <div className={`menuBouton modifyStroke ${lastSegment === "accueil" ? "actif" : ""}`}>
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8691 24H21.0031C21.577 24 22.0602 23.5119 22.0602 22.9324V13.3236H23.9326C24.3856 13.3236 24.748 13.0491 24.9292 12.6525C25.0802 12.2255 24.9896 11.7679 24.6574 11.4629L13.7248 1.27454C13.3322 0.908488 12.698 0.908488 12.2752 1.27454L1.34259 11.4629C1.01038 11.7679 0.91978 12.2255 1.07078 12.6525C1.22179 13.0796 1.61439 13.3236 2.0674 13.3236H3.93983V22.9324C3.93983 23.5119 4.42304 24 4.99685 24H10.1309C10.7048 24 11.188 23.5119 11.188 22.9324V16.4045H14.812V22.9324C14.812 23.5119 15.2952 24 15.8691 24ZM11.037 15.1844C10.4632 15.1844 9.97995 15.6724 9.97995 16.252V22.7798H5.14786V13.1711C5.14786 12.5915 4.66465 12.1034 4.09084 12.1034H2.42981L13 2.25066L23.5702 12.1034H21.9092C21.3354 12.1034 20.8521 12.5915 20.8521 13.1711V22.7798H16.0201V16.252C16.0201 15.6724 15.5368 15.1844 14.963 15.1844H11.037Z" fill="#91919C" stroke="#91919C" strokeWidth="0.8"/>
                        </svg>
                        <p>Accueil</p>
                    </div>
                </Link>
                <Link to={`/murs`}>
                    <div className={`menuBouton modifyStroke ${lastSegment === "murs" ? "actif" : ""}`}>
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7267 1.00523C12.7287 1.00305 12.7305 1.00133 12.7319 1H20.9556C20.957 1.00133 20.9588 1.00305 20.9608 1.00523C20.9773 1.02322 21 1.06294 21 1.125V8.625C21 8.68706 20.9773 8.72678 20.9608 8.74477C20.9588 8.74695 20.957 8.74867 20.9556 8.75H12.7319C12.7305 8.74867 12.7287 8.74695 12.7267 8.74477C12.7102 8.72678 12.6875 8.68706 12.6875 8.625V1.125C12.6875 1.06294 12.7102 1.02322 12.7267 1.00523ZM1.0392 1.00523C1.0412 1.00305 1.04296 1.00133 1.04444 1H9.26806C9.26954 1.00133 9.2713 1.00305 9.2733 1.00523C9.28979 1.02322 9.3125 1.06294 9.3125 1.125V8.625C9.3125 8.68706 9.28979 8.72678 9.2733 8.74477C9.2713 8.74695 9.26954 8.74867 9.26806 8.75H1.04444C1.04296 8.74867 1.0412 8.74695 1.0392 8.74477C1.02271 8.72678 1 8.68706 1 8.625V1.125C1 1.06294 1.02271 1.02322 1.0392 1.00523ZM1 19.875V12.375C1 12.3129 1.02271 12.2732 1.0392 12.2552C1.0412 12.253 1.04296 12.2513 1.04444 12.25H9.26806C9.26954 12.2513 9.2713 12.253 9.2733 12.2552C9.28979 12.2732 9.3125 12.3129 9.3125 12.375V19.875C9.3125 19.9371 9.28979 19.9768 9.2733 19.9948C9.2713 19.997 9.26954 19.9987 9.26806 20H1.04444C1.04296 19.9987 1.0412 19.997 1.0392 19.9948C1.02271 19.9768 1 19.9371 1 19.875ZM20.9608 19.9948C20.9588 19.997 20.957 19.9987 20.9556 20H12.7319C12.7305 19.9987 12.7287 19.997 12.7267 19.9948C12.7102 19.9768 12.6875 19.9371 12.6875 19.875V12.375C12.6875 12.3129 12.7102 12.2732 12.7267 12.2552C12.7287 12.253 12.7305 12.2513 12.7319 12.25H20.9556C20.957 12.2513 20.9588 12.253 20.9608 12.2552C20.9773 12.2732 21 12.3129 21 12.375V19.875C21 19.9371 20.9773 19.9768 20.9608 19.9948Z" stroke="#91919C" strokeWidth="2"/>
                        </svg>
                        <p>Murs</p>
                    </div>
                </Link>
                <Link to={`/contenus`}>
                    <div className={`menuBouton modifyFill ${lastSegment === "contenus" ? "actif" : ""}`}>
                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4925 1.59377L12.6671 1.77265L2.36639 11.8302C-0.419436 14.5502 -0.468444 18.9465 2.29911 21.6723L2.12368 21.8504L2.29911 21.6723C5.09143 24.4226 9.6681 24.4551 12.4958 21.6943L20.9451 13.4444L21.1198 13.6233L20.9452 13.4444C21.1463 13.248 21.1429 12.9379 20.9367 12.7454L21.1072 12.5627L20.9367 12.7454L19.8132 11.6971C19.6004 11.4985 19.255 11.5025 19.0474 11.7052L18.8727 11.5264L19.0474 11.7052L10.598 19.9552L10.4233 19.7763L10.598 19.9552C8.82746 21.6838 5.97215 21.6817 4.20487 19.941C2.42763 18.1906 2.45945 15.3315 4.26413 13.5694L4.43879 13.7482L4.26413 13.5694L14.5649 3.51185C15.6048 2.4965 17.2708 2.49704 18.3102 3.51185L18.1355 3.69073L18.3102 3.51185C19.3743 4.55083 19.3743 6.24347 18.3107 7.28201L18.3106 7.28209L9.33153 16.0406C9.33149 16.0407 9.33146 16.0407 9.33142 16.0407C9.01439 16.3502 8.5195 16.3443 8.20866 16.0298L8.20864 16.0298C7.87656 15.6937 7.91198 15.1416 8.24363 14.8177L8.24375 14.8176L15.3018 7.93538C15.5031 7.73915 15.4999 7.429 15.2938 7.23644L14.1712 6.18742L14.3419 6.00476L14.1712 6.18742C13.9586 5.98873 13.6131 5.99245 13.4053 6.19506L6.34663 13.0778L12.4925 1.59377ZM12.4925 1.59377L12.6671 1.77265C14.7462 -0.25746 18.1286 -0.257637 20.2079 1.77265L20.3826 1.59377L20.2079 1.77265C22.2628 3.77902 22.2653 7.01278 20.208 9.0215C20.208 9.02153 20.2079 9.02156 20.2079 9.02158L11.2288 17.7802L11.2287 17.7803M12.4925 1.59377L11.2287 17.7803M11.2287 17.7803C9.8609 19.1157 7.62301 19.097 6.27848 17.7366L6.10067 17.9124M11.2287 17.7803L6.10067 17.9124M6.10067 17.9124L6.27848 17.7366C4.98984 16.4328 5.02816 14.3653 6.34651 13.0779L6.10067 17.9124Z" fill="#91919C" stroke="white" strokeWidth="0.5"/>
                        </svg>
                        <p>Contenus</p>
                    </div>
                </Link>
                <Link to={`/campagnes`}>
                    <div className={`menuBouton modifyFill ${lastSegment === "campagnes" ? "actif" : ""}`}>
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.0625 22.75V2.35938C5.0625 1.19438 6.00688 0.25 7.17188 0.25H19.8281C20.9931 0.25 21.9375 1.19438 21.9375 2.35938V22.75L13.5 17.8281L5.0625 22.75Z" fill="#91919C"/>
                        </svg>
                        <p>Campagnes</p>
                    </div>
                </Link>
                <Link to={`/calendrier`}>
                    <div className={`menuBouton modifyFill ${lastSegment === "calendrier" ? "actif" : ""}`}>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.64844 11.9375H4.85156C4.55508 11.9375 4.3125 11.6949 4.3125 11.3984V9.60156C4.3125 9.30508 4.55508 9.0625 4.85156 9.0625H6.64844C6.94492 9.0625 7.1875 9.30508 7.1875 9.60156V11.3984C7.1875 11.6949 6.94492 11.9375 6.64844 11.9375ZM11.5 11.3984V9.60156C11.5 9.30508 11.2574 9.0625 10.9609 9.0625H9.16406C8.86758 9.0625 8.625 9.30508 8.625 9.60156V11.3984C8.625 11.6949 8.86758 11.9375 9.16406 11.9375H10.9609C11.2574 11.9375 11.5 11.6949 11.5 11.3984ZM15.8125 11.3984V9.60156C15.8125 9.30508 15.5699 9.0625 15.2734 9.0625H13.4766C13.1801 9.0625 12.9375 9.30508 12.9375 9.60156V11.3984C12.9375 11.6949 13.1801 11.9375 13.4766 11.9375H15.2734C15.5699 11.9375 15.8125 11.6949 15.8125 11.3984ZM11.5 15.7109V13.9141C11.5 13.6176 11.2574 13.375 10.9609 13.375H9.16406C8.86758 13.375 8.625 13.6176 8.625 13.9141V15.7109C8.625 16.0074 8.86758 16.25 9.16406 16.25H10.9609C11.2574 16.25 11.5 16.0074 11.5 15.7109ZM7.1875 15.7109V13.9141C7.1875 13.6176 6.94492 13.375 6.64844 13.375H4.85156C4.55508 13.375 4.3125 13.6176 4.3125 13.9141V15.7109C4.3125 16.0074 4.55508 16.25 4.85156 16.25H6.64844C6.94492 16.25 7.1875 16.0074 7.1875 15.7109ZM15.8125 15.7109V13.9141C15.8125 13.6176 15.5699 13.375 15.2734 13.375H13.4766C13.1801 13.375 12.9375 13.6176 12.9375 13.9141V15.7109C12.9375 16.0074 13.1801 16.25 13.4766 16.25H15.2734C15.5699 16.25 15.8125 16.0074 15.8125 15.7109ZM20.125 5.03125V19.8438C20.125 21.0342 19.1592 22 17.9688 22H2.15625C0.96582 22 0 21.0342 0 19.8438V5.03125C0 3.84082 0.96582 2.875 2.15625 2.875H4.3125V0.539062C4.3125 0.242578 4.55508 0 4.85156 0H6.64844C6.94492 0 7.1875 0.242578 7.1875 0.539062V2.875H12.9375V0.539062C12.9375 0.242578 13.1801 0 13.4766 0H15.2734C15.5699 0 15.8125 0.242578 15.8125 0.539062V2.875H17.9688C19.1592 2.875 20.125 3.84082 20.125 5.03125ZM17.9688 19.5742V5.1875H2.15625V19.5742C2.15625 19.7225 2.27754 19.8438 2.42578 19.8438H17.6992C17.8475 19.8438 17.9688 19.7225 17.9688 19.5742Z" fill="#91919C"/>
                        </svg>
                        <p>Calendrier</p>
                    </div>
                </Link>
                <Link to={`/scenarios`}>
                    <div className={`menuBouton modifyFill ${lastSegment === "scenarios" ? "actif" : ""}`}>
                        <svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_1_26" fill="white">
                                <path d="M4.78125 31.5V7.34999H19.6562V11.025C19.6562 11.0939 19.67 11.1622 19.6967 11.2259C19.7234 11.2896 19.7625 11.3475 19.8118 11.3962C19.8612 11.445 19.9197 11.4836 19.9842 11.51C20.0487 11.5364 20.1177 11.55 20.1875 11.55H23.9062V31.5H4.78125ZM20.7188 8.09247L23.1549 10.5H20.7188V8.09247Z"/>
                            </mask>
                            <path d="M6.90625 6.29999V5.54999V6.29999ZM4.25 6.29999L4.24998 7.04999H4.25V6.29999ZM3.71875 6.82499H4.46875V6.82497L3.71875 6.82499ZM3.71875 32.025L4.46875 32.025V32.025H3.71875ZM4.25 32.55V31.8H4.24998L4.25 32.55ZM24.4375 32.55L24.4375 31.8H24.4375V32.55ZM24.9688 32.025H24.2188V32.025L24.9688 32.025ZM24.9688 11.025L24.2188 11.025V11.025H24.9688ZM24.8131 10.6538L24.286 11.1872L24.286 11.1873L24.8131 10.6538ZM20.5631 6.45377L20.0359 6.98718L20.036 6.98723L20.5631 6.45377ZM20.1875 6.29999V7.04999H20.1875L20.1875 6.29999ZM6.90625 5.54999H4.25V7.04999H6.90625V5.54999ZM4.25002 5.54999C4.08298 5.54999 3.91738 5.58249 3.76258 5.64585L4.33081 7.03406C4.30492 7.04465 4.27748 7.04999 4.24998 7.04999L4.25002 5.54999ZM3.76258 5.64585C3.60777 5.70922 3.46653 5.80233 3.34716 5.9203L4.40153 6.98722C4.38082 7.00768 4.35671 7.02345 4.33081 7.03406L3.76258 5.64585ZM3.34716 5.9203C3.22777 6.03829 3.13259 6.17884 3.06748 6.33417L4.45089 6.91399C4.43918 6.94193 4.42226 6.96673 4.40153 6.98722L3.34716 5.9203ZM3.06748 6.33417C3.00237 6.48952 2.96875 6.65633 2.96875 6.82501L4.46875 6.82497C4.46875 6.85576 4.4626 6.88604 4.45089 6.91399L3.06748 6.33417ZM2.96875 6.82499V32.025H4.46875V6.82499H2.96875ZM2.96875 32.025C2.96875 32.1936 3.00237 32.3605 3.06748 32.5158L4.45089 31.936C4.4626 31.9639 4.46875 31.9942 4.46875 32.025L2.96875 32.025ZM3.06748 32.5158C3.13259 32.6711 3.22777 32.8117 3.34716 32.9297L4.40153 31.8628C4.42226 31.8832 4.43918 31.908 4.45089 31.936L3.06748 32.5158ZM3.34716 32.9297C3.46654 33.0476 3.60778 33.1408 3.76258 33.2041L4.33081 31.8159C4.3567 31.8265 4.38081 31.8423 4.40153 31.8628L3.34716 32.9297ZM3.76258 33.2041C3.91737 33.2675 4.08297 33.3 4.25002 33.3L4.24998 31.8C4.2775 31.8 4.30494 31.8053 4.33081 31.8159L3.76258 33.2041ZM4.25 33.3H24.4375V31.8H4.25V33.3ZM24.4375 33.3C24.6045 33.3 24.7701 33.2675 24.9249 33.2041L24.3567 31.8159C24.3826 31.8053 24.41 31.8 24.4375 31.8L24.4375 33.3ZM24.9249 33.2041C25.0797 33.1408 25.221 33.0477 25.3403 32.9297L24.286 31.8628C24.3067 31.8423 24.3308 31.8265 24.3567 31.8159L24.9249 33.2041ZM25.3403 32.9297C25.4597 32.8117 25.5549 32.6711 25.62 32.5158L24.2366 31.936C24.2483 31.908 24.2652 31.8832 24.286 31.8628L25.3403 32.9297ZM25.62 32.5158C25.6851 32.3605 25.7188 32.1936 25.7188 32.025L24.2188 32.025C24.2188 31.9942 24.2249 31.9639 24.2366 31.936L25.62 32.5158ZM25.7188 32.025V30.45H24.2188V32.025H25.7188ZM25.7188 30.45V11.025H24.2188V30.45H25.7188ZM25.7188 11.025C25.7188 10.8563 25.6851 10.6895 25.62 10.5341L24.2366 11.114C24.2249 11.0861 24.2188 11.0558 24.2188 11.025L25.7188 11.025ZM25.62 10.5341C25.5549 10.3788 25.4597 10.2382 25.3403 10.1203L24.286 11.1873C24.2653 11.1668 24.2483 11.142 24.2366 11.114L25.62 10.5341ZM25.3403 10.1203L21.0903 5.92031L20.036 6.98723L24.286 11.1872L25.3403 10.1203ZM21.0904 5.92035C20.971 5.80237 20.8298 5.70924 20.6749 5.64586L20.1067 7.03405C20.0807 7.02344 20.0566 7.00766 20.0359 6.98718L21.0904 5.92035ZM20.6749 5.64586C20.5201 5.58249 20.3545 5.54999 20.1875 5.54999L20.1875 7.04999C20.16 7.04999 20.1326 7.04465 20.1067 7.03405L20.6749 5.64586ZM20.1875 5.54999H6.90625V7.04999H20.1875V5.54999ZM4.78125 31.5H3.28125V33H4.78125V31.5ZM4.78125 7.34999V5.84999H3.28125V7.34999H4.78125ZM19.6562 7.34999H21.1562V5.84999H19.6562V7.34999ZM19.6562 11.025L21.1562 11.025V11.025H19.6562ZM20.1875 11.55V10.05H20.1875L20.1875 11.55ZM23.9062 11.55H25.4062V10.05H23.9062V11.55ZM23.9062 31.5V33H25.4062V31.5H23.9062ZM20.7188 8.09247L21.7731 7.02555L19.2188 4.50124V8.09247H20.7188ZM23.1549 10.5V12H26.8068L24.2093 9.43307L23.1549 10.5ZM20.7188 10.5H19.2188V12H20.7188V10.5ZM6.28125 31.5V7.34999H3.28125V31.5H6.28125ZM4.78125 8.84999H19.6562V5.84999H4.78125V8.84999ZM18.1562 7.34999V11.025H21.1562V7.34999H18.1562ZM18.1562 11.0249C18.1562 11.2934 18.2098 11.5587 18.3133 11.8057L21.0801 10.6461C21.1302 10.7657 21.1563 10.8945 21.1562 11.025L18.1562 11.0249ZM18.3133 11.8057C18.4168 12.0527 18.568 12.2759 18.7575 12.4631L20.8662 10.3293C20.957 10.419 21.03 10.5265 21.0801 10.6461L18.3133 11.8057ZM18.7575 12.4631C18.9469 12.6503 19.1708 12.7979 19.416 12.8982L20.5524 10.1218C20.6687 10.1694 20.7755 10.2396 20.8662 10.3293L18.7575 12.4631ZM19.416 12.8982C19.6611 12.9986 19.9232 13.05 20.1875 13.05L20.1875 10.05C20.3122 10.05 20.4362 10.0742 20.5524 10.1218L19.416 12.8982ZM20.1875 13.05H23.9062V10.05H20.1875V13.05ZM22.4062 11.55V31.5H25.4062V11.55H22.4062ZM23.9062 30H4.78125V33H23.9062V30ZM19.6644 9.15939L22.1006 11.5669L24.2093 9.43307L21.7731 7.02555L19.6644 9.15939ZM23.1549 8.99999H20.7188V12H23.1549V8.99999ZM22.2188 10.5V8.09247H19.2188V10.5H22.2188Z" fill="#91919C" mask="url(#path-1-inside-1_1_26)"/>
                            <path d="M12.0356 12.8333H9.37933V13.8833H12.0356V12.8333Z" fill="#91919C"/>
                            <path d="M12.2188 15.75H9.03125V16.8H12.2188V15.75Z" fill="#91919C"/>
                            <path d="M19.6562 15.75H13.2812V16.8H19.6562V15.75Z" fill="#91919C"/>
                            <path d="M12.75 26.25H9.03125V27.3H12.75V26.25Z" fill="#91919C"/>
                            <path d="M19.6562 26.25H13.8125V27.3H19.6562V26.25Z" fill="#91919C"/>
                            <path d="M11.1562 18.375H9.03125V19.425H11.1562V18.375Z" fill="#91919C"/>
                            <path d="M17 18.375H12.2188V19.425H17V18.375Z" fill="#91919C"/>
                            <path d="M19.6562 18.375H18.0625V19.425H19.6562V18.375Z" fill="#91919C"/>
                            <path d="M19.6562 23.625H17.5312V24.675H19.6562V23.625Z" fill="#91919C"/>
                            <path d="M16.4688 23.625H11.6875V24.675H16.4688V23.625Z" fill="#91919C"/>
                            <path d="M10.625 23.625H9.03125V24.675H10.625V23.625Z" fill="#91919C"/>
                            <path d="M12.2188 21H9.03125V22.05H12.2188V21Z" fill="#91919C"/>
                            <path d="M19.6562 21H13.2812V22.05H19.6562V21Z" fill="#91919C"/>
                            <path d="M17.4579 12.8333H13.2079V13.8833H17.4579V12.8333Z" fill="#91919C"/>
                        </svg>
                        <p>Scénarios</p>
                    </div>
                </Link>
                <Link to={`/conversion`}>
                    <div className={`menuBouton modifyStroke ${lastSegment === "conversion" ? "actif" : ""}`}>
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5625 1.69219V3.00469H1V1.69219C1 1.48313 1.07693 1.29826 1.19022 1.17467C1.30085 1.05399 1.4313 1.00469 1.54688 1.00469H6.01562C6.1312 1.00469 6.26165 1.05399 6.37228 1.17467C6.48557 1.29826 6.5625 1.48313 6.5625 1.69219ZM21 1.6875V3H15.4375V1.6875C15.4375 1.47844 15.5144 1.29357 15.6277 1.16998C15.7383 1.0493 15.8688 1 15.9844 1H20.4531C20.5687 1 20.6992 1.0493 20.8098 1.16998C20.9231 1.29357 21 1.47844 21 1.6875ZM1.00718 6.50469H6.5625V8.50469C6.5625 11.9073 8.59219 14.003 10.9993 14.0047C13.4079 14.0063 15.4375 11.9115 15.4375 8.50469V6.50469H20.9891C20.9889 6.52198 20.9887 6.53928 20.9886 6.55657C20.9804 7.31343 20.9723 8.06486 20.9935 8.5861C20.9824 15.048 15.6993 19.1297 11.0365 19.1297C6.36477 19.1297 1.01544 15.0394 1.00431 8.59047C1.02266 8.13338 1.01686 7.52913 1.01057 6.87283C1.0094 6.75169 1.00822 6.62878 1.00718 6.50469Z" stroke="#91919C" strokeWidth="2"/>
                        </svg>
                        <p>Conversion</p>
                    </div>
                </Link>
                <Link to={`/analytics`}>
                    <div className={`menuBouton modifyStroke ${lastSegment === "analytics" ? "actif" : ""}`}>
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.65 19.6875C4.65 19.9064 4.45294 20.15 4.125 20.15H1.375C1.04706 20.15 0.85 19.9064 0.85 19.6875V9.1875C0.85 8.96862 1.04706 8.725 1.375 8.725H4.125C4.45294 8.725 4.65 8.96862 4.65 9.1875V19.6875ZM12.9 19.6875C12.9 19.9064 12.7029 20.15 12.375 20.15H9.625C9.29706 20.15 9.1 19.9064 9.1 19.6875V1.3125C9.1 1.09362 9.29706 0.85 9.625 0.85H12.375C12.7029 0.85 12.9 1.09362 12.9 1.3125V19.6875ZM21.15 19.6875C21.15 19.9064 20.9529 20.15 20.625 20.15H17.875C17.5471 20.15 17.35 19.9064 17.35 19.6875V14.4375C17.35 14.2186 17.5471 13.975 17.875 13.975H20.625C20.9529 13.975 21.15 14.2186 21.15 14.4375V19.6875Z" stroke="#91919C" strokeWidth="1.7"/>
                        </svg>
                        <p>Analytics</p>
                    </div>
                </Link>
            </nav>
        </header>
    )
}

export default Header