const todoList = () => {
  eve = []
  const add = (todoItem) => {
    eve.push(todoItem)
  }
  const markAsComplete = (index) => {
    eve[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
 
  return eve.filter((item) => item.dueDate < new Date().toLocaleDateString("en-CA"));
  }

  const dueToday = () => {
      return eve.filter((item) => item.dueDate === new Date().toLocaleDateString("en-CA"));

  }

  const dueLater = () => {
      return eve.filter((item) => item.dueDate > new Date().toLocaleDateString("en-CA"));

  }

  const toDisplayableList = (list) => {
    // Format the To-Do list her
    return list.map(item => `${item.completed ? '[x]' : '[ ]'} ${item.title} ${item.dueDate === new Date().toLocaleDateString("en-CA") ? '' : item.dueDate}`).join("\n")
    
    
  }

  return { eve, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}


module.exports = todoList;