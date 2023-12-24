const accountId = 54638764
let accountEmail = "alok@google.com"
var accountPassword = 234567
accountCity = "Delhi" // we can also declare var without writng let or const but it is not right.
let accountState;

// accountId = 737568578 // Curly brackets{}  are called scopes.

/* 
Prefer not tot use var 
because of issue in block scope and functional scope.
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState
])

