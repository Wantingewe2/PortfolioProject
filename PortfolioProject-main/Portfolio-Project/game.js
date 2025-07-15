// Your regular website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Unity WebGL initialization
    initUnityGame();
});

function initUnityGame() {
    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    var loadingBar = document.querySelector("#unity-loading-bar");
    var progressBarFull = document.querySelector("#unity-progress-bar-full");
    var warningBanner = document.querySelector("#unity-warning");

    // Show loading bar
    loadingBar.style.display = "block";

    var buildUrl = "unity-game/WebGL Builds";
    var loaderUrl = buildUrl + "/WebGl Builds.data.gz";
    var config = {
        dataUrl: buildUrl + "/WebGL Builds.data.gz",
        frameworkUrl: buildUrl + "/WebGL Builds.framework.js.gz",
        codeUrl: buildUrl + "/WebGL Builds.wasm.gz",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Your Company",
        productName: "Space Enviroment",
        productVersion: "1.0",
        showBanner: unityShowBanner,
    };

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        container.className = "unity-mobile";
        config.devicePixelRatio = 1;
    } else {
        canvas.style.width = "960px";
        canvas.style.height = "600px";
    }

    createUnityInstance(canvas, config, (progress) => {
        progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance) => {
        loadingBar.style.display = "none";
    }).catch((message) => {
        alert(message);
    });

    function unityShowBanner(msg, type) {
        function updateBannerVisibility() {
            warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
        }
        var div = document.createElement('div');
        div.innerHTML = msg;
        warningBanner.appendChild(div);
        if (type == 'error') div.style = 'background: red; padding: 10px;';
        else {
            if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
            setTimeout(function() {
                warningBanner.removeChild(div);
                updateBannerVisibility();
            }, 5000);
        }
        updateBannerVisibility();
    }
}