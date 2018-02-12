<template>
	<div class="goods_detail">
		<header class="top_bar">
            <a onclick="window.history.go(-1)" class="icon_back"></a>
            <!--<h3 class="cartname">商品详情</h3>-->
            <a href="#" class="icon_menu"></a>
        </header>
        <main class="detail_box">
            <product-swipe :goodsImages="goodsImagess"></product-swipe>
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
                        <div class="product_right product_yh_lq" @click="receiveCoupons(goodsData.id)">
                            领取
                        </div>
                    </div>
                <div>
                </div>    
            </section>
            <!--请选择颜色尺码--->
            <section class="group-warp">
                <div>
                    <div  @click="handleClick()" class="product_color_size">请选择颜色尺码 <span>....</span>   </div>
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
                    <span class="product_pj">商品评价(209)</span>
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
                    <ul class="product_user_evaluate">
                        <li>
                            <div class="user_info">
                                 <span><img  src="../assets/images/common/icon-user-img.png"/>
                            冬青的庭院</span>
                            </div>
                           <div class="evaluate_info_list">
                               <p class="evaluate-info">很仙，很好看蛮美的～很仙，很好看蛮美的～很仙，很好看蛮美的～很仙，很好看蛮美的～很仙，很好看蛮美的～很仙，很好看蛮美的～很仙，很好看蛮美的～很仙，很好看蛮美的～很仙，很好看蛮美的～很仙，很好看蛮美的～很仙，很好看蛮美的～很仙，很好看蛮美的～很仙，很好看蛮美的～</p>
                               <p class="evaluate-sku-info">颜色分类:米色第一批预定8-12天;尺码:M</p>
                           </div>
                        </li>
                        <li>
                            <div class="user_info">
                                 <span><img  src="../assets/images/common/icon-user-img.png"/>
                            冬青的庭院</span>
                            </div>
                            <div class="evaluate_info_list">
                                <p>很仙，很好看蛮美的～</p>
                                <p class="evaluate-sku-info">颜色分类:米色第一批预定8-12天;尺码:M</p>
                            </div>
                        </li>
                    </ul>
                    <div class="button_info">
                        <div>
                            <span>查看更多...</span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="group-warp">
                <div>
                    <span  class="product_pj">商品详情</span>
                </div>
                <div class="product_detail" v-html="goodsData.productDetail">

                </div>
                <div>已经到底了哦么么哒</div>
           </section>
            <mt-popup v-model="popupVisible" position="bottom" modal=true>
                <div class="spec-menu">
                    <div class="spec-menu-content spec-menu-show" data-floor="true" style="display: block;">
                        <div class="spec-menu-top bdr-b">
                            <div class="spec-first-pic">
                                <img id="spec_image" :src="goodsImages[2]" >
                            </div>
                            <a class="rt-close-btn-wrap spec-menu-close"  @click="handleClickClose()">
                                <img  src="../assets/images/common/close.png"/>
                            </a>

                            <div class="spec-price" id="specJdPri" style="display: block">
                                <span class="spec-yang-pic">￥</span>
                                <span id="spec_price"> 199.00 </span>
                            </div>

                            <div id="specWeightDiv" class="spec-weight">
                                <span>重量:</span>
                                <span id="spec_weight">0.14kg</span>
                            </div>
                        </div>
                        <div class="spec-menu-middle">
                            <div class="prod-spec" id="prodSpecArea">
                                <!-- 已选 -->
                                <div class="spec-desc">
                                    <span class="part-note-msg">已选</span>
                                    <div id="specDetailInfo_spec" class="base-txt">
                                        黑色 M
                                        &nbsp;&nbsp;<span class="amount">1件</span>
                                    </div>
                                </div>
                                <div class="nature-container" id="natureCotainer">
                                    <!--颜色 5.5版本之前的规格属性-->
                                    <div class="pro-color">
                                        <div>
                                            <span class="part-note-msg"> 颜色 </span>
                                        </div>

                                        <p id="color">
                                            <a title="黑色" class="a-item selected J_ping" onclick="updateColorSizeSpec()"  href="javascript:void(0)">黑色</a>
                                            <a title="白色" class="a-item  J_ping" onclick="updateColorSizeSpec()"   href="javascript:void(0)">白色</a>
                                            <a title="粉色" class="a-item  J_ping" onclick="updateColorSizeSpec()"   href="javascript:void(0)">粉色</a>
                                            <a title="粉色" class="a-item  J_ping" onclick="updateColorSizeSpec()"   href="javascript:void(0)">粉色</a>
                                            <a title="粉色" class="a-item  J_ping" onclick="updateColorSizeSpec()"   href="javascript:void(0)">粉色</a>
                                            <a title="粉色" class="a-item  J_ping" onclick="updateColorSizeSpec()"   href="javascript:void(0)">粉色</a>
                                            <a title="粉色" class="a-item  J_ping" onclick="updateColorSizeSpec()"   href="javascript:void(0)">粉色</a>
                                            <a title="粉色" class="a-item  J_ping" onclick="updateColorSizeSpec()"   href="javascript:void(0)">粉色</a>
                                            <a title="粉色" class="a-item  J_ping" onclick="updateColorSizeSpec()"   href="javascript:void(0)">粉色</a>
                                            <a title="粉色" class="a-item  J_ping" onclick="updateColorSizeSpec()"   href="javascript:void(0)">粉色</a>
                                            <a title="粉色" class="a-item  J_ping" onclick="updateColorSizeSpec()"   href="javascript:void(0)">粉色</a>
                                        </p>
                                    </div>
                                    <!--尺寸-->
                                    <div class="pro-size">
                                        <div>
                                            <span class="part-note-msg"> 尺码 </span>
                                        </div>

                                        <p id="size">
                                            <a title="S" class="a-item J_ping" onclick="updateColorSizeSpec()" report-eventid="MProductdetail_SpecificationSpec" report-eventparam="S" href="javascript:void(0)">S</a>
                                            <a title="M" class="a-item selected J_ping" onclick="updateColorSizeSpec()" report-eventid="MProductdetail_SpecificationSpec" report-eventparam="M" href="javascript:void(0)">M</a>
                                            <a title="L" class="a-item J_ping" onclick="updateColorSizeSpec()" report-eventid="MProductdetail_SpecificationSpec" report-eventparam="L" href="javascript:void(0)">L</a>
                                            <a title="L" class="a-item J_ping" onclick="updateColorSizeSpec()" report-eventid="MProductdetail_SpecificationSpec" report-eventparam="L" href="javascript:void(0)">L</a>
                                            <a title="L" class="a-item J_ping" onclick="updateColorSizeSpec()" report-eventid="MProductdetail_SpecificationSpec" report-eventparam="L" href="javascript:void(0)">L</a>
                                            <a title="L" class="a-item J_ping" onclick="updateColorSizeSpec()" report-eventid="MProductdetail_SpecificationSpec" report-eventparam="L" href="javascript:void(0)">L</a>
                                            <a title="L" class="a-item J_ping" onclick="updateColorSizeSpec()" report-eventid="MProductdetail_SpecificationSpec" report-eventparam="L" href="javascript:void(0)">L</a>
                                            <a title="L" class="a-item J_ping" onclick="updateColorSizeSpec()" report-eventid="MProductdetail_SpecificationSpec" report-eventparam="L" href="javascript:void(0)">L</a>
                                        </p>
                                    </div>

                                    <!--数量-->
                                    <div id="addCartNum" class="pro-count">
                                        <span class="part-note-msg">数量</span>
                                        <div class="quantity-wrapper">
                                            <input type="hidden" id="limitSukNum1025423798" value="200">
                                            <a class="quantity-decrease limited  J_ping" report-eventid="MProductdetail_SpecificationReduce" onclick="minus()">
                                                <em id="minus">-</em>
                                            </a>
                                            <input type="tel" class="quantity" size="4" value="1" id="number" onblur="modify();">
                                            <a class="quantity-increase J_ping" report-eventid="MProductdetail_SpecificationAdd" id="quantityPlus" onclick="plus()">
                                                <em id="plus">+</em>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flick-menu-btn spec-menu-btn">
                            <a class="yellow-color add_cart" id="add_cart_spec" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">加入购物车</a>
                            <a class="red-color directorder" id="directorder_spec" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">立即购买</a>
                        </div>
                    </div>
                </div>
            </mt-popup>
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
                            <span class="m_item_name" >购物车</span>
                        </a>
                    </li>
                </ul>
                <div class="btn_box clearfix" >
                    <a @click="addShoppingCat(goodsData.id)" class="buy_now">加入购物车</a>
                    <a href="#" class="buybuy">立即购买</a>
                </div>
            </div>
        </footer>
	</div>
</template>
<script>
    import { Toast ,Popup,Swipe, SwipeItem  } from 'mint-ui';
    import ProductSwipe from "./product/ProductSwipe";

   export default{
        components: {
            ProductSwipe
        },
        mounted(){
            //页面重新刷新 隐藏 footer
            this.$store.dispatch('hideNav');
            this.fetchData(this.$route.params.id);
        },
        data(){
            return {
                // cateGoodsAllData:[],
                popupVisible:false,
                goodsImages:[],
                goodsImagess:[],
                goodsData:{},
            }
        },
       //监听
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
                            var s =  res.data.productImgUrls.split(",");
                            console.info("2222222222222"+s)
                             s.forEach(function (value, index, array) {
                                 console.info(value+"----------------------------------------------------------")
                                 _this.goodsImagess.push({'html':value})
                             });
                        };
                    // _this.goodsImagess = [{
                    //                       html: 'http://detao.oss-cn-beijing.aliyuncs.com/proudct/a42eb54b954b4c75aa1e8c4e85561501.jpg'
                    //                     },
                    //                     {
                    //                         html: 'http://detao.oss-cn-beijing.aliyuncs.com/proudct/a42eb54b954b4c75aa1e8c4e85561501.jpg'
                    //                     },
                    //                     {
                    //                         html: 'http://detao.oss-cn-beijing.aliyuncs.com/proudct/a42eb54b954b4c75aa1e8c4e85561501.jpg'
                    //                     }]
                    console.info(res.data)
                    _this.goodsData = res.data;

                },(err)=>{
                    console.log(err);
                })
            },
            handleClick:function () {
              this.popupVisible =true;
            },
            handleClickClose:function () {
              this.popupVisible =false;
            },
            //添加到购物车
            addShoppingCat: function(productId){
                Toast({
                    message: '添加购物车成功',
                    position: 'middle',
                    duration: 2000
                });
            },
            //领取优惠券
            receiveCoupons: function(productId){
                Toast({
                    message: '领取成功~',
                    position: 'middle',
                    duration: 2000
                });
            },

        }
    }
</script>
<style>
@import '../assets/css/detail.css';
</style>