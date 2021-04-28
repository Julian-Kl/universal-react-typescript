import React from 'react'
import { Helmet } from 'react-helmet'

export const Subpage1: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Subpage1</title>
                <meta name='description' content='Subpage1' />
                <meta property='og:title' content='Subpage1' />
            </Helmet>
            <p>Startseite</p>
        </>
    )
}
