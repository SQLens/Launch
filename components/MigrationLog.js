import { jsx as _jsx, Fragment as _Fragment } from 'react/jsx-runtime';
import { Typography } from '@mui/material';
import useStore from './store';
// import style sheet?
export default function MigrationLog() {
  const queries = useStore((state) => state.queries);
  const logs = queries.map(
    (string, idx) =>
      _jsx(Typography, {
        variant: 'body2',
        sx: { ml: 6, fontFamily: 'Fira Mono, monospace' },
        children: string,
        key: idx,
      }) //could change to div
  );
  return _jsx(_Fragment, { children: logs });
}
