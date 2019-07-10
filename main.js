var app = new Vue({
    el:'#app',
    data() {
        return {
            imageMe:"/images/me.jpg",
            imgageConBack:"/images/background.jpg",
            imageHack:"/images/hackathon1.jpg",
            imageExampleOne:"/images/example of work 1.jpg",
            imageExampleTwo:"/images/example of work 2.png",
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
                },
                {
                    website:"dev.to",
                    linkUrl:"https://dev.to/glitchgirl"
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

 
