import React from 'react'

function List() {
  return (
    <>
    <div className="card">
  <header>
    <h1>My Task List </h1>
    <form id="new-task-form">
      <input type="text" name="new-task-input" id="new-task-input" placeholder="What do you have planned?" />
      <input type="submit" id="new-task-submit" defaultValue="Add task" />
    </form>
  </header>
  <main>
    <section className="task-list">
      <h2>Tasks</h2>
      <div id="tasks">
        <div className="task">
          <div className="content">
            <input type="text" className="text" defaultValue="A new task" readOnly />
          </div>
          <div className="actions">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

    
    
    </>
  )
}

export default List