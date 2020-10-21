import React from 'react'
import PortfolioContext from '../PortfolioContext'


export default function ContextContainer(props) {
    return (
        <PortfolioContext.Provider>
            {props.children}
        </PortfolioContext.Provider>
    )
}
