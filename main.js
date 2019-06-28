var app = new Vue({
    el:'#app',
    data() {
        return {
            imageMe:"/me.jpg",
            imgageConBack:"/background.jpg",
            imageHack:"/hackathon1.jpg",
            date: new Date().getDate(), 
            dateText:"",
            links:[
                {
                    website:"github",
                    linkUrl:"https://github.com/glitchgirl"
                },
                {
                    website:"linkedIn",
                    linkUrl:"https://www.linkedin.com/in/morgan-smith-bb4258139/"
                },
                {
                    website:"instagram",
                    linkUrl:"https://www.instagram.com/morganchasemakes/?hl=en"
                }
            ]
        }
    },
    computed: {
        returnToday() {
            if (this.date % 2 == 0) {
                return "Today's date is even."
            } else {
                return "Today's date is odd"
            }
        }
    }
});

 
