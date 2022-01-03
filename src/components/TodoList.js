import React from "react";

function TodoList(props) {

  const renderFunc = props.children || props.render
 
  return (
    <section className="TodoList-container">
      {props.error && props.onErrorLoad()}
      {props.loading && props.onLoading()}

      { (!props.loading && !props.searchTasks.length && !!props.totalTasks  ) && props.onEmptySearch()}
      {(!props.loading && !props.totalTasks) && props.onEmptyTodos()}

      { (renderFunc && !props.loading) &&  props.searchTasks.map( renderFunc )}


    </section>
  );
}

export {TodoList}