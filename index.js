// const name = "Joe";
// const height = 74;
// const message = `${name} is ${height} inches tall`;

// module.exports = {name, height, message};

    describe('Name', () => {
      it('returns "Joe"', () => {
        expect(name).toEqual('Joe')
      })
    })
  
  
    describe('Height', () => {
      it('is less than 74', () => {
        expect(height).toBeLessThan(74)
      })
    })
  
    describe('Message', () => {
      it('gives the name and height', () => {
        expect(message).toInclude(name)
        expect(message).toInclude(height)
      })
    })