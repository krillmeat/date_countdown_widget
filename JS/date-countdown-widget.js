class dateCountdownWidget {
    constructor(date, widget){
        this.date = date;
        this.widgetElem = widget;
        this.dateNumber = widget.querySelector(".countdown-numbers");
        this.difference = this.calculateDateDifference(this.date);

        if(this.difference > 0){
            this.drawDateNumber(this.dateNumber, this.difference);
        }
    }

    /**
     * CALCULATE DATE DIFFERENCE
     * -----------------------------------
     * Calculates the number of days until a certain date is reached
     * -----------------------------------
     * @param {Date}    date    :   The date being counted to   
     * @return {Date}   deltaDays
     */
    calculateDateDifference = date => {
        let deltaDays = 0;

        let currentDate = new Date();

        let deltaTime = Math.abs(currentDate - date);
            deltaDays = Math.floor( deltaTime / (1000 * 60 * 60 *24) );

        return deltaDays;
    }

    /**
     * DRAW DATE NUMBER
     * -----------------------------------
     * Goes into the Widget Element and updates the Number
     * -----------------------------------
     * @param   {Node}      numberElem  :   Span Node that holds the modified number
     * @param   {Number}    difference  :   Number of Days Remaining
     */
    drawDateNumber = ( numberElem, difference ) => {
        numberElem.innerHTML = difference;
    }  
}