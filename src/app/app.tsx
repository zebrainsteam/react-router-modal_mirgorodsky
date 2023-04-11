import React from 'react'
import {ThemeProvider} from 'styled-components'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {primaryTheme} from '@app-theme'
import {Template} from './components/template'
import {GetParameterPopups} from './components/get-parameter-popups'
import {GlobalStyles} from "@global-styles"
import {routes} from './routes'

const queryClient = new QueryClient()


export const App = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ThemeProvider theme={primaryTheme}>
                    <GlobalStyles/>
                    <Template>
                        <Switch>
                            {routes.map(({...routeProps}, i) => (<Route {...routeProps} key={i}/>))}
                        </Switch>
                    </Template>
                </ThemeProvider>
            </BrowserRouter>
        </QueryClientProvider>
    )
}
// <GetParameterPopups/>


