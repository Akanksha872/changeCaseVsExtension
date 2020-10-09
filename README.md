# Change Case

This extension allows you to convert the selected text into different case. Supported Cases are:

```css
1. Snake Case - (snake_case)
2. Camel Case-  (camelCase)
3. Kebab Case -(kebab-case)
4. Upper Case- (UPPERCASE)
5. Flat Case - (flatcase)
6. Constant Case- (CONSTANT_CASE)
7. Pascal Case-  (PascalCase)
8. Title Case- (Title Case)
9. Capitalize Case- (CAPITALIZE CASE)
10. Lower Case- (lower case)
```

## **How to Use it**

\
**1. Select any text from the file, You will see an left side icon for options**\
\
![Alt text](https://i.ibb.co/rZQYspH/img1.png)

> **NOTE**: If you want to change all the occurance of the selected Text, use **Ctrl+Shift+L** or **Cmd+Shift+L**(on Mac) after selection

**2. Click on the icon, it will give the options on change the case and select any option from the dropdown**\
 \
 ![Alt text](https://i.ibb.co/VvYHQ45/img2.png)

**3. The selected text case will gets changed**\
 \
 ![Alt text](https://i.ibb.co/yV0JS8K/img3.png)

> Language Supported: javascript, typescript, javascriptreact, typescriptreact, html, css, less, scss, sass, python, json, markdown

## **Customizing the Case Change Options**

You can add only a subset of all supported Case Change options as per your preference and usage, to keep the Case Change list short and more handy.

You need to change the default json (**settings.json**) in your VS Code settings (**Ctrl + ,**).
\
 ![Alt text](https://i.ibb.co/rdvNTfy/setting-Img.png)

```json
Following is the default JSON that support all casing, Change the value to false which you don't want to use.
{
  "snakeCase": true,
  "camelCase": true,
  "upperCase": true,
  "flatCase": true,
  "kebabCase": true,
  "constantCase": true,
  "pascalCase": true,
  "titleCase": true,
  "capitalizeCase": true,
  "lowerCase": true
}
```

## Release Notes

### 0.1.0

Initial release of Change Case

### 0.2.2

Added FlatCase and UpperCase

### 0.3.0

Added Title Case, Capitalize Case and Lower Case

### 0.3.4

Fixed minor bugs

### 1.0.0

Added the Case Change Configuration option

**Enjoy!**
