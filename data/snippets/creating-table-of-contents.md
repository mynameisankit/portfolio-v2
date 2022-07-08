---
title: Creating Table Of Contents
abstract: Something
technology: javascript
date: 2021-11-26T08:36:14.228Z
---
```js:createTree.js
function createTree(toc) {
    const stk = [];
    const tree = [];

    toc?.forEach(curr => {
        curr.children = [];

        while (stk.length && stk[stk.length - 1].depth >= curr.depth) {
            const prevTop = stk.length && stk[stk.length - 1];
            stk.pop();
            const newTop = stk.length && stk[stk.length - 1];
    
            if (stk.length)
                newTop.children.push(prevTop);
            else
                tree.push(prevTop);
        }

        stk.push(curr);
    });

    while (stk.length) {
        const prevTop = stk.length && stk[stk.length - 1];
        stk.pop();
        const newTop = stk.length && stk[stk.length - 1];

        if (stk.length)
            newTop.children.push(prevTop);
        else
            tree.push(prevTop);
    }

    return tree;
}
```