
import Link from "next/link";

export default function Menu ({show,closeMenu}) {
    const closeMenuClick=()=>{
        closeMenu()
    }
    return (
        <div className={`${show ? "" : "collapse"} navbar-collapse sub-menu-bar`}>
            <div id="navbarNine">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="" href="/">Home</Link>


                    </li>
                    <li className="nav-item">
                        <a className="page-scroll" href="#services">Services</a>
                        <ul className="sub-menu">
                            <li className="nav-item">

                                <Link href="/australia" onClick={closeMenuClick}>Australia</Link>
                                <ul className="sub-menu">
                                    <h6 className="menu-title">Program Offered</h6>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#migrate"> Subclass 482</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Subclass 189</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Subclass 186</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Subclass 190</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Open work permit<br/> ( spouse
                                            sponsorship visa)</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">

                                <Link href="/canada" onClick={closeMenuClick}>Canada</Link>
                                <ul className="sub-menu">

                                    <h6 className="menu-title">Program Offered</h6>

                                    <li className="nav-item">
                                        <a className="page-scroll" href="#migrate"> Express entry </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">PNP</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">AIP</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">RNIP</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">AIPP</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">LMIA</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Student visa </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">PR spouse sponsorship </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Visit visa</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="/europe" onClick={closeMenuClick} >Europe</Link>
                                <ul className="sub-menu">


                                    <h6 className="menu-title">Program Offered</h6>

                                    <li className="nav-item">
                                        <a className="page-scroll" href="#migrate"> Luxemburg work permit </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Netherlands work permit </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Germany work permit </a>
                                    </li>
                                </ul>


                            </li>

                            <li className="nav-item">
                                <Link href="/new-zealand" onClick={closeMenuClick} >NewZealand</Link>
                                <ul className="sub-menu">
                                    <h6 className="menu-title">Program Offered</h6>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#migrate"> Tourist Visa</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Working Holiday Visa</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Essential Skills Work Visa</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Essential Skills Work Visa</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Working Visa for Partnership</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Skilled Migrant Residence Visa</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Residence from Work Visa</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item" onClick={closeMenuClick} >
                                <Link href="/ireland/">Ireland</Link>

                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="page-scroll" href="#migrate">Migrate</a>
                    </li>
                    <li className="nav-item">
                        <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}