
//function that returns the most liked blog post
const favorite = (array) => {
    const maxi = array.reduce((a, b) => a.likes > b.likes ? a : b)
    return maxi
}
  
module.exports = {
    favorite
}