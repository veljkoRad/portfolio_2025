## Conecting my form with Netlify Forms
  
  1.Since my page is SPA I need to add this hiiden form to my `index.html` so that Netlify will recognise it, right under the `<body>`.

      ```
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
        <input type="hidden" name="form-name" value="contact" />
      </form>
      ```

  2. Adding netlify atributes to <form>
      ```
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      ```

      * name should be same as name in index.html
  
  3. Right under the `<form>` add these two components:

    ```
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="bot-field" />
    ```