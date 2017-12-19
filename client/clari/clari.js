const Clarifai = require('clarifai');

// initialize with your api key. This will also work in your browser via http://browserify.org/
export const app = new Clarifai.App({
 apiKey: 'c02ca2b458c7407f92a098ede2270857'
});

// You can also use the SDK by adding this script to your HTML:
<script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script>
