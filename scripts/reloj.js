window.console = window.console || function(t) {};

   if (document.location.search.match(/type=embed/gi)) {
   window.parent.postMessage("resize", "*");
   }
        document.addEventListener('DOMContentLoaded', () =>
            requestAnimationFrame(updateTime));


        function updateTime() {
            document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
            document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k") + "'");
            document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
            document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
            requestAnimationFrame(updateTime);
        }
        //# sourceURL=pen.js