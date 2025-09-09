// Task management composable with dummy database - Global State
const globalTasks = ref([])
const globalProjects = ref([])
const globalNextId = ref(1)
const globalNextProjectId = ref(1)

// Initialize global data immediately
const initializeGlobalData = () => {
  if (globalProjects.value.length === 0) {
    // Create sample projects directly
    globalProjects.value.push(
      {
        id: globalNextProjectId.value++,
        name: 'KrakenTasks Development',
        description: 'Main development project for the task management system',
        category: 'web',
        color: 'primary',
        manager: 'john',
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: globalNextProjectId.value++,
        name: 'Mobile App Launch',
        description: 'Development and launch of the mobile application',
        category: 'mobile',
        color: 'green',
        manager: 'jane',
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: globalNextProjectId.value++,
        name: 'UI/UX Redesign',
        description: 'Complete redesign of the user interface and experience',
        category: 'design',
        color: 'purple',
        manager: 'sarah',
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    )
  }

  if (globalTasks.value.length === 0) {
    // Create sample tasks directly
    globalTasks.value.push(
      {
        id: globalNextId.value++,
        title: 'Welcome to KrakenTasks',
        description: 'This is a sample task to get you started with task management.',
        assignedTo: 'john',
        labels: ['feature'],
        status: 'todo',
        projectId: 1,
        comments: [],
        priority: 'normal',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: globalNextId.value++,
        title: 'Complete project setup',
        description: 'Set up the development environment and initialize the project structure.',
        assignedTo: 'jane',
        labels: ['urgent', 'feature'],
        status: 'doing',
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        projectId: 1,
        comments: [],
        priority: 'high',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: globalNextId.value++,
        title: 'Review code changes',
        description: 'Review the latest code changes submitted by the team.',
        assignedTo: 'mike',
        labels: ['review'],
        status: 'review',
        projectId: 1,
        comments: [],
        priority: 'normal',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: globalNextId.value++,
        title: 'Design mobile wireframes',
        description: 'Create wireframes for the mobile application interface.',
        assignedTo: 'sarah',
        labels: ['design'],
        status: 'todo',
        projectId: 2,
        comments: [],
        priority: 'normal',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: globalNextId.value++,
        title: 'User research analysis',
        description: 'Analyze user feedback and research data for UI improvements.',
        assignedTo: 'sarah',
        labels: ['research'],
        status: 'doing',
        projectId: 3,
        comments: [],
        priority: 'low',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    )
  }
}

// Initialize data immediately when the module loads
initializeGlobalData()

export const useTaskStore = () => {
  const tasks = globalTasks
  const projects = globalProjects
  const nextId = globalNextId
  const nextProjectId = globalNextProjectId

  // Task statuses/columns
  const taskStatuses = [
    { value: 'todo', label: 'To Do', color: 'grey' },
    { value: 'doing', label: 'Doing', color: 'blue' },
    { value: 'review', label: 'Review', color: 'orange' },
    { value: 'done', label: 'Done', color: 'green' }
  ]

  // Task labels/tags
  const taskLabels = [
    { value: 'urgent', label: 'Urgent', color: 'red' },
    { value: 'blocked', label: 'Blocked', color: 'purple' },
    { value: 'feature', label: 'Feature', color: 'blue' },
    { value: 'bug', label: 'Bug', color: 'orange' },
    { value: 'enhancement', label: 'Enhancement', color: 'green' }
  ]

  // Team members
  const teamMembers = [
    { value: 'john', label: 'John Doe', avatar: '' },
    { value: 'jane', label: 'Jane Smith', avatar: '' },
    { value: 'mike', label: 'Mike Johnson', avatar: '' },
    { value: 'sarah', label: 'Sarah Wilson', avatar: '' }
  ]

  // Project categories
  const projectCategories = [
    { value: 'web', label: 'Web Development', color: 'blue' },
    { value: 'mobile', label: 'Mobile App', color: 'green' },
    { value: 'design', label: 'Design', color: 'purple' },
    { value: 'marketing', label: 'Marketing', color: 'orange' },
    { value: 'research', label: 'Research', color: 'indigo' },
    { value: 'other', label: 'Other', color: 'grey' }
  ]

  // Create new task
  const createTask = (taskData) => {
    const newTask = {
      id: nextId.value++,
      title: taskData.title,
      description: taskData.description || '',
      assignedTo: taskData.assignedTo || null,
      labels: taskData.labels || [],
      dueDate: taskData.dueDate || null,
      status: taskData.status || 'todo',
      projectId: taskData.projectId || null,
      comments: [], // New field for comments/activity
      priority: taskData.priority || 'normal', // New field for priority
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    tasks.value.push(newTask)
    return newTask
  }

  // Create new project
  const createProject = (projectData) => {
    const newProject = {
      id: nextProjectId.value++,
      name: projectData.name,
      description: projectData.description || '',
      category: projectData.category || 'other',
      color: projectData.color || 'primary',
      manager: projectData.manager || null,
      status: projectData.status || 'active',
      startDate: projectData.startDate || null,
      endDate: projectData.endDate || null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    projects.value.push(newProject)
    return newProject
  }

  // Get tasks by status
  const getTasksByStatus = (status) => {
    return tasks.value.filter(task => task.status === status)
  }

  // Get tasks by project
  const getTasksByProject = (projectId) => {
    return tasks.value.filter(task => task.projectId === projectId)
  }

  // Get tasks by status and project
  const getTasksByStatusAndProject = (status, projectId = null) => {
    if (projectId) {
      return tasks.value.filter(task => task.status === status && task.projectId === projectId)
    }
    return getTasksByStatus(status)
  }

  // Update task
  const updateTask = (taskId, updates) => {
    const taskIndex = tasks.value.findIndex(task => task.id === taskId)
    if (taskIndex !== -1) {
      tasks.value[taskIndex] = {
        ...tasks.value[taskIndex],
        ...updates,
        updatedAt: new Date().toISOString()
      }
      return tasks.value[taskIndex]
    }
    return null
  }

  // Update task status (for drag and drop)
  const updateTaskStatus = (taskId, newStatus) => {
    return updateTask(taskId, { status: newStatus })
  }

  // Bulk update tasks (for drag and drop reordering)
  const bulkUpdateTasks = (updates) => {
    updates.forEach(({ id, ...updateData }) => {
      updateTask(id, updateData)
    })
  }

  // Delete task
  const deleteTask = (taskId) => {
    const taskIndex = tasks.value.findIndex(task => task.id === taskId)
    if (taskIndex !== -1) {
      const deletedTask = tasks.value[taskIndex]
      tasks.value.splice(taskIndex, 1)
      return deletedTask
    }
    return null
  }

  // Soft delete task (mark as deleted without removing)
  const softDeleteTask = (taskId) => {
    return updateTask(taskId, { 
      deleted: true, 
      deletedAt: new Date().toISOString() 
    })
  }

  // Get task by ID
  const getTaskById = (taskId) => {
    return tasks.value.find(task => task.id === taskId)
  }

  // Get project by ID
  const getProjectById = (projectId) => {
    return projects.value.find(project => project.id === projectId)
  }

  // Update project
  const updateProject = (projectId, updates) => {
    const projectIndex = projects.value.findIndex(project => project.id === projectId)
    if (projectIndex !== -1) {
      projects.value[projectIndex] = {
        ...projects.value[projectIndex],
        ...updates,
        updatedAt: new Date().toISOString()
      }
      return projects.value[projectIndex]
    }
    return null
  }

  // Delete project
  const deleteProject = (projectId) => {
    const projectIndex = projects.value.findIndex(project => project.id === projectId)
    if (projectIndex !== -1) {
      // Remove project from all tasks
      tasks.value.forEach(task => {
        if (task.projectId === projectId) {
          task.projectId = null
        }
      })
      projects.value.splice(projectIndex, 1)
      return true
    }
    return false
  }

  // Get project statistics
  const getProjectStats = (projectId) => {
    const projectTasks = getTasksByProject(projectId)
    return {
      total: projectTasks.length,
      todo: projectTasks.filter(task => task.status === 'todo').length,
      doing: projectTasks.filter(task => task.status === 'doing').length,
      review: projectTasks.filter(task => task.status === 'review').length,
      done: projectTasks.filter(task => task.status === 'done').length
    }
  }

  // Add comment to task
  const addComment = (taskId, commentData) => {
    const task = getTaskById(taskId)
    if (task) {
      const comment = {
        id: Date.now(),
        text: commentData.text,
        author: commentData.author || 'current-user',
        createdAt: new Date().toISOString(),
        type: commentData.type || 'comment' // comment, status_change, label_update, etc.
      }
      
      if (!task.comments) {
        task.comments = []
      }
      
      task.comments.push(comment)
      task.updatedAt = new Date().toISOString()
      return comment
    }
    return null
  }

  // Get comments for task
  const getTaskComments = (taskId) => {
    const task = getTaskById(taskId)
    return task?.comments || []
  }

  // Add label to task
  const addLabelToTask = (taskId, labelId) => {
    const task = getTaskById(taskId)
    if (task && !task.labels.includes(labelId)) {
      task.labels.push(labelId)
      task.updatedAt = new Date().toISOString()
      
      // Add activity comment
      const label = taskLabels.find(l => l.value === labelId)
      if (label) {
        addComment(taskId, {
          text: `Added label: ${label.label}`,
          type: 'label_added'
        })
      }
      
      return task
    }
    return null
  }

  // Remove label from task
  const removeLabelFromTask = (taskId, labelId) => {
    const task = getTaskById(taskId)
    if (task) {
      const labelIndex = task.labels.indexOf(labelId)
      if (labelIndex > -1) {
        task.labels.splice(labelIndex, 1)
        task.updatedAt = new Date().toISOString()
        
        // Add activity comment
        const label = taskLabels.find(l => l.value === labelId)
        if (label) {
          addComment(taskId, {
            text: `Removed label: ${label.label}`,
            type: 'label_removed'
          })
        }
        
        return task
      }
    }
    return null
  }

  // Search tasks
  const searchTasks = (query, filters = {}) => {
    let filteredTasks = [...tasks.value]
    
    // Text search
    if (query && query.trim()) {
      const searchTerm = query.toLowerCase().trim()
      filteredTasks = filteredTasks.filter(task => 
        task.title.toLowerCase().includes(searchTerm) ||
        task.description.toLowerCase().includes(searchTerm) ||
        (task.assignedTo && getTeamMember(task.assignedTo)?.label.toLowerCase().includes(searchTerm))
      )
    }
    
    // Filter by status
    if (filters.status && filters.status.length > 0) {
      filteredTasks = filteredTasks.filter(task => filters.status.includes(task.status))
    }
    
    // Filter by labels
    if (filters.labels && filters.labels.length > 0) {
      filteredTasks = filteredTasks.filter(task => 
        filters.labels.some(label => task.labels.includes(label))
      )
    }
    
    // Filter by assignee
    if (filters.assignedTo && filters.assignedTo.length > 0) {
      filteredTasks = filteredTasks.filter(task => 
        filters.assignedTo.includes(task.assignedTo)
      )
    }
    
    // Filter by project
    if (filters.projectId) {
      filteredTasks = filteredTasks.filter(task => task.projectId === filters.projectId)
    }
    
    // Filter by priority
    if (filters.priority && filters.priority.length > 0) {
      filteredTasks = filteredTasks.filter(task => filters.priority.includes(task.priority))
    }
    
    return filteredTasks
  }

  // Get team member helper
  const getTeamMember = (memberId) => {
    return teamMembers.find(member => member.value === memberId)
  }

  // Simple reinitialize function
  const initializeSampleData = () => {
    initializeGlobalData()
  }

  return {
    tasks: readonly(tasks),
    projects: readonly(projects),
    taskStatuses,
    taskLabels,
    teamMembers,
    projectCategories,
    createTask,
    createProject,
    getTasksByStatus,
    getTasksByProject,
    getTasksByStatusAndProject,
    updateTask,
    updateTaskStatus,
    bulkUpdateTasks,
    updateProject,
    deleteTask,
    softDeleteTask,
    deleteProject,
    getTaskById,
    getProjectById,
    getProjectStats,
    initializeSampleData,
    // New functions for advanced features
    addComment,
    getTaskComments,
    addLabelToTask,
    removeLabelFromTask,
    searchTasks,
    getTeamMember
  }
}