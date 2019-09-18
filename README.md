# Check Settings
Checks whether a settings object has the settings defined by and.  

## Whats the Use?
I found that I kept using code along these lines for checking arguments, so  
I split it out into a little package.

## installation 
npm install @jadesrochers/checksettings  

const check = require('@jadesrochers/checksettings')  

## Usage
```javascript
let reqArray = ['names','of','keys','to','check']
let inputfail = {actual:1, object:2, passed:3, as:4, input:5}
let inputpass = {names:1, of:2, keys:3, to:4, check:5}
```

```javascript
check.checkSettings(reqArray, inputfail)
false
```

```javascript
check.checkSettings(reqArray, inputpass)
true 
```
