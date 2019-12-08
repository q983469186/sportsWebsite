<template>
    <div class="start-page">
        <div class="container">
            <!-- 背景图 -->
            <img class="bg1" src="../../../static/bg1 (1).jpg" alt="">
            
            <!-- 首页显示推荐 -->
            <div class="recommend">
                <!-- 动态广场 -->
                <div id="square"  class="item sqare">
                    <div class="text">{{text}}</div>
                </div>
                <!-- 同城约会 -->
                <div id="date" class="item" @click="turnToPage('date')">
                    <div class="text">推荐文字123456</div>
                </div>
                <!-- 商品 -->
                <div id="goods" class="item goods" @click="turnToPage('goods')">
                    <div class="text">推荐文字123456</div>
                </div>
                <!-- 实用工具 -->
                <div id="tools" class="item" @click="turnToPage('tools')">
                    <div class="text">推荐文字123456</div>
                </div>
            </div>
            <!-- 侧边导航 -->
            <nav class="nav">
                <div class="item">
                    <a href="#square">#square</a>
                </div>
                <div class="item">
                    <a href="#date">#date</a>
                </div>
                <div class="item">
                    <a href="#goods">#goods</a>
                </div>
                <div class="item">
                    <a href="#tools">#tools</a>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                text:'',
                textArr:'',
                textInter:null,
            }
        },
        methods: {
            turnToPage(url){
                this.$store.state.headerIndex = url
                this.$router.push(url)
            },
            addText(){
                let textArr = this.textArr
                let i = 0
                this.textInter = setInterval(() => {
                    if(i == textArr.length){
                        clearInterval(this.textInter)
                    }else{
                        this.text += textArr[i]
                        i++
                    }
                }, 100);
            }
        },
        created() {
            this.addText()
        },
    }
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
