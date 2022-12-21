const Blog = require('../models/blog')

const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
    const blogs = Blog

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})