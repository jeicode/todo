import React from 'react';

// Components
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateButtom } from '../components/CreateButtom';
import { EmptySearch, EmptyTodos } from '../components/EmptyTodos';
import {TodoFormCreate} from '../components/TodoForm'

// Shared
import { Modal } from '../shared/modal/Modal'
import { Header } from '../shared/header/Header';
import { ErrorLoad } from '../shared/error/errorLoad';
import { Loading } from '../shared/loading';

// Hooks
import { useTodos } from '../hooks/useTodos';

// Css
import './App.css'
import { ChangeAlertWithStorageListener } from '../components/ChangeAlert/ChangeAlert';

function App() {

  const descErrorLoad = 'Upsss... hubo un al cargar las tareas!'

  const { 
    loading,
    error,
    searchTasks,
    changeCompleteTask,
    delTask,
    openModal,
    setOpenModal,
    totalTasksCompleted,
    totalTasks,
    searchValue, 
    setSearchValue,
    addTask,
    setNotifyChanges,
  } = useTodos()


  return (
    <div className={`card ${loading && 'opacity-50'}`}>
      <Header loading={loading}>
        <TodoCounter 
          totalTasks={totalTasks}
          totalTasksCompleted={totalTasksCompleted}
          />
        <TodoSearch 
          setSearchValue={setSearchValue}
        />
      </Header>

      <TodoList
        error={error}
        loading={loading}
        searchTasks={searchTasks}
        totalTasks={totalTasks}
        onErrorLoad={() => <ErrorLoad description={descErrorLoad} />}
        onLoading={() => <Loading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearch={ () => <EmptySearch searchText={searchValue}/>}

        render={ (task, index) => (
          <TodoItem
            key={task.id}
            task={task}
            changeCompleteTask={() => changeCompleteTask(index)}
            delTask={() => delTask(index)}
          />
        )} 
        >
          { (task, index) => (
          <TodoItem
            key={task.id}
            task={task}
            changeCompleteTask={() => changeCompleteTask(index)}
            delTask={() => delTask(index)}
          />
        )} 
       </TodoList>
    
      <CreateButtom 
        setOpenModal={setOpenModal}
        loading={loading}
      />

      { openModal &&
        <Modal 
          title="Create Task" 
          setOpenModal={setOpenModal}>

            <TodoFormCreate
              addTask={addTask}
              setOpenModal={setOpenModal}
            />
        </Modal>
      }

      <ChangeAlertWithStorageListener
        setNotifyChanges={setNotifyChanges}
      />
    </div>
  )

}


export { App }