import { stringToStack } from './stringToStack.js'


describe("Make stack from string", () => {
  
    it("Makes stack from string", () => {
        
        const string = "def"
        
        const stack = ['a', 'b', 'c']

        const result = ['a', 'b', 'c', 'd', 'e', 'f']
        
        expect(stringToStack(string)(stack)).toStrictEqual(result)
    })
})