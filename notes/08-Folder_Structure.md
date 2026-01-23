## Folder Structure

1. `public => images`
    * here I add all static images

2. `src => components`
    * here I add all reusable components, such as buttons, header,footer,cards,tabs...

3. `src => images`
    * here I add images which are changeble such as svg (changing color on hover)

4. `src => section => hero => Hero.jsx, heroStyled.js`
    * if I have style folder I put it in same folder as component

5. `src => section => hero => Hero.jsx, heroData.js`
    * If my object list is big or to many of them i put it here


## Outline Styling and outline objects (data)

### 1. Only create outside when whave more than 3 styles in component
### 2. Better to put style in same folder as component exg `footer.jsx, footerStyle.jsx`

### 3. Best way for outside styling
1. Create file exg. `footerStyle.js`
2. In that file create object exg. `export const footerTop={padding:20}`
3. Import all objects from file `import * as style from './footerStyle.js'`
4. Now add it to sx : `sx={style.footerTop}`

### 

### 4. All files with objects only create in js instead of jsx.
* We don't need to render objects file like data file or style file so we put it in js




