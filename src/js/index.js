Vue.config.debug = true;

var mainVM = new Vue({
    el: '#main',
    data: {     
        // pure data
        ppls: '',
        teams: []
    },
    computed: {
        isEnabled: function(){
            if(!this.ppls.trim()){
                return false;
            }else{
                return true;
            }
        }
    },
    methods: {
        run: function(){
            var that = this;
            console.log('methods - run');
            if(!that.ppls.trim() || !that.isEnabled){
                return;
            }
            var i = j = k = 0, txt = '', str = [], 
                names = that.ppls.split(' ');
                team = [];
            that.teams = [];
            while(true){
                if(!names.length){
                    showTeam(team, i++);
                    break;
                }
                if(j === 4){
                    showTeam(team, i++);
                    j = 0;
                    txt = '';
                    team = [];
                }
                team.push(pickOne(names));
                j++;
            }
            that.ppls = '';

            function showTeam(team, index){
                setTimeout(function(){
                    that.teams.push(team);
                }, index*1000);
            }
            function pickOne(list){
                var tmp, i = parseInt(Math.random() * names.length, 10);
                tmp = names[i];
                for(var j = i; j+1 < names.length; j++){
                    names[j] = names[j+1];
                }
                names.length--;
                return tmp;
            }
        },
    }
});