'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BlogSchema extends Schema {
  up () {
    this.create('blogs', (table) => {
      table.increments()
      table.string('title',150).notNullable()
      table.text('body').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('blogs')
  }
}

module.exports = BlogSchema
