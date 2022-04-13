import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

 const NavBar= ():JSX.Element => {

    const [displayMenu,displayMenuSet]=useState(false);

     const navList:string[] = ["About","Skills" , "Works","Blog", "Contact"];

     const showMenu = () =>{
         if(!displayMenu)
         displayMenuSet(true);
     }
     const hideMenu = () =>{
        if(displayMenu)
        displayMenuSet(false);
    }

    useEffect(()=>{
       window.onresize = () =>{
           if(window.innerWidth > 768){
               displayMenuSet(false);
           }
       }
    });


    return(
        <nav className={styles.container}>
            <div className={displayMenu?styles.navWrapper:undefined}>
                
                <div className={styles.logo} tabIndex={-1} role="button">
                <Link title='Home' to='/' onClick={hideMenu}>
         <svg width="1025" height="1000" viewBox="0 0 1025 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_25_3)">
<path d="M280 691.192V305C280 282.909 297.909 265 320 265H324.217C346.308 265 364.217 282.909 364.217 305V691.192C364.217 713.283 346.308 731.192 324.217 731.192H320C297.909 731.192 280 713.283 280 691.192Z" fill="url(#paint0_linear_25_3)"/>
<path d="M706 265H701.783C679.692 265 661.783 282.909 661.783 305V692.503C661.783 714.076 678.89 731.762 700.45 732.481L704.667 732.622C727.268 733.375 746 715.258 746 692.644V305C746 282.909 728.091 265 706 265Z" fill="url(#paint1_linear_25_3)"/>
<path d="M526.337 444.737H499.663C477.571 444.737 459.663 462.645 459.663 484.737V511.455C459.663 533.546 477.571 551.455 499.663 551.455H526.337C548.429 551.455 566.337 533.546 566.337 511.455V484.737C566.337 462.645 548.429 444.737 526.337 444.737Z" fill="url(#paint2_linear_25_3)"/>
</g>
<path d="M985 0H320C297.909 0 280 17.9086 280 40V195C280 217.091 297.909 235 320 235H750C772.091 235 790 252.909 790 275V725C790 747.091 772.091 765 750 765H320C297.909 765 280 782.909 280 805V960C280 982.091 297.909 1000 320 1000H985C1007.09 1000 1025 982.091 1025 960V40C1025 17.9086 1007.09 0 985 0Z" fill="url(#paint3_linear_25_3)"/>
<rect width="235" height="1000" rx="40" fill="url(#paint4_linear_25_3)"/>
<defs>
<filter id="filter0_d_25_3" x="277" y="265" width="500" height="504.644" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="14" dy="20"/>
<feGaussianBlur stdDeviation="8.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_3"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_3" result="shape"/>
</filter>
<linearGradient id="paint0_linear_25_3" x1="-15" y1="-46" x2="1065.81" y2="1008.37" gradientUnits="userSpaceOnUse">
<stop stopColor="#86CACA"/>
<stop offset="1" stopColor="#AA84C8"/>
</linearGradient>
<linearGradient id="paint1_linear_25_3" x1="-15" y1="-46" x2="1065.81" y2="1008.37" gradientUnits="userSpaceOnUse">
<stop stopColor="#86CACA"/>
<stop offset="1" stopColor="#AA84C8"/>
</linearGradient>
<linearGradient id="paint2_linear_25_3" x1="-15" y1="-46" x2="1065.81" y2="1008.37" gradientUnits="userSpaceOnUse">
<stop stopColor="#86CACA"/>
<stop offset="1" stopColor="#AA84C8"/>
</linearGradient>
<linearGradient id="paint3_linear_25_3" x1="-39" y1="-70" x2="1025" y2="1066" gradientUnits="userSpaceOnUse">
<stop stopColor="#86CACA"/>
<stop offset="1" stopColor="#AA84C8"/>
</linearGradient>
<linearGradient id="paint4_linear_25_3" x1="5.07696e-05" y1="-78" x2="1057" y2="1042" gradientUnits="userSpaceOnUse">
<stop stopColor="#86CACA"/>
<stop offset="1" stopColor="#AA84C8"/>
</linearGradient>
</defs>
</svg>
</Link>
        </div>
                
            
      
        <div className={displayMenu?styles.showLists:styles.lists}>
            {
                navList.map(title=>(
                    <NavItem key={title} title={title} toggle={hideMenu} />
                ))
            }
            </div>
            <div className={styles.menu}>
            {displayMenu? <span onClick={hideMenu} tabIndex={-1} role="button">&#9747;</span>:<span onClick={showMenu} tabIndex={-1} role="button">&#9776;</span>}
            </div>
            </div>
           
        </nav>
    );
}

export default NavBar;

type NavType = {
    title:string;
    toggle: () => void;
}

const NavItem = ({title,toggle}:NavType):JSX.Element =>{
    return(
        <Link to={`/${title}`} title={title} onClick={toggle}>
         <div className={styles.navItem}>
            <span>{title}</span>
        </div>
        </Link>
       
    );

}
