import React from 'react';

function ClassInheritance() {
  class GrandParent {
    method1() {
      console.log("This is the grandparent's method");
    }
  }
  
  class Parent extends GrandParent {
  }
  
  class Child extends Parent {
    
  }

  let john = new Child();
  john.method1();

  return (
    <div>ClassInheritance</div>
  )
}

export default ClassInheritance;