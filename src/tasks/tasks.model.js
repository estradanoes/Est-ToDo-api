const Schema = require('mongoose').Schema
const ObjectId = require('mongoose').Types.ObjectId
const Model = require('mongoose').model
const Messages = require('./tasks.messages')

const schema = new Schema({

    userId: {
        type: ObjectId
    },

    user: {
        type: ObjectId,
        ref: 'Users'
    },

    name: {
        type: String
    },

    duedate: {
        type: String
    },

    description: {
        type: String
    },

    category: {
        type: String
    },

    label: {
        type: String
    },

    status: {
        type: Boolean
    },

    reminder: {
        type: Boolean
    },

    created: {
        type: Date,
        default: Date.now
    }
})

schema.pre('save', function(next) {

    this.user = this.userId

    next()
})

schema.post('save', function(err, doc, next) {
    if(err) return next(Messages(err).taskSaveError)
    next()
})

schema.post('remove', function(err, doc, next) {
    if(err) return next(Messages(err).taskDeleteError)
    next()
})

schema.post('findOne', function(err, doc, next) {
    if(err) return next(Messages(err).taskGetError)
    next()
})

schema.post('find', function(err, doc, next) {
    if(err) return next(Messages(err).taskGetError)
    next()
})

module.exports = Model('Tasks', schema)