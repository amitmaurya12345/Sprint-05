// src/App.jsx
import { useState, useEffect } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Board from './components/Board';
import './App.css';

function App() {
const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem('trello-tasks');
  if (savedTasks) {
    const parsed = JSON.parse(savedTasks);
    // 🔥 SAFEGUARD: Purane saare tasks ki ID ko zabardasti String mein convert kar dega
    return parsed.map(task => ({ ...task, id: String(task.id) }));
  } else {
    return [
      { id: '1', title: 'Learn React State', status: 'todo', priority: 'medium' },
      { id: '2', title: 'Build Trello MVP', status: 'in-progress', priority: 'high' },
    ];
  }
});

  const [taskInput, setTaskInput] = useState('');
  const [priorityInput, setPriorityInput] = useState('low');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('trello-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    const newId = String(Date.now());
    setTasks([...tasks, { id: newId, title: taskInput, status: 'todo', priority: priorityInput }]);
    setTaskInput('');
    setPriorityInput('low');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditTask = (id, newTitle) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle } : task));
  };

  // CROSS-PLATFORM DRAG HANDLER (Mouse + Mobile Touch)
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const updatedTasks = tasks.map(task => {
      if (task.id === draggableId) {
        return { ...task, status: destination.droppableId };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app-container">
        <h1> Kanban Board</h1>
        
        <div className="controls-wrapper">
          <form onSubmit={handleAddTask} className="task-form">
            <input 
              type="text" 
              placeholder="Enter task name..." 
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <select value={priorityInput} onChange={(e) => setPriorityInput(e.target.value)} className="priority-select">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button type="submit">Add Task</button>
          </form>

          <div className="search-box">
            <input 
              type="text" 
              placeholder="🔍 Search tasks..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Board 
          tasks={filteredTasks} 
          onDelete={handleDeleteTask} 
          onEdit={handleEditTask} 
        />
      </div>
    </DragDropContext>
  );
}

export default App;