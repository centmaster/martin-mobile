<template>
  <card :header="{title:'我们俩啊'}">
    <div slot="content" class="card-demo-flex card-demo-content01">
      <div class="vux-1px-l vux-1px-r">
        <span>{{date1}}</span>
        <br/>
        在一起了
      </div>
      <div class="vux-1px-r">
        <span>{{date2}}</span>
        <br/>
        还有几天去武汉
      </div>
      <div class="vux-1px-r">
        <span>{{date3}}</span>
        <br/>
        还有多久毕业
      </div>
    </div>
  </card>
</template>
<script>
  import { Divider, Card } from 'vux'

  export default {
    components: {
      Card,
      Divider
    },
    data(){
        return{

        }
    },
    computed:{
        date1:()=>{
            let date=new Date('2015-06-04');
            let now=new Date();
            let res=parseInt(Math.abs(now - date) / 1000 / 60 / 60 / 24)
            return res;
        },
      date2:()=>{
        let date=new Date('2017-9-03');
        let now=new Date();
        let res=parseInt(Math.abs(now - date) / 1000 / 60 / 60 / 24)
        return res;
      },
      date3:()=>{
        let date=new Date('2018-06-01');
        let now=new Date();
        let res=parseInt(Math.abs(now - date) / 1000 / 60 / 60 / 24)
        return res;
      }

    }
  }
</script>

<style scoped lang="less">
  @import '~vux/src/styles/1px.less';

  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
</style>
