# Professional Testing With Javascript

As you can imagine it gets a bit unweildy to have hundred of `if` statements throughout your code. Beyond them being just a bit large, they lack organization when categorizing features and they also can be somewhat difficult to read. All of these problems are amplified when there are so many!

For many years, `if` statements is all we had though. So, we kept using them. In the past few years though programmers have created a bunch of new testing tools to make testing easier when dealing with many many many many tests. It doesn't matter too much, but the main one we are going to be using is called [Mocha](https://mochajs.org/). 

Let's walk through the basics of testing. You'll discover it's not too different from what you've expierenced in the last few labs. First things first, open up `index.js` in your terminal. You are going to see mostly familiar things:

```javascript
var name = "Joe"
var height = "74"
var message = `${name} is ${height} inches tall`
<D-E>
module.exports = {name, height, message}
```

This should look familiar except for that third line: `` var message = `${name} is ${height} inches tall` ``. It's actually pretty cool what that line does. Explore what ends up in the `message` variable by typing `console.log(message)` on the last line and then run your `index.js` file. You should see `"Joe is 74 inches tall"`. Pretty cool right? If you create a string wrapping it in back-ticks (`` ` ``) you can then use your variables directly in the string to create a sentence like
we just did. The key is when you use a variable you have to wrap the variable itself in the `${` and `}`. If you were to modify `message` to look like this: `` var message = `name is height inches tall` ``, and run your code again you'd get `"name is height inches tall"`. That's not what you want! The `${` and `}` tell JavaScript to grab the value of the variable, not just that text. 

### The Tests

We have our code, now let's take a look at the tests. In this lesson we are going to go over all of the tests, and then show you how to run them in the next lesson.

```javascript
var index = require("../index.js")

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual("Susan")
    })
  })


  describe("Height", () => {
    it("is less than 40", () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})
```

Alright, there is a lot here. Right now, you really just need to focus on a few different lines. The first grouping is testing our `name` variable.

```javascript
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })
```

If you look at the line that begins with `expect` you'll see this: `expect(index.name).toEqual('Susan')`. Read that out in English "Expect index.name to equal Susan". That's exactly what it's saying! If we continue down to the Height section you'll see this code:

```javascript
  describe("Height", () => {
    it("is less than 40", () => {
      expect(index.height).toBeLessThan(40)
    })
  })
```

The interesting line here is `expect(index.height).toBeLessThan(40)`. If you read that one out as "Expect index.height` to be less than 40" you'd be correct! Let's look at the final one:

```javascript
  describe("Message", () => {
    it("gives the name and height", () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })
```

This one has two `expect` statements. If you read them out as english you'll discover that the tests expects `index.message` to include both `index.name` and `index.height`.

OK Great. You now understand what the tests are saying. In the next lesson we are going to cover how to run them, and then have you actually solve the lab!

<p class='util--hide'>View <a href='https://learn.co/lessons/js-what-is-a-test'>What Is A Test</a> on Learn.co and start learning to code for free.</p>
