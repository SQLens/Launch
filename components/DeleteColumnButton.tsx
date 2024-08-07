import { IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useStore from './store';
import { TableState, Table } from '../types';

const DeleteColumnButton = ({
  data,
}: {
  data: { label: string; parent: string };
}) => {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const tables = useStore((state: TableState) => state.tables);
  const setTables = useStore((state: TableState) => state.setTables);
  const queries = useStore((state: TableState) => state.queries);
  const setQueries = useStore((state: TableState) => state.setQueries);
  //delete column function
  const deleteCol = async function () {
    if (data.label === '_id') {
      setAlertOpen(false);
      alert(`Cannot delete primary key`);
    } else {
      const selectedTable = tables.filter((table) => table.name === data.parent)[0];
      const updatedTables: Table[] = tables.map((table) => {
          selectedTable.columns.forEach((column, index) => {
            if (data.label === column) {
              table.columns.splice(index, 1);
            }
          });

        return table;
      });
      setTables(updatedTables);
      const query = `ALTER TABLE ${data.parent} DROP COLUMN ${data.label};`;
      setQueries([...queries, query]);
      setAlertOpen(false);
    }
  };
  //click handlers
  const handleAlertOpen = () => {
    setAlertOpen(true);
  };

  const handleYesDelete = async () => await deleteCol();

  const handleNoDelete = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <IconButton aria-label='delete' size='small' onClick={handleAlertOpen}>
        <DeleteIcon fontSize='inherit' />
      </IconButton>

      {/** dialog for alert */}
      <Dialog
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete this column?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNoDelete}>No</Button>
          <Button onClick={handleYesDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

DeleteColumnButton.displayName = 'DeleteColumnButton';

export default DeleteColumnButton;
// export default memo(CustomNode);
