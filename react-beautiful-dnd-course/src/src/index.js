import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd';
import './index.css'
import initialData from './initial-data';
import Column from './Column';


const App = () => {
  const [state, setState] = useState(initialData);
  const onDragEnd = (result) => {
    const {source, destination, draggableId} = result;

    if (!destination) {
      return;
    }

    if ( 
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const column = state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {...column, taskIds: newTaskIds};
    const newState = {
      ...state, 
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn
      }
    };
    setState(newState);
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {
        state.columnOrder.map(columnId => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })
      }
    </DragDropContext >
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);