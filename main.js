var app = new Vue({
    el:'#app',
    data: {
        return: {
            description: 'so we gonna put a picture here we gonna write a pretty thing about me as a human  then we summarize resume then direct Portfolio or whatever',
            githubLink:"https://github.com/glitchgirl",
            instaLink:"https://www.instagram.com/morganchasemakes/?hl=en",
            image:"/me.jpg",
            date: new Date().getDate(), 
            dateText:""
        },
        methods: {
            checkToday: function(){
               return 
               {
                   if(date % 2 !=0){
                        dateText: "Today's date is Even"
                    } else
                        dateText: "Today's date is odd"
                };
            }
          
        }
    }
});

 
