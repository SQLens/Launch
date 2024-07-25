// import { useEffect } from 'react';
import Flow from './Flow.tsx';
// import LandingPage from './components/LandingPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useStore from './store.ts';
import starterTables from './starterTables';
// import { useQuery } from '@apollo/client';
// import { GET_TABLE_NAMES } from './utilities/queries';

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

  // useEffect(() => {
    setTables(starterTables);
  // }, [setTables]);

  return (
    <ThemeProvider theme={theme}>

            <Flow />

    </ThemeProvider>
  );
}

export default App;
