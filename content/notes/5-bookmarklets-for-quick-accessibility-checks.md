---
title: 5 Bookmarklets for Quick Accessibility Checks
---

# 5 Bookmarklets for Quick Accessibility Checks

Tags: [[Accessibility]] [[Drafts]]

## Missing alt

https://twitter.com/jdjuan/status/1022301088651853824

https://gist.github.com/cfjedimaster/ee4a2fd935318e29bd5364d71ea221c1

```css
img:not([alt]) {
   filter: grayscale(100%);
}
```

```js
javascript:(
  function() {
    const images = document.querySelectorAll('img:not([alt])');
		for (let i = 0; i < images.length; i++) {
		  const image = images[i];
		  image.style.filter = 'grayscale(100%)';
		}
		if(images.length > 0) {
		  console.warn(`${images.length} images are missing an alt attribute`, { images });
		} else {
		  console.info('👍 No images are missing alt attributes.');
		}
 }
)()
```

## Duplicate IDs

```
javascript:(
	function () {
		var ids = {};
		var found = false;
		jQuery('[id]').each(function() { if (this.id && ids[this.id]) { found = true; console.warn('Duplicate ID #'+this.id); } ids[this.id] = 1; }); if (!found) console.log('No duplicate IDs found'); })();
```

## Links the open in a new window
```js
javascript:(function() {
  const links = document.querySelectorAll('[target]');
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.getAttribute('target') !== '_self') {
      link.style.backgroundColor = 'yellow';
      link.style.outline = '2px solid orange';
    }
  }
  console.warn(`${links.length} links open in a new window.`, { links });
})()
```

## What Has Focus
https://codepen.io/svinkle/pen/WgYRxq

## [Trashy.css](https://github.com/t7/trashy.css/)

## headings!

https://twitter.com/Una/status/1277657662432391168

/* Headers out of order (i.e. h2 before h1, etc.)
   Result: dotted blue outline
*/
h2 ~ h1,
h3 ~ h1,
h4 ~ h1,
h5 ~ h1,
h6 ~ h1,
h3 ~ h2,
h4 ~ h2,
h5 ~ h2,
h6 ~ h2,
h4 ~ h3,
h5 ~ h3,
h6 ~ h3,
h5 ~ h4,
h6 ~ h4,
h6 ~ h5 {
  outline: 2px dotted blue;
}
[//begin]: # "Autogenerated link references for markdown compatibility"
[Accessibility]: accessibility "accessibility"
[Drafts]: drafts "Drafts"
[//end]: # "Autogenerated link references"