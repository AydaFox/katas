const simplifyDirections = () => {

}

module.exports = { simplifyDirections };

/*
The challenge is to implement a function that takes an array of 
directions and simplifies them. Directions can be simplified if 
any two directions cause the person to end up in the same place. 
For example, the directions ["NORTH", "SOUTH"] cancel one another 
out and the function should return an empty array of no directions [].


Examples
Here are some examples to help you build out your test suite:

simplifyDirections(["NORTH", "SOUTH", "WEST"])
    --> ["WEST"]
simplifyDirections(["NORTH", "WEST", "SOUTH", "WEST", "EAST"])
    --> ["WEST"]
simplifyDirections(["NORTH", "EAST", "SOUTH", "WEST", "NORTH", "NORTH"])
    --> ["NORTH", "NORTH"]
*/