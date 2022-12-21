
//function that returns the total sum of likes in all of the blog posts
const totalLikes = (array) => {
    const sum = array.reduce(
        (a, b) =>  a + b.likes, 
        0,
    )
    return sum
}
  
module.exports = {
    totalLikes
}