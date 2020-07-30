var vue_app = new Vue({
    el: '#vue_app',
    delimiters: ['{[', ']}'],
    data: {
        //Donchian Channel Days of Entry
        EntryDonchianDays: 50,
        //Days of ATR
        ATRDays: 50,
        //Percentge / ATR of Position
        PositionATRPercentage: 10,
        //ATR Ratios of Exit
        ExitATRRatios: 20
    },
    updated() {

    },
});