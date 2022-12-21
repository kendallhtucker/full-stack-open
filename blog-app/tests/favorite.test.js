const favorite = require('../utils/favorite')

describe('favorite blog post', () => {
    const listWithTwoBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '4',
            title: 'Yada Yada',
            author: 'Edna Mole',
            url: 'http://www.amazon.com',
            likes: 100,
            __v: 1
        },
        {
            _id: '2',
            title: 'Ginny is the cutest',
            author: 'Connor T',
            url: 'http://www.etsy.com',
            likes: 99,
            __v: 2
        }
    ]

    test('should be the blog post with the most likes', () => {
        const result = favorite.favorite(listWithTwoBlogs)
        expect(result).toEqual(listWithTwoBlogs[1])
    })
})