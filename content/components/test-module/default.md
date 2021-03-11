---
layout: component/code-demo
iframe: examples/example-default
examples: 
  - template: examples/example-default
code:
  - HTML: |
      <!--
        Light:  <div class="au-btn">
        Dark:   <div class="au-btn au-btn--dark">
      -->

      <button class="au-btn">
        Primary button
      </button>
  - React: |
      /*
        Light:  <AUbutton>
        Dark:   <AUbutton dark>
      */

      import AUbutton from '@gov.au/buttons';

      <AUbutton>
        Primary button
      </AUbutton>
---
## Testing with a button

Description blah blah.