const app = new Vue({
    "el": "#app",
    "data": {
        "search": "",
        "date": "",
        "hours": "00",
        "minutes": "00",
    },
    "methods": {
        "keypress": function (ev) {
            if (ev.key === "Enter") {
                this.handleResult(0);
            } else {
                if (parseInt(ev.key) && ev.altKey) { // is a number
                    this.handleResult(parseInt(ev.key) - 1);
                }
            }
        },
        "handleResult": function (id) {
            if (this.results[id]) {
                window.location.href = this.results[id].url;
            }
        },
        "doTime": function () {
            const time = moment();
            this.date = time.format("dddd D MMMM YYYY");
            this.hours = time.format("HH");
            this.minutes = time.format("mm");
        }
    },
    "computed": {
        "results": function () {
            return providers.filter(provider => provider.display(this.search.trim())).map(provider => {
                return {
                    "name": provider.name,
                    "colour": provider.colour,
                    "description": provider.description(this.search.trim()),
                    "url": provider.handler(this.search.trim())
                }
            });
        }
    },
    "mounted": function () {
        this.$nextTick(function () {
            this.$refs.search.focus();
        });

        this.doTime();

        setInterval(() => {
            this.doTime();
        }, 1000);
    }
});

document.body.onkeydown = function () {
    app.$refs.search.focus();
};