(function(){

    var style = 'body{background: #333;}.flake{background: #444;position:fixed;top:-10%;animation-name: fall;animation-timing-function: linear;animation-iteration-count: infinite;z-index:999999;}.flake-1{width:2px;height:2px;animation-duration: 20s;}.flake-2{width:3px;height:4px;animation-duration: 15s;}.flake-3{width:4px;height:4px;animation-duration: 10s;}.ground{background: #fff;position:fixed;left:0;bottom:0;width:100%;height:0;animation-name: lay;animation-duration: 300s;animation-delay: 10s;z-index:999999;}@keyframes fall {100% {background-color: #fff;top:110%;}}@keyframes lay {100% {height:100%;}}';

    var appendHtmlToBody = function(html){
        var elem = document.createElement('div');
        elem.innerHTML = html;
        document.body.appendChild(elem.firstChild);
    };

    var addStyles = function(){
        var styleHtml = '<style>' + style +  '</style>';
        appendHtmlToBody(styleHtml);
    }

    var createGround = function(){
        var groundHtml = '<div class="ground"></div>';
        appendHtmlToBody(groundHtml);
    };

    var createFlakes = function(numFlakes){
        var createFlake = function(){
            var left = Math.ceil(Math.random() * 100);
            var type = Math.ceil(Math.random() * 3);
            var flakeHtml = '<div class="flake flake-' + type + '" style="left:' + left + '%"><div>';
            appendHtmlToBody(flakeHtml);
        };

        for(var i = 1; i < numFlakes; i++){
            var delay = Math.ceil(Math.random() * 20000);
            setTimeout(createFlake, delay);
        }
    };

    var startup = function(){
        console.log('Let it snow...');
        addStyles();
        createGround();
        createFlakes(100); 
        setInterval(function(){
            createFlakes(100);
        }, 20000);       
    };
    
    if (document.readyState === 'complete') startup();
    else window.onload = startup;

})();