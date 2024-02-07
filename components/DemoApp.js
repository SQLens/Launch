import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
// import '../css/flowStyle.css';
import Flow from './Flow';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useStore from './store';
import starterTables from './starterTables';
import MigrationLog from './MigrationLog';
const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: 'Fira Mono, monospace',
    },
});
function App() {
    const setTables = useStore((state) => state.setTables);
    useEffect(() => {
        setTables(starterTables);
    }, [setTables]);
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(Flow, {})] }));
}
export default App;
