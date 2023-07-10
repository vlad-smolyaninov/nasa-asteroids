import '@/shared/globals-styles.css'
import 'rsuite/dist/rsuite.min.css';
import type {AppProps} from 'next/app'
import {ThemeProvider} from "styled-components";
import {theme} from "@/shared/theme";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function App({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </QueryClientProvider>
    )

}
