import React from 'react'
import '../../../css/main.css'

export default function Hero({children, hero}) {
    return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
    hero: 'defaultHero'
};
