import fetch from 'node-fetch';

const template =
  "https://api.github.com/repos/stormasm/mui-card-file/contents/src/data/repos";

const url = template;

fetch(url)
	.then(res => res.json())
	.then(json => console.log(json));
