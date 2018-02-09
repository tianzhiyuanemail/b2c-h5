<template>
	<div class="goods_detail">
		<header class="top_bar">
            <a onclick="window.history.go(-1)" class="icon_back"></a>
            <h3 class="cartname">商品详情</h3>
            <a href="#" class="icon_menu"></a>
        </header>
        <main class="detail_box">
            <section class="banner_box">
                <!-- <ul class="banner_child_box">
                    <li class="banner_item" v-for="img in goodsImages">
                        <img :src="img" alt="" class="banner_pic">
                        
                    </li>
                    
                </ul> -->
                <!-- 制作一个框架包裹slider -->
                <div >
                        <!-- 配置slider组件 -->
                        <slider :pages="goodsImages" :sliderinit="sliderinit" ref="slider"   >
                            <!-- 设置loading,可自定义 -->
                            <div slot="loading">loading...</div>
                        </slider>
                        <div class="sliderButton">
                        <!-- <button @click="slidePre">上一页/pre</button>
                        <button @click="slideNext">下一页/next</button> -->
                        </div>
                </div>
            </section>
            <section class="group-warp ">
                <p class="p_name">{{goodsData.productTitle}}</p>
                    <div class="product_one">
                        <div class="product_pric product_serve_left">
                            <span>￥</span>
                            <span class="rel_price">{{goodsData.saleGuidePrice}}</span>
                            <span>.00</span>
                        </div>
                        <div class="product_right product_serve_right">
                            分享
                        </div>
                    </div>
                    <div class="product_two">
                        <span class="product_pric">
                            快递：免运费
                        </span>
                        <span class="product_sales">
                            销量105笔
                        </span>
                        <span class="product_yf">
                           北京
                        </span>
                    </div>
                    <!--7天无理由 -->
                    <div class="product_stree">
                        <ul >
                            <li><img style="width: 11px;" src="../assets/images/common/right.png"/>
                                7天无理由</li>
                            <li><img style="width: 11px;" src="../assets/images/common/right.png"/>
                                新品</li>
                            <li><img style="width: 11px;" src="../assets/images/common/right.png"/>
                                花呗</li>
                            <li><img style="width: 11px;" src="../assets/images/common/right.png"/>
                                24小时发货</li>
                        </ul>
                    </div>
                    <div class="product_four"></div>
                    <div class="product_five">
                        <div class="product_youhui">
                            <img style="width: 26px;height: 22px; margin-bottom: -5px;" src="../assets/images/common/youhuiquan.png"/>满100减30
                        </div>
                        <div  class="product_youhui">
                            <img style="width: 26px;height: 22px; margin-bottom: -5px; " src="../assets/images/common/youhuiquan.png"/>店铺优惠券满100减30
                        </div>
                        <div class="product_right product_yh_lq">
                            领取
                        </div>
                    </div>
                <div>
                </div>    

            </section>

            <!--请选择颜色尺码--->
            <section class="group-warp">
                <div>
                    <div class="product_color_size">请选择颜色尺码 <span>....</span>   </div>   
                </div>   
            </section>
            <!--产品参数--->
            <section class="group-warp">
                <div>
                    <div class="product_color_size">产品参数 <span>....</span>   </div>   
                </div>   
             </section>
            <!--商品评价--->
            <section class="group-warp">
                <div>
                    <div class="product_pj">商品评价(209)</div>
                    <ul class="product_yx-ul">
                        <li>人群(39)</li>
                        <li>衣服不错(38)</li>
                        <li>穿着美(26)</li>
                        <li>版型好看(19)</li>
                        <li>款式好(17)</li>
                        <li>衣服很合身(13)</li> 
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <div class="user_info">
                                 <span><img  src="../assets/images/common/icon-user-img.png"/>
                            冬青的庭院</span>
                            </div>
                           <div>
                               <p>很仙，很好看蛮美的～</p>
                               <p>颜色分类:米色第一批预定8-12天;尺码:M</p>
                           </div>
                        </li>
                    </ul>

                </div>
            </section>
            <section class="group-warp">
                <p class="pro_det">
                     {{goodsData.id}} 
                </p>
                 <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p> <p class="pro_det">
                     {{goodsData.id}} 
                </p>
           </section>

        </main>
        <footer class="cart_d_footer">
            <div class="m">
                <ul class="m_box">
                    <li class="m_item">
                        <a href="" class="m_item_link">
                            <em class="m_item_pic"></em>
                            <span class="m_item_name">卖家</span>
                        </a>
                        <a href="" class="m_item_link">
                            <em class="m_item_pic two"></em>
                            <span class="m_item_name">关注</span>
                        </a>
                        <a href="" class="m_item_link">
                            <em class="m_item_pic three"></em>
                            <span class="m_item_name">购物车</span>
                        </a>
                    </li>
                </ul>
                <div class="btn_box clearfix" >
                    <a href="#" class="buy_now">加入购物车</a>
                    <a href="#" class="buybuy">立即购买</a>
                </div>
            </div>
        </footer>
	</div>
</template>
<script>
import slider from 'vue-concise-slider'// import slider components

   export default{
     components: {
        slider
    },
        mounted(){
            
            this.fetchData(this.$route.params.id);
        },
        data(){
            return {
                // cateGoodsAllData:[],
                goodsImages:[],
                goodsData:{},
                sliderinit: {
                  currentPage: 0,//当前页码
                  thresholdDistance: 100,//滑动判定距离
                  thresholdTime: 300,//滑动判定时间
                  loop:true,//循环滚动
                  infinite:1,//无限滚动前后遍历数
                  slidesToScroll:1,//每次滑动项数
                  direction:'horizontal',//方向设置
                  autoplay:0,//自动播放
                  timingFunction: 'ease'
                },
            }
        },
           
        watch:{
            $route(to){

                var reg=/detail\/\d+/;
                if(reg.test(to.path)){
                    var categotyId=this.$route.params.id || 0;
                    this.fetchData(categotyId);
                }
            }
        },
        methods:{
            fetchData(id){
                var _this=this;
                _this.$http.get('/api/products/info/'+id).then((res)=>{
                        if(res.data.productImgUrls!=null && res.data.productImgUrls != ''){
                             _this.goodsImages = res.data.productImgUrls.split(",");
                        };
                    _this.goodsImages = [{
                                          html: '<img class="slider" style="width: 100%;height: 100%;max-width: 100%;max-height: 100%;margin-top: 45px;" src="http://detao.oss-cn-beijing.aliyuncs.com/proudct/a42eb54b954b4c75aa1e8c4e85561501.jpg"/>',
                                          style: {
                                                //  'width': '400px'
                                            }
                                        },
                                        {
                                            html: '<img class="slider" style="width: 100%;height: 100%;max-width: 100%;max-height: 100%;margin-top: 45px;"  src="http://detao.oss-cn-beijing.aliyuncs.com/proudct/a42eb54b954b4c75aa1e8c4e85561501.jpg"/>',
                                            style: {
                                                //  'width': '400px'
                                            }
                                        },
                                        {
                                            html: '<img class="slider" style="width: 100%;height: 100%;max-width: 100%;max-height: 100%;margin-top: 45px;"  src="http://detao.oss-cn-beijing.aliyuncs.com/proudct/a42eb54b954b4c75aa1e8c4e85561501.jpg"/>',
                                            style: {
                                                //  'width': '400px'
                                            }
                                        }]
                    _this.goodsData = res.data;

                  // imgBox = $("img .slider")[0];
                },(err)=>{
                    console.log(err);
                })
            },
              
            slideNext () {
              this.$refs.slider.$emit('slideNext')
              // slider.$emit('slideNext')
            },
            slidePre () {
              this.$refs.slider.$emit('slidePre')
              // slider.$emit('slidePre')
            }
        
        }
        
    }
</script>
<style>
@import '../assets/css/detail.css';
</style>