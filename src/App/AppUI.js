import React from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoContext } from '../context';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { Modal } from '../shared/modal/Modal'
import { CreateButtom } from '../components/CreateButtom';
import {TodoFormCreate} from '../components/TodoForm'

function AppUI() {

  const { loading,
    error,
    total,
    searchTasks,
    changeCompleteTask,
    delTask,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  return (
    <>
      <article className="card">
        <TodoCounter />
        <TodoSearch />

        <TodoList>

          {loading &&
            <div className='text-center'>
              <div className="lds-dual-ring mt-4"></div>
            </div>
          }

          {error &&
            <div className="alert alert-danger mt-4" role="alert">
              Upsss... hubo un al cargar las tareas!
            </div>
          }

          {(!loading && !error && total === 0) &&
            <div className="alert alert-info mt-4" role="alert">
              Crea una tarea :)
            </div>
          }

          {
            searchTasks.map((task, index) => (
              <TodoItem key={task.id} task={task}
                changeCompleteTask={() => changeCompleteTask(index)}
                delTask={() => delTask(index)} />
            ))
          }
        </TodoList>
      
        <CreateButtom 
        setOpenModal={setOpenModal}
        />

      </article>
      { openModal &&
        <Modal title="Create Task">
            <TodoFormCreate/>
        </Modal>
      }
    </>

  )

}


export { AppUI }