Vue.component('activelists',{
    template:
    `
    <div>
        <table v-for='i in activelist'>
            <tr>
                <td><strong>{{i.listname}}</strong></td>
                <td><strong>Total Cards: {{i.totalcards}}</strong></td>
                <td><strong>Active Cards: {{i.activecards}}</strong></td>
                <td><strong>Completed Cards: {{i.completedcards}}</strong></td>
                <td>
                    <form method="post" action='/DeleteList' style="margin-bottom: 5px;">
                        <input type="text" v-model=i.Listid name="listid" hidden>
                        <input type="submit" value="Delete">
                    </form>
                </td>
                <td>
                    <form method="post" action='/ExportList' style="margin-bottom: 5px;">
                        <input type="text" v-model=i.Listid name="listid" hidden>
                        <input type="submit" value="Export">
                    </form>
                </td>
            </tr>
            <tr v-for='j in i.Cards'>
                <td>{{j.cardtitle}}</td>
                <td>{{j.carddescription}}</td>
                <td>{{j.dueby}}</td>
                <td>{{j.status}}</td>
                <td>
                    <form method="post" action='/ListSummary' style="margin-bottom: 5px;">
                        <input type="text" v-model=j.cardid name="cardid" hidden>
                        <input type="submit" value="Edit">
                    </form>
                </td>
                <td>
                    <form method="post" action='/DeleteCard'>
                        <input type="text" v-model=j.cardid name="cardid" hidden>
                        <input type="submit" value="Delete">
                    </form>                
                </td>
            </tr>
        </table>
    </div>
    `,
    data:function(){
        return{
            message:'hello',
            activelist:""
        }
    },
    mounted:function(){
        uid=document.getElementById('uid').value;
        console.log(uid);
        console.log('http://127.0.0.1:8080/api/getallactivelists/'+uid);
        url="http://127.0.0.1:8080/api/getallactivelists/"+uid;
        console.log(url);
        fetch(url,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then(res => res.json())
        .then(data => this.activelist=data)
    }
})
Vue.component('completedlists',{
    template:
    `
    <div>
        <table v-for='i in completedlist'>
            <tr>
                <td><strong>{{i.listname}}</strong></td>
                <td><strong>Total Cards: {{i.totalcards}}</strong></td>
                <td><strong>Active Cards: {{i.activecards}}</strong></td>
                <td><strong>Completed Cards: {{i.completedcards}}</strong></td>
                <td>
                    <form method="post" action='/DeleteList' style="margin-bottom: 5px;">
                        <input type="text" v-model=i.Listid name="listid" hidden>
                        <input type="submit" value="Delete">
                    </form>
                </td>
                <td>
                    <form method="post" action='/ExportList' style="margin-bottom: 5px;">
                        <input type="text" v-model=i.Listid name="listid" hidden>
                        <input type="submit" value="Export">
                    </form>
                </td>
            </tr>
            <tr v-for='j in i.Cards'>
                <td>{{j.cardtitle}}</td>
                <td>{{j.carddescription}}</td>
                <td>{{j.dueby}}</td>
                <td>{{j.status}}</td>
                <td>
                    <form method="post" action='/ListSummary' style="margin-bottom: 5px;">
                        <input type="text" v-model=j.cardid name="cardid" hidden>
                        <input type="submit" value="Edit">
                    </form>
                </td>
                <td>
                    <form method="post" action='/DeleteCard'>
                        <input type="text" v-model=j.cardid name="cardid" hidden>
                        <input type="submit" value="Delete">
                    </form>                
                </td>
            </tr>
        </table>
    </div>
    `,
    data:function(){
        return{
            message:'hello',
            completedlist:""
        }
    },
    mounted:function(){
        uid=document.getElementById('uid').value;
        console.log(uid);
        console.log('http://127.0.0.1:8080/api/getallcompletelists/'+uid);
        url="http://127.0.0.1:8080/api/getallcompletelists/"+uid;
        console.log(url);
        fetch(url,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then(res => res.json())
        .then(data => this.completedlist=data)
    }
})
var app= new Vue({
    el:"#app",//takes the id 
})