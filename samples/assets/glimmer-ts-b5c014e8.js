import t from"./typescript-24e7badf.js";import e from"./handlebars-a93513a1.js";import"./html-d8c93a75.js";import"./javascript-b7d6d348.js";import"./css-a67813b3.js";import"./yaml-b29e536f.js";const n=Object.freeze({$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",name:"glimmer-ts",scopeName:"source.gts",patterns:[{include:"source.ts"}],injections:{"L:source.gts -comment -string":{patterns:[{name:"meta.js.embeddedTemplateWithoutArgs",begin:"\\s*(<)(template)\\s*(>)",beginCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.other.html"},3:{name:"punctuation.definition.tag.html"}},end:"(</)(template)(>)",endCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.other.html"},3:{name:"punctuation.definition.tag.html"}},patterns:[{include:"text.html.handlebars"}]},{name:"meta.js.embeddedTemplateWithArgs",begin:"(<)(template)",beginCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.other.html"}},end:"(</)(template)(>)",endCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.other.html"},3:{name:"punctuation.definition.tag.html"}},patterns:[{begin:"(?<=\\<template)",end:"(?=\\>)",patterns:[{include:"text.html.handlebars#tag-stuff"}]},{begin:"(>)",beginCaptures:{1:{name:"punctuation.definition.tag.end.js"}},end:"(?=</template>)",contentName:"meta.html.embedded.block",patterns:[{include:"text.html.handlebars"}]}]}]}},displayName:"Glimmer TS",aliases:["gts"],embeddedLangs:["typescript","handlebars"]});var o=[...t,...e,n];export{o as default};
