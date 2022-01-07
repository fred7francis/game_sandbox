import React from 'react'
import { Route, Routes } from 'react-router-dom'

import * as GameComponents from '../games';
import { components } from '../games/games.json'

const renderGame = (component) => {
    const Component = component
    return <Component />
}

function GameContainer() {
    return (
        <div>
            <Routes>
                {components.map(component => (
                    <Route key={component.slug} path={`/${component.slug}`} element={renderGame(GameComponents[component.component])} />
                ))}
            </Routes>
        </div>
    )
}

export default GameContainer
