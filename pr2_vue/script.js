new Vue({
    el: "#app",
    data: {
        results: [],
        resultat: [],
        message: 'Thor',
        ShowHidden: false,
        title: ''
    },
    methods: {
        Api: function() {
            if(this.message == null || this.message ==''){alert('пустрые строки')}
            this.$http.get("https://www.omdbapi.com/?s=" + this.message + "&apikey=98e51151")
            .then(function (response) {
                console.log(response)
                this.results = response.data.Search;
                console.log(this.results)

            }) 
            .catch(function (e) {
              console.log("Вы арестованы, просьба покинуть данный ресурс ", e);
            })

        },

        Back:function() {
            this.ShowHidden = !this.ShowHidden
        },

        onClick: function() {
            this.ShowHidden= !this.ShowHidden
            this.title = event.currentTarget.getElementsByTagName('p')[0].innerHTML	
            var star = document.getElementsByClassName('star')[0]
            console.log(this.title)
            this.$http.get("https://www.omdbapi.com/?t=" + this.title + "&apikey=98e51151")
            .then(function (response) {
              console.log(response)
              if(response.body.Response === "False"){
                console.log("Error")
                alert('Films not found')
              }
              this.resultat = response.data;
              console.log(this.resultat)
            }) 
            .catch(function (e) {
              console.log("Вы арестованы, просьба покинуть данный ресурс ", e);
            })
        },

    }
})