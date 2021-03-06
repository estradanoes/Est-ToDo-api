const validator = require('../validator')

module.exports = function(req) {

    const props = {...req.headers, ...req.params, ...req.query, ...req.body}

    this.taskId = validator({
        type: 'objectId',
        value: props.taskId,
        name: 'identificador'
    })

    this.userId = validator({
        type: 'objectId',
        value: props.userId,
        name: 'identificador del usuario'
    })

    this.name = validator({
        type: 'string',
        value: props.name,
        name: 'nombre de la tarea'
    })

    this.duedate = validator({
        type: 'string',
        value: props.duedate,
        name: 'fecha de termino'
    })

    this.description = validator({
        type: 'string',
        value: props.description,
        name: 'descripcion'
    })

    this.category = validator({
        type: 'string',
        value: props.category,
        name: 'categoria'
    })

    this.label = validator({
        type: 'string',
        value: props.label,
        name: 'etiqueta'
    })

    this.status = validator({
        type: 'boolean',
        value: props.status,
        name: 'estatus',
        default: false,
        required: false
    })

    this.reminder = validator({
        type: 'boolean',
        value: props.reminder,
        name: 'recordatorio',
        default: false,
        required: false
    })

    // required: false
    return this
}