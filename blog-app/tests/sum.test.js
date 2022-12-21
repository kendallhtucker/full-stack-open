const totalLikes = require('../utils/totalLikes')

describe('total likes', () => {
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
        }
    ]

    test('should equals the likes in this list (105)', () => {
        const result = totalLikes.totalLikes(listWithTwoBlogs)
        expect(result).toBe(105)
    })
})