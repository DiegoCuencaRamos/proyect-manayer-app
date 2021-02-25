import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Title from './Title'
import { startEditTask } from '../actions/task'
import ItemForm from './ItemForm'

const EditTaskPage = () => {
    const tasks = useSelector(state => state.tasks)
    const proyectId = useSelector(state => state.ids.proyectId)
    const { taskId } = useParams()
    const task = tasks.find(task => task.id === taskId)

    const dispatch = useDispatch()

    const onParentFormSubmit = (updates) => {
        dispatch(startEditTask(taskId, updates))
    }

    return(
        <section>
            <Title
                title={'Edit task'}
                description={'Edit your current task'}
            />

            <ItemForm
                proyectId={proyectId}
                item={task}
                onParentFormSubmit={onParentFormSubmit}
            />
        </section>
    )
}

export default EditTaskPage