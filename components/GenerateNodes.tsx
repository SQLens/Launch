import { Node as ReactFlowNode } from 'reactflow';
import { Table } from '../types';

interface ExtendedNode extends ReactFlowNode {
  id: string;
  parentNode?: string;
}

const generateNodes = (tables: Table[]): ExtendedNode[] => {
  // console.log('tables', tables)
  const nodes: ExtendedNode[] = [];
  let layoutX: number = 0;
  let layoutY: number = 0;

  tables.forEach(
    (
      table: Table
      // tIndex: number
    ): void => {
      //layout calcs
      if (layoutY > 400) {
        layoutY = 0;
        layoutX += 450;
      }

      //create group node for each table
      const groupNode: ExtendedNode = {
        id: `table-${table.name}`, //tables[index][name]
        type: 'turbo',
        // type: 'input',
        data: {
          label: table.name,
        },
        className: 'light',
        position: { x: layoutX, y: layoutY },
        style: {
          width: 250,
          height: 75 + table.columns.length * 40,
        },
      };
      //   console.log(table.name);
      nodes.push(groupNode);

      //initialize column node position at 45px from top
      let y = 60;
      // iterate through columns array and create node for each column name
      table.columns.forEach(
        (
          column: string
          // cIndex: number
        ): void => {
          const columnNode: ExtendedNode = {
            // id: 'A-2',
            id: `table-${table.name}-column-${column}`,
            // type: 'custom',
            data: {
              label: column,
              parent: table.name,
            },
            type: 'colNode',
            position: { x: 15, y: y },
            parentNode: `table-${table.name}`,
            draggable: false,
            extent: 'parent',
            style: {
              width: 220,
              height: 40,
            },
          };
          // console.log(column);
          nodes.push(columnNode);
          y += 40;
        }
      );
      layoutY += 150 + table.columns.length * 40;
    }
  );

  // makes a custom node to allow for adding tables
  const addTable: ExtendedNode = {
    id: 'add-table-node', // A unique identifier for your custom node
    type: 'turbo', // Define a custom type if needed
    data: {
      label: 'Add New Table',
    },
    position: { x: layoutX, y: layoutY }, // Define the position
    style: {
      width: 250,
    },
    // Other properties if needed...
  };
  nodes.push(addTable);

  // console.log('nodes generated');
  return nodes;
};

export default generateNodes;
