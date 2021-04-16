import React from 'react'
import List from './list/List'
import Calendar from './calendar/Calendar'
import KanbanBoard from './kanban/KanbanBoard'


const ItemsLayout = ({ layout = '' }) => {
    // Render
    if (layout === 'list') {
        return <List />
    } else if (layout === 'calendar') {
        return <Calendar />
    } else if (layout === 'kanban') {
        return <KanbanBoard />
    }
}

export default ItemsLayout