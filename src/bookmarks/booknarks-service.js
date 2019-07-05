const BookmarksService = {
    getAllBookmarks(knex) {
        return knex.select('*').from('bookmarks')
    },
    getById(knex, id) {
        return knex.from('bookmarks').select('*').where('id', id).first()
    },
    insertBookmark(knex, newBookmark) {
        return knex
          .insert(newBookmark)
          .into('bookmark')
          .returning('*')
          .then(row => {
              return rows[0]
          })
    },
    deleteBookmark(knex, id) {
        return knex('bookmarks')
          .where({ id })
          .delete()
    },
    updateBookmark(knex, id, newBookmarkFields) {
        return knex('bookmarks')
          .where({ id })
          .delete()
    },
}

module.exports = BookmarksService