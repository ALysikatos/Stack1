'use strict';

describe("Stack", function(){ 

   it("initialise stack 0 ",function(){ 
      expect(thestack().size()).toEqual(0); 
   }); 

   it("push one item to test size ",function(){
       var StackObject = thestack();
       StackObject.push();
      expect(StackObject.size()).toEqual(1); 
   }); 

   it("push 2 items to test size ",function(){ 
       var StackObject = thestack();
       StackObject.push();
       StackObject.push();
      expect(StackObject.size()).toEqual(2); 
   }); 

   it("test for one pop size 0 ",function(){ 
       var StackObject = thestack();
       StackObject.pop();
      expect(StackObject.size()).toEqual(0); 
   }); 

      it("test for one pop size 0, value empty string ",function(){ 
       var StackObject = thestack();
       var value = StackObject.pop();
      expect(value).toEqual('');
   }); 

     it("test for one push, one pop size 0 ",function(){ 
       var StackObject = thestack();
       StackObject.push("Hello");
       StackObject.pop();
      expect(StackObject.size()).toEqual(0); 
   }); 

   it("test for 2 push, one pop size 1 ",function(){ 
       var StackObject = thestack();
       StackObject.push("Hello");
       StackObject.push("Hi");
       StackObject.pop();
      expect(StackObject.size()).toEqual(1); 
   }); 


      it("test for LIFO works with one element",function(){ 
       var StackObject = thestack();
       StackObject.push("Hello");
       var value = StackObject.pop();
      expect(value).toEqual("Hello");
   }); 

    it("Push twice, pop once, check value, size = 1",function(){ 
       var StackObject = thestack();
       StackObject.push("Hello");
       StackObject.push("Hi");
       var value = StackObject.pop();
      expect(value).toEqual("Hi");
      expect(StackObject.size()).toEqual(1); 
   }); 
});