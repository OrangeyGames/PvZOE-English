window.skins = window.skins || {};
var __extends = this && this.__extends || function(e, i) {
    for (var t in i) i.hasOwnProperty(t) && (e[t] = i[t]);

    function n() {
        this.constructor = e
    }
    n.prototype = i.prototype, e.prototype = new n
};
window.generateEUI = window.generateEUI || {}, generateEUI.paths = generateEUI.paths || {}, generateEUI.styles = void 0, generateEUI.skins = {
    "eui.Button": "resource/eui_skins/ButtonSkin.exml",
    "eui.CheckBox": "resource/eui_skins/CheckBoxSkin.exml",
    "eui.HScrollBar": "resource/eui_skins/HScrollBarSkin.exml",
    "eui.HSlider": "resource/eui_skins/HSliderSkin.exml",
    "eui.Panel": "resource/eui_skins/PanelSkin.exml",
    "eui.TextInput": "resource/eui_skins/TextInputSkin.exml",
    "eui.ProgressBar": "resource/eui_skins/ProgressBarSkin.exml",
    "eui.RadioButton": "resource/eui_skins/RadioButtonSkin.exml",
    "eui.Scroller": "resource/eui_skins/ScrollerSkin.exml",
    "eui.ToggleSwitch": "resource/eui_skins/ToggleSwitchSkin.exml",
    "eui.VScrollBar": "resource/eui_skins/VScrollBarSkin.exml",
    "eui.VSlider": "resource/eui_skins/VSliderSkin.exml",
    "eui.ItemRenderer": "resource/eui_skins/ItemRendererSkin.exml",
    AntiButton: "resource/eui_skins/AntiButton.exml",
    diaoluo: "resource/eui_skins/diaoluo.exml",
    yaoQingView: "resource/eui_skins/yaoQingView.exml",
    YaoQingItemView: "resource/eui_skins/YaoQingItemView.exml",
    DiaoXiangView: "resource/eui_skins/DiaoXiangView.exml",
    DiaoXiangItemView: "resource/eui_skins/DiaoXiangItemView.exml",
    ZenMeWanView: "resource/eui_skins/ZenMeWanView.exml",
    RoleInformation: "resource/eui_skins/RoleInformation.exml",
    TuJianView: "resource/eui_skins/TuJianView.exml",
    TuJianItemView: "resource/eui_skins/TuJianItemView.exml",
    QianDaoView: "resource/eui_skins/QianDaoView.exml",
    HuDunView: "resource/eui_skins/HuDunView.exml",
    GongJiView: "resource/eui_skins/GongJiView.exml",
    LiXianView: "resource/eui_skins/LiXianView.exml",
    HaoYouZhuLiView: "resource/eui_skins/HaoYouZhuLiView.exml",
    ShouHuoView: "resource/eui_skins/ShouHuoView.exml",
    JiaoShuiView: "resource/eui_skins/JiaoShuiView.exml",
    JiaoShuiItemView: "resource/eui_skins/JiaoShuiItemView.exml",
    BoxTip: "resource/eui_skins/BoxTip.exml",
    ZhiYinView: "resource/eui_skins/ZhiYinView.exml",
    HintView: "resource/eui_skins/HintView.exml",
    PaiHangView: "resource/eui_skins/PaiHangView.exml",
    PaiHangItem: "resource/eui_skins/PaiHangItem.exml",
    MoreGameItem: "resource/eui_skins/MoreGameItem.exml",
    MoreGameView: "resource/eui_skins/MoreGameView.exml",
    JieSuoView: "resource/eui_skins/JieSuoView.exml",
    ShengYaView: "resource/eui_skins/ShengYaView.exml",
    DuanWeiView: "resource/eui_skins/DuanWeiView.exml",
    JiJiaView: "resource/eui_skins/JiJiaView.exml",
    ShangDianYouHuiView: "resource/eui_skins/ShangDianYouHuiView.exml",
    DuanWeiDaTingView: "resource/eui_skins/DuanWeiDaTingView.exml",
    DuanWeiTiShengView: "resource/eui_skins/DuanWeiTiShengView.exml",
    ZiDongHeChengView: "resource/eui_skins/ZiDongHeChengView.exml",
    ShanChu: "resource/eui_skins/ShanChu.exml",
    YinHangView: "resource/eui_skins/YinHangView.exml",
    TiaoZahnView: "resource/eui_skins/TiaoZahnView.exml",
    TiaoZhaoJiJiaView: "resource/eui_skins/TiaoZhaoJiJiaView.exml",
    QuanPinGongJiView: "resource/eui_skins/QuanPinGongJiView.exml",
    QuanPinGongJi1View: "resource/eui_skins/QuanPinGongJi1View.exml",
    QuanPinGongJi2View: "resource/eui_skins/QuanPinGongJi2View.exml",
    JieSuoYuGaoView: "resource/eui_skins/JieSuoYuGaoView.exml",
    JieSuoYuGao1View: "resource/eui_skins/JieSuoYuGao1View.exml",
    QianDao1View: "resource/eui_skins/QianDao1View.exml",
    ShengXingView: "resource/eui_skins/ShengXingView.exml",
    PaiHangPangView: "resource/eui_skins/PaiHangPangView.exml",
    PaiHangPang1View: "resource/eui_skins/PaiHangPang1View.exml",
    PaiHangPang2View: "resource/eui_skins/PaiHangPang2View.exml",
    "ShiJieView\\": "resource/eui_skins/ShiJieView/.exml",
    ShiJieView: "resource/eui_skins/ShiJieView.exml",
    ShiJieView1: "resource/eui_skins/ShiJieView1.exml",
    XinShouLiBaoView: "resource/eui_skins/XinShouLiBaoView.exml",
    XinShouLiBao1View: "resource/eui_skins/XinShouLiBao1View.exml",
    XingXiongHuoDeView: "resource/eui_skins/XingXiongHuoDeView.exml",
    XingXiongHuoDe1View: "resource/eui_skins/XingXiongHuoDe1View.exml",
    ShangZhenTeXiaoView: "resource/eui_skins/ShangZhenTeXiaoView.exml",
    ShangDian1View: "resource/eui_skins/ShangDian1View.exml",
    ShangDian2View: "resource/eui_skins/ShangDian2View.exml",
    ShangDian3View: "resource/eui_skins/ShangDian3View.exml",
    LiXianLiBaoView: "resource/eui_skins/LiXianLiBaoView.exml",
    ZhongZhiGongJuView: "resource/eui_skins/ZhongZhiGongJuView.exml",
    ChuangGuanView: "resource/eui_skins/ChuangGuanView.exml",
    GuanKaJiangLiView: "resource/eui_skins/GuanKaJiangLiView.exml",
    GuanKaJiangLi1View: "resource/eui_skins/GuanKaJiangLi1View.exml",
    HaoHuanLiBaoView: "resource/eui_skins/HaoHuanLiBaoView.exml",
    SheZhiView: "resource/eui_skins/SheZhiView.exml",
    ShiBaiView: "resource/eui_skins/ShiBaiView.exml",
    PlantItem: "resource/eui_skins/PlantItem.exml",
    PaoTaiJieSuoView: "resource/eui_skins/PaoTaiJieSuoView.exml",
    DragonSpine: "resource/eui_skins/DragonSpine.exml",
    TipItem: "resource/eui_skins/TipItem.exml",
    HuoDeJinBiView: "resource/eui_skins/HuoDeJinBiView.exml",
    SuiPianHeChengView: "resource/eui_skins/SuiPianHeChengView.exml",
    KaPianHeChengView: "resource/eui_skins/KaPianHeChengView.exml",
    VipView: "resource/eui_skins/VipView.exml",
    VipDengJiView: "resource/eui_skins/VipDengJiView.exml",
    RenWuView: "resource/eui_skins/RenWuView.exml",
    RenWu1View: "resource/eui_skins/RenWu1View.exml",
    FuWenView: "resource/eui_skins/FuWenView.exml",
    FuWen1View: "resource/eui_skins/FuWen1View.exml",
    FuWen2View: "resource/eui_skins/FuWen2View.exml",
    FuWen3View: "resource/eui_skins/FuWen3View.exml",
    FuWen4View: "resource/eui_skins/FuWen4View.exml",
    FuWen5View: "resource/eui_skins/FuWen5View.exml",
    LaoHuJiView: "resource/eui_skins/LaoHuJiView.exml",
    LaoHuJi1View: "resource/eui_skins/LaoHuJi1View.exml",
    SuiPianHeCheng1: "resource/eui_skins/SuiPianHeCheng1.exml",
    SuiPian2View: "resource/eui_skins/SuiPian2View.exml",
    GengDuoView: "resource/eui_skins/GengDuoView.exml",
    VipItem: "resource/eui_skins/VipItem.exml",
    LaoHuJiWanFaView: "resource/eui_skins/LaoHuJiWanFaView.exml",
    YuanShengView: "resource/eui_skins/YuanShengView.exml",
    HeChengShuoMingView: "resource/eui_skins/HeChengShuoMingView.exml",
    ShangDianShuoMingView: "resource/eui_skins/ShangDianShuoMingView.exml",
    ShangDianShuoMing1View: "resource/eui_skins/ShangDianShuoMing1View.exml",
    JinBiBuZuView: "resource/eui_skins/JinBiBuZuView.exml",
    DaoChu1View: "resource/eui_skins/DaoChu1View.exml",
    DaoChu2View: "resource/eui_skins/DaoChu2View.exml",
    DaoChu3View: "resource/eui_skins/DaoChu3View.exml",
    DaoChu11View: "resource/eui_skins/DaoChu11View.exml",
    DaoChu4View: "resource/eui_skins/DaoChu4View.exml",
    DaoChu111View: "resource/eui_skins/DaoChu111View.exml",
    DaoChu5View: "resource/eui_skins/DaoChu5View.exml",
    DaoChu1111View: "resource/eui_skins/DaoChu1111View.exml",
    YouXiQuanView: "resource/eui_skins/YouXiQuanView.exml",
    BannerView: "resource/eui_skins/BannerView.exml",
    GaoJiZhiWuView: "resource/eui_skins/GaoJiZhiWuView.exml",
    ErWaiHuoDeZhiWuView: "resource/eui_skins/ErWaiHuoDeZhiWuView.exml"
}, generateEUI.paths["resource/eui_skins/AntiButton.exml"] = window.AntiButtonSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["labelDisplay", "iconDisplay"], this.height = 50, this.width = 100, this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this.iconDisplay_i()], this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "button_down_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", .5)])]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(1, 3, 8, 8), e.source = "button_up_png", e.percentWidth = 100, e
    }, t.labelDisplay_i = function() {
        var e = new eui.Label;
        return this.labelDisplay = e, e.horizontalCenter = 0, e.size = 20, e.text = "123", e.textAlign = "center", e.textColor = 16777215, e.verticalAlign = "middle", e.verticalCenter = 0, e
    }, t.iconDisplay_i = function() {
        var e = new eui.Image;
        return this.iconDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/BannerView.exml"] = window.BannerViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["node", "dataList", "scroller", "gro"], this.height = 1280, this.width = 720, this.elementsContent = [this.node_i(), this.gro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.node_i = function() {
        var e = new eui.Group;
        return this.node = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 13, e.height = 163, e.horizontalCenter = 2, e.width = 718.18, e
    }, t.gro_i = function() {
        var e = new eui.Group;
        return this.gro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 11, e.height = 164, e.horizontalCenter = 3.5, e.scaleX = 1, e.scaleY = 1, e.width = 719.44, e.x = 1.0899999999999999, e.y = .060000000000172804, e.elementsContent = [this.scroller_i()], e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 164, e.scaleX = 1, e.scaleY = 1, e.width = 718.3, e.x = 1.39, e.y = 0, e.viewport = this._Group1_i(), e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.width = 715.27, e.x = 224, e.y = 0, e.elementsContent = [this.dataList_i()], e
    }, t.dataList_i = function() {
        var e = new eui.List;
        return this.dataList = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 164, e.itemRendererSkinName = DaoChu1111ViewSkin, e.verticalCenter = 0, e.x = -4.88, e.layout = this._TileLayout1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 15, e.paddingLeft = 15, e.verticalGap = 20, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ButtonSkin.exml"] = window.skins.ButtonSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["labelDisplay", "iconDisplay"], this.minHeight = 50, this.minWidth = 100, this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this.iconDisplay_i()], this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "button_down_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", .5)])]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(1, 3, 8, 8), e.source = "button_up_png", e.percentWidth = 100, e
    }, t.labelDisplay_i = function() {
        var e = new eui.Label;
        return this.labelDisplay = e, e.bottom = 8, e.left = 8, e.right = 8, e.size = 20, e.textAlign = "center", e.textColor = 16777215, e.top = 8, e.verticalAlign = "middle", e
    }, t.iconDisplay_i = function() {
        var e = new eui.Image;
        return this.iconDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/CheckBoxSkin.exml"] = window.skins.CheckBoxSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Group1_i()], this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "alpha", .7)]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", .5)]), new eui.State("upAndSelected", [new eui.SetProperty("_Image1", "source", "fuxuan2_png")]), new eui.State("downAndSelected", [new eui.SetProperty("_Image1", "source", "fuxuan2_png")]), new eui.State("disabledAndSelected", [new eui.SetProperty("_Image1", "source", "fuxuan2_png")])]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group1_i = function() {
        var e = new eui.Group;
        return e.percentHeight = 100, e.percentWidth = 100, e.layout = this._HorizontalLayout1_i(), e.elementsContent = [this._Image1_i(), this.labelDisplay_i()], e
    }, t._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.horizontalAlign = "left", e.verticalAlign = "middle", e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e, e.alpha = 1, e.fillMode = "scale", e.scaleX = .9, e.scaleY = .9, e.source = "fuxuan1_png", e.x = 0, e.y = 0, e
    }, t.labelDisplay_i = function() {
        var e = new eui.Label;
        return this.labelDisplay = e, e.fontFamily = "SimHei", e.height = 25, e.size = 25, e.textAlign = "center", e.textColor = 7368816, e.verticalAlign = "middle", e.x = 86, e.y = 10, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/DaoChu1111View.exml"] = window.DaoChu1111ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["icon", "gro", "finger", "iconbtn"], this.height = 160, this.width = 160, this.elementsContent = [this.iconbtn_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.iconbtn_i = function() {
        var e = new eui.Group;
        return this.iconbtn = e, e.height = 160, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 160, e.elementsContent = [this._Image1_i(), this.gro_i(), this.finger_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 160, e.source = "daochu5_png", e.width = 160, e.x = 0, e.y = 0, e
    }, t.gro_i = function() {
        var e = new eui.Group;
        return this.gro = e, e.anchorOffsetX = 76, e.anchorOffsetY = 72.49, e.height = 152, e.width = 152, e.x = 79, e.y = 76.49, e.elementsContent = [this.icon_i()], e
    }, t.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 151, e.source = "nodebg_png", e.width = 150, e.x = 2, e.y = 1, e
    }, t.finger_i = function() {
        var e = new eui.Image;
        return this.finger = e, e.anchorOffsetX = 46, e.anchorOffsetY = 44, e.source = "guideHand1-1_png", e.x = 83, e.y = 125, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/DaoChu111View.exml"] = window.DaoChu111ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["bg", "icon", "gameName", "gro", "finger"], this.height = 248, this.width = 180, this.elementsContent = [this._Group2_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 248, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 180, e.elementsContent = [this.gro_i(), this.finger_i()], e
    }, t.gro_i = function() {
        var e = new eui.Group;
        return this.gro = e, e.anchorOffsetX = 87.08, e.anchorOffsetY = 120.43, e.height = 243.5, e.width = 174.17, e.x = 90.08, e.y = 122.92, e.elementsContent = [this.bg_i(), this.icon_i(), this._Group1_i()], e
    }, t.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e, e.height = 248, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(16, 21, 96, 126), e.scaleX = 1, e.scaleY = 1, e.source = "da1_png", e.verticalCenter = 0, e.width = 180, e
    }, t.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e, e.height = 171.5, e.width = 160.17, e.x = 7, e.y = 8, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.width = 150, e.x = 15, e.y = 201, e.elementsContent = [this.gameName_i()], e
    }, t.gameName_i = function() {
        var e = new eui.Label;
        return this.gameName = e, e.fontFamily = "Microsoft YaHei", e.maxHeight = 30, e.maxWidth = 150, e.size = 30, e.text = "最多五个字", e.textAlign = "center", e.verticalAlign = "middle", e.x = 0, e.y = 0, e
    }, t.finger_i = function() {
        var e = new eui.Image;
        return this.finger = e, e.anchorOffsetX = 46, e.anchorOffsetY = 44, e.source = "guideHand1-1_png", e.x = 99, e.y = 236, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/DaoChu11View.exml"] = window.DaoChu11ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["icon", "iconBtn", "gameName", "sum", "award", "tryPlay", "goPlay", "finger", "redhit", "playBtn"], this.height = 158, this.width = 560, this.elementsContent = [this._Group2_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 560, e.elementsContent = [this._Image1_i(), this.iconBtn_i(), this._Group1_i(), this.award_i(), this.playBtn_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "task_item2_png", e.width = 560, e.x = 0, e.y = 0, e
    }, t.iconBtn_i = function() {
        var e = new eui.Group;
        return this.iconBtn = e, e.anchorOffsetX = 0, e.height = 130, e.left = 9, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -5.5, e.width = 130, e.x = 16, e.y = 6, e.elementsContent = [this.icon_i()], e
    }, t.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e, e.anchorOffsetX = 60.07, e.anchorOffsetY = 56.61, e.height = 119, e.horizontalCenter = -1.5, e.scaleX = 1, e.scaleY = 1, e.source = "renwu1_png", e.verticalCenter = -.5, e.width = 119, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 40, e.width = 201, e.x = 147.01, e.y = 10.64, e.elementsContent = [this.gameName_i()], e
    }, t.gameName_i = function() {
        var e = new eui.Label;
        return this.gameName = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 25, e.text = "名字最多七个字", e.textColor = 2050105, e.width = 190, e.x = 9.17, e.y = 8.36, e
    }, t.award_i = function() {
        var e = new eui.Group;
        return this.award = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 61, e.width = 236, e.x = 147.01, e.y = 74.64, e.elementsContent = [this._Label1_i(), this._Image2_i(), this.sum_i()], e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 25, e.text = "试玩奖励", e.textColor = 2050105, e.width = 104, e.x = 10.17, e.y = 20.36, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = .3, e.scaleY = .3, e.source = "tuji2_json.box5_png", e.x = 131, e.y = 3, e
    }, t.sum_i = function() {
        var e = new eui.Label;
        return this.sum = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 25, e.text = "+1", e.textColor = 2050105, e.width = 42, e.x = 196, e.y = 21, e
    }, t.playBtn_i = function() {
        var e = new eui.Group;
        return this.playBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 86, e.horizontalCenter = 209.5, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 6.5, e.width = 123, e.x = 481.00000000000006, e.elementsContent = [this._Image3_i(), this.tryPlay_i(), this.goPlay_i(), this.finger_i(), this.redhit_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 65, e.scale9Grid = new egret.Rectangle(68, 36, 1, 1), e.source = "btn_yellow4_png", e.width = 110, e.x = 1, e.y = 9, e
    }, t.tryPlay_i = function() {
        var e = new eui.Image;
        return this.tryPlay = e, e.scaleX = .75, e.scaleY = .75, e.source = "shiwan_png", e.x = 25, e.y = 21, e
    }, t.goPlay_i = function() {
        var e = new eui.Image;
        return this.goPlay = e, e.source = "quwan_png", e.visible = !1, e.x = 17, e.y = 9, e
    }, t.finger_i = function() {
        var e = new eui.Image;
        return this.finger = e, e.anchorOffsetX = 29, e.anchorOffsetY = 27, e.height = 56, e.source = "guideHand1-1_png", e.width = 56, e.x = 88, e.y = 52, e
    }, t.redhit_i = function() {
        var e = new eui.Image;
        return this.redhit = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 23, e.source = "redhit_png", e.width = 23, e.x = 88, e.y = 4, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/DaoChu1View.exml"] = window.DaoChu1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["icon", "gameName", "node"], this.height = 130, this.width = 130, this.elementsContent = [this.node_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.node_i = function() {
        var e = new eui.Group;
        return this.node = e, e.height = 130, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 130, e.elementsContent = [this._Image1_i(), this.icon_i(), this.gameName_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 130, e.source = "daochu5_png", e.width = 130, e.x = 0, e.y = 0, e
    }, t.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 120, e.source = "nodebg_png", e.width = 120, e.x = 5, e.y = 5, e
    }, t.gameName_i = function() {
        var e = new eui.Label;
        return this.gameName = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", e.height = 14, e.maxHeight = 10, e.maxWidth = 75, e.size = 15, e.text = "游戏名字游", e.textAlign = "center", e.textColor = 0, e.verticalAlign = "middle", e.visible = !1, e.width = 76.5, e.x = 1.5, e.y = 64, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/DaoChu2View.exml"] = window.DaoChu2ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList", "scroller", "goBack", "taskDot0", "node", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this.node_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t.node_i = function() {
        var e = new eui.Group;
        return this.node = e, e.verticalCenter = 70, e.x = 0, e.elementsContent = [this._Image2_i(), this.scroller_i(), this.goBack_i(), this.taskDot0_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "daochu1_png", e.x = 0, e.y = 4, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 687.39, e.scrollPolicyH = "off", e.width = 586.85, e.x = 60, e.y = 125.67, e.viewport = this._Group1_i(), e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 714.06, e.width = 566, e.x = -13.64, e.elementsContent = [this.dataList_i()], e
    }, t.dataList_i = function() {
        var e = new eui.List;
        return this.dataList = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = TuiGuangItem, e.width = 595.81, e.x = -8, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 18, e.paddingLeft = 10, e.requestedColumnCount = 4, e.verticalGap = 17, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i(), this._Object11_i(), this._Object12_i(), this._Object13_i(), this._Object14_i(), this._Object15_i(), this._Object16_i(), this._Object17_i(), this._Object18_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object7_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object8_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object9_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object10_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object11_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object12_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object13_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object14_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object15_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object16_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object17_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object18_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.height = 75, e.width = 75, e.x = 655.87, e.y = 343.02, e.elementsContent = [this._Image3_i(), this._Group2_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 75, e.source = "daochu4_png", e.width = 75, e.x = 0, e.y = 0, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.width = 25, e.x = 33, e.y = 21, e.elementsContent = [this._Image4_i(), this._Image5_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "daochu2_png", e.x = 3, e.y = 0, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "tuji9_json.daochu3_png", e.visible = !1, e.x = 3, e.y = 0, e
    }, t.taskDot0_i = function() {
        var e = new eui.Image;
        return this.taskDot0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 40, e.scaleX = .6, e.scaleY = .6, e.source = "img_main_tishi_png", e.touchEnabled = !1, e.width = 40, e.x = 703.49, e.y = 344.84, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/DaoChu3View.exml"] = window.DaoChu3ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList", "scroller", "t0", "goBack", "Gro", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this.Gro_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t.Gro_i = function() {
        var e = new eui.Group;
        return this.Gro = e, e.anchorOffsetX = 0, e.horizontalCenter = 1.5, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 0, e.width = 645, e.x = 60, e.elementsContent = [this._Image2_i(), this.scroller_i(), this.t0_i(), this.goBack_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 842, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(345, 526, 7, 9), e.source = "gyUI_png", e.verticalCenter = 0, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 645, e.horizontalCenter = 0, e.verticalCenter = 58, e.width = 600, e.viewport = this._Group1_i(), e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.width = 540, e.x = -13.64, e.elementsContent = [this.dataList_i()], e
    }, t.dataList_i = function() {
        var e = new eui.List;
        return this.dataList = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = DaoChu11ViewSkin, e.width = 600, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 10, e.paddingLeft = 22, e.verticalGap = 3, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object7_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object8_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t.t0_i = function() {
        var e = new eui.Image;
        return this.t0 = e, e.horizontalCenter = 7, e.source = "shiwandebaoxiang_png", e.y = 40.35, e
    }, t.goBack_i = function() {
        var e = new eui.Image;
        return this.goBack = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 84, e.horizontalCenter = 275.5, e.source = "tuji4_json.btn_close1_png", e.verticalCenter = -340, e.width = 80.38, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/DaoChu4View.exml"] = window.DaoChu4ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList", "scroller", "goBack", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Image2_i(), this.scroller_i(), this.goBack_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.source = "rementuijian_png", e.verticalCenter = -468.5, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 798, e.horizontalCenter = 0, e.verticalCenter = -24, e.width = 720, e.viewport = this._Group1_i(), e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.width = 540, e.x = -13.64, e.elementsContent = [this.dataList_i()], e
    }, t.dataList_i = function() {
        var e = new eui.List;
        return this.dataList = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = DaoChu111ViewSkin, e.width = 720, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 50, e.paddingLeft = 39, e.verticalGap = 20, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object7_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object8_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object9_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object10_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 46.39, e.horizontalCenter = 0, e.verticalCenter = 413, e.width = 139.69, e.elementsContent = [this._Image3_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "daochujixuyouxi_png", e.verticalCenter = 0, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/DaoChu5View.exml"] = window.DaoChu5ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["goBack", "box1", "box2", "dataList", "scroller", "goBack0", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this.goBack_i(), this.box1_i(), this.box2_i(), this._Group2_i(), this.goBack0_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.goBack_i = function() {
        var e = new eui.Image;
        return this.goBack = e, e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t.box1_i = function() {
        var e = new eui.Group;
        return this.box1 = e, e.anchorOffsetX = 200, e.anchorOffsetY = 198, e.height = 400, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 400, e.elementsContent = [this._Image1_i(), this._Image2_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -4.5, e.scaleX = .9, e.scaleY = .9, e.source = "tuji4_json.light_tower_upgrade_png", e.verticalCenter = 2, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = 1.2, e.scaleY = 1.2, e.source = "tuji2_json.box5_png", e.verticalCenter = 0, e
    }, t.box2_i = function() {
        var e = new eui.Group;
        return this.box2 = e, e.height = 400, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 400, e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -4.5, e.scaleX = .9, e.scaleY = .9, e.source = "tuji4_json.light_tower_upgrade_png", e.verticalCenter = 2, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = 1.2, e.scaleY = 1.2, e.source = "box1_png", e.verticalCenter = 21, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "kapai5_png", e.x = 168.53, e.y = 69.42, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.rotation = 338.7, e.source = "tuji6_json.icon_gem_png", e.x = 98.73, e.y = 115.03, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.rotation = 18.75, e.scaleX = .8, e.scaleY = .8, e.source = "tuji6_json.gift_manue_icon_png", e.x = 266, e.y = 85.87, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 164, e.horizontalCenter = 3.5, e.verticalCenter = -440, e.width = 719.44, e.elementsContent = [this.scroller_i()], e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 164, e.scaleX = 1, e.scaleY = 1, e.width = 718.3, e.x = 1.39, e.y = 0, e.viewport = this._Group1_i(), e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.width = 715.27, e.x = 224, e.y = 0, e.elementsContent = [this.dataList_i()], e
    }, t.dataList_i = function() {
        var e = new eui.List;
        return this.dataList = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 164, e.itemRendererSkinName = DaoChu1111ViewSkin, e.verticalCenter = 0, e.x = -4.88, e.layout = this._TileLayout1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 15, e.paddingLeft = 15, e.verticalGap = 20, e
    }, t.goBack0_i = function() {
        var e = new eui.Group;
        return this.goBack0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 46.39, e.horizontalCenter = 0, e.verticalCenter = 231, e.width = 139.69, e.elementsContent = [this._Image8_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "daochujixuyouxi_png", e.verticalCenter = 0, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/DragonSpine.exml"] = window.DragonSpineSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["gro"], this.height = 150, this.minHeight = 50, this.minWidth = 100, this.width = 150, this.elementsContent = [this.gro_i()], this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.gro_i = function() {
        var e = new eui.Group;
        return this.gro = e, e.anchorOffsetX = 75, e.anchorOffsetY = 150, e.height = 150, e.scaleX = 1, e.scaleY = 1, e.width = 150, e.x = 76, e.y = 151, e.elementsContent = [this._Image1_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = 0, e.height = 150, e.source = "nodebg_png", e.width = 150, e.x = 0, e.y = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ErWaiHuoDeZhiWuView.exml"] = window.ErWaiHuoDeZhiWuViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["videoImg1", "getBtn", "goBack", "plantBg0", "plant0", "cursor0", "plantlevel0", "plantText0", "plantbtn0", "plantBg1", "plant1", "cursor1", "plantlevel1", "plantText1", "plantbtn1", "exitBtn", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group4_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 671.2, e.horizontalCenter = 0, e.verticalCenter = -31.5, e.width = 614, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.getBtn_i(), this.goBack_i(), this._Group3_i(), this.exitBtn_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetY = 0, e.height = 656.06, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(97, 493, 405, 16), e.scaleX = 1, e.scaleY = 1, e.source = "gyUI_png", e.verticalCenter = 13.125, e.width = 600, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(222, 2, 4, 2), e.source = "rank_4_png", e.verticalCenter = -150.875, e.width = 200, e.x = 26.74, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(222, 2, 4, 2), e.source = "rank_4_png", e.verticalCenter = -150.875, e.width = 200, e.x = 387.37, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "ewaishengji_png", e.x = 221, e.y = 47.6, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "tuji2_json.gift_title2_png", e.x = 233.52, e.y = 140.31, e
    }, t.getBtn_i = function() {
        var e = new eui.Group;
        return this.getBtn = e, e.anchorOffsetY = 0, e.horizontalCenter = 0, e.verticalCenter = 288.125, e.elementsContent = [this._Image7_i(), this.videoImg1_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 90, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(64, 31, 5, 7), e.source = "btn_yellow4_png", e.verticalCenter = 0, e.width = 180, e
    }, t.videoImg1_i = function() {
        var e = new eui.Group;
        return this.videoImg1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 69, e.width = 152, e.x = 14, e.y = 9, e.elementsContent = [this._Image8_i(), this._Image9_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.source = "tuji6_json.icon_ad_png", e.x = -5.36, e.y = 4.66, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .8, e.source = "ewailingqu_png", e.x = 32.65, e.y = 13.67, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 282.5, e.scaleX = .85, e.scaleY = .85, e.verticalCenter = -262.5, e.visible = !1, e.elementsContent = [this._Image10_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 310, e.horizontalCenter = 0, e.width = 520, e.y = 253.47, e.elementsContent = [this.plantbtn0_i(), this.plantbtn1_i(), this._Image13_i()], e
    }, t.plantbtn0_i = function() {
        var e = new eui.Group;
        return this.plantbtn0 = e, e.anchorOffsetX = 0, e.horizontalCenter = -155.5, e.verticalCenter = 0, e.width = 185, e.elementsContent = [this.plantBg0_i(), this.plant0_i(), this.cursor0_i(), this._Group1_i(), this.plantText0_i()], e
    }, t.plantBg0_i = function() {
        var e = new eui.Image;
        return this.plantBg0 = e, e.anchorOffsetY = 0, e.height = 280, e.scale9Grid = new egret.Rectangle(27, 43, 166, 262), e.source = "card_bg1_png", e.width = 165, e.x = 10, e.y = 0, e
    }, t.plant0_i = function() {
        var e = new eui.Image;
        return this.plant0 = e, e.anchorOffsetX = 75, e.anchorOffsetY = 150.5, e.height = 150, e.source = "zhiwu1_png", e.width = 150, e.x = 93.5, e.y = 206.32, e
    }, t.cursor0_i = function() {
        var e = new eui.Image;
        return this.cursor0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 285, e.scale9Grid = new egret.Rectangle(56, 53, 91, 194), e.source = "jihuoyingxiong2_png", e.width = 185, e.x = -.03, e.y = -12.26, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 35.2, e.scaleX = 1, e.scaleY = 1, e.width = 159.6, e.x = 0, e.y = -.5, e.elementsContent = [this._Image11_i(), this.plantlevel0_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "bg_lv_big_png", e.x = -2.33, e.y = -8.02, e
    }, t.plantlevel0_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantlevel0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 50.67, e.scaleX = .4, e.scaleY = .4, e.text = "99", e.width = 83, e.x = 5.67, e.y = 5.66, e
    }, t.plantText0_i = function() {
        var e = new eui.Image;
        return this.plantText0 = e, e.horizontalCenter = -4, e.scaleX = .7, e.scaleY = .8, e.source = "zhiwuzi1_png", e.y = 213, e
    }, t.plantbtn1_i = function() {
        var e = new eui.Group;
        return this.plantbtn1 = e, e.anchorOffsetX = 0, e.horizontalCenter = 162.5, e.verticalCenter = 0, e.width = 185, e.elementsContent = [this.plantBg1_i(), this.plant1_i(), this.cursor1_i(), this._Group2_i(), this.plantText1_i()], e
    }, t.plantBg1_i = function() {
        var e = new eui.Image;
        return this.plantBg1 = e, e.anchorOffsetY = 0, e.height = 280, e.scale9Grid = new egret.Rectangle(27, 43, 166, 262), e.source = "card_bg1_png", e.width = 165, e.x = 10, e.y = 0, e
    }, t.plant1_i = function() {
        var e = new eui.Image;
        return this.plant1 = e, e.anchorOffsetX = 75, e.anchorOffsetY = 150.5, e.height = 150, e.source = "zhiwu1_png", e.width = 150, e.x = 93.5, e.y = 206.32, e
    }, t.cursor1_i = function() {
        var e = new eui.Image;
        return this.cursor1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 285, e.scale9Grid = new egret.Rectangle(56, 53, 91, 194), e.source = "jihuoyingxiong2_png", e.width = 185, e.x = -.03, e.y = -12.26, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 35.2, e.scaleX = 1, e.scaleY = 1, e.width = 159.6, e.x = 0, e.y = -.5, e.elementsContent = [this._Image12_i(), this.plantlevel1_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "bg_lv_big_png", e.x = -2.33, e.y = -8.02, e
    }, t.plantlevel1_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantlevel1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 50.67, e.scaleX = .4, e.scaleY = .4, e.text = "99", e.width = 83, e.x = 5.67, e.y = 5.66, e
    }, t.plantText1_i = function() {
        var e = new eui.Image;
        return this.plantText1 = e, e.horizontalCenter = -4, e.scaleX = .7, e.scaleY = .8, e.source = "zhiwuzi1_png", e.y = 213, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "ewaiui_png", e.x = 466.01, e.y = 7.35, e
    }, t.exitBtn_i = function() {
        var e = new eui.Group;
        return this.exitBtn = e, e.x = 241.66, e.y = 688.05, e.elementsContent = [this._Image14_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "wobuyaoshengji_png", e.x = 0, e.y = 0, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/FuWen1View.exml"] = window.FuWen1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = [], this.height = 120, this.width = 115, this.elementsContent = [this._Group1_i(), this._Group2_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 120, e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._BitmapLabel1_i(), this._BitmapLabel2_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "talent_icon_bg_png", e.verticalCenter = 2, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "talent__icon_add_png", e.verticalCenter = 2, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "talent_icon_lock_png", e.verticalCenter = 1.5, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -.5, e.scaleX = .86, e.scaleY = .86, e.source = "tech_1_png", e.verticalCenter = -1.5, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 1, e.scaleX = .8, e.scaleY = .8, e.source = "select1_png", e.verticalCenter = -1, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.font = "baikuanzi_fnt", e.scaleX = .5, e.scaleY = .5, e.text = "L", e.x = 13, e.y = 84, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.font = "baikuanzi_fnt", e.scaleX = .6, e.scaleY = .6, e.text = "10", e.x = 64, e.y = 89, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -28.5, e.verticalCenter = -33.5, e.elementsContent = [this._Image6_i(), this._Image7_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "talent_side_unlock_png", e.x = 1, e.y = 2, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "talent1_png", e.x = 13.66, e.y = 11.18, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/FuWen2View.exml"] = window.FuWen2ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["loadBg0", "toolload0", "tooltext0", "toollevel0", "toolArrow0"], this.height = 250, this.width = 650, this.elementsContent = [this._Group12_i(), this._Group13_i(), this._Group14_i(), this._Group15_i(), this._Group16_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group12_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._FuWen1View1_i(), this._Group1_i(), this._Group6_i(), this._Group11_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 250, e.scale9Grid = new egret.Rectangle(83, 88, 2, 3), e.source = "talent_skill_des_bg_png", e.width = 650, e.x = 0, e.y = 0, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 120, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(39, 41, 2, 1), e.source = "talent_skill_des_bg1_png", e.verticalCenter = -38, e.width = 590, e
    }, t._FuWen1View1_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = -217.5, e.verticalCenter = -37, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 100, e.horizontalCenter = 83, e.visible = !1, e.width = 400, e.y = 36, e.elementsContent = [this._Image3_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .65, e.source = "xiangqian_png", e.x = 3, e.y = 32, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.height = 110, e.horizontalCenter = 83, e.width = 400, e.y = 32, e.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "fuwengongjio_1_png", e.x = 3.32, e.y = -8.69, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "dangqiandnegji_png", e.x = 6.66, e.y = 33.5, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "xiayidengji_png", e.x = 6.66, e.y = 74, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 65, e.horizontalCenter = 55, e.width = 270, e.y = 38.69, e.elementsContent = [this._BitmapLabel1_i(), this._BitmapLabel2_i(), this._BitmapLabel3_i(), this._BitmapLabel4_i()], e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "单攻类植物攻速", e.width = 187.5, e.x = 1.32000000000005, e.y = 1.8100000000000023, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "单攻类植物攻速", e.width = 187.5, e.x = 1.32000000000005, e.y = 41.14, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+10%", e.width = 106.83, e.x = 152.32000000000005, e.y = .46999999999999886, e
    }, t._BitmapLabel4_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+15%", e.width = 106.83, e.x = 152.32000000000005, e.y = 39.79999999999998, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 65, e.horizontalCenter = 55, e.visible = !1, e.width = 270, e.y = 38.69, e.elementsContent = [this._BitmapLabel5_i(), this._BitmapLabel6_i(), this._BitmapLabel7_i(), this._BitmapLabel8_i()], e
    }, t._BitmapLabel5_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "冰冻类植物攻击", e.width = 187.5, e.x = 1.32000000000005, e.y = 1.8100000000000023, e
    }, t._BitmapLabel6_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "冰冻类植物攻击", e.width = 187.5, e.x = 1.32000000000005, e.y = 41.14, e
    }, t._BitmapLabel7_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+10%", e.width = 106.83, e.x = 152.32000000000005, e.y = .46999999999999886, e
    }, t._BitmapLabel8_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+15%", e.width = 106.83, e.x = 152.32000000000005, e.y = 39.79999999999998, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 65, e.horizontalCenter = 55, e.visible = !1, e.width = 270, e.y = 38.69, e.elementsContent = [this._BitmapLabel9_i(), this._BitmapLabel10_i(), this._BitmapLabel11_i(), this._BitmapLabel12_i()], e
    }, t._BitmapLabel9_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "剧毒类植物攻击", e.width = 187.5, e.x = 1.32000000000005, e.y = 1.8100000000000023, e
    }, t._BitmapLabel10_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "剧毒类植物攻击", e.width = 187.5, e.x = 1.32000000000005, e.y = 41.14, e
    }, t._BitmapLabel11_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+10%", e.width = 106.83, e.x = 152.32000000000005, e.y = .46999999999999886, e
    }, t._BitmapLabel12_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+15%", e.width = 106.83, e.x = 152.32000000000005, e.y = 39.79999999999998, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.height = 65, e.horizontalCenter = 55, e.visible = !1, e.width = 270, e.y = 38.69, e.elementsContent = [this._BitmapLabel13_i(), this._BitmapLabel14_i(), this._BitmapLabel15_i(), this._BitmapLabel16_i()], e
    }, t._BitmapLabel13_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "群攻类植物暴击", e.width = 187.5, e.x = 1.32000000000005, e.y = 1.8100000000000023, e
    }, t._BitmapLabel14_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "群攻类植物暴击", e.width = 187.5, e.x = 1.32000000000005, e.y = 41.14, e
    }, t._BitmapLabel15_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+10%", e.width = 106.83, e.x = 152.32000000000005, e.y = .46999999999999886, e
    }, t._BitmapLabel16_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+15%", e.width = 106.83, e.x = 152.32000000000005, e.y = 39.79999999999998, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.height = 110, e.horizontalCenter = 83, e.visible = !1, e.width = 400, e.y = 32, e.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Group7_i(), this._Group8_i(), this._Group9_i(), this._Group10_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "fuwengongjio_5_png", e.x = 3.32, e.y = -8.69, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "dangqiandnegji_png", e.x = 6.66, e.y = 33.5, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "xiayidengji_png", e.x = 6.66, e.y = 74, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.height = 65, e.horizontalCenter = 55, e.visible = !1, e.width = 270, e.y = 38.69, e.elementsContent = [this._BitmapLabel17_i(), this._BitmapLabel18_i(), this._BitmapLabel19_i(), this._BitmapLabel20_i()], e
    }, t._BitmapLabel17_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "单攻类植物对小怪伤害", e.width = 266.66, e.x = 1.32000000000005, e.y = 1.8100000000000023, e
    }, t._BitmapLabel18_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "单攻类植物对小怪伤害", e.width = 259.17, e.x = 1.32000000000005, e.y = 41.14, e
    }, t._BitmapLabel19_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+10%", e.width = 106.83, e.x = 209.66, e.y = .46999999999999886, e
    }, t._BitmapLabel20_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+15%", e.width = 106.83, e.x = 209.66, e.y = 39.79999999999998, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.height = 65, e.horizontalCenter = 55, e.width = 270, e.y = 38.69, e.elementsContent = [this._BitmapLabel21_i(), this._BitmapLabel22_i(), this._BitmapLabel23_i(), this._BitmapLabel24_i()], e
    }, t._BitmapLabel21_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "冰冻类植物攻击", e.width = 187.5, e.x = 1.32000000000005, e.y = 1.8100000000000023, e
    }, t._BitmapLabel22_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "冰冻类植物攻击", e.width = 187.5, e.x = 1.32000000000005, e.y = 41.14, e
    }, t._BitmapLabel23_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+10%", e.width = 106.83, e.x = 152.32000000000005, e.y = .46999999999999886, e
    }, t._BitmapLabel24_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+15%", e.width = 106.83, e.x = 152.32000000000005, e.y = 39.79999999999998, e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.height = 65, e.horizontalCenter = 55, e.visible = !1, e.width = 270, e.y = 38.69, e.elementsContent = [this._BitmapLabel25_i(), this._BitmapLabel26_i(), this._BitmapLabel27_i(), this._BitmapLabel28_i()], e
    }, t._BitmapLabel25_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "剧毒类植物攻击", e.width = 187.5, e.x = 1.32000000000005, e.y = 1.8100000000000023, e
    }, t._BitmapLabel26_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "剧毒类植物攻击", e.width = 187.5, e.x = 1.32000000000005, e.y = 41.14, e
    }, t._BitmapLabel27_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+10%", e.width = 106.83, e.x = 152.32000000000005, e.y = .46999999999999886, e
    }, t._BitmapLabel28_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+15%", e.width = 106.83, e.x = 152.32000000000005, e.y = 39.79999999999998, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.height = 65, e.horizontalCenter = 55, e.visible = !1, e.width = 270, e.y = 38.69, e.elementsContent = [this._BitmapLabel29_i(), this._BitmapLabel30_i(), this._BitmapLabel31_i(), this._BitmapLabel32_i()], e
    }, t._BitmapLabel29_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "群攻类植物暴击", e.width = 187.5, e.x = 1.32000000000005, e.y = 1.8100000000000023, e
    }, t._BitmapLabel30_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.text = "群攻类植物暴击", e.width = 187.5, e.x = 1.32000000000005, e.y = 41.14, e
    }, t._BitmapLabel31_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+10%", e.width = 106.83, e.x = 152.32000000000005, e.y = .46999999999999886, e
    }, t._BitmapLabel32_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32, e.scaleX = .6999999999999998, e.scaleY = .6999999999999998, e.text = "+15%", e.width = 106.83, e.x = 152.32000000000005, e.y = 39.79999999999998, e
    }, t._Group13_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 35.2, e.horizontalCenter = -212, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 55.5, e.width = 159.6, e.elementsContent = [this.loadBg0_i(), this.toolload0_i(), this.tooltext0_i(), this._Image10_i(), this.toollevel0_i(), this.toolArrow0_i()], e
    }, t.loadBg0_i = function() {
        var e = new eui.Image;
        return this.loadBg0 = e, e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(32, 21, 1, 1), e.scaleY = .6, e.source = "bar_bg2_png", e.width = 133.5, e.x = 26, e.y = 7.17, e
    }, t.toolload0_i = function() {
        var e = new eui.Image;
        return this.toolload0 = e, e.anchorOffsetY = 0, e.height = 33.23, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .7, e.scaleY = .63, e.source = "bar_bg1_png", e.x = 27, e.y = 8.8, e
    }, t.tooltext0_i = function() {
        var e = new eui.BitmapLabel;
        return this.tooltext0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.56, e.scaleX = .6, e.scaleY = .6, e.text = "99/10", e.width = 100.66, e.x = 60.5, e.y = 9.99, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "bg_lv_big_png", e.x = 3.17, e.y = -5.02, e
    }, t.toollevel0_i = function() {
        var e = new eui.BitmapLabel;
        return this.toollevel0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 50.67, e.scaleX = .4, e.scaleY = .4, e.text = "99", e.width = 83, e.x = 9.17, e.y = 6.66, e
    }, t.toolArrow0_i = function() {
        var e = new eui.Image;
        return this.toolArrow0 = e, e.scaleX = .5, e.scaleY = .5, e.source = "icon_up_new_png", e.x = 138.67000000000002, e.y = 3.99, e
    }, t._Group14_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 24, e.verticalCenter = 59.5, e.elementsContent = [this._Image11_i(), this._Image12_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 65, e.scale9Grid = new egret.Rectangle(69, 33, 1, 1), e.source = "btn_yellow4_png", e.width = 150, e.x = 4, e.y = 0, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .85, e.scaleY = .85, e.source = "tuji3_json.shengjiT_png", e.x = 41, e.y = 10, e
    }, t._Group15_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 112, e.verticalCenter = 59.5, e.visible = !1, e.elementsContent = [this._Image13_i(), this._Image14_i()], e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 65, e.scale9Grid = new egret.Rectangle(69, 33, 1, 1), e.source = "btn_yellow4_png", e.width = 150, e.x = 4, e.y = 0, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .85, e.scaleY = .85, e.source = "tuji3_json.shengjiT_png", e.x = 41, e.y = 10, e
    }, t._Group16_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 204, e.verticalCenter = 59.5, e.elementsContent = [this._Image15_i(), this._Image16_i()], e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 65, e.scale9Grid = new egret.Rectangle(69, 33, 1, 1), e.source = "tuji4_json.btn_blue5_png", e.width = 150, e.x = 4, e.y = 0, e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .85, e.scaleY = .85, e.source = "genghuan_png", e.x = 44, e.y = 9, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/FuWen3View.exml"] = window.FuWen3ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList0", "scroller"], this.height = 1280, this.width = 720, this.elementsContent = [this._Rect1_i(), this._Group7_i(), this._Group8_i(), this.scroller_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Rect1_i = function() {
        var e = new eui.Rect;
        return e.bottom = 0, e.fillAlpha = .75, e.fillColor = 458754, e.left = 0, e.right = 0, e.strokeAlpha = 1, e.strokeColor = 16250100, e.top = 0, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group5_i(), this._Group6_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -1, e.source = "gyUI_png", e.verticalCenter = 0, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "talent_name_png", e.x = 252, e.y = 47.47, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.height = 80, e.verticalCenter = -258, e.width = 500, e.x = 50, e.elementsContent = [this._Image3_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 1, e.scaleX = 1, e.scaleY = 1, e.source = "rank_4_png", e.x = 1, e.y = 70.33, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 70, e.width = 130, e.x = 0, e.y = 3, e.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "talent_tab1_1_png", e.y = 12.67, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class1_png", e.x = 23, e.y = 21.04, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -.5, e.scaleX = .8, e.scaleY = .8, e.source = "talent_tab1_png", e.verticalCenter = 2.5, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class1_png", e.x = 23, e.y = 19.35, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 70, e.width = 130, e.x = 123.33333333333333, e.y = 3, e.elementsContent = [this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "talent_tab2_1_png", e.y = 12.67, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class1_png", e.x = 23, e.y = 21.04, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -.5, e.scaleX = .8, e.scaleY = .8, e.source = "talent_tab2_png", e.verticalCenter = 1.5, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class2_png", e.x = 23, e.y = 19.35, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 70, e.width = 130, e.x = 246.66666666666666, e.y = 3, e.elementsContent = [this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "talent_tab3_1_png", e.y = 12.67, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class1_png", e.x = 23, e.y = 21.04, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -.5, e.scaleX = .8, e.scaleY = .8, e.source = "talent_tab3_png", e.verticalCenter = 1.5, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class3_png", e.x = 23, e.y = 18.68, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 70, e.width = 130, e.x = 370, e.y = 3, e.elementsContent = [this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "talent_tab4_1_png", e.y = 12.67, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class1_png", e.x = 23, e.y = 21.04, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -.5, e.scaleX = .8, e.scaleY = .8, e.source = "talent_tab4_png", e.verticalCenter = 1.5, e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class4_png", e.x = 23, e.y = 18.68, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 41, e.y = 708, e.elementsContent = [this._FuWen2View1_i()], e
    }, t._FuWen2View1_i = function() {
        var e = new FuWen2View;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .78, e.verticalCenter = -4, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 278, e.verticalCenter = -363, e.elementsContent = [this._Image20_i()], e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 450, e.horizontalCenter = 0, e.verticalCenter = 14, e.width = 550, e.viewport = this._Group9_i(), e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.width = 540, e.x = -13.64, e.elementsContent = [this.dataList0_i()], e
    }, t.dataList0_i = function() {
        var e = new eui.List;
        return this.dataList0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = FuWen4ViewSkin, e.width = 550, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 40, e.paddingLeft = 10, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i(), this._Object11_i(), this._Object12_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object7_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object8_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object9_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object10_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object11_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object12_i = function() {
        var e = {
            null: ""
        };
        return e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/FuWen4View.exml"] = window.FuWen4ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = [], this.height = 180, this.width = 150, this.elementsContent = [this._Group3_i(), this._Image6_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 2.5, e.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .85, e.scaleY = .8, e.source = "talent_card_bg_png", e.verticalCenter = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 32, e.width = 138, e.x = 1.88, e.y = 127.67, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._BitmapLabel1_i(), this._BitmapLabel2_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(32, 21, 1, 1), e.scaleX = .6, e.scaleY = .6, e.source = "bar_bg2_png", e.width = 215, e.x = 6.5, e.y = 4.67, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetY = 0, e.height = 33.23, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .6, e.scaleY = .63, e.source = "bar_bg1_png", e.x = 7.76, e.y = 6.3, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .45, e.scaleY = .45, e.source = "bg_lv_big_png", e.x = -.23, e.y = .66, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "icon_up_new_png", e.x = 115.93, e.y = 4.84, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 56, e.scaleX = .3, e.scaleY = .3, e.text = "99", e.width = 84, e.x = 2, e.y = 9, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 28.75, e.scaleX = .5, e.scaleY = .5, e.text = "99/99", e.width = 97.63, e.x = 53.16, e.y = 9, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 25, e.y = 13.67, e.elementsContent = [this._FuWen1View1_i()], e
    }, t._FuWen1View1_i = function() {
        var e = new FuWen1View;
        return e.scaleX = .8, e.scaleY = .8, e.x = 0, e.y = 0, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 2, e.scaleX = .7, e.scaleY = .55, e.source = "jihuoyingxiong2_png", e.verticalCenter = -5, e.visible = !1, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/FuWen5View.exml"] = window.FuWen5ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList1", "scroller"], this.height = 1280, this.width = 720, this.elementsContent = [this._Group7_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group7_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Image8_i(), this._Group4_i(), this.scroller_i(), this._Image10_i(), this._FuWen1View1_i(), this._Group6_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -1, e.source = "gyUI_png", e.verticalCenter = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 126, e.y = 799.68, e.elementsContent = [this._Image2_i(), this._Image3_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 75, e.scale9Grid = new egret.Rectangle(69, 33, 1, 1), e.source = "btn_yellow4_png", e.width = 160, e.x = 4, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "tuji3_json.quedingT_png", e.x = 41.34, e.y = 11.33, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 356, e.y = 799.68, e.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 75, e.scale9Grid = new egret.Rectangle(69, 33, 1, 1), e.source = "tuji4_json.btn_blue5_png", e.width = 160, e.x = 4, e.y = 0, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .95, e.scaleY = .95, e.source = "genghuan_png", e.x = 59.99, e.y = 10.99, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "talent_down_png", e.x = 27.35, e.y = 18.66, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 278, e.verticalCenter = -363, e.elementsContent = [this._Image7_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.source = "talent_select_png", e.y = 47.47, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 101, e.elementsContent = [this._Image9_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 400, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(25, 24, 533, 148), e.source = "gyUI1_png", e.verticalCenter = 0, e.width = 550, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 390, e.horizontalCenter = 0, e.verticalCenter = 100, e.width = 500, e.viewport = this._Group5_i(), e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.x = -13.64, e.elementsContent = [this.dataList1_i()], e
    }, t.dataList1_i = function() {
        var e = new eui.List;
        return this.dataList1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = FuWen1ViewSkin, e.width = 500, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 60, e.paddingLeft = 18, e.verticalGap = 1, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i(), this._Object11_i(), this._Object12_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object7_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object8_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object9_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object10_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object11_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object12_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -3, e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.light_tower_upgrade_png", e.verticalCenter = -236.5, e
    }, t._FuWen1View1_i = function() {
        var e = new FuWen1View;
        return e.x = 259, e.y = 149, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 4, e.verticalCenter = -163.5, e.elementsContent = [this._Image11_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "fuwengongjio_1_png", e.x = 0, e.y = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/FuWenView.exml"] = window.FuWenViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList1", "scroller"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this._Group7_i(), this.scroller_i(), this._Group9_i(), this._Group15_i(), this._Group16_i(), this._Group17_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = -140, e.left = 0, e.right = 0, e.scale9Grid = new egret.Rectangle(0, 5, 675, 317), e.source = "menu_bg1_png", e.top = -139, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "dec2_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5, e.verticalCenter = -496, e.elementsContent = [this._Image3_i(), this._Image4_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "title_bg5_png", e.x = 0, e.y = 0, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "talent_title_png", e.x = 158, e.y = 16.4, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.height = 700, e.horizontalCenter = 37, e.verticalCenter = -10, e.elementsContent = [this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleY = .9, e.source = "talent_bg_png", e.verticalCenter = -11.5, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class1_png", e.x = 69, e.y = 17, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class2_png", e.x = 207, e.y = 17, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class3_png", e.x = 347, e.y = 17, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.txt_tower_class4_png", e.x = 483, e.y = 17, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 110, e.horizontalCenter = 11, e.visible = !1, e.width = 570, e.y = 49, e.elementsContent = [this._FuWen1View1_i(), this._FuWen1View2_i(), this._FuWen1View3_i(), this._FuWen1View4_i()], e
    }, t._FuWen1View1_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = -199.5, e.verticalCenter = 2, e
    }, t._FuWen1View2_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = -60.5, e.verticalCenter = 2, e.x = 149.66666666666666, e
    }, t._FuWen1View3_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = 79.5, e.verticalCenter = 2, e.x = 288.3333333333333, e
    }, t._FuWen1View4_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = 216.5, e.verticalCenter = 2, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 110, e.horizontalCenter = 11, e.visible = !1, e.width = 570, e.y = 180, e.elementsContent = [this._FuWen1View5_i(), this._FuWen1View6_i(), this._FuWen1View7_i(), this._FuWen1View8_i()], e
    }, t._FuWen1View5_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = -199.5, e.verticalCenter = 2, e
    }, t._FuWen1View6_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = -60.5, e.verticalCenter = 2, e.x = 149.66666666666666, e
    }, t._FuWen1View7_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = 79.5, e.verticalCenter = 2, e.x = 288.3333333333333, e
    }, t._FuWen1View8_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = 216.5, e.verticalCenter = 2, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 110, e.horizontalCenter = 11, e.visible = !1, e.width = 570, e.y = 311, e.elementsContent = [this._FuWen1View9_i(), this._FuWen1View10_i(), this._FuWen1View11_i(), this._FuWen1View12_i()], e
    }, t._FuWen1View9_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = -199.5, e.verticalCenter = 2, e
    }, t._FuWen1View10_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = -60.5, e.verticalCenter = 2, e.x = 149.66666666666666, e
    }, t._FuWen1View11_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = 79.5, e.verticalCenter = 2, e.x = 288.3333333333333, e
    }, t._FuWen1View12_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = 216.5, e.verticalCenter = 2, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.height = 110, e.horizontalCenter = 11, e.visible = !1, e.width = 570, e.y = 442, e.elementsContent = [this._FuWen1View13_i(), this._FuWen1View14_i(), this._FuWen1View15_i(), this._FuWen1View16_i()], e
    }, t._FuWen1View13_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = -199.5, e.verticalCenter = 2, e
    }, t._FuWen1View14_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = -60.5, e.verticalCenter = 2, e.x = 149.66666666666666, e
    }, t._FuWen1View15_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = 79.5, e.verticalCenter = 2, e.x = 288.3333333333333, e
    }, t._FuWen1View16_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = 216.5, e.verticalCenter = 2, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.height = 110, e.horizontalCenter = 11, e.visible = !1, e.width = 570, e.y = 573, e.elementsContent = [this._FuWen1View17_i(), this._FuWen1View18_i(), this._FuWen1View19_i(), this._FuWen1View20_i()], e
    }, t._FuWen1View17_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = -199.5, e.verticalCenter = 2, e
    }, t._FuWen1View18_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = -60.5, e.verticalCenter = 2, e.x = 149.66666666666666, e
    }, t._FuWen1View19_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = 79.5, e.verticalCenter = 2, e.x = 288.3333333333333, e
    }, t._FuWen1View20_i = function() {
        var e = new FuWen1View;
        return e.horizontalCenter = 216.5, e.verticalCenter = 2, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 640, e.horizontalCenter = 56, e.verticalCenter = 7, e.width = 530, e.viewport = this._Group8_i(), e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.x = -13.64, e.elementsContent = [this.dataList1_i()], e
    }, t.dataList1_i = function() {
        var e = new eui.List;
        return this.dataList1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = FuWen1ViewSkin, e.width = 530, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 23, e.paddingLeft = 0, e.verticalGap = 10, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i(), this._Object11_i(), this._Object12_i(), this._Object13_i(), this._Object14_i(), this._Object15_i(), this._Object16_i(), this._Object17_i(), this._Object18_i(), this._Object19_i(), this._Object20_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object7_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object8_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object9_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object10_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object11_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object12_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object13_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object14_i = function() {
        var e = {
            null: "null"
        };
        return e
    }, t._Object15_i = function() {
        var e = {
            null: "null"
        };
        return e
    }, t._Object16_i = function() {
        var e = {
            null: "null"
        };
        return e
    }, t._Object17_i = function() {
        var e = {
            null: "null"
        };
        return e
    }, t._Object18_i = function() {
        var e = {
            null: "null"
        };
        return e
    }, t._Object19_i = function() {
        var e = {
            null: "null"
        };
        return e
    }, t._Object20_i = function() {
        var e = {
            null: "null"
        };
        return e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -309.5, e.verticalCenter = -367, e.elementsContent = [this._Image10_i(), this._Image11_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "talent_all_png", e.x = 0, e.y = 0, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "fushi_png", e.x = 1, e.y = 73, e
    }, t._Group15_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -311, e.verticalCenter = 9, e.width = 50, e.elementsContent = [this._Image12_i(), this._Group10_i(), this._Group11_i(), this._Group12_i(), this._Group13_i(), this._Group14_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 580, e.scale9Grid = new egret.Rectangle(23, 40, 1, 1), e.source = "talent_side_bg_png", e.width = 50, e.x = 0, e.y = 0, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5, e.scaleX = 1, e.scaleY = 1, e.y = -14.31, e.elementsContent = [this._Image13_i(), this._Image14_i(), this._Image15_i()], e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "talent_side_unlock_png", e.x = 0, e.y = 0, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "talent_side_lock_png", e.visible = !1, e.x = 0, e.y = 0, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "talent1_png", e.x = 22.33, e.y = 19.01, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5, e.scaleX = 1, e.scaleY = 1, e.y = 119.93, e.elementsContent = [this._Image16_i(), this._Image17_i(), this._Image18_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "talent_side_unlock_png", e.x = 0, e.y = 0, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "talent_side_lock_png", e.x = 0, e.y = 0, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "talent2_png", e.x = 16, e.y = 20.01, e
    }, t._Group12_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5, e.scaleX = 1, e.scaleY = 1, e.y = 251.86, e.elementsContent = [this._Image19_i(), this._Image20_i(), this._Image21_i()], e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "talent_side_unlock_png", e.x = 0, e.y = 0, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "talent_side_lock_png", e.x = 0, e.y = 0, e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "talent32_png", e.x = 10, e.y = 20.01, e
    }, t._Group13_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5, e.scaleX = 1, e.scaleY = 1, e.y = 384.1, e.elementsContent = [this._Image22_i(), this._Image23_i(), this._Image24_i()], e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "talent_side_unlock_png", e.x = 0, e.y = 0, e
    }, t._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "talent_side_lock_png", e.x = 0, e.y = 0, e
    }, t._Image24_i = function() {
        var e = new eui.Image;
        return e.source = "talent42_png", e.x = 10, e.y = 20.01, e
    }, t._Group14_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5, e.scaleX = 1, e.scaleY = 1, e.y = 516.06, e.elementsContent = [this._Image25_i(), this._Image26_i(), this._Image27_i()], e
    }, t._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "talent_side_unlock_png", e.x = 0, e.y = 0, e
    }, t._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "talent_side_lock_png", e.x = 0, e.y = 0, e
    }, t._Image27_i = function() {
        var e = new eui.Image;
        return e.source = "talent52_png", e.x = 16, e.y = 21.01, e
    }, t._Group16_i = function() {
        var e = new eui.Group;
        return e.height = 250, e.horizontalCenter = 0, e.verticalCenter = 476, e.width = 650, e.elementsContent = [this._FuWen2View1_i()], e
    }, t._FuWen2View1_i = function() {
        var e = new FuWen2View;
        return e.scaleX = 1, e.scaleY = 1, e.x = 0, e.y = 0, e
    }, t._Group17_i = function() {
        var e = new eui.Group;
        return e.left = 17, e.top = 53, e.elementsContent = [this._Image28_i()], e
    }, t._Image28_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "btn_back1_png", e.x = 0, e.y = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/GaoJiZhiWuView.exml"] = window.GaoJiZhiWuViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["videoImg0", "getBtn", "goBack", "plantImg", "lvText", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group3_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 716.67, e.horizontalCenter = 0, e.verticalCenter = -71.5, e.width = 614, e.elementsContent = [this._Image2_i(), this._Image3_i(), this.getBtn_i(), this.goBack_i(), this._Group2_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 700, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(97, 493, 405, 16), e.scaleX = 1, e.scaleY = 1, e.source = "gyUI_png", e.verticalCenter = 0, e.width = 600, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gaojizhiwu_png", e.x = 221, e.y = 36.99, e
    }, t.getBtn_i = function() {
        var e = new eui.Group;
        return this.getBtn = e, e.anchorOffsetY = 0, e.horizontalCenter = 0, e.verticalCenter = 238, e.elementsContent = [this._Image4_i(), this.videoImg0_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 90, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(64, 31, 5, 7), e.source = "btn_yellow4_png", e.verticalCenter = 0, e.width = 180, e
    }, t.videoImg0_i = function() {
        var e = new eui.Group;
        return this.videoImg0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 69, e.width = 152, e.x = 14, e.y = 9, e.elementsContent = [this._Image6_i(), this._Image7_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.source = "tuji6_json.icon_ad_png", e.x = 0, e.y = 3.33, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .9, e.source = "tuji3_json.lingquT_png", e.x = 65, e.y = 12, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 282.5, e.scaleX = .85, e.scaleY = .85, e.verticalCenter = -262.5, e.elementsContent = [this._Image8_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 6.5, e.verticalCenter = -38, e.elementsContent = [this._Image9_i(), this.plantImg_i(), this._Group1_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 480, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(220, 303, 4, 4), e.source = "bg17281_png", e.verticalCenter = 0, e.width = 400, e
    }, t.plantImg_i = function() {
        var e = new eui.Image;
        return this.plantImg = e, e.horizontalCenter = .5, e.source = "tuji3_json.zhiwu1_png", e.verticalCenter = -30.5, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 68, e.width = 248, e.x = 109, e.y = 338, e.elementsContent = [this._BitmapLabel1_i(), this.lvText_i()], e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 74.55, e.scaleX = 1, e.scaleY = 1, e.text = "L", e.width = 247.88, e.x = -.05000000000001137, e.y = 1.3299999999999272, e
    }, t.lvText_i = function() {
        var e = new eui.BitmapLabel;
        return this.lvText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 53.03, e.scaleX = 1, e.scaleY = 1, e.text = "9999", e.width = 129.64, e.x = 110.36000000000001, e.y = 16.399999999999977, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/GengDuoView.exml"] = window.GengDuoViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["node", "setBtn", "paihangBtn", "qiandaoBtn", "gameBtn", "fingerTip1", "sideGro", "word0", "tip"], this.height = 1280, this.width = 720, this.elementsContent = [this.node_i(), this.sideGro_i(), this.tip_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.node_i = function() {
        var e = new eui.Group;
        return this.node = e, e.bottom = 0, e.left = 0, e.right = 0, e.top = 0, e.touchThrough = !1, e.elementsContent = [this._Image1_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = 0, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t.sideGro_i = function() {
        var e = new eui.Group;
        return this.sideGro = e, e.bottom = 0, e.top = 0, e.verticalCenter = 0, e.width = 130, e.x = 590, e.elementsContent = [this._Image2_i(), this.setBtn_i(), this.paihangBtn_i(), this.qiandaoBtn_i(), this.gameBtn_i(), this.fingerTip1_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.alpha = .6, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t.setBtn_i = function() {
        var e = new eui.Group;
        return this.setBtn = e, e.height = 90, e.width = 86, e.x = 22, e.y = 151, e.elementsContent = [this._Image3_i(), this._BitmapLabel1_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "btn_setting_png", e.x = 0, e.y = 0, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.text = "SETUP", e.scaleX = .8, e.scaleY = .8, e.x = 12, e.y = 84, e
    }, t.paihangBtn_i = function() {
        var e = new eui.Group;
        return this.paihangBtn = e, e.height = 90, e.width = 86, e.x = 22, e.y = 292, e.elementsContent = [this._Image4_i(), this._BitmapLabel2_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "btn_rank_png", e.x = 0, e.y = 0, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.text = "RANK", e.scaleX = .8, e.scaleY = .8, e.x = 17, e.y = 83.99, e
    }, t.qiandaoBtn_i = function() {
        var e = new eui.Group;
        return this.qiandaoBtn = e, e.height = 90, e.width = 86, e.x = 22, e.y = 432, e.elementsContent = [this._Image5_i(), this._BitmapLabel3_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "btn_sign_png", e.x = 0, e.y = 0, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.text = "DAILY", e.scaleX = .8, e.scaleY = .8, e.x = 15, e.y = 83.5, e
    }, t.gameBtn_i = function() {
        var e = new eui.Group;
        return this.gameBtn = e, e.height = 90, e.visible = !1, e.width = 86, e.x = 22, e.y = 577, e.elementsContent = [this._Image6_i(), this._Image7_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 88, e.scale9Grid = new egret.Rectangle(11, 7, 59, 59), e.source = "flop_png", e.width = 85, e.x = 1, e.y = 0, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "youxiquan_png", e.x = 1, e.y = 76, e
    }, t.fingerTip1_i = function() {
        var e = new eui.Image;
        return this.fingerTip1 = e, e.scaleX = 1, e.scaleY = 1, e.source = "tuji9_json.guideHand1-1_png", e.touchEnabled = !1, e.visible = !1, e.x = 47.18, e.y = 606.26, e
    }, t.tip_i = function() {
        var e = new eui.Group;
        return this.tip = e, e.height = 130, e.horizontalCenter = 31, e.verticalCenter = -31, e.visible = !1, e.width = 400, e.elementsContent = [this._Image8_i(), this.word0_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(70, 52, 420, 48), e.scaleX = .7, e.scaleY = .8, e.source = "xinshouUI_png", e.y = 0, e
    }, t.word0_i = function() {
        var e = new eui.Label;
        return this.word0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.height = 84, e.horizontalCenter = 5.5, e.scaleX = 1, e.scaleY = 1, e.size = 30, e.text = "欢迎到游戏圈里吐槽，反馈，建议！", e.textAlign = "center", e.textColor = 5263440, e.verticalAlign = "middle", e.verticalCenter = -6, e.width = 323, e.x = 36, e.y = 26, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/GetManureView.exml"] = window.GetManureViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["videoUpStar", "lingqu", "manureText", "diamondText", "goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group3_i(), this.goBack_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image5_i(), this._Image6_i(), this.lingqu_i(), this._Group1_i(), this._Group2_i(), this._Image20_i(), this._Label1_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(270, 489, 4, 7), e.scaleY = .7, e.source = "gyUI_png", e.verticalCenter = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 40.21, e.scaleX = 1.1, e.scaleY = 1.1, e.source = "tuji3_json.feiliao_png", e.width = 79.49, e.x = 260, e.y = 25.55, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 280, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(282, 108, 3, 5), e.source = "gyUI1_png", e.verticalCenter = 0, e.width = 530, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "txt_offline_png", e.visible = !1, e.x = 215, e.y = 27.04, e
    }, t.lingqu_i = function() {
        var e = new eui.Group;
        return this.lingqu = e, e.anchorOffsetY = 0, e.height = 85, e.horizontalCenter = 0, e.verticalCenter = 236, e.width = 200, e.elementsContent = [this._Image7_i(), this._Image8_i(), this.videoUpStar_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .68, e.scaleY = .7, e.source = "yingyingls1_png", e.x = 12, e.y = 2, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.scale9Grid = new egret.Rectangle(69, 35, 2, 2), e.source = "btn_yellow4_png", e.width = 180, e.x = 11, e.y = 0, e
    }, t.videoUpStar_i = function() {
        var e = new eui.Image;
        return this.videoUpStar = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 45.58, e.horizontalCenter = -48.5, e.scaleX = .75, e.scaleY = .85, e.source = "icon_ad_png", e.verticalCenter = -3, e.width = 49.77, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "erwaishouyi_png", e.visible = !1, e.x = 57.24, e.y = 23.96, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "liangbeishouyi_png", e.visible = !1, e.x = 58.65, e.y = 23.01, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "icon_ad_png", e.visible = !1, e.x = 18.99, e.y = 16.33, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "tuji3_json.quedingT_png", e.visible = !1, e.x = 80, e.y = 17, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 51.91, e.scaleX = .85, e.scaleY = .85, e.source = "lingquT_png", e.width = 102.62, e.x = 81.66, e.y = 17.47, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -1.5, e.elementsContent = [this._Image14_i(), this._Image15_i(), this._Image16_i(), this.manureText_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "frame_png", e.verticalCenter = 0, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "gift_manue_icon_png", e.x = 20, e.y = 21.32, e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "time_limit_png", e.visible = !1, e.x = 53.37, e.y = -3.33, e
    }, t.manureText_i = function() {
        var e = new eui.BitmapLabel;
        return this.manureText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 43, e.scaleX = .35, e.scaleY = .35, e.text = "99999999", e.width = 241.71, e.x = 12.67, e.y = 81.69, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !1, e.x = 318, e.y = 266, e.elementsContent = [this._Image17_i(), this._Image18_i(), this._Image19_i(), this.diamondText_i()], e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "frame_png", e.verticalCenter = 0, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "icon_gem_png", e.x = 23, e.y = 33, e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "time_limit_png", e.x = 53.37, e.y = -3.33, e
    }, t.diamondText_i = function() {
        var e = new eui.BitmapLabel;
        return this.diamondText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 43, e.scaleX = .35, e.scaleY = .35, e.text = "99999999", e.width = 241.71, e.x = 12.67, e.y = 81.69, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 3.5, e.scaleX = .7, e.scaleY = .7, e.source = "gongxihuodel_png", e.visible = !1, e.y = 24, e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.size = 25, e.text = "Watch video to receive fertilizer", e.textAlign = "center", e.verticalAlign = "middle", e.x = 120, e.y = 475, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 281, e.scaleX = .85, e.scaleY = .85, e.verticalCenter = -241, e.elementsContent = [this._Image21_i()], e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/GongJiView.exml"] = window.GongJiViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["t1", "daojishi", "t2", "t3", "l1", "l2", "l3", "l4", "l5", "dImg", "diamondBtn", "awardGro", "mergeTip", "videoBtn", "Gro", "finger", "goBack", "adGro", "node"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this.node_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t.node_i = function() {
        var e = new eui.Group;
        return this.node = e, e.height = 1280, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 720, e.elementsContent = [this.Gro_i(), this.finger_i(), this.goBack_i(), this.adGro_i()], e
    }, t.Gro_i = function() {
        var e = new eui.Group;
        return this.Gro = e, e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -52, e.x = 60, e.y = 267, e.elementsContent = [this._Image2_i(), this.t1_i(), this._Image3_i(), this._Image4_i(), this.daojishi_i(), this.t2_i(), this.t3_i(), this.awardGro_i(), this.mergeTip_i(), this.videoBtn_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 642, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(345, 526, 7, 9), e.source = "gyUI_png", e.verticalCenter = 0, e
    }, t.t1_i = function() {
        var e = new eui.Image;
        return this.t1 = e, e.horizontalCenter = 6.5, e.scaleX = .9, e.scaleY = .9, e.source = "txt_double_atk_png", e.y = 29.68, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "bar_b_png", e.x = 118, e.y = 177.37, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "bg_pgs_double_png", e.x = 93, e.y = 124.99, e
    }, t.daojishi_i = function() {
        var e = new eui.BitmapLabel;
        return this.daojishi = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 58.85, e.text = "99：99", e.width = 278.73, e.x = 180.94, e.y = 204.49, e
    }, t.t2_i = function() {
        var e = new eui.Image;
        return this.t2 = e, e.scaleX = .9, e.scaleY = .9, e.source = "txt_double_gain_png", e.x = 230, e.y = 29, e
    }, t.t3_i = function() {
        var e = new eui.Image;
        return this.t3 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 37.49, e.source = "tuji2_json.gift_auto_compose_png", e.width = 143, e.x = 236, e.y = 31, e
    }, t.awardGro_i = function() {
        var e = new eui.Group;
        return this.awardGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 204, e.horizontalCenter = 2, e.verticalCenter = 105, e.width = 542.33, e.elementsContent = [this._Image5_i(), this._Image6_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this.diamondBtn_i(), this._BitmapLabel2_i(), this._BitmapLabel3_i(), this._BitmapLabel4_i(), this._BitmapLabel5_i(), this._Image13_i(), this._BitmapLabel6_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = 1, e.source = "gyUI1_png", e.x = 4, e.y = 1, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .33499999999997954, e.scaleX = .95, e.scaleY = .8, e.source = "rank_4_png", e.y = 53.67, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -191.16500000000002, e.verticalCenter = 35, e.elementsContent = [this._Image7_i(), this.l1_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .7, e.source = "bar_bg8_png", e.x = 0, e.y = 2, e
    }, t.l1_i = function() {
        var e = new eui.Image;
        return this.l1 = e, e.scaleX = .7, e.scaleY = .7, e.source = "bar_bg7_png", e.x = 4, e.y = 6.5, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -96.16500000000002, e.verticalCenter = 35, e.elementsContent = [this._Image8_i(), this.l2_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .7, e.source = "bar_bg8_png", e.x = 0, e.y = 2, e
    }, t.l2_i = function() {
        var e = new eui.Image;
        return this.l2 = e, e.scaleX = .7, e.scaleY = .7, e.source = "bar_bg7_png", e.x = 4, e.y = 6.5, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -1.1650000000000205, e.verticalCenter = 35, e.elementsContent = [this._Image9_i(), this.l3_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .7, e.source = "bar_bg8_png", e.x = 0, e.y = 2, e
    }, t.l3_i = function() {
        var e = new eui.Image;
        return this.l3 = e, e.scaleX = .7, e.scaleY = .7, e.source = "bar_bg7_png", e.x = 4, e.y = 6.5, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 93.83499999999998, e.verticalCenter = 35, e.elementsContent = [this._Image10_i(), this.l4_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .7, e.source = "bar_bg8_png", e.x = 0, e.y = 2, e
    }, t.l4_i = function() {
        var e = new eui.Image;
        return this.l4 = e, e.scaleX = .7, e.scaleY = .7, e.source = "bar_bg7_png", e.x = 4, e.y = 6.5, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 188.83499999999998, e.verticalCenter = 35, e.elementsContent = [this._Image11_i(), this.l5_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .7, e.source = "bar_bg8_png", e.x = 0, e.y = 2, e
    }, t.l5_i = function() {
        var e = new eui.Image;
        return this.l5 = e, e.scaleX = .7, e.scaleY = .7, e.source = "bar_bg7_png", e.x = 4, e.y = 6.5, e
    }, t.diamondBtn_i = function() {
        var e = new eui.Group;
        return this.diamondBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 146.96, e.width = 86.37, e.x = 440.94, e.y = 50.57, e.elementsContent = [this.dImg_i(), this._Image12_i(), this._BitmapLabel1_i()], e
    }, t.dImg_i = function() {
        var e = new eui.Image;
        return this.dImg = e, e.scaleX = .8, e.scaleY = .8, e.source = "diamonds_png", e.x = -1.4399999999999409, e.y = 45.93000000000018, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "lable_reward_png", e.x = 46.38000000000011, e.y = 1.7600000000001046, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 28.5, e.rotation = 15.09, e.scaleX = .8, e.scaleY = .8, e.text = "+500", e.width = 85.17, e.x = 50.280000000000086, e.y = 26.63000000000011, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 32, e.text = "1", e.width = 19.33, e.x = 114, e.y = 152.99, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 32, e.text = "2", e.width = 19.33, e.x = 207.34, e.y = 152.99, e
    }, t._BitmapLabel4_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 32, e.text = "3", e.width = 19.33, e.x = 301.34, e.y = 152.32, e
    }, t._BitmapLabel5_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 32, e.text = "4", e.width = 19.33, e.x = 396.34, e.y = 152.32, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "huodedashangT_png", e.x = 197, e.y = 13, e
    }, t._BitmapLabel6_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 26, e.scaleX = .6, e.scaleY = .6, e.text = "GET IT EVERY 5 TIMES YOU WATCH VIDEO", e.width = 600, e.x = 100, e.y = 76, e
    }, t.mergeTip_i = function() {
        var e = new eui.Group;
        return this.mergeTip = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 213, e.horizontalCenter = 1.5, e.verticalCenter = 101.5, e.width = 555, e.elementsContent = [this._Image14_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "shifujixushiyong_png", e.x = 35, e.y = 69, e
    }, t.videoBtn_i = function() {
        var e = new eui.Group;
        return this.videoBtn = e, e.anchorOffsetY = 0, e.horizontalCenter = 11, e.verticalCenter = 258.5, e.elementsContent = [this._Group6_i()], e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 0, e.y = 1, e.elementsContent = [this._Image15_i(), this._Image16_i(), this._BitmapLabel7_i(), this._BitmapLabel8_i(), this._Image17_i()], e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(69, 33, 1, 1), e.source = "btn_yellow4_png", e.width = 180, e.x = 4, e.y = 0, e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "icon_ad_png", e.x = 23.67, e.y = 15.35, e
    }, t._BitmapLabel7_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.horizontalCenter = -.5, e.text = "+10", e.verticalCenter = -2, e
    }, t._BitmapLabel8_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.horizontalCenter = 51.5, e.text = "MIN", e.verticalCenter = -1.5, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .85, e.scaleY = .85, e.source = "yixiaoshiT_png", e.visible = !1, e.x = 60.01, e.y = 17.63, e
    }, t.finger_i = function() {
        var e = new eui.Image;
        return this.finger = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.source = "tuji9_json.guideHand1-1_png", e.touchEnabled = !1, e.visible = !1, e.x = 346.71, e.y = 829.22, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 271, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -307, e.x = 592, e.y = 292, e.elementsContent = [this._Image18_i()], e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_close1_png", e.x = 0, e.y = 0, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/gongxihuode.exml"] = window.gongxihuodeSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["lingqu", "manureText", "diamondText", "goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group3_i(), this.goBack_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.lingqu_i(), this._Group1_i(), this._Group2_i(), this._Image17_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(270, 489, 4, 7), e.scaleY = .7, e.source = "gyUI_png", e.verticalCenter = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 280, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(282, 108, 3, 5), e.source = "gyUI1_png", e.verticalCenter = 0, e.width = 530, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "txt_offline_png", e.visible = !1, e.x = 215, e.y = 27.04, e
    }, t.lingqu_i = function() {
        var e = new eui.Group;
        return this.lingqu = e, e.anchorOffsetY = 0, e.height = 85, e.horizontalCenter = 0, e.verticalCenter = 236, e.width = 200, e.elementsContent = [this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .68, e.scaleY = .7, e.source = "yingyingls1_png", e.x = 12, e.y = 2, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.scale9Grid = new egret.Rectangle(69, 35, 2, 2), e.source = "btn_yellow4_png", e.width = 180, e.x = 11, e.y = 0, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "erwaishouyi_png", e.visible = !1, e.x = 57.24, e.y = 23.96, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "liangbeishouyi_png", e.visible = !1, e.x = 58.65, e.y = 23.01, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "icon_ad_png", e.visible = !1, e.x = 18.99, e.y = 16.33, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "tuji3_json.quedingT_png", e.x = 58, e.y = 17, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -1.5, e.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i(), this.manureText_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "frame_png", e.verticalCenter = 0, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "gift_manue_icon_png", e.x = 20, e.y = 21.32, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "time_limit_png", e.visible = !1, e.x = 53.37, e.y = -3.33, e
    }, t.manureText_i = function() {
        var e = new eui.BitmapLabel;
        return this.manureText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 43, e.scaleX = .35, e.scaleY = .35, e.text = "99999999", e.width = 241.71, e.x = 12.67, e.y = 81.69, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !1, e.x = 318, e.y = 266, e.elementsContent = [this._Image14_i(), this._Image15_i(), this._Image16_i(), this.diamondText_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "frame_png", e.verticalCenter = 0, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "icon_gem_png", e.x = 23, e.y = 33, e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "time_limit_png", e.x = 53.37, e.y = -3.33, e
    }, t.diamondText_i = function() {
        var e = new eui.BitmapLabel;
        return this.diamondText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 43, e.scaleX = .35, e.scaleY = .35, e.text = "99999999", e.width = 241.71, e.x = 12.67, e.y = 81.69, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 3.5, e.scaleX = .7, e.scaleY = .7, e.source = "gongxihuodel_png", e.y = 24, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 281, e.scaleX = .85, e.scaleY = .85, e.verticalCenter = -241, e.visible = !1, e.elementsContent = [this._Image18_i()], e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/GuanKaJiangLi1View.exml"] = window.GuanKaJiangLi1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["tipText2", "tipText1", "b1", "ok1", "ad1", "box1", "b2", "ok2", "ad2", "box2", "b3", "ok3", "ad3", "box3", "goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group4_i(), this.goBack_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -17, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.tipText2_i(), this.tipText1_i(), this.box1_i(), this.box2_i(), this.box3_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 480, e.scale9Grid = new egret.Rectangle(347, 528, 10, 9), e.source = "gyUI_png", e.x = 0, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "txt_stage_reward_png", e.x = 225.33, e.y = 16.96, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 320, e.scale9Grid = new egret.Rectangle(277, 95, 7, 12), e.source = "gyUI1_png", e.width = 540, e.x = 30, e.y = 94.98, e
    }, t.tipText2_i = function() {
        var e = new eui.Image;
        return this.tipText2 = e, e.scaleX = .8, e.scaleY = .8, e.source = "xuanzeyigeT1_png", e.x = 96, e.y = 418, e
    }, t.tipText1_i = function() {
        var e = new eui.Image;
        return this.tipText1 = e, e.scaleX = .8, e.scaleY = .8, e.source = "xuanzeyigeT_png", e.x = 130, e.y = 418, e
    }, t.box1_i = function() {
        var e = new eui.Group;
        return this.box1 = e, e.height = 240, e.width = 170, e.x = 39, e.y = 129, e.elementsContent = [this._Image5_i(), this.b1_i(), this._Group1_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "light_tower_png", e.verticalCenter = -5, e.x = -24, e
    }, t.b1_i = function() {
        var e = new eui.Image;
        return this.b1 = e, e.anchorOffsetX = 94.44, e.anchorOffsetY = 188.89, e.scaleX = .9, e.scaleY = .9, e.source = "box5_png", e.x = 85, e.y = 199, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.verticalCenter = 82.5, e.x = 52, e.elementsContent = [this.ok1_i(), this.ad1_i()], e
    }, t.ok1_i = function() {
        var e = new eui.Image;
        return this.ok1 = e, e.scaleX = .6, e.scaleY = .6, e.source = "btn_ok_png", e.x = 0, e.y = 0, e
    }, t.ad1_i = function() {
        var e = new eui.Image;
        return this.ad1 = e, e.scaleX = .6, e.scaleY = .6, e.source = "reward_ad_play_png", e.x = 6, e.y = 2, e
    }, t.box2_i = function() {
        var e = new eui.Group;
        return this.box2 = e, e.height = 240, e.width = 170, e.x = 215, e.y = 129, e.elementsContent = [this._Image6_i(), this.b2_i(), this._Group2_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "light_tower_png", e.verticalCenter = -5, e.x = -24, e
    }, t.b2_i = function() {
        var e = new eui.Image;
        return this.b2 = e, e.anchorOffsetX = 94.44, e.anchorOffsetY = 187.78, e.scaleX = .9, e.scaleY = .9, e.source = "box5_png", e.x = 85, e.y = 198, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 82.5, e.x = 52, e.elementsContent = [this.ok2_i(), this.ad2_i()], e
    }, t.ok2_i = function() {
        var e = new eui.Image;
        return this.ok2 = e, e.scaleX = .6, e.scaleY = .6, e.source = "btn_ok_png", e.x = 0, e.y = 0, e
    }, t.ad2_i = function() {
        var e = new eui.Image;
        return this.ad2 = e, e.scaleX = .6, e.scaleY = .6, e.source = "reward_ad_play_png", e.x = 6, e.y = 2, e
    }, t.box3_i = function() {
        var e = new eui.Group;
        return this.box3 = e, e.height = 240, e.width = 170, e.x = 391, e.y = 129, e.elementsContent = [this._Image7_i(), this.b3_i(), this._Group3_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "light_tower_png", e.verticalCenter = -5, e.x = -24, e
    }, t.b3_i = function() {
        var e = new eui.Image;
        return this.b3 = e, e.anchorOffsetX = 94.44, e.anchorOffsetY = 188.89, e.scaleX = .9, e.scaleY = .9, e.source = "box5_png", e.x = 85, e.y = 199, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 82.5, e.x = 52, e.elementsContent = [this.ok3_i(), this.ad3_i()], e
    }, t.ok3_i = function() {
        var e = new eui.Image;
        return this.ok3 = e, e.scaleX = .6, e.scaleY = .6, e.source = "btn_ok_png", e.x = 0, e.y = 0, e
    }, t.ad3_i = function() {
        var e = new eui.Image;
        return this.ad3 = e, e.scaleX = .6, e.scaleY = .6, e.source = "reward_ad_play_png", e.x = 6, e.y = 2, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 270.5, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -190.5, e.elementsContent = [this._Image8_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "btn_close1_png", e.x = -2, e.y = -3, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/GuanKaJiangLiView.exml"] = window.GuanKaJiangLiViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = [], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group4_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -17, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 480, e.scale9Grid = new egret.Rectangle(347, 528, 10, 9), e.source = "gyUI_png", e.x = 0, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "txt_stage_reward_png", e.x = 225.33, e.y = 16.96, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 320, e.scale9Grid = new egret.Rectangle(277, 95, 7, 12), e.source = "gyUI1_png", e.width = 540, e.x = 30, e.y = 94.98, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "xuanzeyigeT_png", e.x = 130, e.y = 418, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 240, e.width = 170, e.x = 39, e.y = 129, e.elementsContent = [this._Image6_i(), this._Image7_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "light_tower_png", e.verticalCenter = -6, e.x = -24, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "box5_png", e.x = 0, e.y = 35, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 240, e.width = 170, e.x = 215, e.y = 129, e.elementsContent = [this._Image8_i(), this._Image9_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "light_tower_png", e.verticalCenter = -6, e.x = -24, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "box5_png", e.x = 0, e.y = 35, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 240, e.width = 170, e.x = 391, e.y = 129, e.elementsContent = [this._Image10_i(), this._Image11_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "light_tower_png", e.verticalCenter = -6, e.x = -24, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "box5_png", e.x = 0, e.y = 35, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/HaoHuanLiBaoView.exml"] = window.HaoHuanLiBaoViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["freeImg", "videoImg", "videoBtn", "goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group6_i(), this.goBack_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -88.5, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 1100, e.scale9Grid = new egret.Rectangle(54, 506, 417, 241), e.scaleX = 1, e.scaleY = 1, e.source = "loot_bg_png", e.width = 680, e.x = 0, e.y = -1, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "gift_title_png", e.x = 278.9, e.y = 385.92, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "gift_title2_png", e.x = 155.57, e.y = 383.92, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.x = 258, e.y = 919.01, e.elementsContent = [this.videoBtn_i()], e
    }, t.videoBtn_i = function() {
        var e = new eui.Group;
        return this.videoBtn = e, e.x = -10.6, e.y = 1, e.elementsContent = [this._Image5_i(), this.freeImg_i(), this.videoImg_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 90, e.scale9Grid = new egret.Rectangle(69, 33, 1, 1), e.source = "btn_yellow4_png", e.width = 200, e.x = 4, e.y = 0, e
    }, t.freeImg_i = function() {
        var e = new eui.Image;
        return this.freeImg = e, e.source = "lingquT_png", e.x = 59.1, e.y = 21.1, e
    }, t.videoImg_i = function() {
        var e = new eui.Group;
        return this.videoImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 60.61, e.width = 160.61, e.x = 22, e.y = 11, e.elementsContent = [this._Image6_i(), this._Image7_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "icon_ad_png", e.x = 6.229999999999961, e.y = 4.360000000000127, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "lingquT_png", e.x = 60.42999999999995, e.y = 9.190000000000168, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 67, e.y = 562, e.elementsContent = [this._Image8_i(), this._Image9_i(), this._Image10_i(), this._BitmapLabel1_i(), this._BitmapLabel2_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 200, e.scale9Grid = new egret.Rectangle(60, 88, 4, 71), e.source = "gift_atk_double_di_png", e.x = 0, e.y = 0, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "gift_atk_icon_png", e.x = 23, e.y = 62.91, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "tuji1_json.gift_atk_double_png", e.x = 23, e.y = 13.17, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.horizontalCenter = -22, e.text = "+30", e.verticalCenter = 65, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.horizontalCenter = 30.5, e.text = "MIN", e.verticalCenter = 65.5, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 205.66666666666666, e.y = 562, e.elementsContent = [this._Image11_i(), this._BitmapLabel3_i(), this._BitmapLabel4_i(), this._Image12_i(), this._Image13_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 200, e.scale9Grid = new egret.Rectangle(62, 67, 3, 92), e.source = "gift_gain_double_di_png", e.x = 0, e.y = 0, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.horizontalCenter = -26, e.text = "+30", e.verticalCenter = 63, e
    }, t._BitmapLabel4_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.horizontalCenter = 26.5, e.text = "MIN", e.verticalCenter = 63.5, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "gift_coin_icon_png", e.x = 24, e.y = 61.43, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "tuji1_json.gift_gain_double_png", e.x = 24, e.y = 12.66, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 344.3333333333333, e.y = 561, e.elementsContent = [this._Image14_i(), this._BitmapLabel5_i(), this._BitmapLabel6_i(), this._BitmapLabel7_i(), this._Image15_i(), this._Image16_i(), this._Image17_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 210, e.scale9Grid = new egret.Rectangle(73, 80, 2, 87), e.scaleX = .85, e.scaleY = .96, e.source = "sign_item_bg1_png", e.x = 0, e.y = 0, e
    }, t._BitmapLabel5_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.horizontalCenter = -24, e.text = "+30", e.verticalCenter = 64, e
    }, t._BitmapLabel6_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.horizontalCenter = 28.5, e.text = "MIN", e.verticalCenter = 64.5, e
    }, t._BitmapLabel7_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 28.67, e.horizontalCenter = 5.5, e.scaleX = .6, e.scaleY = .6, e.text = "+1500", e.verticalCenter = 58, e.visible = !1, e.width = 115.33, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.scaleX = .75, e.scaleY = .75, e.source = "zhiwu17_png", e.x = 28, e.y = 61.27, e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "gift_manue_png", e.visible = !1, e.x = 25, e.y = 26, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.source = "gift_auto_compose_png", e.x = 19.67, e.y = 12.32, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 488.33, e.y = 561, e.elementsContent = [this._Image18_i(), this._BitmapLabel8_i(), this._Image19_i(), this._Image20_i()], e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 210, e.scale9Grid = new egret.Rectangle(73, 76, 3, 91), e.scaleX = .85, e.scaleY = .96, e.source = "sign_item_bg1_png", e.x = 0, e.y = 0, e
    }, t._BitmapLabel8_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.horizontalCenter = .5, e.text = "+100", e.verticalCenter = 63, e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "icon_gem_png", e.x = 35, e.y = 73, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "gift_diamond_png", e.x = 38, e.y = 12.36, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 274, e.verticalCenter = -178, e.elementsContent = [this._Image21_i()], e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/HeChengShuoMingView.exml"] = window.HeChengShuoMingViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["okBtn", "goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group1_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .4, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 720, e.horizontalCenter = 0, e.verticalCenter = -58, e.width = 650, e.elementsContent = [this._Image2_i(), this.okBtn_i(), this._Image6_i(), this.goBack_i(), this._Image8_i(), this._Image9_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 600, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(95, 194, 410, 468), e.scaleX = 1, e.scaleY = 1, e.source = "gyUI_png", e.verticalCenter = 0, e.width = 630, e.x = 10, e.y = 10, e
    }, t.okBtn_i = function() {
        var e = new eui.Group;
        return this.okBtn = e, e.anchorOffsetY = 0, e.x = 254, e.y = 565.68, e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(64, 31, 5, 7), e.source = "btn_yellow4_png", e.verticalCenter = 0, e.width = 160, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .69, e.source = "yingyingls1_png", e.visible = !1, e.x = 1.61, e.y = 1.95, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "tuji3_json.quedingT_png", e.x = 38, e.y = 17, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "txt_tip_png", e.x = 284, e.y = 106, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.scaleX = 1, e.scaleY = 1, e.x = 578, e.y = 116, e.elementsContent = [this._Image7_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 350, e.scale9Grid = new egret.Rectangle(72, 24, 436, 150), e.source = "gyUI1_png", e.width = 540, e.x = 55, e.y = 209.67, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.scaleX = 1.1, e.scaleY = 1.1, e.source = "laohujiwanfa2_png", e.y = 263.9, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/HScrollBarSkin.exml"] = window.skins.HScrollBarSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["thumb"], this.minHeight = 8, this.minWidth = 20, this.elementsContent = [this.thumb_i()]
    }
    return __extends(i, e), i.prototype.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e, e.height = 8, e.scale9Grid = new egret.Rectangle(3, 3, 2, 2), e.source = "roundthumb_png", e.verticalCenter = 0, e.width = 30, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/HSliderSkin.exml"] = window.skins.HSliderSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["track", "thumb"], this.minHeight = 8, this.minWidth = 20, this.elementsContent = [this.track_i(), this.thumb_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.track_i = function() {
        var e = new eui.Image;
        return this.track = e, e.height = 6, e.scale9Grid = new egret.Rectangle(1, 1, 4, 4), e.source = "track_sb_png", e.verticalCenter = 0, e.percentWidth = 100, e
    }, t.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e, e.source = "thumb_png", e.verticalCenter = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/HuoDeJinBiView.exml"] = window.HuoDeJinBiViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["gold", "freeImg", "videoImg", "videoBtn", "goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group1_i(), this.goBack_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -34, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.gold_i(), this._Image5_i(), this._Image6_i(), this.videoBtn_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 700, e.scale9Grid = new egret.Rectangle(95, 400, 407, 42), e.source = "gyUI_png", e.x = 0, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "light_tower_upgrade_png", e.x = 113, e.y = 106.67, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1.1, e.scaleY = 1.1, e.source = "lable_reward_png", e.x = 326.32, e.y = 166, e
    }, t.gold_i = function() {
        var e = new eui.BitmapLabel;
        return this.gold = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 34.25, e.rotation = 24.41, e.text = "+10000", e.width = 127.81, e.x = 320.87, e.y = 186.51, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1.2, e.scaleY = 1.2, e.source = "kapai5_png", e.x = 241.65, e.y = 224.67, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(150, 79, 149, 35), e.scaleX = 1.2, e.source = "name_di_png", e.x = 25, e.y = 352.02, e
    }, t.videoBtn_i = function() {
        var e = new eui.Group;
        return this.videoBtn = e, e.horizontalCenter = 12, e.verticalCenter = 243.5, e.elementsContent = [this._Image7_i(), this.freeImg_i(), this.videoImg_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.scale9Grid = new egret.Rectangle(23, 17, 87, 37), e.source = "btn_yellow4_png", e.width = 170, e.x = 0, e.y = 0, e
    }, t.freeImg_i = function() {
        var e = new eui.Image;
        return this.freeImg = e, e.source = "", e.x = 46.68, e.y = 17.68, e
    }, t.videoImg_i = function() {
        var e = new eui.Group;
        return this.videoImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 60.61, e.width = 132.61, e.x = 22, e.y = 11, e.elementsContent = [this._Image8_i(), this._Image9_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "icon_ad_png", e.x = .339999999999975, e.y = 5.6299999999999955, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "lingquT_png", e.x = 44, e.y = 6.67999999999995, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.rotation = 7.85, e.scaleX = .8, e.scaleY = .8, e.source = "tuji3_json.jinbiT_png", e.x = 349.84, e.y = 171.34, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "gongxihuodel_png", e.x = 217, e.y = 29, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "tuji2_json.gift_title_png", e.x = 228, e.y = 407, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "tuji2_json.gift_title2_png", e.x = 80, e.y = 405, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 273.5, e.verticalCenter = -304, e.elementsContent = [this._Image14_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ItemRendererSkin.exml"] = window.skins.ItemRendererSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["labelDisplay"], this.minHeight = 50, this.minWidth = 100, this.elementsContent = [this._Image1_i(), this.labelDisplay_i()], this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "button_down_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", .5)])], eui.Binding.$bindProperties(this, ["hostComponent.data"], [0], this.labelDisplay, "text")
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(1, 3, 8, 8), e.source = "button_up_png", e.percentWidth = 100, e
    }, t.labelDisplay_i = function() {
        var e = new eui.Label;
        return this.labelDisplay = e, e.bottom = 8, e.fontFamily = "Tahoma", e.left = 8, e.right = 8, e.size = 20, e.textAlign = "center", e.textColor = 16777215, e.top = 8, e.verticalAlign = "middle", e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/JieSuoYuGao1View.exml"] = window.JieSuoYuGao1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["bg", "cursor", "itemImg", "itemName", "level", "clickBtn"], this.height = 195, this.width = 150, this.elementsContent = [this.clickBtn_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.clickBtn_i = function() {
        var e = new eui.Group;
        return this.clickBtn = e, e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this.bg_i(), this.cursor_i(), this.itemImg_i(), this.itemName_i(), this.level_i(), this._BitmapLabel1_i()], e
    }, t.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e, e.scaleX = .9, e.scaleY = .9, e.source = "unlock_bg1_png", e.x = 4, e.y = 5.68, e
    }, t.cursor_i = function() {
        var e = new eui.Image;
        return this.cursor = e, e.horizontalCenter = 0, e.scaleX = .75, e.scaleY = .64, e.source = "jihuoyingxiong2_png", e.verticalCenter = 0, e
    }, t.itemImg_i = function() {
        var e = new eui.Image;
        return this.itemImg = e, e.horizontalCenter = -1.5, e.scaleX = .45, e.scaleY = .45, e.source = "zhiwu5_png", e.verticalCenter = 5.5, e
    }, t.itemName_i = function() {
        var e = new eui.Label;
        return this.itemName = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, e.textAlign = "center", e.size = 18, e.text = "Ice Fairy", e.textColor = 2050105, e.verticalCenter = -68, e
    }, t.level_i = function() {
        var e = new eui.BitmapLabel;
        return this.level = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 30.64, e.scaleX = .8, e.scaleY = .8, e.text = "222", e.width = 63.66, e.x = 39.33, e.y = 154, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .7, e.scaleY = .7, e.text = "LV", e.width = 35, e.x = 90, e.y = 159, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/JieSuoYuGaoView.exml"] = window.JieSuoYuGaoViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList1", "scroller", "goBack", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group1_i(), this.scroller_i(), this.goBack_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image2_i(), this._Image3_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "gyUI_png", e.verticalCenter = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "txt_unlock_png", e.x = 220, e.y = 48.32, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 700, e.horizontalCenter = 0, e.verticalCenter = 62, e.width = 530, e.viewport = this._Group2_i(), e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.width = 540, e.x = -13.64, e.elementsContent = [this.dataList1_i()], e
    }, t.dataList1_i = function() {
        var e = new eui.List;
        return this.dataList1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = JieSuoYuGao1ViewSkin, e.width = 530, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 30, e.paddingLeft = 15, e.verticalGap = 20, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i(), this._Object11_i(), this._Object12_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object7_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object8_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object9_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object10_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object11_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object12_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 268, e.scaleX = .85, e.scaleY = .85, e.verticalCenter = -356, e.elementsContent = [this._Image4_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/JinBiBuZuView.exml"] = window.JinBiBuZuViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["gold", "freeImg", "videoImg", "videoBtn", "goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group1_i(), this.goBack_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -34, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.gold_i(), this._Image5_i(), this._Image6_i(), this.videoBtn_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 700, e.scale9Grid = new egret.Rectangle(95, 400, 407, 42), e.source = "gyUI_png", e.x = 0, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "light_tower_upgrade_png", e.x = 113, e.y = 106.67, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1.1, e.scaleY = 1.1, e.source = "lable_reward_png", e.x = 326.32, e.y = 166, e
    }, t.gold_i = function() {
        var e = new eui.BitmapLabel;
        return this.gold = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 34.25, e.rotation = 24.41, e.text = "+10000", e.width = 127.81, e.x = 320.87, e.y = 186.51, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1.2, e.scaleY = 1.2, e.source = "kapai5_png", e.x = 241.65, e.y = 224.67, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(150, 79, 149, 35), e.scaleX = 1.2, e.source = "name_di_png", e.x = 25, e.y = 352.02, e
    }, t.videoBtn_i = function() {
        var e = new eui.Group;
        return this.videoBtn = e, e.horizontalCenter = 12, e.verticalCenter = 243.5, e.elementsContent = [this._Image7_i(), this.freeImg_i(), this.videoImg_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.scale9Grid = new egret.Rectangle(23, 17, 87, 37), e.source = "btn_yellow4_png", e.width = 170, e.x = 0, e.y = 0, e
    }, t.freeImg_i = function() {
        var e = new eui.Image;
        return this.freeImg = e, e.source = "mianfeiT_png", e.x = 46.68, e.y = 17.68, e
    }, t.videoImg_i = function() {
        var e = new eui.Group;
        return this.videoImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 60.61, e.width = 132.61, e.x = 22, e.y = 11, e.elementsContent = [this._Image8_i(), this._Image9_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "icon_ad_png", e.x = .339999999999975, e.y = 5.6299999999999955, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "mianfeiT_png", e.x = 37.68000000000001, e.y = 6.67999999999995, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.rotation = 7.85, e.scaleX = .8, e.scaleY = .8, e.source = "tuji3_json.jinbiT_png", e.x = 349.84, e.y = 171.34, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1.1, e.scaleY = 1.1, e.source = "jinbibuzu_png", e.x = 217, e.y = 30.52, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "tuji2_json.gift_title_png", e.x = 228, e.y = 407, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "tuji2_json.gift_title2_png", e.x = 80, e.y = 405, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 273.5, e.verticalCenter = -304, e.elementsContent = [this._Image14_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/KaPianHeChengView.exml"] = window.KaPianHeChengViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["bg", "plant", "addImg", "addClick"], this.height = 120, this.width = 120, this.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this.addImg_i(), this.addClick_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = .5, e.elementsContent = [this.bg_i(), this.plant_i(), this._Image1_i()], e
    }, t.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e, e.horizontalCenter = 0, e.scaleX = .77, e.scaleY = .75, e.source = "frame2_png", e.y = 4.5, e
    }, t.plant_i = function() {
        var e = new eui.Image;
        return this.plant = e, e.scaleX = .3, e.scaleY = .3, e.source = "tuji3_json.zhiwu1_png", e.x = 12, e.y = 16, e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.source = "wenhao_png", e.verticalCenter = -1, e.visible = !1, e.x = 17, e.y = 13, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = .5, e.visible = !1, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .77, e.scaleY = .75, e.source = "frame3_png", e.y = 4.5, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .3, e.scaleY = .3, e.source = "tuji3_json.zhiwu1_png", e.visible = !1, e.x = 13, e.y = 17, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.source = "wenhao_png", e.verticalCenter = -1, e.visible = !1, e.x = 17, e.y = 13, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = .5, e.visible = !1, e.elementsContent = [this._Image5_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .77, e.scaleY = .75, e.source = "frame1_png", e.y = 4.5, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 41, e.verticalCenter = -38, e.elementsContent = [this._Image6_i(), this._Image7_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "tuji1_json.hero_small_head_di_png", e.x = 0, e.y = 0, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .45, e.scaleY = .45, e.source = "reset_png", e.x = 5, e.y = 4, e
    }, t.addImg_i = function() {
        var e = new eui.Group;
        return this.addImg = e, e.horizontalCenter = 0, e.verticalCenter = 3.5, e.elementsContent = [this._Image8_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.scaleX = .7, e.scaleY = .7, e.source = "tuji1_json.add_png", e.width = 97.43, e.x = 0, e.y = 0, e
    }, t.addClick_i = function() {
        var e = new eui.Group;
        return this.addClick = e, e.height = 120, e.width = 120, e.x = 0, e.y = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/LaoHuJi1View.exml"] = window.LaoHuJi1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["p1", "g1", "p2", "g2", "p3", "g3", "p4", "g4", "p5", "g5"], this.height = 550, this.width = 110, this.elementsContent = [this._Group1_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 550, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 110, e.elementsContent = [this.g1_i(), this.g2_i(), this.g3_i(), this.g4_i(), this.g5_i()], e
    }, t.g1_i = function() {
        var e = new eui.Group;
        return this.g1 = e, e.anchorOffsetX = 55, e.anchorOffsetY = 55, e.height = 110, e.width = 110, e.x = 55, e.y = 55, e.elementsContent = [this.p1_i()], e
    }, t.p1_i = function() {
        var e = new eui.Image;
        return this.p1 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 46.5, e.height = 93, e.scaleX = 1, e.scaleY = 1, e.source = "kapai1_png", e.width = 86, e.x = 55, e.y = 55, e
    }, t.g2_i = function() {
        var e = new eui.Group;
        return this.g2 = e, e.anchorOffsetX = 55, e.anchorOffsetY = 55, e.height = 110, e.width = 110, e.x = 55, e.y = 165, e.elementsContent = [this.p2_i()], e
    }, t.p2_i = function() {
        var e = new eui.Image;
        return this.p2 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 46.5, e.height = 93, e.scaleX = 1, e.scaleY = 1, e.source = "kapai1_png", e.width = 86, e.x = 55, e.y = 55, e
    }, t.g3_i = function() {
        var e = new eui.Group;
        return this.g3 = e, e.anchorOffsetX = 55, e.anchorOffsetY = 55, e.height = 110, e.width = 110, e.x = 55, e.y = 275, e.elementsContent = [this.p3_i()], e
    }, t.p3_i = function() {
        var e = new eui.Image;
        return this.p3 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 46.5, e.height = 93, e.scaleX = 1, e.scaleY = 1, e.source = "kapai1_png", e.width = 86, e.x = 55, e.y = 55, e
    }, t.g4_i = function() {
        var e = new eui.Group;
        return this.g4 = e, e.anchorOffsetX = 55, e.anchorOffsetY = 55, e.height = 110, e.width = 110, e.x = 55, e.y = 385, e.elementsContent = [this.p4_i()], e
    }, t.p4_i = function() {
        var e = new eui.Image;
        return this.p4 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 46.5, e.height = 93, e.scaleX = 1, e.scaleY = 1, e.source = "kapai1_png", e.width = 86, e.x = 55, e.y = 55, e
    }, t.g5_i = function() {
        var e = new eui.Group;
        return this.g5 = e, e.anchorOffsetX = 55, e.anchorOffsetY = 55, e.height = 110, e.width = 110, e.x = 55, e.y = 495, e.elementsContent = [this.p5_i()], e
    }, t.p5_i = function() {
        var e = new eui.Image;
        return this.p5 = e, e.anchorOffsetX = 43, e.anchorOffsetY = 46.5, e.height = 93, e.scaleX = 1, e.scaleY = 1, e.source = "kapai1_png", e.width = 86, e.x = 55, e.y = 55, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/LaoHuJiView.exml"] = window.LaoHuJiViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["gro", "goBack", "coinImg", "goldText", "diamondImg", "daimondText", "rate", "addRate", "startBtn", "loadBar", "count", "awardText", "luckyCoin", "addBtn", "helpBtn"], this.height = 1280, this.width = 720, this.elementsContent = [this._Group1_i(), this.gro_i(), this._Group8_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 260, e.horizontalCenter = 0, e.verticalCenter = 28, e.width = 390, e.elementsContent = [this._Image1_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.source = "laohu5_png", e.verticalCenter = -1.5, e
    }, t.gro_i = function() {
        var e = new eui.Group;
        return this.gro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 600, e.horizontalCenter = 0, e.verticalCenter = 24, e.width = 400, e.elementsContent = [this._LaoHuJi1View1_i(), this._LaoHuJi1View2_i(), this._LaoHuJi1View3_i()], e
    }, t._LaoHuJi1View1_i = function() {
        var e = new LaoHuJi1View;
        return e.height = 550, e.width = 110, e.x = 17.37, e.y = 26.95, e
    }, t._LaoHuJi1View2_i = function() {
        var e = new LaoHuJi1View;
        return e.height = 550, e.width = 110, e.x = 146.17, e.y = 26.95, e
    }, t._LaoHuJi1View3_i = function() {
        var e = new LaoHuJi1View;
        return e.height = 550, e.width = 110, e.x = 274.96, e.y = 26.95, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.height = 1280, e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image2_i(), this.goBack_i(), this._Group2_i(), this._Group3_i(), this.addRate_i(), this.startBtn_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this.addBtn_i(), this.helpBtn_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "laohujibeijing_png", e.verticalCenter = -1.5, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.height = 90, e.width = 90, e.x = 25, e.y = 174, e.elementsContent = [this._Image3_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "btn_back1_png", e.x = 0, e.y = 0, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.width = 176, e.x = 32, e.y = 96, e.elementsContent = [this._Image4_i(), this.coinImg_i(), this.goldText_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "laohuji2_png", e.x = 0, e.y = 0, e
    }, t.coinImg_i = function() {
        var e = new eui.Image;
        return this.coinImg = e, e.anchorOffsetX = 41.43, e.anchorOffsetY = 40, e.scaleX = .7, e.scaleY = .7, e.source = "gift_coin_icon_png", e.x = 7, e.y = 27.33, e
    }, t.goldText_i = function() {
        var e = new eui.BitmapLabel;
        return this.goldText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 30, e.text = "99999", e.width = 141.67, e.x = 35.83, e.y = 12.99, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 306, e.y = 100, e.elementsContent = [this._Image5_i(), this.diamondImg_i(), this.daimondText_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "laohuji2_png", e.x = 0, e.y = 0, e
    }, t.diamondImg_i = function() {
        var e = new eui.Image;
        return this.diamondImg = e, e.anchorOffsetX = 33.33, e.anchorOffsetY = 27.78, e.scaleX = .9, e.scaleY = .9, e.source = "icon_gem_png", e.x = 16.96, e.y = 27.66, e
    }, t.daimondText_i = function() {
        var e = new eui.BitmapLabel;
        return this.daimondText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.text = "99999", e.width = 152.33, e.x = 44.33, e.y = 10.33, e
    }, t.addRate_i = function() {
        var e = new eui.Group;
        return this.addRate = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 48, e.horizontalCenter = -.5, e.verticalCenter = 193, e.width = 121.33, e.elementsContent = [this._Image6_i(), this._Image7_i(), this.rate_i(), this._Image8_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 50, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(64, 31, 5, 7), e.source = "btn_yellow4_png", e.verticalCenter = 0, e.width = 120, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .45, e.scaleY = .45, e.source = "beishux_png", e.x = 34, e.y = 9, e
    }, t.rate_i = function() {
        var e = new eui.BitmapLabel;
        return this.rate = e, e.font = "baikuanzi_fnt", e.scaleX = .5, e.scaleY = .5, e.text = "9", e.x = 92, e.y = 10, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .3, e.scaleY = .3, e.source = "tuji8_json.renwu6_png", e.x = 11, e.y = 8, e
    }, t.startBtn_i = function() {
        var e = new eui.Group;
        return this.startBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.horizontalCenter = -3.5, e.verticalCenter = 406.5, e.elementsContent = [this._Image9_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "laohuji1_png", e.x = 0, e.y = 0, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.horizontalCenter = -.5, e.verticalCenter = 243, e.width = 313, e.elementsContent = [this.loadBar_i(), this.count_i()], e
    }, t.loadBar_i = function() {
        var e = new eui.Image;
        return this.loadBar = e, e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(29, 14, 174, 3), e.source = "laohuji4_png", e.width = 316, e.x = -2.01, e.y = 1.13, e
    }, t.count_i = function() {
        var e = new eui.BitmapLabel;
        return this.count = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.56, e.scaleX = .8, e.scaleY = .8, e.text = "100/100", e.width = 143.16, e.x = 108, e.y = 3.66, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.height = 22, e.horizontalCenter = 3, e.verticalCenter = 280, e.width = 150, e.elementsContent = [this._Label1_i()], e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.textAlign = "center", e.size = 12, e.text = "EACH SPIN INCREASES\nIN MULTIPLES", e.textColor = 0, e.x = 5, e.y = -1, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.height = 50, e.horizontalCenter = 0, e.verticalCenter = -170, e.width = 250, e.elementsContent = [this.awardText_i()], e
    }, t.awardText_i = function() {
        var e = new eui.BitmapLabel;
        return this.awardText = e, e.anchorOffsetX = 0, e.font = "donghuazi_fnt", e.scaleX = .3, e.scaleY = .3, e.text = "m1", e.textAlign = "center", e.width = 797.71, e.x = 6.48, e.y = 3, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.horizontalCenter = 4, e.verticalCenter = -262, e.width = 230, e.elementsContent = [this._Image10_i(), this.luckyCoin_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "yingbix_png", e.x = 10, e.y = 7, e
    }, t.luckyCoin_i = function() {
        var e = new eui.BitmapLabel;
        return this.luckyCoin = e, e.font = "baikuanzi_fnt", e.scaleX = .75, e.scaleY = .75, e.text = "123", e.x = 156, e.y = 12, e
    }, t.addBtn_i = function() {
        var e = new eui.Group;
        return this.addBtn = e, e.height = 150, e.horizontalCenter = -256, e.verticalCenter = 408, e.width = 150, e.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "hechengdiaoxiang_png", e.x = -2, e.y = -2, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "zengjiacishu_png", e.x = 5.67, e.y = 116, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "tuji8_json.renwu6_png", e.x = 44, e.y = 87, e
    }, t.helpBtn_i = function() {
        var e = new eui.Group;
        return this.helpBtn = e, e.height = 110, e.width = 90, e.x = 622.01, e.y = 162, e.elementsContent = [this._Image14_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .65, e.scaleY = .65, e.source = "wanfa_png", e.verticalCenter = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/LaoHuJiWanFaView.exml"] = window.LaoHuJiWanFaViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["okBtn", "goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.alpha = 0, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 720, e.horizontalCenter = 0, e.verticalCenter = -84, e.width = 650, e.elementsContent = [this._Image3_i(), this.okBtn_i(), this._Image7_i(), this.goBack_i(), this._Image9_i(), this._Image10_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 600, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(95, 194, 410, 468), e.scaleX = 1, e.scaleY = 1, e.source = "gyUI_png", e.verticalCenter = 0, e.width = 630, e.x = 10, e.y = 10, e
    }, t.okBtn_i = function() {
        var e = new eui.Group;
        return this.okBtn = e, e.anchorOffsetY = 0, e.x = 254, e.y = 565.68, e.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(64, 31, 5, 7), e.source = "btn_yellow4_png", e.verticalCenter = 0, e.width = 160, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .69, e.source = "yingyingls1_png", e.visible = !1, e.x = 1.61, e.y = 1.95, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "tuji3_json.quedingT_png", e.x = 38, e.y = 17, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "txt_tip_png", e.x = 284, e.y = 106, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.scaleX = 1, e.scaleY = 1, e.x = 578, e.y = 116, e.elementsContent = [this._Image8_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 350, e.scale9Grid = new egret.Rectangle(72, 24, 436, 150), e.source = "gyUI1_png", e.width = 540, e.x = 55, e.y = 209.67, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = 1.2, e.scaleY = 1.2, e.source = "laohujiwanfa1_png", e.y = 226.01, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/LiXianLiBaoView.exml"] = window.LiXianLiBaoViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["freeImg", "freeDoubGro", "videoImg", "freeGro", "lingqu", "goldText", "diamondText", "goldText0", "diamondText0", "awardGro", "okImg", "selBtn", "goBack", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group10_i(), this.goBack_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.lingqu_i(), this.awardGro_i(), this._Image38_i(), this._Group9_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(270, 489, 4, 7), e.scaleY = .7, e.source = "gyUI_png", e.verticalCenter = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 340, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(27, 25, 533, 152), e.source = "gyUI1_png", e.verticalCenter = -.5, e.width = 530, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "txt_offline_png", e.x = 272.58, e.y = 27.04, e
    }, t.lingqu_i = function() {
        var e = new eui.Group;
        return this.lingqu = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.horizontalCenter = .5, e.verticalCenter = 264.5, e.elementsContent = [this._Image5_i(), this._Image6_i(), this.freeDoubGro_i(), this.videoImg_i(), this.freeGro_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .68, e.scaleY = .7, e.source = "yingyingls1_png", e.visible = !1, e.x = 12, e.y = 2, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 100, e.scale9Grid = new egret.Rectangle(69, 35, 2, 2), e.source = "btn_yellow4_png", e.width = 200, e.x = 11, e.y = 0, e
    }, t.freeDoubGro_i = function() {
        var e = new eui.Group;
        return this.freeDoubGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 45.34, e.visible = !1, e.width = 186.67, e.x = 17.33, e.y = 23.33, e.elementsContent = [this.freeImg_i(), this._Image7_i()], e
    }, t.freeImg_i = function() {
        var e = new eui.Image;
        return this.freeImg = e, e.scaleX = .6, e.scaleY = .6, e.source = "liangbeishouyi_png", e.x = 62.31999999999999, e.y = 6.680000000000064, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.source = "tuji3_json.mianfeiT_png", e.x = -1.329999999999984, e.y = 5.670000000000073, e
    }, t.videoImg_i = function() {
        var e = new eui.Group;
        return this.videoImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 52, e.visible = !1, e.width = 146, e.x = 36, e.y = 19, e.elementsContent = [this._Image8_i(), this._Image9_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "liangbeishouyi_png", e.x = 31.649999999999977, e.y = 10.009999999999991, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "erwaishouyi_png", e.x = 30.24, e.y = 10.62, e
    }, t.freeGro_i = function() {
        var e = new eui.Group;
        return this.freeGro = e, e.height = 80, e.width = 150, e.x = 37.67, e.y = 6.65, e.elementsContent = [this._Image10_i(), this._Image11_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "tuji3_json.lingquT_png", e.x = 69.02, e.y = 20, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "tuji3_json.mianfeiT_png", e.x = -2.99, e.y = 20, e
    }, t.awardGro_i = function() {
        var e = new eui.Group;
        return this.awardGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 130, e.horizontalCenter = -1, e.verticalCenter = -9.5, e.width = 717.33, e.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Group8_i()], e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 57.58, e.anchorOffsetY = 62.12, e.height = 125.33, e.scaleX = 1, e.scaleY = 1, e.x = 156.9, e.y = 62.12, e.elementsContent = [this._Image12_i(), this._Image13_i(), this.goldText_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.scaleX = .92, e.scaleY = .92, e.source = "tuji7_json.frame3_png", e.verticalCenter = .5, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .95, e.scaleY = .95, e.source = "gift_coin_icon_png", e.x = 20, e.y = 18, e
    }, t.goldText_i = function() {
        var e = new eui.BitmapLabel;
        return this.goldText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 45.86, e.scaleX = .35, e.scaleY = .35, e.text = "99999", e.width = 193.14, e.x = 42, e.y = 91.69, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 56.06, e.anchorOffsetY = 60.61, e.scaleX = 1, e.scaleY = 1, e.x = 291.04, e.y = 60.61, e.elementsContent = [this._Image14_i(), this._Image15_i(), this.diamondText_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "frame_png", e.verticalCenter = 0, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "icon_gem_png", e.x = 25, e.y = 32, e
    }, t.diamondText_i = function() {
        var e = new eui.BitmapLabel;
        return this.diamondText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 45.86, e.scaleX = .35, e.scaleY = .35, e.text = "9999", e.width = 161.71, e.x = 48, e.y = 92.69, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 65.15, e.anchorOffsetY = 62.12, e.height = 126, e.scaleX = 1, e.scaleY = 1, e.x = 427.48, e.y = 62.11, e.elementsContent = [this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this._Image20_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.scaleX = .92, e.scaleY = .92, e.source = "tuji7_json.frame2_png", e.verticalCenter = .5, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "ewaiui_png", e.x = 69.37, e.y = -7.33, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_gain1_png", e.x = 39, e.y = 29.68, e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.rotation = 359.85, e.source = "entrance_gain2_png", e.x = 31, e.y = 85.67, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 31.5, e.source = "entrance_gain3_png", e.verticalCenter = 35.5, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 60.61, e.anchorOffsetY = 62.12, e.height = 125, e.scaleX = 1, e.scaleY = 1, e.x = 558.59, e.y = 62.12, e.elementsContent = [this._Image21_i(), this._Image22_i(), this._Image23_i(), this._Image24_i()], e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "tuji7_json.frame2_png", e.verticalCenter = 0, e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "tuji1_json.gift_auto_compose_icon_png", e.x = 27, e.y = 22, e
    }, t._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "ewaiui_png", e.x = 61.37, e.y = -4.33, e
    }, t._Image24_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "zidonghecheng_png", e.x = 23.34, e.y = 81.33, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 57.58, e.anchorOffsetY = 62.12, e.height = 125.33, e.scaleX = 1, e.scaleY = 1, e.visible = !1, e.x = 222.64, e.y = 63.03, e.elementsContent = [this._Image25_i(), this._Image26_i(), this.goldText0_i()], e
    }, t._Image25_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.scaleX = .92, e.scaleY = .92, e.source = "tuji7_json.frame3_png", e.verticalCenter = .5, e
    }, t._Image26_i = function() {
        var e = new eui.Image;
        return e.scaleX = .95, e.scaleY = .95, e.source = "gift_coin_icon_png", e.x = 20, e.y = 18, e
    }, t.goldText0_i = function() {
        var e = new eui.BitmapLabel;
        return this.goldText0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 45.86, e.scaleX = .35, e.scaleY = .35, e.text = "99999", e.width = 193.14, e.x = 42, e.y = 91.69, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 56.06, e.anchorOffsetY = 60.61, e.scaleX = 1, e.scaleY = 1, e.visible = !1, e.x = 356.78, e.y = 61.52, e.elementsContent = [this._Image27_i(), this._Image28_i(), this.diamondText0_i()], e
    }, t._Image27_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "frame_png", e.verticalCenter = 0, e
    }, t._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "icon_gem_png", e.x = 25, e.y = 32, e
    }, t.diamondText0_i = function() {
        var e = new eui.BitmapLabel;
        return this.diamondText0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 45.86, e.scaleX = .35, e.scaleY = .35, e.text = "9999", e.width = 161.71, e.x = 48, e.y = 92.69, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 65.15, e.anchorOffsetY = 62.12, e.height = 126, e.scaleX = 1, e.scaleY = 1, e.visible = !1, e.x = 493.22, e.y = 63.02, e.elementsContent = [this._Image29_i(), this._Image30_i(), this._Image31_i(), this._Image32_i(), this._Image33_i()], e
    }, t._Image29_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.scaleX = .92, e.scaleY = .92, e.source = "tuji7_json.frame2_png", e.verticalCenter = .5, e
    }, t._Image30_i = function() {
        var e = new eui.Image;
        return e.source = "ewaiui_png", e.x = 69.37, e.y = -7.33, e
    }, t._Image31_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_gain1_png", e.x = 39, e.y = 29.68, e
    }, t._Image32_i = function() {
        var e = new eui.Image;
        return e.rotation = 359.85, e.source = "entrance_gain2_png", e.x = 31, e.y = 85.67, e
    }, t._Image33_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 31.5, e.source = "entrance_gain3_png", e.verticalCenter = 35.5, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 60.61, e.anchorOffsetY = 62.12, e.height = 125, e.scaleX = 1, e.scaleY = 1, e.visible = !1, e.x = 694.33, e.y = 63.03, e.elementsContent = [this._Image34_i(), this._Image35_i(), this._Image36_i(), this._Image37_i()], e
    }, t._Image34_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "tuji7_json.frame2_png", e.verticalCenter = 0, e
    }, t._Image35_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "tuji1_json.gift_auto_compose_icon_png", e.x = 27, e.y = 22, e
    }, t._Image36_i = function() {
        var e = new eui.Image;
        return e.source = "ewaiui_png", e.x = 61.37, e.y = -4.33, e
    }, t._Image37_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "zidonghecheng_png", e.x = 23.34, e.y = 81.33, e
    }, t._Image38_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -5.5, e.scaleX = .6, e.scaleY = .6, e.source = "lixianhuodele_png", e.y = 199, e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 40, e.horizontalCenter = 0, e.width = 289, e.y = 495, e.elementsContent = [this._Image39_i(), this.selBtn_i()], e
    }, t._Image39_i = function() {
        var e = new eui.Image;
        return e.source = "renwuerwaijiangli_png", e.x = 30, e.y = 6, e
    }, t.selBtn_i = function() {
        var e = new eui.Group;
        return this.selBtn = e, e.height = 30, e.width = 30, e.x = 4.35, e.y = 5, e.elementsContent = [this._Image40_i(), this.okImg_i()], e
    }, t._Image40_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "lixiankuang_png", e.x = 1, e.y = 1, e
    }, t.okImg_i = function() {
        var e = new eui.Image;
        return this.okImg = e, e.scaleX = .6, e.scaleY = .6, e.source = "tuji9_json.ok2_png", e.x = 3, e.y = 5, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 281, e.scaleX = .85, e.scaleY = .85, e.verticalCenter = -241, e.elementsContent = [this._Image41_i()], e
    }, t._Image41_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/MengGuo1View.exml"] = window.MengGuo1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["xiyouImg", "animaGro", "chuzhanPlant", "dspine", "chuzhanPlantText", "tipText", "loadbg", "loadImg", "arrow", "plantlevel", "plantNum", "chuzhanbtn", "videoUpStar", "starUp", "zhanliText", "attactText", "addAttack", "extraGro", "continueHurt", "frequencyText", "scopeText", "feiliao", "gongjiText", "jieshao", "videoTip", "goBack", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group12_i(), this.goBack_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group12_i = function() {
        var e = new eui.Group;
        return e.height = 780, e.horizontalCenter = .5, e.verticalCenter = -50, e.width = 603, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Group1_i(), this._Group2_i(), this.chuzhanbtn_i(), this.starUp_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Group8_i(), this._Group11_i(), this.videoTip_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 780, e.scale9Grid = new egret.Rectangle(98, 485, 406, 15), e.scaleX = 1, e.scaleY = 1, e.source = "gyUI_png", e.top = 0, e.x = 3, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "shengxingT_png", e.x = 245, e.y = 35.32, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.x = 46.97, e.y = 228.74, e.elementsContent = [this.xiyouImg_i(), this._Image4_i(), this.animaGro_i(), this.chuzhanPlant_i(), this.dspine_i(), this.chuzhanPlantText_i(), this.tipText_i()], e
    }, t.xiyouImg_i = function() {
        var e = new eui.Image;
        return this.xiyouImg = e, e.scaleX = .5, e.scaleY = .55, e.source = "new_tower_quality_tag1_png", e.x = -20.01, e.y = -81.65, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "light_tower_upgrade_png", e.x = -7.34, e.y = 6.01, e
    }, t.animaGro_i = function() {
        var e = new eui.Group;
        return this.animaGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 191, e.width = 171, e.y = 2, e
    }, t.chuzhanPlant_i = function() {
        var e = new eui.Image;
        return this.chuzhanPlant = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu1_png", e.visible = !1, e.x = -34, e.y = -3, e
    }, t.dspine_i = function() {
        var e = new DragonSpine;
        return this.dspine = e, e.height = 180, e.width = 156, e.x = 8.68, e.y = 8.68, e
    }, t.chuzhanPlantText_i = function() {
        var e = new eui.Image;
        return this.chuzhanPlantText = e, e.scaleX = .8, e.scaleY = .8, e.source = "zhiwuzi1_png", e.x = 30.98, e.y = -76.97, e
    }, t.tipText_i = function() {
        var e = new eui.Image;
        return this.tipText = e, e.scaleX = .8, e.scaleY = .8, e.source = "lock_png", e.visible = !1, e.x = 52.35, e.y = 67, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 45, e.width = 267, e.x = 220.41, e.y = 150.17, e.elementsContent = [this.loadbg_i(), this.loadImg_i(), this._Image5_i(), this.arrow_i(), this.plantlevel_i(), this.plantNum_i()], e
    }, t.loadbg_i = function() {
        var e = new eui.Image;
        return this.loadbg = e, e.scale9Grid = new egret.Rectangle(16, 15, 34, 10), e.scaleY = .75, e.source = "bar_bg2_png", e.width = 180, e.x = 45.25, e.y = 8.69, e
    }, t.loadImg_i = function() {
        var e = new eui.Image;
        return this.loadImg = e, e.anchorOffsetY = 0, e.height = 33.23, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .66, e.scaleY = .8, e.source = "bar_bg1_png", e.x = 54.45, e.y = 10.72, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "bg_lv_big_png", e.x = 20.32, e.y = -1, e
    }, t.arrow_i = function() {
        var e = new eui.Image;
        return this.arrow = e, e.scaleX = .6, e.scaleY = .6, e.source = "icon_up_new_png", e.x = 195.25, e.y = 5.21, e
    }, t.plantlevel_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantlevel = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 50.67, e.scaleX = .4, e.scaleY = .4, e.text = "99", e.width = 83, e.x = 27.99, e.y = 12.02, e
    }, t.plantNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.56, e.scaleX = .6, e.scaleY = .6, e.text = "99/10", e.width = 100.66, e.x = 107.26, e.y = 15.51, e
    }, t.chuzhanbtn_i = function() {
        var e = new eui.Group;
        return this.chuzhanbtn = e, e.anchorOffsetY = 0, e.x = 105.99, e.y = 631.67, e.elementsContent = [this._Image6_i(), this._Image7_i(), this._Image8_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(64, 31, 5, 7), e.source = "btn_yellow4_png", e.verticalCenter = 0, e.width = 160, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .69, e.source = "yingyingls1_png", e.visible = !1, e.x = 1.61, e.y = 1.95, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "shangzhengT_png", e.x = 17, e.y = 15, e
    }, t.starUp_i = function() {
        var e = new eui.Group;
        return this.starUp = e, e.anchorOffsetY = 0, e.x = 349.64, e.y = 633.67, e.elementsContent = [this._Image9_i(), this.videoUpStar_i(), this._Image10_i(), this._Image11_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .75, e.scaleY = .85, e.source = "btn_blue5_png", e.verticalCenter = 0, e
    }, t.videoUpStar_i = function() {
        var e = new eui.Image;
        return this.videoUpStar = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 39.3, e.horizontalCenter = -54, e.scaleX = .75, e.scaleY = .85, e.source = "icon_ad_png", e.verticalCenter = -3.5, e.width = 42.91, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .65, e.source = "yingyingls_png", e.visible = !1, e.x = 1.32, e.y = 1.3, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "shengxingT_png", e.x = 26, e.y = 13, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 40, e.width = 298.67, e.x = 229.66, e.y = 214.02, e.elementsContent = [this._Image12_i(), this.zhanliText_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "gs_png", e.x = 2.64, e.y = 1.5, e
    }, t.zhanliText_i = function() {
        var e = new eui.BitmapLabel;
        return this.zhanliText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 50.67, e.scaleX = .7, e.scaleY = .7, e.text = "9999.5", e.width = 320.34, e.x = 102.36, e.y = 3.67, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 30, e.width = 360, e.x = 229, e.y = 266.02, e.elementsContent = [this.attactText_i(), this._BitmapLabel1_i(), this._BitmapLabel2_i(), this.extraGro_i()], e
    }, t.attactText_i = function() {
        var e = new eui.BitmapLabel;
        return this.attactText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huang1_fnt", e.scaleX = .8, e.scaleY = .8, e.text = "1.90K1", e.width = 147, e.x = 102, e.y = 4.65, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.scaleX = .75, e.scaleY = .75, e.text = "+", e.visible = !1, e.width = 26, e.x = 203, e.y = 4, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .6, e.scaleY = .6, e.text = "ATTACK\nDAMAGE", e.width = 110, e.x = 2.01, e.y = 3, e
    }, t.extraGro_i = function() {
        var e = new eui.Group;
        return this.extraGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 23, e.width = 154.84, e.x = 203.4, e.y = 4, e.elementsContent = [this.addAttack_i()], e
    }, t.addAttack_i = function() {
        var e = new eui.BitmapLabel;
        return this.addAttack = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.scaleX = .8, e.scaleY = .8, e.text = "+109.", e.width = 188.57, e.x = 1.98, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.width = 300, e.x = 229, e.y = 307.05, e.elementsContent = [this.continueHurt_i(), this._BitmapLabel3_i()], e
    }, t.continueHurt_i = function() {
        var e = new eui.BitmapLabel;
        return this.continueHurt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huang1_fnt", e.scaleX = .8, e.scaleY = .8, e.text = "1.90K", e.width = 147, e.x = 102, e.y = 2.65, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .6, e.scaleY = .6, e.text = "CONTINUOUS\nDAMAGE", e.width = 180, e.x = 2.01, e.y = 3, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.width = 300, e.x = 229, e.y = 350.1, e.elementsContent = [this.frequencyText_i(), this._BitmapLabel4_i()], e
    }, t.frequencyText_i = function() {
        var e = new eui.BitmapLabel;
        return this.frequencyText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huang1_fnt", e.scaleX = .8, e.scaleY = .8, e.text = "1.90K", e.width = 147, e.x = 102, e.y = 2.65, e
    }, t._BitmapLabel4_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .6, e.scaleY = .6, e.text = "ATTACK\nSPEED", e.width = 110, e.x = 2.01, e.y = 3, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.width = 300, e.x = 229, e.y = 394.48, e.elementsContent = [this.scopeText_i(), this._BitmapLabel5_i()], e
    }, t.scopeText_i = function() {
        var e = new eui.BitmapLabel;
        return this.scopeText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huang1_fnt", e.scaleX = .8, e.scaleY = .8, e.text = "1.90K", e.width = 147, e.x = 102, e.y = 3.65, e
    }, t._BitmapLabel5_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .6, e.scaleY = .6, e.text = "ATTACK\nRANGE", e.width = 110, e.x = 2.01, e.y = 2, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 25, e.width = 229, e.x = 313.66, e.y = 587.68, e.elementsContent = [this.feiliao_i(), this._Image13_i()], e
    }, t.feiliao_i = function() {
        var e = new eui.BitmapLabel;
        return this.feiliao = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.83, e.rotation = 359.94, e.text = "99999/500", e.width = 216.32, e.x = 38.67, e.y = -2.32, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "gift_manue_icon_png", e.x = -.65, e.y = -7.32, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.height = 100, e.width = 500, e.x = 52, e.y = 454, e.elementsContent = [this._Image14_i(), this._Group9_i(), this._Group10_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "duihuakuangziT_png", e.verticalCenter = 0, e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.x = 47.66, e.y = 21.02, e.elementsContent = [this.gongjiText_i(), this._Label1_i(), this._Label2_i(), this._Label3_i()], e
    }, t.gongjiText_i = function() {
        var e = new eui.Label;
        return this.gongjiText = e, e.bold = !0, e.fontFamily = "SimHei", e.scaleX = 1, e.scaleY = 1, e.size = 24, e.text = "Attack the single", e.textColor = 1154321, e.x = 0, e.y = 0, e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "SimHei", e.scaleX = 1, e.scaleY = 1, e.size = 24, e.text = "Attack the control", e.textColor = 1154321, e.visible = !1, e.x = 0, e.y = 0, e
    }, t._Label2_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "SimHei", e.scaleX = 1, e.scaleY = 1, e.size = 24, e.text = "Attack the poison", e.textColor = 1154321, e.visible = !1, e.x = 0, e.y = 0, e
    }, t._Label3_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "SimHei", e.scaleX = 1, e.scaleY = 1, e.size = 24, e.text = "Attack the crowd", e.textColor = 1154321, e.visible = !1, e.x = 0, e.y = 0, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 40, e.width = 390, e.x = 47.65, e.y = 49.32, e.elementsContent = [this.jieshao_i()], e
    }, t.jieshao_i = function() {
        var e = new eui.Label;
        return this.jieshao = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "SimHei", e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.size = 20, e.text = "用源源不断的仙人掌刺将敌人突突死。", e.textAlign = "left", e.textColor = 5256217, e.verticalAlign = "middle", e.verticalCenter = -6, e.width = 384.33, e
    }, t.videoTip_i = function() {
        var e = new eui.Label;
        return this.videoTip = e, e.bold = !0, e.size = 20, e.text = "Watch video to complete the\nrequired upgrade materials", e.textAlign = "center", e.verticalAlign = "middle", e.x = 300, e.y = 720, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 270, e.verticalCenter = -340, e.elementsContent = [this._Image15_i()], e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/MengGuo3View.exml"] = window.MengGuo3ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["plantGro", "titleBg", "plantTypeImg"], this.height = 460, this.width = 720, this.elementsContent = [this.plantGro_i(), this._Group1_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.plantGro_i = function() {
        var e = new eui.Group;
        return this.plantGro = e, e.anchorOffsetX = 0, e.height = 460, e.horizontalCenter = 0, e.verticalCenter = 1, e.width = 720, e.elementsContent = [this._PlantItem1_i(), this._PlantItem2_i(), this._PlantItem3_i(), this._PlantItem4_i()], e
    }, t._PlantItem1_i = function() {
        var e = new PlantItem;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 260, e.width = 175, e.x = .45, e.y = 170, e
    }, t._PlantItem2_i = function() {
        var e = new PlantItem;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 260, e.width = 175, e.x = 180.45, e.y = 170, e
    }, t._PlantItem3_i = function() {
        var e = new PlantItem;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 260, e.width = 175, e.x = 363.45, e.y = 170, e
    }, t._PlantItem4_i = function() {
        var e = new PlantItem;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 260, e.width = 175, e.x = 543.45, e.y = 170, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -147, e.elementsContent = [this.titleBg_i(), this.plantTypeImg_i()], e
    }, t.titleBg_i = function() {
        var e = new eui.Image;
        return this.titleBg = e, e.scaleX = .7, e.scaleY = .7, e.source = "title_green_new1_png", e.x = 0, e.y = 0, e
    }, t.plantTypeImg_i = function() {
        var e = new eui.Image;
        return this.plantTypeImg = e, e.scaleX = .8, e.scaleY = .8, e.source = "txt_tower_class1_png", e.x = 105, e.y = 7, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/MengGuoView.exml"] = window.MengGuoViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList0", "loadBg", "toolload", "tooltext", "toollevel", "toolArrow", "chanzi", "toolGro", "mergelock", "mergeGro", "t1", "tip", "scroller", "goBack", "feiliaoText", "zuanshiText"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.scroller_i(), this.goBack_i(), this._Group4_i(), this._Group5_i(), this._Group7_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = -140, e.left = 0, e.right = 0, e.source = "menu_bg1_png", e.top = -139, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.bottom = 0, e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "dec1_png", e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.left = -29, e.right = -30, e.scaleX = .9, e.scaleY = .9, e.source = "dec2_png", e.top = 0, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 7, e.horizontalCenter = 0, e.top = 155, e.verticalCenter = 74, e.width = 720, e.viewport = this._Group3_i(), e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 1122, e.width = 540, e.x = -13.64, e.elementsContent = [this.dataList0_i(), this._Group1_i(), this.toolGro_i(), this.mergeGro_i(), this.tip_i()], e
    }, t.dataList0_i = function() {
        var e = new eui.List;
        return this.dataList0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = MengGuo3ViewSkin, e.width = 720, e.x = 0, e.y = -.67, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.paddingLeft = 0, e.paddingTop = 320, e.verticalGap = 20, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 7, e.top = 4, e.elementsContent = [this._Image4_i(), this._Image5_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "title_green_new1_png", e.x = 0, e.y = 0, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "txt_tool_png", e.x = 128, e.y = 12, e
    }, t.toolGro_i = function() {
        var e = new eui.Group;
        return this.toolGro = e, e.x = 148, e.y = 88, e.elementsContent = [this._Image6_i(), this._Group2_i(), this.chanzi_i(), this._Image8_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .75, e.source = "card_bg1_1_png", e.x = 0, e.y = 0, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 35.2, e.scaleX = 1, e.scaleY = 1, e.width = 159.6, e.x = -6.670000000000016, e.y = -7.029999999999973, e.elementsContent = [this.loadBg_i(), this.toolload_i(), this.tooltext_i(), this._Image7_i(), this.toollevel_i(), this.toolArrow_i()], e
    }, t.loadBg_i = function() {
        var e = new eui.Image;
        return this.loadBg = e, e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(32, 21, 1, 1), e.scaleY = .6, e.source = "bar_bg2_png", e.width = 157.5, e.x = 26, e.y = 7.17, e
    }, t.toolload_i = function() {
        var e = new eui.Image;
        return this.toolload = e, e.anchorOffsetY = 0, e.height = 33.23, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .7, e.scaleY = .63, e.source = "bar_bg1_png", e.x = 27, e.y = 8.8, e
    }, t.tooltext_i = function() {
        var e = new eui.BitmapLabel;
        return this.tooltext = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.56, e.scaleX = .6, e.scaleY = .6, e.text = "99/10", e.width = 100.66, e.x = 73, e.y = 9.99, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "bg_lv_big_png", e.x = 3.17, e.y = -5.02, e
    }, t.toollevel_i = function() {
        var e = new eui.BitmapLabel;
        return this.toollevel = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 50.67, e.scaleX = .4, e.scaleY = .4, e.text = "99", e.width = 76.33, e.x = 9.17, e.y = 6.66, e
    }, t.toolArrow_i = function() {
        var e = new eui.Image;
        return this.toolArrow = e, e.scaleX = .5, e.scaleY = .5, e.source = "icon_up_new_png", e.x = 159.67, e.y = 3.99, e
    }, t.chanzi_i = function() {
        var e = new eui.Image;
        return this.chanzi = e, e.scaleX = .75, e.scaleY = .75, e.source = "builder_png", e.x = 36, e.y = 48, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "zhongzhigongjuT_png", e.x = 7.99, e.y = 203, e
    }, t.mergeGro_i = function() {
        var e = new eui.Group;
        return this.mergeGro = e, e.width = 190, e.x = 412.35, e.y = 89.33, e.elementsContent = [this._Image9_i(), this._Image10_i(), this._Image11_i(), this.mergelock_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .75, e.source = "tuji4_json.card_bg3_png", e.y = 1.34, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "chaojihecheng_png", e.x = 21, e.y = 201.67, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .7, e.source = "hechengdiaoxiang_png", e.x = 13.35, e.y = 17, e
    }, t.mergelock_i = function() {
        var e = new eui.Image;
        return this.mergelock = e, e.source = "tuji4_json.lock_png", e.x = 69, e.y = 86, e
    }, t.tip_i = function() {
        var e = new eui.Group;
        return this.tip = e, e.height = 50, e.width = 50, e.x = 562.32, e.y = 74.99, e.elementsContent = [this._Image12_i(), this.t1_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "info1_png", e.x = 6, e.y = 2, e
    }, t.t1_i = function() {
        var e = new eui.Image;
        return this.t1 = e, e.anchorOffsetX = 10.67, e.anchorOffsetY = 17.78, e.scaleX = .75, e.scaleY = .75, e.source = "info2_png", e.x = 25.33, e.y = 20.65, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.left = 17, e.top = 55, e.elementsContent = [this._Image13_i()], e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "btn_back1_png", e.x = 0, e.y = 0, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 193, e.y = 76, e.elementsContent = [this._Image14_i(), this._Image15_i(), this.feiliaoText_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .85, e.source = "res_bg1_png", e.x = 0, e.y = 0, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "gift_manue_icon_png", e.x = -23.39, e.y = -4, e
    }, t.feiliaoText_i = function() {
        var e = new eui.BitmapLabel;
        return this.feiliaoText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 33.33, e.text = "999999", e.width = 125.34, e.x = 25.67, e.y = 7, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 384, e.y = 79, e.elementsContent = [this._Image16_i(), this._Image17_i(), this.zuanshiText_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .85, e.source = "res_bg1_png", e.x = 0, e.y = 0, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "icon_gem_png", e.x = -20.37, e.y = 0, e
    }, t.zuanshiText_i = function() {
        var e = new eui.BitmapLabel;
        return this.zuanshiText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 34, e.text = "999999", e.width = 122.67, e.x = 34.3, e.y = 7, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.visible = !1, e.x = 408, e.y = 294, e.elementsContent = [this._Image18_i(), this._Group6_i(), this._Image23_i()], e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .65, e.source = "card_bg1_1_png", e.x = 0, e.y = 0, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 35.2, e.scaleX = 1, e.scaleY = 1, e.width = 159.6, e.x = -6.67, e.y = -7.05, e.elementsContent = [this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Image22_i()], e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(32, 21, 1, 1), e.scaleY = .6, e.source = "bar_bg2_png", e.width = 133.5, e.x = 26, e.y = 7.17, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetY = 0, e.height = 33.23, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .7, e.scaleY = .63, e.source = "bar_bg1_png", e.x = 27, e.y = 8.8, e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "bg_lv_big_png", e.x = 3.17, e.y = -1.02, e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "icon_up_new_png", e.x = 138.3400000000001, e.y = 3.079999999999984, e
    }, t._Image23_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "Sslot12_png", e.x = 37.34, e.y = 52, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/PaiHangPang1View.exml"] = window.PaiHangPang1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["oneImg", "spine1", "threeImg", "spine3", "twoImg", "spine2", "oneName", "oneLevel", "twoName", "twoLevel", "threeName", "threeLevel", "viptext2", "vip2", "viptext1", "vip1", "viptext3", "vip3"], this.height = 270, this.width = 503, this.elementsContent = [this._Image1_i(), this._Group2_i(), this._Group4_i(), this._Group6_i(), this._Group7_i(), this._Group8_i(), this._Group9_i(), this._Group10_i(), this._Group11_i(), this._Group12_i(), this.vip2_i(), this.vip1_i(), this.vip3_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .7, e.source = "rank_1_png", e.verticalCenter = -12.5, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 172, e.y = 45.34, e.elementsContent = [this.oneImg_i(), this._Group1_i()], e
    }, t.oneImg_i = function() {
        var e = new eui.Image;
        return this.oneImg = e, e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .6, e.source = "zhiwu1_png", e.verticalCenter = 0, e.visible = !1, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 150, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 150, e.elementsContent = [this.spine1_i()], e
    }, t.spine1_i = function() {
        var e = new DragonSpine;
        return this.spine1 = e, e.anchorOffsetX = 75, e.anchorOffsetY = 75, e.height = 150, e.width = 150, e.x = 75, e.y = 75, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 150, e.x = 324.3, e.y = 74.03, e.elementsContent = [this.threeImg_i(), this._Group3_i()], e
    }, t.threeImg_i = function() {
        var e = new eui.Image;
        return this.threeImg = e, e.horizontalCenter = 0, e.scaleX = .5, e.scaleY = .5, e.source = "zhiwu1_png", e.verticalCenter = 0, e.visible = !1, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 150, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 150, e.elementsContent = [this.spine3_i()], e
    }, t.spine3_i = function() {
        var e = new DragonSpine;
        return this.spine3 = e, e.anchorOffsetX = 75, e.anchorOffsetY = 75, e.height = 150, e.width = 150, e.x = 75, e.y = 75.33, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 150, e.width = 150, e.x = 12.34, e.y = 65.67, e.elementsContent = [this.twoImg_i(), this._Group5_i()], e
    }, t.twoImg_i = function() {
        var e = new eui.Image;
        return this.twoImg = e, e.horizontalCenter = 0, e.scaleX = .5, e.scaleY = .5, e.source = "zhiwu1_png", e.verticalCenter = 0, e.visible = !1, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 150, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 150, e.elementsContent = [this.spine2_i()], e
    }, t.spine2_i = function() {
        var e = new DragonSpine;
        return this.spine2 = e, e.anchorOffsetX = 75, e.anchorOffsetY = 75, e.height = 150, e.width = 150, e.x = 75, e.y = 75, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.height = 35, e.horizontalCenter = .5, e.verticalCenter = -116.5, e.width = 150, e.x = 177, e.elementsContent = [this.oneName_i()], e
    }, t.oneName_i = function() {
        var e = new eui.Label;
        return this.oneName = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "SimHei", e.height = 35, e.horizontalCenter = .5, e.size = 30, e.text = "名字名字", e.textAlign = "center", e.verticalAlign = "middle", e.width = 149, e.y = -3, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.height = 35, e.width = 150, e.x = 177, e.y = 38, e.elementsContent = [this.oneLevel_i()], e
    }, t.oneLevel_i = function() {
        var e = new eui.BitmapLabel;
        return this.oneLevel = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 46, e.horizontalCenter = 0, e.scaleX = .4, e.scaleY = .4, e.text = "123456千万亿", e.textAlign = "center", e.verticalCenter = -.5, e.width = 371, e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.height = 35, e.horizontalCenter = -168.5, e.verticalCenter = -116.5, e.width = 150, e.elementsContent = [this.twoName_i()], e
    }, t.twoName_i = function() {
        var e = new eui.Label;
        return this.twoName = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "SimHei", e.height = 34, e.horizontalCenter = .5, e.size = 30, e.text = "名字名字", e.textAlign = "center", e.verticalAlign = "middle", e.width = 147, e.y = -2, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.height = 35, e.width = 150, e.x = 8, e.y = 38, e.elementsContent = [this.twoLevel_i()], e
    }, t.twoLevel_i = function() {
        var e = new eui.BitmapLabel;
        return this.twoLevel = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 46, e.horizontalCenter = 0, e.scaleX = .4, e.scaleY = .4, e.text = "123456", e.textAlign = "center", e.verticalCenter = -.5, e.width = 364.34, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.height = 35, e.horizontalCenter = 169.5, e.verticalCenter = -116.5, e.width = 150, e.elementsContent = [this.threeName_i()], e
    }, t.threeName_i = function() {
        var e = new eui.Label;
        return this.threeName = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "SimHei", e.height = 34, e.horizontalCenter = .5, e.size = 30, e.text = "名字名字", e.textAlign = "center", e.verticalAlign = "middle", e.width = 149, e.y = -2, e
    }, t._Group12_i = function() {
        var e = new eui.Group;
        return e.height = 35, e.width = 150, e.x = 346, e.y = 38, e.elementsContent = [this.threeLevel_i()], e
    }, t.threeLevel_i = function() {
        var e = new eui.BitmapLabel;
        return this.threeLevel = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 46, e.horizontalCenter = .5, e.scaleX = .4, e.scaleY = .4, e.text = "123456万", e.textAlign = "center", e.verticalCenter = -.5, e.width = 372.67, e
    }, t.vip2_i = function() {
        var e = new eui.Group;
        return this.vip2 = e, e.height = 40, e.horizontalCenter = -218.5, e.verticalCenter = -47, e.width = 40, e.elementsContent = [this._Image2_i(), this.viptext2_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = .3, e.scaleY = .3, e.source = "tuji1_json.vip_png", e.x = 1, e.y = -2, e
    }, t.viptext2_i = function() {
        var e = new eui.BitmapLabel;
        return this.viptext2 = e, e.font = "baikuanzi_fnt", e.scaleX = .35, e.scaleY = .35, e.text = "5", e.textAlign = "center", e.x = 14.67, e.y = 14.35, e
    }, t.vip1_i = function() {
        var e = new eui.Group;
        return this.vip1 = e, e.height = 40, e.horizontalCenter = -56.5, e.verticalCenter = -50, e.width = 40, e.elementsContent = [this._Image3_i(), this.viptext1_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .3, e.scaleY = .3, e.source = "tuji1_json.vip_png", e.x = 1, e.y = -2, e
    }, t.viptext1_i = function() {
        var e = new eui.BitmapLabel;
        return this.viptext1 = e, e.font = "baikuanzi_fnt", e.scaleX = .35, e.scaleY = .35, e.text = "5", e.textAlign = "center", e.x = 14.67, e.y = 14.35, e
    }, t.vip3_i = function() {
        var e = new eui.Group;
        return this.vip3 = e, e.height = 40, e.horizontalCenter = 102.5, e.verticalCenter = -47, e.width = 40, e.elementsContent = [this._Image4_i(), this.viptext3_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .3, e.scaleY = .3, e.source = "tuji1_json.vip_png", e.x = 1, e.y = -2, e
    }, t.viptext3_i = function() {
        var e = new eui.BitmapLabel;
        return this.viptext3 = e, e.font = "baikuanzi_fnt", e.scaleX = .35, e.scaleY = .35, e.text = "5", e.textAlign = "center", e.x = 14.67, e.y = 14.35, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/PaiHangPang2View.exml"] = window.PaiHangPang2ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["itembg", "itembg2", "rankLevel", "playerName", "rankNum", "headbg", "head", "circle", "vipLevel", "vipImg"], this.height = 95, this.width = 524, this.elementsContent = [this._Group3_i(), this.vipImg_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 95, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 524, e.elementsContent = [this.itembg_i(), this.itembg2_i(), this.rankLevel_i(), this.playerName_i(), this.rankNum_i(), this._Group2_i()], e
    }, t.itembg_i = function() {
        var e = new eui.Image;
        return this.itembg = e, e.scaleY = .9, e.source = "rank_2_png", e.x = 15, e.y = 1.5, e
    }, t.itembg2_i = function() {
        var e = new eui.Image;
        return this.itembg2 = e, e.scaleX = 1, e.scaleY = 1, e.source = "rank_3_png", e.x = 15, e.y = 1.5, e
    }, t.rankLevel_i = function() {
        var e = new eui.BitmapLabel;
        return this.rankLevel = e, e.font = "baikuanzi_fnt", e.horizontalCenter = -194.5, e.scaleX = .7, e.scaleY = .7, e.text = "9999", e.textAlign = "center", e.verticalCenter = -2, e
    }, t.playerName_i = function() {
        var e = new eui.Label;
        return this.playerName = e, e.bold = !0, e.fontFamily = "SimHei", e.size = 26, e.text = "名字名字名", e.x = 198, e.y = 34.5, e
    }, t.rankNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.rankNum = e, e.anchorOffsetX = 0, e.font = "huangkuanzi_fnt", e.scaleX = .7, e.scaleY = .7, e.text = "999999万", e.textAlign = "center", e.width = 264.58, e.x = 334, e.y = 31.5, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -104.5, e.verticalCenter = -.5, e.elementsContent = [this.headbg_i(), this._Group1_i()], e
    }, t.headbg_i = function() {
        var e = new eui.Image;
        return this.headbg = e, e.scaleX = .55, e.scaleY = .55, e.source = "hero_di_png", e.x = 0, e.y = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.width = 60, e.x = 4, e.y = 4, e.elementsContent = [this.head_i(), this.circle_i()], e
    }, t.head_i = function() {
        var e = new eui.Image;
        return this.head = e, e.horizontalCenter = 0, e.scaleX = .5, e.scaleY = .5, e.source = "hero_head1_png", e.verticalCenter = 0, e
    }, t.circle_i = function() {
        var e = new eui.Image;
        return this.circle = e, e.horizontalCenter = 0, e.scaleX = .5, e.scaleY = .5, e.source = "hero_head1_png", e.verticalCenter = 0, e
    }, t.vipImg_i = function() {
        var e = new eui.Group;
        return this.vipImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 27.5, e.horizontalCenter = -130, e.verticalCenter = 13.5, e.width = 29.5, e.elementsContent = [this._Image1_i(), this.vipLevel_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.scaleX = .25, e.scaleY = .25, e.source = "tuji1_json.vip_png", e.x = 0, e.y = -2, e
    }, t.vipLevel_i = function() {
        var e = new eui.BitmapLabel;
        return this.vipLevel = e, e.anchorOffsetX = 0, e.font = "baikuanzi_fnt", e.scaleX = .3, e.scaleY = .3, e.text = "5", e.textAlign = "center", e.width = 34.17, e.x = 11.17, e.y = 11.35, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/PaiHangPangView.exml"] = window.PaiHangPangViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["topRank", "bottomRank", "dataList", "scroller", "goBack", "btnBg1", "levelBtn", "btnBg2", "powerBtn", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group1_i(), this.scroller_i(), this.goBack_i(), this._Group3_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -27, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.topRank_i(), this._Image5_i(), this._Image6_i(), this.bottomRank_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "tuji3_json.icon_cup_png", e.y = -59, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 980, e.scale9Grid = new egret.Rectangle(95, 194, 410, 468), e.source = "gyUI_png", e.x = 0, e.y = 0, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "txt_rank_png", e.x = 236, e.y = 48.32, e
    }, t.topRank_i = function() {
        var e = new PaiHangPang1View;
        return this.topRank = e, e.x = 49, e.y = 233.02, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 360, e.scale9Grid = new egret.Rectangle(27, 24, 531, 146), e.source = "gyUI1_png", e.width = 520, e.x = 40, e.y = 496.01, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 1, e.source = "rank_4_png", e.verticalCenter = -285, e
    }, t.bottomRank_i = function() {
        var e = new PaiHangPang2View;
        return this.bottomRank = e, e.anchorOffsetY = 0, e.height = 101, e.x = 38, e.y = 861.7, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 345, e.horizontalCenter = -5.5, e.verticalCenter = 155.5, e.width = 529, e.viewport = this._Group2_i(), e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.width = 540, e.x = -13.64, e.y = -11, e.elementsContent = [this.dataList_i()], e
    }, t.dataList_i = function() {
        var e = new eui.List;
        return this.dataList = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = PaiHangPang2ViewSkin, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 40, e.paddingLeft = 5, e.verticalGap = 0, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 275.5, e.verticalCenter = -408, e.elementsContent = [this._Image7_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.horizontalCenter = -110, e.verticalCenter = -340, e.elementsContent = [this.levelBtn_i(), this.powerBtn_i()], e
    }, t.levelBtn_i = function() {
        var e = new eui.Group;
        return this.levelBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 57.58, e.width = 122.73, e.x = -1.4, e.y = -1.97, e.elementsContent = [this.btnBg1_i(), this._Image8_i()], e
    }, t.btnBg1_i = function() {
        var e = new eui.Image;
        return this.btnBg1 = e, e.scaleX = .7, e.scaleY = .7, e.source = "btn_tab4_png", e.x = 1.4000000000000057, e.y = 1.9700000000000273, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "paihangT1_png", e.x = 16.400000000000006, e.y = 7.970000000000027, e
    }, t.powerBtn_i = function() {
        var e = new eui.Group;
        return this.powerBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 57.58, e.width = 122.73, e.x = 146.6, e.y = -2.97, e.elementsContent = [this.btnBg2_i(), this._Image9_i()], e
    }, t.btnBg2_i = function() {
        var e = new eui.Image;
        return this.btnBg2 = e, e.scaleX = .7, e.scaleY = .7, e.source = "btn_tab2_png", e.x = 2.3999999999999773, e.y = 2.9700000000000273, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "paihangT2_png", e.x = 18.399999999999977, e.y = 8.970000000000027, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/PanelSkin.exml"] = window.skins.PanelSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["titleDisplay", "moveArea", "closeButton"], this.minHeight = 230, this.minWidth = 450, this.elementsContent = [this._Image1_i(), this.moveArea_i(), this.closeButton_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0, e.left = 0, e.right = 0, e.scale9Grid = new egret.Rectangle(2, 2, 12, 12), e.source = "border_png", e.top = 0, e
    }, t.moveArea_i = function() {
        var e = new eui.Group;
        return this.moveArea = e, e.height = 45, e.left = 0, e.right = 0, e.top = 0, e.elementsContent = [this._Image2_i(), this.titleDisplay_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.bottom = 0, e.left = 0, e.right = 0, e.source = "header_png", e.top = 0, e
    }, t.titleDisplay_i = function() {
        var e = new eui.Label;
        return this.titleDisplay = e, e.fontFamily = "Tahoma", e.left = 15, e.right = 5, e.size = 20, e.textColor = 16777215, e.verticalCenter = 0, e.wordWrap = !1, e
    }, t.closeButton_i = function() {
        var e = new eui.Button;
        return this.closeButton = e, e.bottom = 5, e.horizontalCenter = 0, e.label = "close", e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/PaoTaiJieSuoView.exml"] = window.PaoTaiJieSuoViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["vediobtn", "goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group1_i(), this.goBack_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -34, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._BitmapLabel1_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.vediobtn_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 700, e.scale9Grid = new egret.Rectangle(95, 400, 407, 42), e.source = "gyUI_png", e.x = 0, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "paitahechengweizhi_png", e.x = 179, e.y = 31.1, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "light_tower_upgrade_png", e.x = 113, e.y = 106.67, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "lable_reward_png", e.x = 335.32, e.y = 167, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 28.5, e.rotation = 15.09, e.scaleX = .8, e.scaleY = .8, e.text = "+100", e.width = 85.17, e.x = 339.22, e.y = 191.87, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "diamonds_png", e.x = 235, e.y = 224.67, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(150, 79, 149, 35), e.scaleX = 1.2, e.source = "name_di_png", e.x = 25, e.y = 354, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.scaleX = .8, e.scaleY = .8, e.source = "paitahechengweizhi1_png", e.y = 430.31, e
    }, t.vediobtn_i = function() {
        var e = new eui.Group;
        return this.vediobtn = e, e.x = 226.66, e.y = 550.67, e.elementsContent = [this._Image9_i(), this._Image10_i(), this._Image11_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.scale9Grid = new egret.Rectangle(23, 17, 87, 37), e.source = "btn_yellow4_png", e.width = 170, e.x = 0, e.y = 0, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "icon_ad_png", e.x = 22.34, e.y = 16.63, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "mianfeiT_png", e.x = 59.68, e.y = 16.68, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 273.5, e.verticalCenter = -307, e.elementsContent = [this._Image12_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/PlantItem.exml"] = window.PlantItemSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["plantBg", "animaGro", "plant1", "spine", "cursor1", "loadbg1", "loadImg1", "arrow1", "plantlevel1", "plantNum1", "lock1", "plantText1", "levelText", "jiesuoGro", "plantbtn0", "shangzhenImg"], this.height = 290, this.minHeight = 50, this.minWidth = 100, this.elementsContent = [this.plantbtn0_i(), this.shangzhenImg_i()], this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.plantbtn0_i = function() {
        var e = new eui.Group;
        return this.plantbtn0 = e, e.anchorOffsetX = 0, e.horizontalCenter = .5, e.verticalCenter = 10, e.width = 185, e.elementsContent = [this.plantBg_i(), this.animaGro_i(), this.plant1_i(), this._Group1_i(), this.cursor1_i(), this._Group2_i(), this.plantText1_i(), this.jiesuoGro_i()], e
    }, t.plantBg_i = function() {
        var e = new eui.Image;
        return this.plantBg = e, e.anchorOffsetY = 0, e.height = 280, e.scale9Grid = new egret.Rectangle(27, 43, 166, 262), e.source = "card_bg1_png", e.width = 165, e.x = 10, e.y = 0, e
    }, t.animaGro_i = function() {
        var e = new eui.Group;
        return this.animaGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 168.5, e.width = 154, e.x = 16, e.y = 42, e
    }, t.plant1_i = function() {
        var e = new eui.Image;
        return this.plant1 = e, e.anchorOffsetX = 75, e.anchorOffsetY = 150.5, e.height = 150, e.source = "zhiwu1_png", e.width = 150, e.x = 93.5, e.y = 206.32, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 150, e.width = 150, e.x = 18, e.y = 57, e.elementsContent = [this.spine_i()], e
    }, t.spine_i = function() {
        var e = new DragonSpine;
        return this.spine = e, e.anchorOffsetX = 75, e.anchorOffsetY = 75, e.height = 150, e.width = 150, e.x = 75, e.y = 75, e
    }, t.cursor1_i = function() {
        var e = new eui.Image;
        return this.cursor1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 285, e.scale9Grid = new egret.Rectangle(56, 53, 91, 194), e.source = "jihuoyingxiong2_png", e.width = 185, e.x = -.03, e.y = -12.26, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 35.2, e.scaleX = 1, e.scaleY = 1, e.width = 159.6, e.x = 0, e.y = -.5, e.elementsContent = [this.loadbg1_i(), this.loadImg1_i(), this._Image1_i(), this.arrow1_i(), this.plantlevel1_i(), this.plantNum1_i(), this.lock1_i()], e
    }, t.loadbg1_i = function() {
        var e = new eui.Image;
        return this.loadbg1 = e, e.scale9Grid = new egret.Rectangle(32, 21, 1, 1), e.scaleY = .8, e.source = "bar_bg2_png", e.width = 162, e.x = 10, e.y = 2.17, e
    }, t.loadImg1_i = function() {
        var e = new eui.Image;
        return this.loadImg1 = e, e.anchorOffsetY = 0, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .66, e.scaleY = .9, e.source = "bar_bg1_png", e.x = 17.65, e.y = 3.2, e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "bg_lv_big_png", e.x = -2.33, e.y = -8.02, e
    }, t.arrow1_i = function() {
        var e = new eui.Image;
        return this.arrow1 = e, e.scaleX = .65, e.scaleY = .65, e.source = "icon_up_new_png", e.x = 145.04, e.y = -4.6, e
    }, t.plantlevel1_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantlevel1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 50.67, e.scaleX = .4, e.scaleY = .4, e.text = "99", e.width = 83, e.x = 5.67, e.y = 5.66, e
    }, t.plantNum1_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantNum1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.56, e.scaleX = .6, e.scaleY = .6, e.text = "99/10", e.width = 100.66, e.x = 66, e.y = 8.99, e
    }, t.lock1_i = function() {
        var e = new eui.Image;
        return this.lock1 = e, e.scaleX = .65, e.scaleY = .65, e.source = "lock_png", e.x = 147.43, e.y = -5.99, e
    }, t.plantText1_i = function() {
        var e = new eui.Image;
        return this.plantText1 = e, e.horizontalCenter = -4, e.scaleX = .7, e.scaleY = .8, e.source = "zhiwuzi1_png", e.y = 213, e
    }, t.jiesuoGro_i = function() {
        var e = new eui.Group;
        return this.jiesuoGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 37, e.width = 149, e.x = 16, e.y = 216, e.elementsContent = [this.levelText_i()], e
    }, t.levelText_i = function() {
        var e = new eui.BitmapLabel;
        return this.levelText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 55.66, e.scaleX = .6, e.scaleY = .6, e.text = "999关解锁", e.width = 236.78, e.x = 8, e.y = 0, e
    }, t.shangzhenImg_i = function() {
        var e = new eui.Image;
        return this.shangzhenImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.horizontalCenter = -42.5, e.rotation = 338.24, e.scaleX = .8, e.scaleY = .8, e.source = "active_png", e.verticalCenter = -64, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ProgressBarSkin.exml"] = window.skins.ProgressBarSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["thumb", "labelDisplay"], this.minHeight = 18, this.minWidth = 30, this.elementsContent = [this._Image1_i(), this.thumb_i(), this.labelDisplay_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(1, 1, 4, 4), e.source = "track_pb_png", e.verticalCenter = 0, e.percentWidth = 100, e
    }, t.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e, e.percentHeight = 100, e.source = "thumb_pb_png", e.percentWidth = 100, e
    }, t.labelDisplay_i = function() {
        var e = new eui.Label;
        return this.labelDisplay = e, e.fontFamily = "Tahoma", e.horizontalCenter = 0, e.size = 15, e.textAlign = "center", e.textColor = 7368816, e.verticalAlign = "middle", e.verticalCenter = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/QianDao1View.exml"] = window.QianDao1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["orangeBg", "greenBg", "cursor", "seedImg", "diamondImg", "manureImg", "plantImg", "heroImg", "check", "dayText", "diamondNum", "diamond", "manureNum", "manure", "seedNum", "seed", "zhiwu", "plantNum", "plantName", "diamondNum0", "hero", "heroName", "shadowImg"], this.height = 168, this.width = 132, this.elementsContent = [this._Group1_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.horizontalCenter = .5, e.verticalCenter = 0, e.elementsContent = [this.orangeBg_i(), this.greenBg_i(), this.cursor_i(), this.seedImg_i(), this.diamondImg_i(), this.manureImg_i(), this.plantImg_i(), this.heroImg_i(), this.check_i(), this._Label1_i(), this.dayText_i(), this._BitmapLabel1_i(), this.diamond_i(), this.manure_i(), this.seed_i(), this.plantName_i(), this.heroName_i(), this.shadowImg_i()], e
    }, t.orangeBg_i = function() {
        var e = new eui.Image;
        return this.orangeBg = e, e.scaleX = .8, e.scaleY = .86, e.source = "sign_item_bg2_png", e.x = 3, e.y = 3.67, e
    }, t.greenBg_i = function() {
        var e = new eui.Image;
        return this.greenBg = e, e.scaleX = .8, e.scaleY = .86, e.source = "sign_item_bg1_png", e.x = 3, e.y = 4.34, e
    }, t.cursor_i = function() {
        var e = new eui.Image;
        return this.cursor = e, e.scaleX = .66, e.scaleY = .56, e.source = "jihuoyingxiong2_png", e.x = 0, e.y = -1.01, e
    }, t.seedImg_i = function() {
        var e = new eui.Image;
        return this.seedImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 264.67, e.scaleX = .35, e.scaleY = .35, e.source = "shop_seed5_png", e.width = 288.92, e.x = 20.34, e.y = 34, e
    }, t.diamondImg_i = function() {
        var e = new eui.Image;
        return this.diamondImg = e, e.source = "icon_gem_png", e.x = 34, e.y = 58.32, e
    }, t.manureImg_i = function() {
        var e = new eui.Image;
        return this.manureImg = e, e.scaleX = .8, e.scaleY = .8, e.source = "gift_manue_icon_png", e.x = 35, e.y = 49.32, e
    }, t.plantImg_i = function() {
        var e = new eui.Image;
        return this.plantImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 248.86, e.scaleX = .35, e.scaleY = .35, e.source = "zhiwu15_png", e.width = 244.43, e.x = 25, e.y = 40.64, e
    }, t.heroImg_i = function() {
        var e = new eui.Image;
        return this.heroImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 109.67, e.scaleX = .8, e.scaleY = .8, e.source = "kapai2_png", e.width = 109.34, e.x = 21.68, e.y = 42, e
    }, t.check_i = function() {
        var e = new eui.Image;
        return this.check = e, e.scaleX = .6, e.scaleY = .6, e.source = "ok_png", e.x = 43, e.y = 65, e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.horizontalCenter = .5, e.size = 22, e.text = "", e.textColor = 2050105, e.y = 14, e
    }, t.dayText_i = function() {
        var e = new eui.Label;
        return this.dayText = e, e.fontFamily = "SimHei", e.height = 23, e.horizontalCenter = .5, e.size = 26, e.text = "1", e.textColor = 2050105, e.y = 14, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.font = "zhiwuziti_fnt", e.height = 20, e.text = "", e.width = 20, e.x = 25, e.y = 138, e
    }, t.diamond_i = function() {
        var e = new eui.Group;
        return this.diamond = e, e.anchorOffsetX = 0, e.horizontalCenter = 0, e.width = 120.33, e.y = 130.5, e.elementsContent = [this._Image1_i(), this.diamondNum_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "zuanshiT_png", e.x = 28, e.y = -18, e
    }, t.diamondNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.diamondNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 29.16, e.scaleX = .6, e.scaleY = .6, e.text = "x2888", e.width = 104.56, e.x = 28, e.y = 2.32, e
    }, t.manure_i = function() {
        var e = new eui.Group;
        return this.manure = e, e.horizontalCenter = 5, e.visible = !1, e.y = 136, e.elementsContent = [this._Image2_i(), this.manureNum_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "feiliao_png", e.x = -3, e.y = -7.5, e
    }, t.manureNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.manureNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 29.16, e.scaleX = .6, e.scaleY = .6, e.text = "x200", e.width = 97.44, e.x = 47.5, e.y = -1, e
    }, t.seed_i = function() {
        var e = new eui.Group;
        return this.seed = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 22, e.horizontalCenter = -1.5, e.visible = !1, e.width = 90.8, e.y = 133.18, e.elementsContent = [this._Image3_i(), this.seedNum_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -7.399999999999999, e.scaleX = .5, e.scaleY = .5, e.source = "CJYM_png", e.y = -15, e
    }, t.seedNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.seedNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 29.16, e.scaleX = .6, e.scaleY = .6, e.text = "x1", e.textAlign = "center", e.width = 83, e.x = 67.52, e.y = .83, e
    }, t.plantName_i = function() {
        var e = new eui.Group;
        return this.plantName = e, e.anchorOffsetY = 0, e.height = 23.4, e.horizontalCenter = 4.5, e.visible = !1, e.y = 131.5, e.elementsContent = [this.zhiwu_i(), this.plantNum_i()], e
    }, t.zhiwu_i = function() {
        var e = new eui.Image;
        return this.zhiwu = e, e.horizontalCenter = -7, e.scaleX = .6, e.scaleY = .6, e.source = "zhiwuzi3_png", e.y = -2.8, e
    }, t.plantNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 29.16, e.scaleX = .7, e.scaleY = .7, e.text = "x1", e.textAlign = "center", e.width = 46.57, e.x = 89, e.y = 5, e
    }, t.heroName_i = function() {
        var e = new eui.Group;
        return this.heroName = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 23.4, e.horizontalCenter = 0, e.visible = !1, e.width = 114, e.y = 131, e.elementsContent = [this._Image4_i(), this.diamondNum0_i(), this.hero_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 37.44, e.scaleX = .6, e.scaleY = .6, e.source = "lierenT3_png", e.visible = !1, e.width = 146.67, e.x = -7.15, e.y = -.03, e
    }, t.diamondNum0_i = function() {
        var e = new eui.BitmapLabel;
        return this.diamondNum0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 29.16, e.scaleX = .55, e.scaleY = .6, e.text = "x30", e.width = 68.56, e.x = 81.16, e.y = 3.82, e
    }, t.hero_i = function() {
        var e = new eui.Image;
        return this.hero = e, e.scaleX = .5, e.scaleY = .5, e.source = "shishisuipian_png", e.x = 5.5, e.y = -1, e
    }, t.shadowImg_i = function() {
        var e = new eui.Image;
        return this.shadowImg = e, e.scaleX = .8, e.scaleY = .86, e.source = "sign_item_bg3_png", e.visible = !1, e.x = 4.5, e.y = 5.66, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/QianDaoView.exml"] = window.QianDaoViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList0", "scroller", "qdGro", "shadowImg", "sevenGro", "qdBtn", "goBack", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group2_i(), this.goBack_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.scroller_i(), this.qdGro_i(), this.sevenGro_i(), this.qdBtn_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "gyUI_png", e.verticalCenter = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "txt_sign_png", e.x = 251, e.y = 48.32, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 650, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(296, 107, 3, 5), e.scaleX = .9, e.source = "gyUI1_png", e.verticalCenter = 27, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "qiriqiandao_png", e.x = 70.33, e.y = 170.38, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 370, e.horizontalCenter = 0, e.verticalCenter = -37, e.visible = !1, e.width = 490, e.viewport = this._Group1_i(), e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.width = 540, e.x = -13.64, e.y = -1.33, e.elementsContent = [this.dataList0_i()], e
    }, t.dataList0_i = function() {
        var e = new eui.List;
        return this.dataList0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = QianDao1ViewSkin, e.width = 490, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 30, e.paddingLeft = 15, e.verticalGap = 27, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t.qdGro_i = function() {
        var e = new eui.Group;
        return this.qdGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 390, e.width = 487.88, e.x = 54.46, e.y = 226.01, e.elementsContent = [this._QianDao1View1_i(), this._QianDao1View2_i(), this._QianDao1View3_i(), this._QianDao1View4_i(), this._QianDao1View5_i(), this._QianDao1View6_i()], e
    }, t._QianDao1View1_i = function() {
        var e = new QianDao1View;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 164, e.scaleX = 1.1, e.scaleY = 1.1, e.width = 127, e.x = 18.54, e.y = 3, e
    }, t._QianDao1View2_i = function() {
        var e = new QianDao1View;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 164, e.scaleX = 1.1, e.scaleY = 1.1, e.width = 127, e.x = 180.54, e.y = 3, e
    }, t._QianDao1View3_i = function() {
        var e = new QianDao1View;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 164, e.scaleX = 1.1, e.scaleY = 1.1, e.width = 127, e.x = 341.54, e.y = 3, e
    }, t._QianDao1View4_i = function() {
        var e = new QianDao1View;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 164, e.scaleX = 1.1, e.scaleY = 1.1, e.width = 127, e.x = 18.54, e.y = 199.97, e
    }, t._QianDao1View5_i = function() {
        var e = new QianDao1View;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 164, e.scaleX = 1.1, e.scaleY = 1.1, e.width = 127, e.x = 180.54, e.y = 199.97, e
    }, t._QianDao1View6_i = function() {
        var e = new QianDao1View;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 164, e.scaleX = 1.1, e.scaleY = 1.1, e.width = 127, e.x = 341.54, e.y = 199.97, e
    }, t.sevenGro_i = function() {
        var e = new eui.Group;
        return this.sevenGro = e, e.horizontalCenter = -3, e.verticalCenter = 249, e.elementsContent = [this._Image6_i(), this.shadowImg_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "sign_7day_png", e.verticalCenter = 0, e
    }, t.shadowImg_i = function() {
        var e = new eui.Image;
        return this.shadowImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 197.62, e.scaleX = .8, e.scaleY = .86, e.source = "sign_item_bg3_png", e.width = 615.12, e.x = 4.5, e.y = -.4, e
    }, t.qdBtn_i = function() {
        var e = new eui.Group;
        return this.qdBtn = e, e.anchorOffsetY = 0, e.height = 85, e.horizontalCenter = 0, e.verticalCenter = 401.5, e.width = 200, e.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .68, e.scaleY = .7, e.source = "yingyingls1_png", e.x = 12, e.y = 2, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.scale9Grid = new egret.Rectangle(69, 35, 2, 2), e.source = "btn_yellow4_png", e.width = 180, e.x = 11, e.y = 0, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "qiandaoT_png", e.x = 58, e.y = 17, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "erwaishouyi_png", e.visible = !1, e.x = 58.68, e.y = 24.35, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "icon_ad_png", e.visible = !1, e.x = 19.67, e.y = 14.66, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 262.5, e.verticalCenter = -361.5, e.elementsContent = [this._Image12_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/QuanPinGongJi1View.exml"] = window.QuanPinGongJi1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = [], this.height = 170, this.width = 650, this.elementsContent = [this._Group2_i(), this._Group8_i(), this._Group14_i(), this._Group20_i(), this._Group26_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image1_i(), this._Group1_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "jihuoyingxiong_png", e.verticalCenter = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.width = 614.33, e.x = 20.67, e.y = 10, e.elementsContent = [this._Image2_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(302, 69, 4, 7), e.scaleY = .93, e.source = "jihuoyingxiong1_png", e.width = 611.67, e.x = 1.98, e.y = 1.34, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.height = 130, e.horizontalCenter = 4, e.verticalCenter = -5, e.width = 570, e.elementsContent = [this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i()], e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.scaleX = 1, e.scaleY = 1, e.width = 360, e.x = 205, e.y = 2.34, e.elementsContent = [this._BitmapLabel1_i(), this._Image3_i(), this._Image4_i()], e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28.67, e.scaleX = .6, e.scaleY = .6, e.text = "瞄准敌人造成30%最大生命值伤害", e.width = 540.66, e.x = 10, e.y = 28.67, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "jinengziT1_png", e.x = 61.99999999999997, e.y = 1.990000000000002, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "beidongziT_png", e.x = -10.69999999999996, e.y = 1.990000000000002, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.scaleX = 1, e.scaleY = 1, e.width = 360, e.x = 204.98, e.y = 68.34, e.elementsContent = [this._BitmapLabel2_i(), this._Image5_i(), this._Image6_i()], e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 25.33, e.scaleX = .6, e.scaleY = .6, e.text = "单体类所有植物伤害提高30%", e.width = 358.89, e.x = 9.65, e.y = 29.34, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "beidongziT1_png", e.x = -9.67999999999995, e.y = 1.6400000000000148, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "jinengziT5_png", e.x = 62.01999999999998, e.y = 1.6400000000000148, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 3, e.y = 13.31, e.elementsContent = [this._Image7_i(), this._Image8_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "hero_di_png", e.x = 0, e.y = 0, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "hero_head1_png", e.x = 6.01, e.y = 5.98, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.height = 56, e.width = 56, e.x = 135, e.y = 4.34, e.elementsContent = [this._Image9_i(), this._Image10_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "skill_di_png", e.x = 0, e.y = 0, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "heroskill_a1_png", e.x = 3.6599999999999966, e.y = 2.650000000000002, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.x = 135, e.y = 69.34, e.elementsContent = [this._Image11_i(), this._Image12_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .85, e.scaleY = .85, e.source = "skill_di1_png", e.verticalCenter = 0, e.x = 0, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .67, e.scaleY = .67, e.source = "heroskill_p1_png", e.x = 3, e.y = 2, e
    }, t._Group14_i = function() {
        var e = new eui.Group;
        return e.height = 130, e.horizontalCenter = 4, e.verticalCenter = -5, e.visible = !1, e.width = 570, e.elementsContent = [this._Group9_i(), this._Group10_i(), this._Group11_i(), this._Group12_i(), this._Group13_i()], e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.x = 3, e.y = 13, e.elementsContent = [this._Image13_i(), this._Image14_i()], e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "hero_di_png", e.x = 0, e.y = 0, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "hero_head2_png", e.x = 6.01, e.y = 5.98, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.height = 56, e.width = 56, e.x = 135, e.y = 4.34, e.elementsContent = [this._Image15_i(), this._Image16_i()], e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "skill_di_png", e.x = 0, e.y = 0, e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "heroskill_a2_png", e.x = 3.6599999999999966, e.y = 2.650000000000002, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.scaleX = 1, e.scaleY = 1, e.width = 360, e.x = 205, e.y = 2.34, e.elementsContent = [this._BitmapLabel3_i(), this._Image17_i(), this._Image18_i()], e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28.67, e.scaleX = .6, e.scaleY = .6, e.text = "冰冻全屏敌人5秒造成30%最大生命值伤害", e.width = 540.66, e.x = 10, e.y = 28.67, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "jinengziT2_png", e.x = 61.99999999999997, e.y = 1.990000000000002, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "beidongziT_png", e.x = -10.69999999999996, e.y = 1.990000000000002, e
    }, t._Group12_i = function() {
        var e = new eui.Group;
        return e.x = 135, e.y = 69.34, e.elementsContent = [this._Image19_i(), this._Image20_i()], e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleX = .85, e.scaleY = .85, e.source = "skill_di1_png", e.verticalCenter = 0, e.x = 0, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.scaleX = .67, e.scaleY = .67, e.source = "heroskill_p2_png", e.x = 3, e.y = 2, e
    }, t._Group13_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.scaleX = 1, e.scaleY = 1, e.width = 360, e.x = 204.98, e.y = 68.34, e.elementsContent = [this._BitmapLabel4_i(), this._Image21_i(), this._Image22_i()], e
    }, t._BitmapLabel4_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 25.33, e.scaleX = .6, e.scaleY = .6, e.text = "冰冻类所有植物伤害提高30%", e.width = 407.78, e.x = 9.65, e.y = 29.34, e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "beidongziT1_png", e.x = -9.67999999999995, e.y = 1.6400000000000148, e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "jinengziT8_png", e.x = 62.01999999999998, e.y = 1.6400000000000148, e
    }, t._Group20_i = function() {
        var e = new eui.Group;
        return e.height = 130, e.horizontalCenter = 4, e.verticalCenter = -5, e.visible = !1, e.width = 570, e.elementsContent = [this._Group15_i(), this._Group16_i(), this._Group17_i(), this._Group18_i(), this._Group19_i()], e
    }, t._Group15_i = function() {
        var e = new eui.Group;
        return e.x = 3, e.y = 13, e.elementsContent = [this._Image23_i(), this._Image24_i()], e
    }, t._Image23_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "hero_di_png", e.x = 0, e.y = 0, e
    }, t._Image24_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "hero_head3_png", e.x = 6.01, e.y = 5.98, e
    }, t._Group16_i = function() {
        var e = new eui.Group;
        return e.height = 56, e.width = 56, e.x = 135, e.y = 4.34, e.elementsContent = [this._Image25_i(), this._Image26_i()], e
    }, t._Image25_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "skill_di_png", e.x = 0, e.y = 0, e
    }, t._Image26_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "heroskill_a3_png", e.x = 3.6599999999999966, e.y = 2.650000000000002, e
    }, t._Group17_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.scaleX = 1, e.scaleY = 1, e.width = 360, e.x = 205, e.y = 2.34, e.elementsContent = [this._BitmapLabel5_i(), this._BitmapLabel6_i(), this._Image27_i(), this._Image28_i()], e
    }, t._BitmapLabel5_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 27.56, e.scaleX = .6, e.scaleY = .6, e.text = "剧毒瓶子碎裂后对所有敌人造成30%最大生命", e.width = 571.78, e.x = 10, e.y = 25.32, e
    }, t._BitmapLabel6_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 27.56, e.scaleX = .6, e.scaleY = .6, e.text = "值的剧毒伤害", e.width = 571.78, e.x = 9.99, e.y = 42.02, e
    }, t._Image27_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "jinengziT3_png", e.x = 61.99999999999997, e.y = 1.990000000000002, e
    }, t._Image28_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "beidongziT_png", e.x = -10.69999999999996, e.y = 1.990000000000002, e
    }, t._Group18_i = function() {
        var e = new eui.Group;
        return e.x = 135, e.y = 69.34, e.elementsContent = [this._Image29_i(), this._Image30_i()], e
    }, t._Image29_i = function() {
        var e = new eui.Image;
        return e.scaleX = .85, e.scaleY = .85, e.source = "skill_di1_png", e.verticalCenter = 0, e.x = 0, e
    }, t._Image30_i = function() {
        var e = new eui.Image;
        return e.scaleX = .67, e.scaleY = .67, e.source = "heroskill_p3_png", e.x = 3, e.y = 2, e
    }, t._Group19_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.scaleX = 1, e.scaleY = 1, e.width = 360, e.x = 204.98, e.y = 68.34, e.elementsContent = [this._BitmapLabel7_i(), this._Image31_i(), this._Image32_i()], e
    }, t._BitmapLabel7_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 25.33, e.scaleX = .6, e.scaleY = .6, e.text = "剧毒类所有植物伤害提高30%", e.width = 358.89, e.x = 9.65, e.y = 29.34, e
    }, t._Image31_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "beidongziT1_png", e.x = -9.67999999999995, e.y = 1.6400000000000148, e
    }, t._Image32_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "jinengziT7_png", e.x = 62.01999999999998, e.y = 1.6400000000000148, e
    }, t._Group26_i = function() {
        var e = new eui.Group;
        return e.height = 130, e.horizontalCenter = 4, e.verticalCenter = -5, e.visible = !1, e.width = 570, e.elementsContent = [this._Group21_i(), this._Group22_i(), this._Group23_i(), this._Group24_i(), this._Group25_i()], e
    }, t._Group21_i = function() {
        var e = new eui.Group;
        return e.x = 3, e.y = 13, e.elementsContent = [this._Image33_i(), this._Image34_i()], e
    }, t._Image33_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "hero_di_png", e.x = 0, e.y = 0, e
    }, t._Image34_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "hero_head4_png", e.x = 6.01, e.y = 5.98, e
    }, t._Group22_i = function() {
        var e = new eui.Group;
        return e.height = 56, e.width = 56, e.x = 135, e.y = 4.34, e.elementsContent = [this._Image35_i(), this._Image36_i()], e
    }, t._Image35_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "skill_di_png", e.x = 0, e.y = 0, e
    }, t._Image36_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "heroskill_a4_png", e.x = 3.6599999999999966, e.y = 2.650000000000002, e
    }, t._Group23_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.scaleX = 1, e.scaleY = 1, e.width = 360, e.x = 205, e.y = 2.34, e.elementsContent = [this._BitmapLabel8_i(), this._Image37_i(), this._Image38_i()], e
    }, t._BitmapLabel8_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28.67, e.scaleX = .6, e.scaleY = .6, e.text = "全屏投射爆炸所有敌人受到30%最大生命值伤害", e.width = 571.77, e.x = 10, e.y = 28.67, e
    }, t._Image37_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "jinengziT4_png", e.x = 61.99999999999997, e.y = 1.990000000000002, e
    }, t._Image38_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "beidongziT_png", e.x = -10.69999999999996, e.y = 1.990000000000002, e
    }, t._Group24_i = function() {
        var e = new eui.Group;
        return e.x = 135, e.y = 69.34, e.elementsContent = [this._Image39_i(), this._Image40_i()], e
    }, t._Image39_i = function() {
        var e = new eui.Image;
        return e.scaleX = .85, e.scaleY = .85, e.source = "skill_di1_png", e.verticalCenter = 0, e.x = 0, e
    }, t._Image40_i = function() {
        var e = new eui.Image;
        return e.scaleX = .67, e.scaleY = .67, e.source = "heroskill_p4_png", e.x = 3, e.y = 2, e
    }, t._Group25_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.scaleX = 1, e.scaleY = 1, e.width = 360, e.x = 204.98, e.y = 68.34, e.elementsContent = [this._BitmapLabel9_i(), this._Image41_i(), this._Image42_i()], e
    }, t._BitmapLabel9_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 25.33, e.scaleX = .6, e.scaleY = .6, e.text = "群攻类所有植物伤害提高30%", e.width = 412.22, e.x = 9.65, e.y = 29.34, e
    }, t._Image41_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "beidongziT1_png", e.x = -9.67999999999995, e.y = 1.6400000000000148, e
    }, t._Image42_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "jinengziT6_png", e.x = 62.01999999999998, e.y = 1.6400000000000148, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/QuanPinGongJi2View.exml"] = window.QuanPinGongJi2ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = [], this.height = 290, this.width = 190, this.elementsContent = [this._Group3_i(), this._Image8_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 2.5, e.elementsContent = [this._Image1_i(), this._Group1_i(), this._Image6_i(), this._Group2_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .75, e.source = "card_bg1_1_png", e.x = 0, e.y = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 43.6, e.scaleX = 1, e.scaleY = 1, e.width = 176, e.x = -.27, e.y = -5.83, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._BitmapLabel1_i(), this._BitmapLabel2_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(32, 21, 1, 1), e.scaleY = .7, e.source = "bar_bg2_png", e.width = 156.7, e.x = 19.6, e.y = 7.17, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetY = 0, e.height = 33.23, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .7, e.scaleY = .75, e.source = "bar_bg1_png", e.x = 20.6, e.y = 8.8, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "bg_lv_big_png", e.x = -3.23, e.y = -1.02, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "icon_up_new_png", e.x = 153.27, e.y = 4.83, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 56, e.scaleX = .5, e.scaleY = .5, e.text = "99", e.width = 84, e.x = -2, e.y = 10.5, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 28.75, e.scaleX = .6, e.scaleY = .6, e.text = "99/99", e.width = 97.63, e.x = 59, e.y = 13, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hero1_png", e.x = 30, e.y = 59.34, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 29, e.y = 209, e.elementsContent = [this._Image7_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "yingxiongT1_png", e.x = 0, e.y = 0, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleY = .93, e.source = "jihuoyingxiong2_png", e.x = -5, e.y = 1.34, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/QuanPinGongJiView.exml"] = window.QuanPinGongJiViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList1", "scroller"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.scroller_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "menu_bg1_png", e.verticalCenter = 0, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "dec2_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.left = 17, e.top = 85, e.elementsContent = [this._Image3_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "btn_back1_png", e.x = 0, e.y = 0, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.top = 174, e.elementsContent = [this._Image4_i(), this._Image5_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "title_bg5_png", e.x = 0, e.y = 0, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "window_hero_title_png", e.x = 110, e.y = 11, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -225, e.elementsContent = [this._QuanPinGongJi1View1_i()], e
    }, t._QuanPinGongJi1View1_i = function() {
        var e = new QuanPinGongJi1View;
        return e.x = 0, e.y = 0, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 610, e.horizontalCenter = 0, e.verticalCenter = 196, e.width = 720, e.viewport = this._Group4_i(), e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.width = 540, e.x = -13.64, e.elementsContent = [this.dataList1_i()], e
    }, t.dataList1_i = function() {
        var e = new eui.List;
        return this.dataList1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = QuanPinGongJi2ViewSkin, e.width = 720, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 140, e.paddingLeft = 100, e.verticalGap = 20, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/RadioButtonSkin.exml"] = window.skins.RadioButtonSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["labelDisplay"], this.elementsContent = [this._Group1_i()], this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "alpha", .7)]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", .5)]), new eui.State("upAndSelected", [new eui.SetProperty("_Image1", "source", "radiobutton_select_up_png")]), new eui.State("downAndSelected", [new eui.SetProperty("_Image1", "source", "radiobutton_select_down_png")]), new eui.State("disabledAndSelected", [new eui.SetProperty("_Image1", "source", "radiobutton_select_disabled_png")])]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group1_i = function() {
        var e = new eui.Group;
        return e.percentHeight = 100, e.percentWidth = 100, e.layout = this._HorizontalLayout1_i(), e.elementsContent = [this._Image1_i(), this.labelDisplay_i()], e
    }, t._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.verticalAlign = "middle", e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e, e.alpha = 1, e.fillMode = "scale", e.source = "radiobutton_unselect_png", e
    }, t.labelDisplay_i = function() {
        var e = new eui.Label;
        return this.labelDisplay = e, e.fontFamily = "Tahoma", e.size = 20, e.textAlign = "center", e.textColor = 7368816, e.verticalAlign = "middle", e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/RenWu1View.exml"] = window.RenWu1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["itembg", "loadbg", "loadbar", "valuelab", "headImg", "txtlab", "awardlab", "diamondImg", "titleGro", "tiplab", "getBtn"], this.height = 157, this.width = 605, this.elementsContent = [this._Group5_i(), this._Group9_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group5_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.visible = !1, e.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "task_item1_png", e.x = 0, e.y = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 130, e.left = 14, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -5.5, e.width = 130, e.x = 14, e.y = 8, e.elementsContent = [this._Image2_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "renwu1_png", e.x = 8.46, e.y = 17.16, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 14.5, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 17, e.x = 167, e.y = 80, e.elementsContent = [this._Image3_i(), this._Image4_i(), this._BitmapLabel1_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "vip1_png", e.verticalCenter = 0, e.width = 300, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 23, e.source = "vip2_png", e.width = 30, e.x = 3.35, e.y = 3, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.font = "baimiaobian_fnt", e.text = "0/1", e.x = 119, e.y = .64, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 40, e.scaleX = 1, e.scaleY = 1, e.width = 420, e.x = 162.01, e.y = 10.640000000000002, e.elementsContent = [this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Image5_i()], e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 25, e.text = "击杀1000个敌人", e.textColor = 2050105, e.x = 11.170000000000016, e.y = 9.359999999999998, e
    }, t._Label2_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 71, e.scaleX = 1, e.scaleY = 1, e.size = 28, e.text = "", e.textColor = 2050105, e.verticalCenter = -3, e.x = 246.36000000000007, e.y = 5.359999999999998, e
    }, t._Label3_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 176.5, e.scaleX = 1, e.scaleY = 1, e.size = 28, e.text = "x501", e.textColor = 2050105, e.verticalCenter = -2, e.x = 360.36, e.y = 5.359999999999998, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "tuji6_json.icon_gem_png", e.x = 312.48, e.y = 1.3199999999999985, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 233, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 16, e.x = 481.00000000000006, e.y = 58, e.elementsContent = [this._Image6_i(), this._Image7_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 65, e.scale9Grid = new egret.Rectangle(68, 36, 1, 1), e.source = "btn_yellow4_png", e.width = 110, e.x = -1, e.y = 9, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "tuji3_json.lingquT_png", e.x = 23, e.y = 21, e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this.itembg_i(), this._Group6_i(), this._Group7_i(), this.titleGro_i(), this._Group8_i(), this.getBtn_i()], e
    }, t.itembg_i = function() {
        var e = new eui.Image;
        return this.itembg = e, e.source = "task_item2_png", e.x = 0, e.y = 0, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.left = 167, e.verticalCenter = 17, e.elementsContent = [this.loadbg_i(), this.loadbar_i(), this.valuelab_i()], e
    }, t.loadbg_i = function() {
        var e = new eui.Image;
        return this.loadbg = e, e.horizontalCenter = 0, e.source = "vip1_png", e.verticalCenter = 0, e.width = 300, e
    }, t.loadbar_i = function() {
        var e = new eui.Image;
        return this.loadbar = e, e.anchorOffsetX = 0, e.height = 23, e.source = "vip2_png", e.width = 293, e.x = 3.35, e.y = 3, e
    }, t.valuelab_i = function() {
        var e = new eui.BitmapLabel;
        return this.valuelab = e, e.anchorOffsetX = 0, e.font = "baimiaobian_fnt", e.text = "9999/9999", e.textAlign = "center", e.width = 228, e.x = 47, e.y = .64, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 130, e.left = 14, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -5.5, e.width = 130, e.x = 16, e.y = 6, e.elementsContent = [this.headImg_i()], e
    }, t.headImg_i = function() {
        var e = new eui.Image;
        return this.headImg = e, e.height = 103, e.horizontalCenter = -4, e.scaleX = 1, e.scaleY = 1, e.source = "renwu1_png", e.verticalCenter = 3.5, e.width = 103, e
    }, t.titleGro_i = function() {
        var e = new eui.Group;
        return this.titleGro = e, e.height = 40, e.horizontalCenter = 69.5, e.width = 420, e.y = 10.64, e.elementsContent = [this.txtlab_i(), this._Label4_i(), this.awardlab_i(), this.diamondImg_i()], e
    }, t.txtlab_i = function() {
        var e = new eui.Label;
        return this.txtlab = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.scaleX = 1, e.scaleY = 1, e.size = 25, e.text = "击杀1000个敌人", e.textColor = 2050105, e.width = 300, e.x = 11.170000000000016, e.y = 9.359999999999998, e
    }, t._Label4_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 71, e.scaleX = 1, e.scaleY = 1, e.size = 28, e.text = "", e.textColor = 2050105, e.verticalCenter = -3, e.x = 246.36000000000007, e.y = 5.359999999999998, e
    }, t.awardlab_i = function() {
        var e = new eui.Label;
        return this.awardlab = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 176.5, e.scaleX = 1, e.scaleY = 1, e.size = 28, e.text = "x50", e.textColor = 2050105, e.verticalCenter = -2, e.x = 360.36, e.y = 5.359999999999998, e
    }, t.diamondImg_i = function() {
        var e = new eui.Image;
        return this.diamondImg = e, e.scaleX = .7, e.scaleY = .7, e.source = "tuji6_json.icon_gem_png", e.x = 312.48, e.y = 1.3199999999999985, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.right = 11, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 16.5, e.y = 68, e.elementsContent = [this.tiplab_i()], e
    }, t.tiplab_i = function() {
        var e = new eui.Label;
        return this.tiplab = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, e.maxHeight = 30, e.maxWidth = 118, e.scaleX = 1, e.scaleY = 1, e.size = 28, e.text = "进行中..", e.textAlign = "left", e.textColor = 1665876, e.verticalAlign = "middle", e.verticalCenter = 0, e.width = 118, e
    }, t.getBtn_i = function() {
        var e = new eui.Group;
        return this.getBtn = e, e.right = 15, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 16, e.y = 58, e.elementsContent = [this._Image8_i(), this._Image9_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 65, e.scale9Grid = new egret.Rectangle(68, 36, 1, 1), e.source = "btn_yellow4_png", e.width = 110, e.x = -1, e.y = 9, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "tuji3_json.lingquT_png", e.x = 23, e.y = 21, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/RenWuView.exml"] = window.RenWuViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["goBack", "dataList", "scroller", "oneKeyBtn", "onkeyImg", "btnBg1", "workTaskBtn", "btnBg2", "achTaskBtn", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this.goBack_i(), this.scroller_i(), this.oneKeyBtn_i(), this.onkeyImg_i(), this._Group2_i(), this._Group3_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = -140, e.horizontalCenter = 0, e.source = "menu_bg1_png", e.top = -139, e.verticalCenter = 0, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.left = 21, e.top = 57, e.elementsContent = [this._Image2_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "btn_back1_png", e.x = 0, e.y = 0, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 798, e.horizontalCenter = 0, e.top = 308, e.width = 720, e.viewport = this._Group1_i(), e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.width = 540, e.x = -13.64, e.elementsContent = [this.dataList_i()], e
    }, t.dataList_i = function() {
        var e = new eui.List;
        return this.dataList = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = RenWu1ViewSkin, e.width = 720, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 50, e.paddingLeft = 47, e.verticalGap = 3, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object7_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t.oneKeyBtn_i = function() {
        var e = new eui.Group;
        return this.oneKeyBtn = e, e.horizontalCenter = .5, e.top = 1133, e.visible = !1, e.elementsContent = [this._Image3_i(), this._Image4_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 92, e.scale9Grid = new egret.Rectangle(68, 36, 1, 1), e.source = "btn_yellow4_png", e.width = 200, e.x = -1, e.y = 9, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "yijianlingqu_png", e.x = 18, e.y = 25, e
    }, t.onkeyImg_i = function() {
        var e = new eui.Group;
        return this.onkeyImg = e, e.horizontalCenter = 0, e.top = 1145, e.visible = !1, e.elementsContent = [this._Image5_i(), this._Image6_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .76, e.scaleY = .75, e.source = "tuji4_json.yingyingls1_png", e.x = 0, e.y = 0, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "yijianlingqu_png", e.x = 18, e.y = 13, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.top = 20, e.elementsContent = [this._Image7_i(), this._Image8_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.scaleX = 1, e.scaleY = 1, e.source = "tuji4_json.title_bg5_png", e.x = -108.99999999999997, e.y = 54.72999999999999, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "txt_task_png", e.y = 67.52, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -165, e.top = 206, e.elementsContent = [this.workTaskBtn_i(), this.achTaskBtn_i()], e
    }, t.workTaskBtn_i = function() {
        var e = new eui.Group;
        return this.workTaskBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 80, e.width = 177.33, e.x = 3, e.y = 4, e.elementsContent = [this.btnBg1_i(), this._Image9_i()], e
    }, t.btnBg1_i = function() {
        var e = new eui.Image;
        return this.btnBg1 = e, e.horizontalCenter = .33499999999999375, e.scaleX = 1, e.scaleY = 1, e.source = "tuji5_json.btn_tab2_png", e.verticalCenter = 4, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -3.6650000000000063, e.scaleX = .9, e.scaleY = .9, e.source = "richangrenwu_png", e.verticalCenter = -6.5, e
    }, t.achTaskBtn_i = function() {
        var e = new eui.Group;
        return this.achTaskBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 80, e.width = 177.33, e.x = 194, e.y = 4, e.elementsContent = [this.btnBg2_i(), this._Image10_i()], e
    }, t.btnBg2_i = function() {
        var e = new eui.Image;
        return this.btnBg2 = e, e.horizontalCenter = .33499999999999375, e.scaleX = 1, e.scaleY = 1, e.source = "tuji5_json.btn_tab4_png", e.verticalCenter = 4, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "chengjiurenwu_png", e.x = 17.669999999999987, e.y = 8.320000000000022, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ScrollerSkin.exml"] = window.skins.ScrollerSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["horizontalScrollBar", "verticalScrollBar"], this.minHeight = 20, this.minWidth = 20, this.elementsContent = [this.horizontalScrollBar_i(), this.verticalScrollBar_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.horizontalScrollBar_i = function() {
        var e = new eui.HScrollBar;
        return this.horizontalScrollBar = e, e.bottom = 0, e.percentWidth = 100, e
    }, t.verticalScrollBar_i = function() {
        var e = new eui.VScrollBar;
        return this.verticalScrollBar = e, e.percentHeight = 100, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ShangDian1View.exml"] = window.ShangDian1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList1", "scroller", "titleImg", "doubleLingqu", "lingqu"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this.scroller_i(), this.titleImg_i(), this.doubleLingqu_i(), this.lingqu_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = -140, e.left = 0, e.right = 0, e.source = "menu_bg2_png", e.top = -139, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 1069.06, e.horizontalCenter = 0, e.verticalCenter = 85.5, e.width = 720, e.viewport = this._Group1_i(), e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 1058.79, e.width = 540, e.x = -13.64, e.elementsContent = [this.dataList1_i()], e
    }, t.dataList1_i = function() {
        var e = new eui.List;
        return this.dataList1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = ShangDian2ViewSkin, e.width = 720, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 50, e.paddingLeft = 47, e.verticalGap = 1, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object7_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object8_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object9_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object10_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t.titleImg_i = function() {
        var e = new eui.Group;
        return this.titleImg = e, e.horizontalCenter = .5, e.top = 56, e.elementsContent = [this._Image2_i(), this._Image3_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "title_bg5_png", e.x = 0, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "txt_gain_png", e.x = 125, e.y = 16.6, e
    }, t.doubleLingqu_i = function() {
        var e = new eui.Group;
        return this.doubleLingqu = e, e.horizontalCenter = 1, e.verticalCenter = 504.5, e.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 102.06, e.scale9Grid = new egret.Rectangle(68, 36, 1, 1), e.source = "btn_yellow4_png", e.width = 225, e.x = -1, e.y = -1.06, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "zailingyiciT_png", e.x = 51.76, e.y = 22.52, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "icon_ad_png", e.x = 5.78, e.y = 18.79, e
    }, t.lingqu_i = function() {
        var e = new eui.Group;
        return this.lingqu = e, e.horizontalCenter = 1, e.verticalCenter = 384.5, e.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Label1_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 92, e.scale9Grid = new egret.Rectangle(68, 36, 1, 1), e.source = "btn_blue5_png", e.width = 195, e.x = -1, e.y = 9, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "dianjiT_png", e.visible = !1, e.x = 14.92, e.y = 27.48, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "lingquT_png", e.visible = !1, e.x = 88.57, e.y = 28.81, e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.height = 52, e.size = 35, e.text = "CLOSE", e.textAlign = "center", e.textColor = 15592941, e.verticalAlign = "middle", e.width = 154, e.x = 21, e.y = 28, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ShangDian2View.exml"] = window.ShangDian2ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["cardbg", "loadBg", "loadbar", "arrows", "level", "cardNum", "topGro", "toolsImg", "feiliaoImg", "plantImg", "zhiwu", "feiliao", "tools", "num"], this.height = 266, this.width = 175, this.elementsContent = [this._Group1_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5, e.verticalCenter = 4.5, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.cardbg_i(), this.topGro_i(), this.toolsImg_i(), this.feiliaoImg_i(), this.plantImg_i(), this.zhiwu_i(), this.feiliao_i(), this.tools_i(), this.num_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .65, e.source = "card_bg4_png", e.visible = !1, e.x = 0, e.y = 3, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .65, e.source = "card_bg3_png", e.visible = !1, e.x = 0, e.y = 3, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .65, e.source = "card_bg2_png", e.visible = !1, e.x = 0, e.y = 3, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .65, e.source = "card_bg1_png", e.visible = !1, e.x = 0, e.y = 3, e
    }, t.cardbg_i = function() {
        var e = new eui.Image;
        return this.cardbg = e, e.scaleX = .7, e.scaleY = .65, e.source = "card_bg1_1_png", e.x = 0, e.y = 0, e
    }, t.topGro_i = function() {
        var e = new eui.Group;
        return this.topGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 35.2, e.scaleX = 1, e.scaleY = 1, e.width = 159.6, e.x = -6.670000000000016, e.y = -7.029999999999973, e.elementsContent = [this.loadBg_i(), this.loadbar_i(), this._Image5_i(), this.arrows_i(), this.level_i(), this.cardNum_i()], e
    }, t.loadBg_i = function() {
        var e = new eui.Image;
        return this.loadBg = e, e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(32, 21, 1, 1), e.scaleY = .6, e.source = "bar_bg2_png", e.width = 133.5, e.x = 26, e.y = 7.17, e
    }, t.loadbar_i = function() {
        var e = new eui.Image;
        return this.loadbar = e, e.anchorOffsetY = 0, e.height = 33.23, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .7, e.scaleY = .63, e.source = "bar_bg1_png", e.x = 27, e.y = 8.8, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "bg_lv_big_png", e.x = 3.17, e.y = -1.02, e
    }, t.arrows_i = function() {
        var e = new eui.Image;
        return this.arrows = e, e.scaleX = .5, e.scaleY = .5, e.source = "icon_up_new_png", e.x = 138.67000000000002, e.y = 3.0299999999999727, e
    }, t.level_i = function() {
        var e = new eui.BitmapLabel;
        return this.level = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 55, e.scaleX = .4, e.scaleY = .4, e.text = "99", e.width = 77.5, e.x = 6, e.y = 8, e
    }, t.cardNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.cardNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 35, e.scaleX = .7, e.scaleY = .7, e.text = "99/99", e.width = 98.33, e.x = 57, e.y = 8, e
    }, t.toolsImg_i = function() {
        var e = new eui.Image;
        return this.toolsImg = e, e.scaleX = .7, e.scaleY = .7, e.source = "builder_png", e.visible = !1, e.x = 28, e.y = 32, e
    }, t.feiliaoImg_i = function() {
        var e = new eui.Image;
        return this.feiliaoImg = e, e.source = "gift_manue_icon_png", e.visible = !1, e.x = 39, e.y = 61, e
    }, t.plantImg_i = function() {
        var e = new eui.Image;
        return this.plantImg = e, e.horizontalCenter = .5, e.scaleX = .5, e.scaleY = .5, e.source = "zhiwu1_png", e.verticalCenter = -23, e
    }, t.zhiwu_i = function() {
        var e = new eui.Image;
        return this.zhiwu = e, e.horizontalCenter = .5, e.scaleX = .7, e.scaleY = .7, e.source = "zhiwuzi1_png", e.verticalCenter = 78.5, e
    }, t.feiliao_i = function() {
        var e = new eui.Image;
        return this.feiliao = e, e.scaleX = .8, e.scaleY = .8, e.source = "feiliao_png", e.visible = !1, e.x = 43, e.y = 180, e
    }, t.tools_i = function() {
        var e = new eui.Image;
        return this.tools = e, e.scaleX = .8, e.scaleY = .8, e.source = "zhongzhigongjuT_png", e.visible = !1, e.x = 15, e.y = 178, e
    }, t.num_i = function() {
        var e = new eui.BitmapLabel;
        return this.num = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 32, e.text = "x3", e.width = 93, e.x = 60, e.y = 144, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ShangDian3View.exml"] = window.ShangDian3ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["touchBg", "dataList1", "scroller", "cardGro1", "animGro", "starGro", "cardGro2", "pic", "s1", "a1", "s0", "a0", "a3", "a2", "yuncai"], this.height = 1280, this.width = 720, this.elementsContent = [this.touchBg_i(), this.scroller_i(), this._Group2_i(), this.yuncai_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.touchBg_i = function() {
        var e = new eui.Image;
        return this.touchBg = e, e.bottom = -140, e.left = 1, e.right = -1, e.source = "menu_bg2_png", e.top = -139, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 780, e.horizontalCenter = 0, e.top = 50, e.visible = !1, e.width = 720, e.viewport = this._Group1_i(), e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.width = 540, e.x = -13.64, e.elementsContent = [this.dataList1_i()], e
    }, t.dataList1_i = function() {
        var e = new eui.List;
        return this.dataList1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 800, e.itemRendererSkinName = ShangDian2ViewSkin, e.top = 0, e.width = 720, e.x = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 50, e.paddingLeft = 47, e.verticalGap = 1, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object7_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object8_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object9_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.bottom = 0, e.horizontalCenter = 0, e.top = 0, e.width = 720, e.elementsContent = [this.cardGro1_i(), this.animGro_i(), this.starGro_i(), this.cardGro2_i(), this.pic_i(), this._Image1_i(), this.a3_i(), this.a2_i()], e
    }, t.cardGro1_i = function() {
        var e = new eui.Group;
        return this.cardGro1 = e, e.height = 1280, e.horizontalCenter = 0, e.left = 0, e.right = 0, e.top = 0, e.elementsContent = [this._ShangDian2View1_i(), this._ShangDian2View2_i(), this._ShangDian2View3_i(), this._ShangDian2View4_i(), this._ShangDian2View5_i(), this._ShangDian2View6_i(), this._ShangDian2View7_i(), this._ShangDian2View8_i(), this._ShangDian2View9_i(), this._ShangDian2View10_i()], e
    }, t._ShangDian2View1_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 144.64, e.y = 183.21, e
    }, t._ShangDian2View2_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 369.64, e.y = 183.21, e
    }, t._ShangDian2View3_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 594.64, e.y = 183.21, e
    }, t._ShangDian2View4_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 144.64, e.y = 450.21, e
    }, t._ShangDian2View5_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 369.64, e.y = 450.21, e
    }, t._ShangDian2View6_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 594.64, e.y = 450.21, e
    }, t._ShangDian2View7_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 144.64, e.y = 717.21, e
    }, t._ShangDian2View8_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 369.64, e.y = 717.21, e
    }, t._ShangDian2View9_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 594.64, e.y = 717.21, e
    }, t._ShangDian2View10_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 144.05, e.y = 987.81, e
    }, t.animGro_i = function() {
        var e = new eui.Group;
        return this.animGro = e, e.bottom = 22, e.height = 200, e.horizontalCenter = 4, e.scaleX = 1, e.scaleY = 1, e.width = 200, e.x = 264, e.y = 927.0000000000001, e
    }, t.starGro_i = function() {
        var e = new eui.Group;
        return this.starGro = e, e.bottom = 568, e.height = 200, e.horizontalCenter = 37, e.width = 200, e
    }, t.cardGro2_i = function() {
        var e = new eui.Group;
        return this.cardGro2 = e, e.height = 1280, e.horizontalCenter = 0, e.left = 0, e.right = 0, e.top = 0, e.elementsContent = [this._ShangDian2View11_i(), this._ShangDian2View12_i(), this._ShangDian2View13_i(), this._ShangDian2View14_i(), this._ShangDian2View15_i(), this._ShangDian2View16_i(), this._ShangDian2View17_i(), this._ShangDian2View18_i(), this._ShangDian2View19_i(), this._ShangDian2View20_i()], e
    }, t._ShangDian2View11_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.scaleX = 1, e.width = 165, e.x = 397.5, e.y = 668.71, e
    }, t._ShangDian2View12_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 397.5, e.y = 668.71, e
    }, t._ShangDian2View13_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 397.5, e.y = 668.71, e
    }, t._ShangDian2View14_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 397.5, e.y = 668.71, e
    }, t._ShangDian2View15_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 397.5, e.y = 668.71, e
    }, t._ShangDian2View16_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 397.5, e.y = 668.71, e
    }, t._ShangDian2View17_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 397.5, e.y = 668.71, e
    }, t._ShangDian2View18_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 397.5, e.y = 668.71, e
    }, t._ShangDian2View19_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 397.5, e.y = 668.71, e
    }, t._ShangDian2View20_i = function() {
        var e = new ShangDian2View;
        return e.anchorOffsetX = 92.5, e.anchorOffsetY = 118, e.height = 236, e.width = 165, e.x = 397.5, e.y = 668.71, e
    }, t.pic_i = function() {
        var e = new eui.Image;
        return this.pic = e, e.bottom = 136, e.horizontalCenter = 33, e.scaleX = .9, e.scaleY = .9, e.source = "shadi1_png", e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = -141, e.horizontalCenter = 0, e.scaleY = 1, e.source = "shadi2_png", e
    }, t.a3_i = function() {
        var e = new eui.Group;
        return this.a3 = e, e.anchorOffsetX = 0, e.height = 266, e.horizontalCenter = 14.5, e.scaleX = 1, e.scaleY = 1, e.visible = !1, e.width = 185, e.x = 282, e.y = 368.03, e.elementsContent = [this.a1_i(), this.a0_i()], e
    }, t.a1_i = function() {
        var e = new eui.Group;
        return this.a1 = e, e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.x = 0, e.y = 0, e.elementsContent = [this.s1_i()], e
    }, t.s1_i = function() {
        var e = new ShangDian2View;
        return this.s1 = e, e.x = 0, e.y = 0, e
    }, t.a0_i = function() {
        var e = new eui.Group;
        return this.a0 = e, e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.visible = !1, e.x = 0, e.y = 0, e.elementsContent = [this.s0_i()], e
    }, t.s0_i = function() {
        var e = new ShangDian2View;
        return this.s0 = e, e.x = 0, e.y = 0, e
    }, t.a2_i = function() {
        var e = new eui.Group;
        return this.a2 = e, e.horizontalCenter = 9.5, e.scaleX = 1, e.scaleY = 1, e.top = 40, e.visible = !1, e.x = 282, e.y = 40, e.elementsContent = [this._ShangDian2View21_i()], e
    }, t._ShangDian2View21_i = function() {
        var e = new ShangDian2View;
        return e.x = 0, e.y = 0, e
    }, t.yuncai_i = function() {
        var e = new eui.Group;
        return this.yuncai = e, e.anchorOffsetX = 352, e.anchorOffsetY = 119, e.height = 233.33, e.horizontalCenter = 1, e.top = 11, e.width = 706, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ShangDianShuoMing1View.exml"] = window.ShangDianShuoMing1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["plantName", "starGro", "okImg", "levelNum"], this.height = 60, this.width = 500, this.elementsContent = [this._Group3_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 500, e.elementsContent = [this._Image1_i(), this._Group1_i(), this.starGro_i(), this._Group2_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 60, e.scale9Grid = new egret.Rectangle(17, 12, 467, 75), e.source = "tuji5_json.rank_2_png", e.width = 500, e.x = 0, e.y = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 40, e.width = 130, e.x = 7, e.y = 9, e.elementsContent = [this.plantName_i()], e
    }, t.plantName_i = function() {
        var e = new eui.Image;
        return this.plantName = e, e.horizontalCenter = 0, e.scaleX = .7, e.scaleY = .7, e.source = "tuji3_json.zhiwuzi1_png", e.verticalCenter = 0, e
    }, t.starGro_i = function() {
        var e = new eui.Group;
        return this.starGro = e, e.height = 30, e.width = 165, e.x = 183, e.y = 14, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -68, e.scaleX = .55, e.scaleY = .55, e.source = "star17115_png", e.verticalCenter = .5, e.x = -28, e.y = 1, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -40, e.scaleX = .55, e.scaleY = .55, e.source = "star17115_png", e.verticalCenter = .5, e.x = 0, e.y = 1, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -12, e.scaleX = .55, e.scaleY = .55, e.source = "star17115_png", e.verticalCenter = .5, e.x = 28, e.y = 1, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 16, e.scaleX = .55, e.scaleY = .55, e.source = "star17115_png", e.verticalCenter = .5, e.x = 56, e.y = 1, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 44, e.scaleX = .55, e.scaleY = .55, e.source = "star17115_png", e.verticalCenter = .5, e.x = 84, e.y = 1, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 71, e.scaleX = .55, e.scaleY = .55, e.source = "star17115_png", e.verticalCenter = .5, e.x = 111, e.y = 1, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 45, e.width = 60, e.x = 414, e.y = 7, e.elementsContent = [this.okImg_i(), this.levelNum_i()], e
    }, t.okImg_i = function() {
        var e = new eui.Image;
        return this.okImg = e, e.source = "ok2_png", e.x = 10, e.y = 5, e
    }, t.levelNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.levelNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 31, e.scaleX = .7, e.scaleY = .8, e.text = "400关", e.width = 98, e.x = 0, e.y = 10, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ShangDianShuoMingView.exml"] = window.ShangDianShuoMingViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["dataList", "scroller", "animaNode", "box", "anima", "card", "manure", "tip3", "tip2", "freeImg", "videoImg", "diamond", "diamondImg", "getBtn", "title", "goBack", "node"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this.node_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .4, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t.node_i = function() {
        var e = new eui.Group;
        return this.node = e, e.horizontalCenter = 0, e.verticalCenter = -58, e.width = 630, e.elementsContent = [this._Image2_i(), this._Group6_i(), this.getBtn_i(), this.title_i(), this.goBack_i(), this._Image16_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 950, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(95, 194, 410, 468), e.scaleX = 1, e.scaleY = 1, e.source = "gyUI_png", e.verticalCenter = 0, e.width = 630, e.x = 10, e.y = 10, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.height = 680, e.width = 540, e.x = 45, e.y = 136, e.elementsContent = [this._Image3_i(), this.scroller_i(), this.animaNode_i(), this.anima_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 400, e.scale9Grid = new egret.Rectangle(72, 24, 436, 150), e.scaleX = 1, e.scaleY = 1, e.source = "gyUI1_png", e.width = 540, e.x = 0, e.y = 284.44, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 300, e.horizontalCenter = 0, e.verticalCenter = 184, e.width = 500, e.viewport = this._Group1_i(), e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.width = 500, e.x = -13.64, e.elementsContent = [this.dataList_i()], e
    }, t.dataList_i = function() {
        var e = new eui.List;
        return this.dataList = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = ShangDianShuoMing1ViewSkin, e.width = 500, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 10, e.paddingLeft = 1, e.verticalGap = 4, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t.animaNode_i = function() {
        var e = new eui.Group;
        return this.animaNode = e, e.anchorOffsetX = 100, e.anchorOffsetY = 100, e.height = 200, e.width = 200, e.x = 270, e.y = 144, e
    }, t.anima_i = function() {
        var e = new eui.Group;
        return this.anima = e, e.anchorOffsetX = 96, e.anchorOffsetY = 132, e.x = 271, e.y = 149, e.elementsContent = [this.box_i()], e
    }, t.box_i = function() {
        var e = new eui.Image;
        return this.box = e, e.anchorOffsetX = 96, e.anchorOffsetY = 121.33, e.horizontalCenter = 0, e.source = "tuji6_json.shop_seed2_png", e.verticalCenter = -11, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 60, e.width = 166, e.x = 374, e.y = 161, e.elementsContent = [this._Image4_i(), this.card_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "tuji7_json.icon_card_png", e.x = -1.98, e.y = 2, e
    }, t.card_i = function() {
        var e = new eui.BitmapLabel;
        return this.card = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 30.67, e.text = "1-3", e.textAlign = "left", e.width = 68, e.x = 62, e.y = 15, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 60, e.width = 187.33, e.x = 352.66999999999996, e.y = 225, e.elementsContent = [this._Image5_i(), this.manure_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "tuji6_json.gift_manue_icon_png", e.x = .68, e.y = 5.99, e
    }, t.manure_i = function() {
        var e = new eui.BitmapLabel;
        return this.manure = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 30.67, e.scaleX = 1, e.scaleY = 1, e.text = "220-520", e.textAlign = "left", e.verticalCenter = .5, e.width = 144, e.x = 44.98, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 57, e.y = 11, e.elementsContent = [this.tip3_i(), this.tip2_i()], e
    }, t.tip3_i = function() {
        var e = new eui.Image;
        return this.tip3 = e, e.scaleX = .5, e.scaleY = .5, e.source = "bide_png", e.x = 0, e.y = 0, e
    }, t.tip2_i = function() {
        var e = new eui.Image;
        return this.tip2 = e, e.scaleX = .5, e.scaleY = .5, e.source = "bide1_png", e.x = 4, e.y = 1, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 83, e.width = 520, e.x = 11, e.y = 290.35, e.elementsContent = [this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "tuji5_json.rank_4_png", e.x = 9, e.y = 44.98, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "shiwujiesuozi_png", e.x = 184, e.y = -5.65, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "zzhiwuzhonglei_png", e.x = 11, e.y = 50, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "pinji_png", e.x = 209, e.y = 50, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "zhiwujiesuoguanka_png", e.x = 408, e.y = 50, e
    }, t.getBtn_i = function() {
        var e = new eui.Group;
        return this.getBtn = e, e.anchorOffsetY = 0, e.x = 235, e.y = 851.31, e.elementsContent = [this._Image11_i(), this.freeImg_i(), this.videoImg_i(), this.diamondImg_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(64, 31, 5, 7), e.source = "btn_yellow4_png", e.verticalCenter = 0, e.width = 160, e
    }, t.freeImg_i = function() {
        var e = new eui.Image;
        return this.freeImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 56.33, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.source = "tuji3_json.mianfeiT_png", e.width = 116.66, e.x = 34.34, e.y = 17.67, e
    }, t.videoImg_i = function() {
        var e = new eui.Group;
        return this.videoImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 56, e.width = 136, e.x = 15.66, e.y = 10, e.elementsContent = [this._Image12_i(), this._Image13_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.source = "lingquT_png", e.x = 54.35000000000002, e.y = 11.009999999999991, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.source = "tuji6_json.icon_ad_png", e.x = 7.970000000000027, e.y = 1.3299999999999272, e
    }, t.diamondImg_i = function() {
        var e = new eui.Group;
        return this.diamondImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 56, e.width = 136, e.x = 15, e.y = 9.33, e.elementsContent = [this._Image14_i(), this.diamond_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.source = "tuji6_json.icon_gem_png", e.x = 3, e.y = 6.670000000000073, e
    }, t.diamond_i = function() {
        var e = new eui.BitmapLabel;
        return this.diamond = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 51, e.scaleX = .75, e.scaleY = .75, e.text = "300", e.width = 114, e.x = 54, e.y = 9.670000000000073, e
    }, t.title_i = function() {
        var e = new eui.Image;
        return this.title = e, e.scaleX = .7, e.scaleY = .7, e.source = "tuji6_json.JPYM_png", e.x = 225, e.y = 41.55, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.scaleX = 1, e.scaleY = 1, e.x = 573.44, e.y = 52.36, e.elementsContent = [this._Image15_i()], e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "btn_close1_png", e.x = 0, e.y = 0, e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "youmiaopeiyu_png", e.x = 167, e.y = 817, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ShangDianView.exml"] = window.ShangDianViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["goBack", "manureText", "diamondP3", "daimondText", "box4Anima", "box4", "v1", "diamondBtn", "countText", "box3Anima", "box3", "freeText", "diatext", "seed3btn", "getTimeText", "box1", "freeSeed", "v2", "videoSeed", "seed1btn", "box2", "seed2Text", "seed2btn", "manure1text", "manure1btn", "manure2text", "manure2btn", "manure3text", "manure3btn", "t1", "tip1", "t2", "tip2", "t3", "tip3", "scroller"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.scroller_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = -140, e.left = 0, e.right = 0, e.scale9Grid = new egret.Rectangle(0, 5, 675, 317), e.source = "menu_bg1_png", e.top = -139, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.bottom = 0, e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "dec1_png", e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "dec2_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.left = 17, e.top = 36, e.elementsContent = [this.goBack_i()], e
    }, t.goBack_i = function() {
        var e = new eui.Image;
        return this.goBack = e, e.scaleX = .9, e.scaleY = .9, e.source = "btn_back1_png", e.x = 0, e.y = 0, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.horizontalCenter = -83, e.top = 76, e.width = 176, e.elementsContent = [this._Image4_i(), this._Image5_i(), this.manureText_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "res_bg1_png", e.x = 0, e.y = 0, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "gift_manue_icon_png", e.x = -15, e.y = -2.67, e
    }, t.manureText_i = function() {
        var e = new eui.BitmapLabel;
        return this.manureText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 30, e.text = "99999", e.width = 126.67, e.x = 35.83, e.y = 12.99, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 106, e.top = 76, e.elementsContent = [this._Image6_i(), this.diamondP3_i(), this.daimondText_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "res_bg1_png", e.x = 0, e.y = 0, e
    }, t.diamondP3_i = function() {
        var e = new eui.Image;
        return this.diamondP3 = e, e.scaleX = .9, e.scaleY = .9, e.source = "icon_gem_png", e.x = -13.04, e.y = 2.66, e
    }, t.daimondText_i = function() {
        var e = new eui.BitmapLabel;
        return this.daimondText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.text = "99999", e.width = 117.33, e.x = 44.33, e.y = 10.33, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 22, e.horizontalCenter = 0, e.top = 142, e.verticalCenter = 60, e.width = 720, e.viewport = this._Group14_i(), e
    }, t._Group14_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 1145.45, e.width = 720, e.elementsContent = [this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Group8_i(), this._Group12_i(), this._Group13_i(), this.tip1_i(), this.tip2_i(), this.tip3_i()], e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 2, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -418.5, e.x = 22.000000000000004, e.elementsContent = [this._Image7_i(), this._BitmapLabel1_i(), this.box4Anima_i(), this.box4_i(), this._Image8_i(), this.diamondBtn_i(), this._Image11_i(), this.countText_i(), this._Label1_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleY = .8, e.source = "shop_bg_gem_png", e.verticalCenter = 0, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 28, e.text = "x200", e.width = 85, e.x = 148.01, e.y = 198.05, e
    }, t.box4Anima_i = function() {
        var e = new eui.Group;
        return this.box4Anima = e, e.height = 200, e.width = 200, e.x = 62, e.y = 33.35, e
    }, t.box4_i = function() {
        var e = new eui.Image;
        return this.box4 = e, e.anchorOffsetX = 66, e.anchorOffsetY = 127, e.source = "diamonds_png", e.x = 163.56, e.y = 186.99, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "txt_gems_many_png", e.x = 407.29, e.y = 16.21, e
    }, t.diamondBtn_i = function() {
        var e = new eui.Group;
        return this.diamondBtn = e, e.x = 406.85, e.y = 126.79, e.elementsContent = [this._Image9_i(), this.v1_i(), this._Image10_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(69, 35, 1, 1), e.scaleX = 1.4, e.scaleY = 1.3, e.source = "btn_yellow4_png", e.x = 0, e.y = 0, e
    }, t.v1_i = function() {
        var e = new eui.Image;
        return this.v1 = e, e.anchorOffsetX = 27.86, e.anchorOffsetY = 32.14, e.scaleX = .8, e.scaleY = .8, e.source = "icon_ad_png", e.x = 48.87, e.y = 43.24, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "lingquT_png", e.x = 79.32, e.y = 23.67, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "icon_gem_png", e.x = 93.01, e.y = 190.57, e
    }, t.countText_i = function() {
        var e = new eui.BitmapLabel;
        return this.countText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.text = "6", e.x = 590.67, e.y = 82.49, e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "SimHei", e.size = 21, e.text = "Number of times left today:", e.textColor = 422766, e.x = 340, e.y = 87, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 1, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 342, e.x = 24, e.elementsContent = [this._Image12_i(), this.box3Anima_i(), this.box3_i(), this.seed3btn_i(), this._Image17_i(), this._Label2_i(), this.getTimeText_i(), this._Image18_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleY = .8, e.source = "shop_bg_seed_1_png", e.verticalCenter = 0, e
    }, t.box3Anima_i = function() {
        var e = new eui.Group;
        return this.box3Anima = e, e.height = 200, e.width = 200, e.x = 86, e.y = 20.67, e
    }, t.box3_i = function() {
        var e = new eui.Image;
        return this.box3 = e, e.anchorOffsetX = 175, e.anchorOffsetY = 316.67, e.scaleX = .8, e.scaleY = .8, e.source = "shop_seed5_png", e.x = 208, e.y = 241.14, e
    }, t.seed3btn_i = function() {
        var e = new eui.Group;
        return this.seed3btn = e, e.x = 413.77, e.y = 93.94, e.elementsContent = [this._Image13_i(), this.freeText_i(), this.diatext_i()], e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(69, 35, 1, 1), e.scaleX = .8, e.scaleY = .8, e.source = "btn_green6_png", e.x = 0, e.y = 0, e
    }, t.freeText_i = function() {
        var e = new eui.Group;
        return this.freeText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 54, e.width = 136, e.x = 32.33, e.y = 13.68, e.elementsContent = [this._Image14_i(), this._Image15_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .85, e.scaleY = .85, e.source = "mianfeiT_png", e.x = -2, e.y = 8.01, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .85, e.scaleY = .85, e.source = "lingquT_png", e.x = 61.660000000000025, e.y = 8.01, e
    }, t.diatext_i = function() {
        var e = new eui.Group;
        return this.diatext = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 50, e.visible = !1, e.width = 134, e.x = 34.34, e.y = 17.68, e.elementsContent = [this._Image16_i(), this._BitmapLabel2_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "icon_gem_png", e.x = -3.77, e.y = 2.1, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 52, e.scaleX = .7, e.scaleY = .7, e.text = "750", e.width = 131.67, e.x = 51.99, e.y = 8, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "CJYM_png", e.x = 409.33, e.y = 16.34, e
    }, t._Label2_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 18, e.text = "Free countdown:", e.textColor = 8405036, e.x = 330, e.y = 212, e
    }, t.getTimeText_i = function() {
        var e = new eui.BitmapLabel;
        return this.getTimeText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 34.72, e.text = "99:99:99", e.width = 156.31, e.x = 485.66, e.y = 205, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "bidezuanshika_png", e.x = 64, e.y = 195, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -250, e.x = 191, e.elementsContent = [this._Image19_i(), this._Image20_i()], e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .7, e.scaleY = .7, e.source = "title_green_new_png", e.verticalCenter = 0, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "txt_shop_seed_png", e.x = 84, e.y = 7, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -157.5, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -1.5, e.x = 62, e.elementsContent = [this._Image21_i(), this._Image22_i(), this.box1_i(), this._Image23_i(), this.seed1btn_i(), this._Label3_i()], e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .8, e.source = "shp_item3_png", e.verticalCenter = 0, e.x = -56, e.y = -159, e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -.5, e.scaleX = .3, e.scaleY = .3, e.source = "light2_png", e.y = 113.3, e
    }, t.box1_i = function() {
        var e = new eui.Image;
        return this.box1 = e, e.scaleX = .8, e.scaleY = .8, e.source = "shop_seed2_png", e.x = 65, e.y = 82.68, e
    }, t._Image23_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "JPYM_png", e.x = 37, e.y = 15.7, e
    }, t.seed1btn_i = function() {
        var e = new eui.Group;
        return this.seed1btn = e, e.horizontalCenter = 1, e.y = 318.3, e.elementsContent = [this._Image24_i(), this.freeSeed_i(), this.videoSeed_i()], e
    }, t._Image24_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(69, 35, 1, 1), e.scaleX = 1.2, e.source = "btn_yellow4_png", e.x = 0, e.y = 0, e
    }, t.freeSeed_i = function() {
        var e = new eui.Image;
        return this.freeSeed = e, e.scaleX = .85, e.scaleY = .85, e.source = "mianfeiT_png", e.x = 41.65, e.y = 16.67, e
    }, t.videoSeed_i = function() {
        var e = new eui.Group;
        return this.videoSeed = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 48, e.width = 126, e.x = 16, e.y = 11, e.elementsContent = [this.v2_i(), this._Image25_i()], e
    }, t.v2_i = function() {
        var e = new eui.Image;
        return this.v2 = e, e.anchorOffsetX = 28.33, e.anchorOffsetY = 33.33, e.scaleX = .6, e.scaleY = .6, e.source = "icon_ad_png", e.x = 24.36, e.y = 25.07, e
    }, t._Image25_i = function() {
        var e = new eui.Image;
        return e.scaleX = .85, e.scaleY = .85, e.source = "lingquT_png", e.x = 49.65, e.y = 6.67, e
    }, t._Label3_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "SimHei", e.size = 20, e.text = "Can get a mythical hero", e.textColor = 9278104, e.x = 40, e.y = 290, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 165.5, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -1.5, e.x = 385.00000000000006, e.elementsContent = [this._Image26_i(), this._Image27_i(), this.box2_i(), this._Image28_i(), this._Image29_i(), this.seed2btn_i()], e
    }, t._Image26_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .8, e.source = "shp_item4_png", e.verticalCenter = 0, e.x = -56, e.y = -159, e
    }, t._Image27_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -.5, e.scaleX = .3, e.scaleY = .3, e.source = "light2_png", e.y = 111.66, e
    }, t.box2_i = function() {
        var e = new eui.Image;
        return this.box2 = e, e.scaleX = .8, e.scaleY = .8, e.source = "shop_seed3_png", e.x = 61, e.y = 82.02, e
    }, t._Image28_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "TJYM_png", e.x = 37, e.y = 14.7, e
    }, t._Image29_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "CSJLDFTS_png", e.x = 33, e.y = 287, e
    }, t.seed2btn_i = function() {
        var e = new eui.Group;
        return this.seed2btn = e, e.horizontalCenter = .5, e.y = 323.3, e.elementsContent = [this._Image30_i(), this._Image31_i(), this.seed2Text_i()], e
    }, t._Image30_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(128, 56, 3, 3), e.scaleX = .65, e.scaleY = .65, e.source = "btn_green6_png", e.x = 1, e.y = -1, e
    }, t._Image31_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "icon_gem_png", e.x = 10.55, e.y = 10.42, e
    }, t.seed2Text_i = function() {
        var e = new eui.BitmapLabel;
        return this.seed2Text = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 52, e.scaleX = .7, e.scaleY = .7, e.text = "298", e.width = 131.67, e.x = 63.66, e.y = 16, e
    }, t._Group12_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 707.5, e.width = 700, e.elementsContent = [this._Group9_i(), this._Group10_i(), this._Group11_i()], e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.x = 16.66, e.y = 7.03, e.elementsContent = [this._Image32_i(), this._Image33_i(), this._Image34_i(), this._BitmapLabel3_i(), this.manure1btn_i()], e
    }, t._Image32_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "shp_item2_png", e.x = 0, e.y = 0, e
    }, t._Image33_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "icon_manure3_png", e.x = 17, e.y = 35, e
    }, t._Image34_i = function() {
        var e = new eui.Image;
        return e.source = "txt_manure1_png", e.x = 39, e.y = 6.66, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 29.82, e.text = "500", e.width = 66.04, e.x = 117.32, e.y = 155, e
    }, t.manure1btn_i = function() {
        var e = new eui.Group;
        return this.manure1btn = e, e.anchorOffsetY = 0, e.verticalCenter = 85, e.x = 10.67, e.elementsContent = [this._Image35_i(), this._Image36_i(), this.manure1text_i()], e
    }, t._Image35_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_green6_png", e.x = 0, e.y = 2, e
    }, t._Image36_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "icon_gem_png", e.x = 24.48, e.y = 17.09, e
    }, t.manure1text_i = function() {
        var e = new eui.BitmapLabel;
        return this.manure1text = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 52, e.scaleX = .7, e.scaleY = .7, e.text = "75", e.width = 116.67, e.x = 82.94, e.y = 19.99, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.x = 253.32, e.y = 7.03, e.elementsContent = [this._Image37_i(), this._Image38_i(), this._Image39_i(), this._BitmapLabel4_i(), this.manure2btn_i()], e
    }, t._Image37_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "shp_item2_png", e.x = 0, e.y = 0, e
    }, t._Image38_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "icon_manure5_png", e.x = 33, e.y = 41, e
    }, t._Image39_i = function() {
        var e = new eui.Image;
        return e.source = "txt_manure2_png", e.x = 40, e.y = 6.66, e
    }, t._BitmapLabel4_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 29.82, e.text = "2000", e.width = 87.29, e.x = 103.99, e.y = 155.01, e
    }, t.manure2btn_i = function() {
        var e = new eui.Group;
        return this.manure2btn = e, e.anchorOffsetY = 0, e.verticalCenter = 84, e.x = 12, e.elementsContent = [this._Image40_i(), this.manure2text_i(), this._Image41_i()], e
    }, t._Image40_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_green6_png", e.x = 0, e.y = 3.33, e
    }, t.manure2text_i = function() {
        var e = new eui.BitmapLabel;
        return this.manure2text = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 52, e.scaleX = .7, e.scaleY = .7, e.text = "298", e.width = 118.34, e.x = 73.31, e.y = 21.32, e
    }, t._Image41_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "icon_gem_png", e.x = 18.51, e.y = 18.42, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.x = 488.65, e.y = 7.03, e.elementsContent = [this._Image42_i(), this._Image43_i(), this._Image44_i(), this._BitmapLabel5_i(), this.manure3btn_i()], e
    }, t._Image42_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "shp_item2_png", e.x = 3, e.y = 0, e
    }, t._Image43_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "icon_manure7_png", e.x = 23, e.y = 34, e
    }, t._Image44_i = function() {
        var e = new eui.Image;
        return e.source = "txt_manure3_png", e.x = 42, e.y = 6.33, e
    }, t._BitmapLabel5_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 29.82, e.text = "5000", e.width = 91.04, e.x = 102.99, e.y = 156.33, e
    }, t.manure3btn_i = function() {
        var e = new eui.Group;
        return this.manure3btn = e, e.anchorOffsetY = 0, e.verticalCenter = 83, e.x = 14, e.elementsContent = [this._Image45_i(), this.manure3text_i(), this._Image46_i()], e
    }, t._Image45_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_green6_png", e.x = 0, e.y = 3.33, e
    }, t.manure3text_i = function() {
        var e = new eui.BitmapLabel;
        return this.manure3text = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 52, e.scaleX = .7, e.scaleY = .7, e.text = "298", e.width = 114.77, e.x = 72.68, e.y = 21.32, e
    }, t._Image46_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "icon_gem_png", e.x = 19.22, e.y = 17.09, e
    }, t._Group13_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 515, e.x = 191, e.elementsContent = [this._Image47_i(), this._Image48_i()], e
    }, t._Image47_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .7, e.scaleY = .7, e.source = "title_green_new_png", e.verticalCenter = 0, e
    }, t._Image48_i = function() {
        var e = new eui.Image;
        return e.source = "txt_shop_manure_png", e.x = 84, e.y = 7, e
    }, t.tip1_i = function() {
        var e = new eui.Group;
        return this.tip1 = e, e.height = 50, e.horizontalCenter = -28, e.verticalCenter = -196, e.width = 50, e.elementsContent = [this._Image50_i(), this.t1_i()], e
    }, t._Image50_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "info1_png", e.x = 3, e.y = 2, e
    }, t.t1_i = function() {
        var e = new eui.Image;
        return this.t1 = e, e.anchorOffsetX = 11.25, e.anchorOffsetY = 19.37, e.scaleX = .8, e.scaleY = .8, e.source = "info2_png", e.x = 24.33, e.y = 22.82, e
    }, t.tip2_i = function() {
        var e = new eui.Group;
        return this.tip2 = e, e.height = 50, e.horizontalCenter = 296, e.verticalCenter = -196, e.width = 50, e.elementsContent = [this._Image51_i(), this.t2_i()], e
    }, t._Image51_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "info1_png", e.x = 3, e.y = 2, e
    }, t.t2_i = function() {
        var e = new eui.Image;
        return this.t2 = e, e.anchorOffsetX = 11.67, e.anchorOffsetY = 19.17, e.scaleX = .8, e.scaleY = .8, e.source = "info2_png", e.x = 24.66, e.y = 22.65, e
    }, t.tip3_i = function() {
        var e = new eui.Group;
        return this.tip3 = e, e.height = 50, e.horizontalCenter = 323, e.verticalCenter = 222, e.width = 50, e.elementsContent = [this._Image52_i(), this.t3_i()], e
    }, t._Image52_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "info1_png", e.x = 3, e.y = 2, e
    }, t.t3_i = function() {
        var e = new eui.Image;
        return this.t3 = e, e.anchorOffsetX = 10.83, e.anchorOffsetY = 18.33, e.scaleX = .8, e.scaleY = .8, e.source = "info2_png", e.x = 24, e.y = 21.99, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ShangZhenTeXiaoView.exml"] = window.ShangZhenTeXiaoViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Rect1_i(), this._Group1_i(), this.goBack_i(), this._Group2_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Rect1_i = function() {
        var e = new eui.Rect;
        return e.bottom = 0, e.fillAlpha = .55, e.fillColor = 458754, e.left = 0, e.right = 0, e.strokeAlpha = 1, e.strokeColor = 16250100, e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5, e.verticalCenter = -127, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "bg17281_png", e.x = 0, e.y = 0, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "zhiwu24_png", e.x = 104, e.y = 219.78, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "title17278_png", e.x = 58.61, e.y = 115.51, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 0, e.verticalCenter = 314, e.elementsContent = [this._Image4_i(), this._Image5_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 88, e.scale9Grid = new egret.Rectangle(68, 35, 1, 1), e.source = "btn_yellow4_png", e.width = 180, e.x = 0, e.y = 0, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "quedingT_png", e.x = 48, e.y = 17.68, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 230.5, e.elementsContent = [this._Image6_i(), this._BitmapLabel1_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 55, e.scale9Grid = new egret.Rectangle(62, 21, 1, 17), e.scaleX = 1, e.scaleY = 1, e.source = "bgdesc_di_png", e.width = 400, e.x = 0, e.y = 0, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28, e.scaleX = .6, e.scaleY = .6, e.text = "NOW YOU CAN USE MORE PLANTS TO FIGHT", e.width = 600, e.x = 30, e.y = 24, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ShengXingView.exml"] = window.ShengXingViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["tipText", "videoUpStar", "upStarText", "upBtn", "goBack", "hurt", "addhurt", "stickHurt", "attackSpeed", "attackDis", "level1", "level1Gro", "level2", "levelGro", "level0", "levelGro0", "level3", "levelGro1", "animaGro", "dspine", "plantImg", "plantName"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this.tipText_i(), this.upBtn_i(), this.goBack_i(), this._Image7_i(), this._Group5_i(), this._Group7_i(), this.plantName_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = -140, e.left = 0, e.right = 0, e.source = "menu_bg2_png", e.top = -139, e
    }, t.tipText_i = function() {
        var e = new eui.Group;
        return this.tipText = e, e.anchorOffsetY = 0, e.height = 117, e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.top = 956, e.x = 227, e.elementsContent = [this._Image2_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "lingqushengxing_png", e.x = 0, e.y = 75, e
    }, t.upBtn_i = function() {
        var e = new eui.Group;
        return this.upBtn = e, e.horizontalCenter = -3, e.scaleX = 1, e.scaleY = 1, e.top = 955, e.x = 227, e.elementsContent = [this._Image3_i(), this.videoUpStar_i(), this.upStarText_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.scale9Grid = new egret.Rectangle(68, 35, 1, 2), e.source = "tuji6_json.btn_yellow4_png", e.width = 170, e.x = 5.99, e.y = 2.01, e
    }, t.videoUpStar_i = function() {
        var e = new eui.Group;
        return this.videoUpStar = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 57.33, e.width = 140, e.x = 23, e.y = 12.35, e.elementsContent = [this._Image4_i(), this._Image5_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "tuji8_json.renwu6_png", e.x = 6.6299999999999955, e.y = 3.3400000000001455, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "tuji3_json.lingquT_png", e.x = 51.31999999999999, e.y = 6.650000000000091, e
    }, t.upStarText_i = function() {
        var e = new eui.Image;
        return this.upStarText = e, e.source = "tuji3_json.shengxingT_png", e.x = 36.01, e.y = 18, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.height = 100, e.left = 25, e.top = 103, e.width = 100, e.elementsContent = [this._Image6_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "btn_back1_png", e.x = 5, e.y = 5, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.source = "upgrade_success_png", e.top = 79, e.touchEnabled = !1, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 1, e.top = 577, e.touchChildren = !1, e.touchEnabled = !1, e.touchThrough = !0, e.elementsContent = [this._Image8_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this.level1Gro_i(), this.levelGro_i(), this.levelGro0_i(), this.levelGro1_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.source = "sub_bg_upgrade_star1_png", e.x = 0, e.y = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -83.5, e.elementsContent = [this._Image9_i(), this._Image10_i(), this.hurt_i(), this.addhurt_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .8, e.source = "bg_item_blue_png", e.x = 0, e.y = 0, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "gongjishanghai_png", e.x = 33, e.y = 14, e
    }, t.hurt_i = function() {
        var e = new eui.BitmapLabel;
        return this.hurt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 48.45, e.scaleX = .6, e.scaleY = .6, e.text = "9999", e.width = 269.44, e.x = 199, e.y = 16, e
    }, t.addhurt_i = function() {
        var e = new eui.BitmapLabel;
        return this.addhurt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 48.45, e.scaleX = .5, e.scaleY = .5, e.text = "1000", e.width = 221.11, e.x = 316, e.y = 18, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 44, e.y = 146.99, e.elementsContent = [this._Image11_i(), this._Image12_i(), this.stickHurt_i(), this._BitmapLabel1_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .8, e.source = "bg_item_blue_png", e.x = 0, e.y = 0, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "chixushanghai_png", e.x = 33, e.y = 14, e
    }, t.stickHurt_i = function() {
        var e = new eui.BitmapLabel;
        return this.stickHurt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 48.45, e.scaleX = .6, e.scaleY = .6, e.text = "9999", e.width = 151.11, e.x = 199, e.y = 16, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 48.45, e.scaleX = .5, e.scaleY = .5, e.text = "1000", e.visible = !1, e.width = 151.11, e.x = 316, e.y = 18, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 59.5, e.y = 209.66666666666669, e.elementsContent = [this._Image13_i(), this._Image14_i(), this.attackSpeed_i(), this._BitmapLabel2_i()], e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .8, e.source = "bg_item_blue_png", e.x = 0, e.y = 0, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "gongjipinl_png", e.x = 33, e.y = 14, e
    }, t.attackSpeed_i = function() {
        var e = new eui.BitmapLabel;
        return this.attackSpeed = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 48.45, e.scaleX = .6, e.scaleY = .6, e.text = "9999", e.width = 151.11, e.x = 199, e.y = 16, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 48.45, e.scaleX = .5, e.scaleY = .5, e.text = "1000", e.visible = !1, e.width = 151.11, e.x = 316, e.y = 18, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 130.5, e.elementsContent = [this._Image15_i(), this._Image16_i(), this.attackDis_i(), this._BitmapLabel3_i()], e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .8, e.source = "bg_item_blue_png", e.x = 0, e.y = 0, e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "gongjijuli_png", e.x = 33, e.y = 14, e
    }, t.attackDis_i = function() {
        var e = new eui.BitmapLabel;
        return this.attackDis = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 48.45, e.scaleX = .6, e.scaleY = .6, e.text = "9999", e.width = 151.11, e.x = 199, e.y = 16, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 48.45, e.scaleX = .5, e.scaleY = .5, e.text = "1000", e.visible = !1, e.width = 151.11, e.x = 316, e.y = 18, e
    }, t.level1Gro_i = function() {
        var e = new eui.Group;
        return this.level1Gro = e, e.anchorOffsetX = 0, e.width = 67, e.x = 154, e.y = -17, e.elementsContent = [this._Image17_i(), this._Image18_i(), this.level1_i()], e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "arrow_png", e.x = 67.3, e.y = -5.04, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "bg_lv_big_png", e.x = 5, e.y = 0, e
    }, t.level1_i = function() {
        var e = new eui.BitmapLabel;
        return this.level1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 58.67, e.scaleX = .6, e.scaleY = .6, e.text = "99", e.width = 72, e.x = 12, e.y = 13, e
    }, t.levelGro_i = function() {
        var e = new eui.Group;
        return this.levelGro = e, e.anchorOffsetX = 33.5, e.anchorOffsetY = 31, e.horizontalCenter = 76.5, e.width = 67, e.y = 14, e.elementsContent = [this._Image19_i(), this.level2_i()], e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "bg_lv_big_png", e.x = 5, e.y = 0, e
    }, t.level2_i = function() {
        var e = new eui.BitmapLabel;
        return this.level2 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 58.67, e.scaleX = .6, e.scaleY = .6, e.text = "99", e.width = 72, e.x = 12, e.y = 13, e
    }, t.levelGro0_i = function() {
        var e = new eui.Group;
        return this.levelGro0 = e, e.anchorOffsetX = 33.5, e.anchorOffsetY = 31, e.width = 67, e.x = 260.5, e.y = 14, e.elementsContent = [this._Image20_i(), this.level0_i()], e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "bg_lv_big_png", e.x = 5, e.y = 0, e
    }, t.level0_i = function() {
        var e = new eui.BitmapLabel;
        return this.level0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 58.67, e.scaleX = .6, e.scaleY = .6, e.text = "99", e.width = 72, e.x = 12, e.y = 13, e
    }, t.levelGro1_i = function() {
        var e = new eui.Group;
        return this.levelGro1 = e, e.anchorOffsetX = 33.5, e.anchorOffsetY = 31, e.width = 67, e.x = 260.5, e.y = 14, e.elementsContent = [this._Image21_i(), this.level3_i()], e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "bg_lv_big_png", e.x = 5, e.y = 0, e
    }, t.level3_i = function() {
        var e = new eui.BitmapLabel;
        return this.level3 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 58.67, e.scaleX = .6, e.scaleY = .6, e.text = "99", e.width = 72, e.x = 12, e.y = 13, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 270, e.horizontalCenter = 1.5, e.top = 265, e.touchChildren = !1, e.touchEnabled = !1, e.touchThrough = !0, e.elementsContent = [this.animaGro_i(), this._Group6_i(), this.plantImg_i()], e
    }, t.animaGro_i = function() {
        var e = new eui.Group;
        return this.animaGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 248, e.width = 254.67, e.x = 5.33, e.y = 8, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 262, e.width = 271, e.x = -4, e.y = 2, e.elementsContent = [this.dspine_i()], e
    }, t.dspine_i = function() {
        var e = new DragonSpine;
        return this.dspine = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 252, e.width = 256, e.x = 10, e.y = 5, e
    }, t.plantImg_i = function() {
        var e = new eui.Image;
        return this.plantImg = e, e.source = "zhiwu1_png", e.visible = !1, e.x = 0, e.y = 9, e
    }, t.plantName_i = function() {
        var e = new eui.Image;
        return this.plantName = e, e.horizontalCenter = .5, e.source = "zhiwuzi1_png", e.top = 194, e.touchEnabled = !1, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/SheZhiView.exml"] = window.SheZhiViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["music0", "music1", "bloodSwitch", "skillSwitch", "goBack", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group5_i(), this.goBack_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -33, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Image9_i(), this._Image10_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 680, e.scale9Grid = new egret.Rectangle(344, 556, 7, 9), e.source = "gyUI_png", e.x = 0, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "txt_set_png", e.x = 216.52, e.y = 28.98, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 500, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(25, 21, 532, 152), e.source = "gyUI1_png", e.width = 540, e.y = 134.64, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 51, e.scaleX = 1, e.scaleY = 1, e.width = 500, e.x = 50, e.y = 187.3, e.elementsContent = [this.music0_i(), this._Image5_i()], e
    }, t.music0_i = function() {
        var e = new eui.ToggleSwitch;
        return this.music0 = e, e.height = 51, e.label = "ToggleButton", e.width = 290, e.x = 200, e.y = 1, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "yinyueT_png", e.x = 32.96, e.y = 1.02, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 51, e.scaleX = 1, e.scaleY = 1, e.width = 500, e.x = 50, e.y = 299, e.elementsContent = [this.music1_i(), this._Image6_i()], e
    }, t.music1_i = function() {
        var e = new eui.ToggleSwitch;
        return this.music1 = e, e.height = 51, e.label = "ToggleButton", e.width = 290, e.x = 205, e.y = 1, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "yinxiaoT_png", e.x = 32.96, e.y = 1.27, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 51, e.scaleX = 1, e.scaleY = 1, e.width = 500, e.x = 50, e.y = 411, e.elementsContent = [this.bloodSwitch_i(), this._Image7_i()], e
    }, t.bloodSwitch_i = function() {
        var e = new eui.ToggleSwitch;
        return this.bloodSwitch = e, e.height = 51, e.label = "ToggleButton", e.width = 290, e.x = 205, e.y = 1, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "shuzishanghaiT_png", e.x = 8.96, e.y = 5.27, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 51, e.scaleX = 1, e.scaleY = 1, e.width = 500, e.x = 50, e.y = 523, e.elementsContent = [this.skillSwitch_i(), this._Image8_i()], e
    }, t.skillSwitch_i = function() {
        var e = new eui.ToggleSwitch;
        return this.skillSwitch = e, e.height = 51, e.label = "ToggleButton", e.width = 290, e.x = 205, e.y = 1, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "jinengtexiaoT_png", e.x = 8.96, e.y = 5.27, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "gengjialiuchangT_png", e.x = 57, e.y = 466, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "gengjialiuchangT_png", e.x = 57, e.y = 578, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 277.5, e.verticalCenter = -293.5, e.elementsContent = [this._Image11_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ShiBaiView.exml"] = window.ShiBaiViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["b1", "b2", "b3", "videoGetBtn", "exitBtn", "plantBg0", "plantNum", "plantImg0", "plantBg", "plantImg", "plantNum0", "plantName", "goBack", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group11_i(), this.goBack_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 664.18, e.horizontalCenter = 0, e.verticalCenter = -2, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.videoGetBtn_i(), this._Image28_i(), this.exitBtn_i(), this._Group10_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 640, e.scale9Grid = new egret.Rectangle(23, 56, 143, 338), e.source = "list_bg_png", e.width = 620, e.x = 30, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "bg_png", e.x = 5, e.y = -352.63, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.visible = !1, e.x = 62, e.y = 95.54, e.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.b1_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(29, 43, 89, 66), e.source = "item_bg_png", e.width = 550, e.x = 4, e.y = 0, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "icon1_png", e.x = 24, e.y = 9.88, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "shuangbeigongjiziT_png", e.x = 138.4, e.y = .72, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zi1_png", e.x = 139, e.y = 49, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zi2_png", e.x = 139, e.y = 82, e
    }, t.b1_i = function() {
        var e = new eui.Group;
        return this.b1 = e, e.x = 408, e.y = 37, e.elementsContent = [this._Image9_i(), this._Image10_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "btn_yellow4_png", e.x = 0, e.y = 0, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "qianwangziT_png", e.x = 24, e.y = 5, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.visible = !1, e.x = 62, e.y = 269.54, e.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this.b2_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(29, 43, 89, 66), e.source = "item_bg_png", e.width = 550, e.x = 4, e.y = 0, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "icon2_png", e.x = 24, e.y = 9.88, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "tishengpaotaziT_png", e.x = 138.4, e.y = .72, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zi3_png", e.x = 139, e.y = 49, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zi4_png", e.x = 139, e.y = 82, e
    }, t.b2_i = function() {
        var e = new eui.Group;
        return this.b2 = e, e.x = 408, e.y = 37, e.elementsContent = [this._Image16_i(), this._Image17_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "btn_yellow4_png", e.x = 0, e.y = 0, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "qianwangziT_png", e.x = 24, e.y = 5, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.visible = !1, e.x = 62, e.y = 443.54, e.elementsContent = [this._Image18_i(), this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Image22_i(), this.b3_i()], e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(29, 43, 89, 66), e.source = "item_bg_png", e.width = 550, e.x = 4, e.y = 0, e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "zhiwu21_png", e.x = 28, e.y = 21.88, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "celzhanshuziT_png", e.x = 138.4, e.y = .72, e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zi5_png", e.x = 139, e.y = 49, e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zi6_png", e.x = 139, e.y = 82, e
    }, t.b3_i = function() {
        var e = new eui.Group;
        return this.b3 = e, e.x = 408, e.y = 37, e.elementsContent = [this._Image23_i(), this._Image24_i()], e
    }, t._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "btn_yellow4_png", e.x = 0, e.y = 0, e
    }, t._Image24_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "qianwangziT_png", e.x = 24, e.y = 5, e
    }, t.videoGetBtn_i = function() {
        var e = new eui.Group;
        return this.videoGetBtn = e, e.horizontalCenter = -1, e.verticalCenter = 241.91000000000003, e.elementsContent = [this._Image25_i(), this._Image26_i(), this._Image27_i()], e
    }, t._Image25_i = function() {
        var e = new eui.Image;
        return e.height = 73, e.scale9Grid = new egret.Rectangle(26, 26, 84, 18), e.source = "tuji6_json.btn_yellow4_png", e.width = 150, e.x = 5.99, e.y = 2.01, e
    }, t._Image26_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "tuji8_json.renwu6_png", e.x = 26.66, e.y = 16.36, e
    }, t._Image27_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "tuji3_json.lingquT_png", e.x = 62.35, e.y = 14.3, e
    }, t._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "zhanlibugou_png", e.x = 57, e.y = 148, e
    }, t.exitBtn_i = function() {
        var e = new eui.Label;
        return this.exitBtn = e, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.height = 32.55, e.horizontalCenter = 4, e.size = 28, e.text = "NO NEED", e.textAlign = "center", e.textColor = 11513518, e.verticalAlign = "middle", e.verticalCenter = 314.41, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.height = 230, e.width = 600, e.x = 40, e.y = 276, e.elementsContent = [this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Group8_i(), this._Group9_i()], e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 53.37, e.y = 12, e.elementsContent = [this._Image29_i(), this._Image30_i(), this._Image31_i(), this._BitmapLabel1_i(), this._BitmapLabel2_i()], e
    }, t._Image29_i = function() {
        var e = new eui.Image;
        return e.height = 200, e.scale9Grid = new egret.Rectangle(60, 88, 4, 71), e.source = "gift_atk_double_di_png", e.x = 0, e.y = 0, e
    }, t._Image30_i = function() {
        var e = new eui.Image;
        return e.source = "gift_atk_icon_png", e.x = 23, e.y = 62.91, e
    }, t._Image31_i = function() {
        var e = new eui.Image;
        return e.source = "tuji1_json.gift_atk_double_png", e.x = 23, e.y = 13.17, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.horizontalCenter = -22, e.text = "+10", e.verticalCenter = 65, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.horizontalCenter = 30.5, e.text = "MIN", e.verticalCenter = 65.5, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 232, e.y = 11.48, e.elementsContent = [this.plantBg0_i(), this.plantNum_i(), this.plantImg0_i(), this._Image32_i()], e
    }, t.plantBg0_i = function() {
        var e = new eui.Image;
        return this.plantBg0 = e, e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_1_png", e.verticalCenter = 0, e
    }, t.plantNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31, e.text = "x3", e.width = 44.71, e.x = 85.6, e.y = 122.95, e
    }, t.plantImg0_i = function() {
        var e = new eui.Image;
        return this.plantImg0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 244.56, e.scaleX = .4, e.scaleY = .4, e.source = "builder_png", e.width = 196.5, e.x = 31, e.y = 39, e
    }, t._Image32_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 34.48, e.source = "zhongzhigongjuT_png", e.width = 107.48, e.x = 14.06, e.y = 154.1, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 410.18, e.y = 12.38, e.elementsContent = [this.plantBg_i(), this.plantImg_i(), this.plantNum0_i(), this.plantName_i()], e
    }, t.plantBg_i = function() {
        var e = new eui.Image;
        return this.plantBg = e, e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg3_png", e.verticalCenter = 0, e
    }, t.plantImg_i = function() {
        var e = new eui.Image;
        return this.plantImg = e, e.scaleX = .4, e.scaleY = .4, e.source = "zhiwu3_png", e.x = 20, e.y = 26.88, e
    }, t.plantNum0_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantNum0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31, e.text = "x3", e.width = 44.71, e.x = 88.64, e.y = 122.95, e
    }, t.plantName_i = function() {
        var e = new eui.Image;
        return this.plantName = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 34.48, e.source = "tuji3_json.zhiwuzi3_png", e.width = 107.48, e.x = 14.06, e.y = 153.1, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.visible = !1, e.x = 157.66666666666669, e.y = 10, e.elementsContent = [this._Image33_i(), this._Image34_i(), this._Image35_i()], e
    }, t._Image33_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_1_png", e.verticalCenter = 0, e
    }, t._Image34_i = function() {
        var e = new eui.Image;
        return e.source = "gift_manue_icon_png", e.x = 28, e.y = 45, e
    }, t._Image35_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "feiliao_png", e.x = 32, e.y = 158, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.visible = !1, e.x = 310.33333333333337, e.y = 10, e.elementsContent = [this._Image36_i(), this._Image37_i(), this._Image38_i()], e
    }, t._Image36_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_1_png", e.verticalCenter = 0, e
    }, t._Image37_i = function() {
        var e = new eui.Image;
        return e.source = "gift_coin_icon_png", e.x = 26, e.y = 43, e
    }, t._Image38_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "jinbiT_png", e.x = 33, e.y = 159, e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.visible = !1, e.x = 464, e.y = 10, e.elementsContent = [this._Image39_i(), this._Image40_i(), this._Image41_i()], e
    }, t._Image39_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_1_png", e.verticalCenter = 0, e
    }, t._Image40_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "diamonds_png", e.x = 14, e.y = 34, e
    }, t._Image41_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zuanshiT_png", e.x = 33, e.y = 159, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 282.5, e.verticalCenter = -305.5, e.visible = !1, e.elementsContent = [this._Image42_i()], e
    }, t._Image42_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ShiJieView.exml"] = window.ShiJieViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["goBack", "levelGro"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this.goBack_i(), this._Image3_i(), this._Image4_i(), this._Group2_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = -140, e.left = 0, e.right = 0, e.source = "bg_world_map_png", e.top = -139, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.height = 100, e.width = 100, e.x = 25, e.y = 119.05, e.elementsContent = [this._Image2_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "btn_back1_png", e.x = 0, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.source = "title_bg5_png", e.top = 76, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.source = "txt_world_png", e.top = 90, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 1072.73, e.horizontalCenter = -.5, e.verticalCenter = 102.5, e.width = 715.15, e.elementsContent = [this._Group1_i(), this.levelGro_i()], e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 1069.7, e.width = 715.15, e.x = 3, e.y = 3, e.elementsContent = [this._Image5_i(), this._Image6_i(), this._Image7_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "island_1_png", e.x = 307, e.y = 538.8800000000001, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "island_2_png", e.x = 99, e.y = 296.88000000000005, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "island_3_png", e.x = 311, e.y = -7.120000000000033, e
    }, t.levelGro_i = function() {
        var e = new eui.Group;
        return this.levelGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 1072.73, e.width = 717.27, e.x = 1.34, e.y = -.34, e.elementsContent = [this._ShiJieView11_i(), this._ShiJieView12_i(), this._ShiJieView13_i(), this._ShiJieView14_i(), this._ShiJieView15_i(), this._ShiJieView16_i()], e
    }, t._ShiJieView11_i = function() {
        var e = new ShiJieView1;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 186, e.scaleX = 1, e.scaleY = 1, e.width = 86, e.x = 420.3, e.y = 633.1, e
    }, t._ShiJieView12_i = function() {
        var e = new ShiJieView1;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 186, e.scaleX = 1, e.scaleY = 1, e.width = 86, e.x = 338.3, e.y = 623.1, e
    }, t._ShiJieView13_i = function() {
        var e = new ShiJieView1;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 186, e.scaleX = 1, e.scaleY = 1, e.width = 86, e.x = 174.26, e.y = 398.02, e
    }, t._ShiJieView14_i = function() {
        var e = new ShiJieView1;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 186, e.scaleX = 1, e.scaleY = 1, e.width = 86, e.x = 252.3, e.y = 341.84, e
    }, t._ShiJieView15_i = function() {
        var e = new ShiJieView1;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 186, e.scaleX = 1, e.scaleY = 1, e.width = 86, e.x = 381.3, e.y = 96.42, e
    }, t._ShiJieView16_i = function() {
        var e = new ShiJieView1;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 186, e.scaleX = 1, e.scaleY = 1, e.width = 86, e.x = 462.26, e.y = 7.42, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ShiJieView1.exml"] = window.ShiJieView1Skin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["starImg", "diamondImg", "levelBtn"], this.height = 200, this.width = 120, this.elementsContent = [this.starImg_i(), this.levelBtn_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.starImg_i = function() {
        var e = new eui.Image;
        return this.starImg = e, e.horizontalCenter = 0, e.source = "a11_png", e.verticalCenter = 68.5, e
    }, t.levelBtn_i = function() {
        var e = new eui.Group;
        return this.levelBtn = e, e.height = 200, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 120, e.elementsContent = [this._Image1_i(), this.diamondImg_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.source = "a22_png", e.verticalCenter = 43, e.x = 24, e.y = 86, e
    }, t.diamondImg_i = function() {
        var e = new eui.Image;
        return this.diamondImg = e, e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.source = "world_map_arrow_png", e.y = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/SuiPian2View.exml"] = window.SuiPian2ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["bg", "plant", "plantName", "levelText", "jiesuoGro", "cursor", "sum"], this.height = 200, this.width = 155, this.elementsContent = [this._Group2_i(), this.cursor_i(), this.sum_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 2.5, e.elementsContent = [this.bg_i(), this.plant_i(), this._Group1_i(), this.jiesuoGro_i()], e
    }, t.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e, e.scaleX = .6, e.scaleY = .55, e.source = "tuji4_json.card_bg1_png", e.x = 0, e.y = 0, e
    }, t.plant_i = function() {
        var e = new eui.Image;
        return this.plant = e, e.horizontalCenter = 0, e.scaleX = .5, e.scaleY = .5, e.source = "tuji3_json.zhiwu1_png", e.verticalCenter = -30.5, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.horizontalCenter = 1.5, e.width = 127, e.y = 148, e.elementsContent = [this.plantName_i()], e
    }, t.plantName_i = function() {
        var e = new eui.Image;
        return this.plantName = e, e.horizontalCenter = 0, e.scaleX = .7, e.scaleY = .7, e.source = "yingxiongT1_png", e.y = 0, e
    }, t.jiesuoGro_i = function() {
        var e = new eui.Group;
        return this.jiesuoGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 33, e.width = 124, e.x = 2, e.y = 150, e.elementsContent = [this.levelText_i()], e
    }, t.levelText_i = function() {
        var e = new eui.BitmapLabel;
        return this.levelText = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 55.66, e.scaleX = .5, e.scaleY = .5, e.text = "999关解锁", e.textAlign = "center", e.width = 236.78, e.x = 7, e.y = 4, e
    }, t.cursor_i = function() {
        var e = new eui.Image;
        return this.cursor = e, e.horizontalCenter = 0, e.scaleX = .75, e.scaleY = .65, e.source = "jihuoyingxiong2_png", e.verticalCenter = 0, e
    }, t.sum_i = function() {
        var e = new eui.BitmapLabel;
        return this.sum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31, e.horizontalCenter = 35.5, e.text = "x2", e.verticalCenter = 41.5, e.width = 59.71, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/SuiPianHeCheng1.exml"] = window.SuiPianHeCheng1Skin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["quedingBtn", "changeBtn", "goBack", "dataList0", "scroller0", "usePlant"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group4_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image2_i(), this.quedingBtn_i(), this.changeBtn_i(), this.goBack_i(), this._Image9_i(), this._Group1_i(), this.scroller0_i(), this._Group3_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -1, e.source = "gyUI_png", e.verticalCenter = 0, e
    }, t.quedingBtn_i = function() {
        var e = new eui.Group;
        return this.quedingBtn = e, e.x = 126, e.y = 799.68, e.elementsContent = [this._Image3_i(), this._Image4_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 75, e.scale9Grid = new egret.Rectangle(69, 33, 1, 1), e.source = "btn_yellow4_png", e.width = 160, e.x = 4, e.y = 0, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "tuji3_json.quedingT_png", e.x = 41.34, e.y = 11.33, e
    }, t.changeBtn_i = function() {
        var e = new eui.Group;
        return this.changeBtn = e, e.x = 356, e.y = 799.68, e.elementsContent = [this._Image5_i(), this._Image6_i(), this._Image7_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 75, e.scale9Grid = new egret.Rectangle(69, 33, 1, 1), e.source = "tuji4_json.btn_blue5_png", e.width = 160, e.x = 4, e.y = 0, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .95, e.scaleY = .95, e.source = "genghuan_png", e.x = 59.99, e.y = 10.99, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "talent_down_png", e.x = 27.35, e.y = 18.66, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 278, e.verticalCenter = -363, e.elementsContent = [this._Image8_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_close1_png", e.x = -4, e.y = 1.57, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.scaleX = 1, e.scaleY = 1, e.source = "suipianxuanz_png", e.y = 48.99, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 101, e.elementsContent = [this._Image10_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 400, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(25, 24, 533, 148), e.source = "gyUI1_png", e.verticalCenter = 0, e.width = 550, e
    }, t.scroller0_i = function() {
        var e = new eui.Scroller;
        return this.scroller0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 390, e.horizontalCenter = -1, e.verticalCenter = 100, e.width = 543.94, e.viewport = this._Group2_i(), e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.width = 522.73, e.x = -13.64, e.elementsContent = [this.dataList0_i()], e
    }, t.dataList0_i = function() {
        var e = new eui.List;
        return this.dataList0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = SuiPian2ViewSkin, e.width = 542.43, e.x = 0, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 20, e.paddingLeft = 18, e.verticalGap = 10, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 200, e.horizontalCenter = 0, e.verticalCenter = -226, e.width = 200, e.elementsContent = [this._Image11_i(), this.usePlant_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.light_tower_upgrade_png", e.verticalCenter = 0, e.x = -17, e
    }, t.usePlant_i = function() {
        var e = new SuiPian2View;
        return this.usePlant = e, e.x = 23, e.y = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/SuiPianHeChengView.exml"] = window.SuiPianHeChengViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["mergeBtn1", "mergeBtn2", "smallCardGro", "bigCardGro", "mergeClick", "oneKeyBtn", "videoBtn", "needCardNum", "cardNum", "goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group3_i(), this.goBack_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -31, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Group1_i(), this.smallCardGro_i(), this.bigCardGro_i(), this.mergeClick_i(), this.oneKeyBtn_i(), this.videoBtn_i(), this._Group2_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 1e3, e.scale9Grid = new egret.Rectangle(93, 493, 416, 16), e.scaleX = 1, e.scaleY = 1, e.source = "gyUI_png", e.width = 650, e.x = 0, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(222, 2, 4, 2), e.source = "rank_4_png", e.verticalCenter = -257, e.width = 550, e.x = 51, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "invite_icon1_png", e.x = 26.34, e.y = 284.22, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "chaojihechengl_png", e.x = 223, e.y = 39, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .45, e.scaleY = .5, e.source = "ketongguoqiandao_png", e.x = 96, e.y = 940.34, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.x = 49, e.y = 165, e.elementsContent = [this.mergeBtn1_i(), this.mergeBtn2_i()], e
    }, t.mergeBtn1_i = function() {
        var e = new eui.Group;
        return this.mergeBtn1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 80, e.width = 172, e.x = 1.48, e.y = 0, e.elementsContent = [this._Image7_i(), this._Image8_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "btn_tab2_png", e.x = 0, e.y = 0, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "shishihecheng_png", e.touchEnabled = !1, e.x = 9.53, e.y = 12, e
    }, t.mergeBtn2_i = function() {
        var e = new eui.Group;
        return this.mergeBtn2 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 80, e.width = 172, e.x = 186.38, e.y = 0, e.elementsContent = [this._Image9_i(), this._Image10_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "btn_tab4_png", e.x = 0, e.y = 0, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "zuanshihecheng_png", e.touchEnabled = !1, e.x = 9.53, e.y = 12, e
    }, t.smallCardGro_i = function() {
        var e = new eui.Group;
        return this.smallCardGro = e, e.height = 415, e.width = 560, e.x = 47, e.y = 288, e.elementsContent = [this._KaPianHeChengView1_i(), this._KaPianHeChengView2_i(), this._KaPianHeChengView3_i(), this._KaPianHeChengView4_i(), this._KaPianHeChengView5_i()], e
    }, t._KaPianHeChengView1_i = function() {
        var e = new KaPianHeChengView;
        return e.x = 240.68, e.y = -15.99, e
    }, t._KaPianHeChengView2_i = function() {
        var e = new KaPianHeChengView;
        return e.x = -13, e.y = 128.65, e
    }, t._KaPianHeChengView3_i = function() {
        var e = new KaPianHeChengView;
        return e.x = 452, e.y = 128.65, e
    }, t._KaPianHeChengView4_i = function() {
        var e = new KaPianHeChengView;
        return e.x = 79.56, e.y = 358.32, e
    }, t._KaPianHeChengView5_i = function() {
        var e = new KaPianHeChengView;
        return e.x = 386.01, e.y = 358.32, e
    }, t.bigCardGro_i = function() {
        var e = new eui.Group;
        return this.bigCardGro = e, e.height = 415, e.touchThrough = !0, e.width = 560, e.x = 45, e.y = 278, e.elementsContent = [this._KaPianHeChengView6_i()], e
    }, t._KaPianHeChengView6_i = function() {
        var e = new KaPianHeChengView;
        return e.x = 240.68, e.y = 180.99, e
    }, t.mergeClick_i = function() {
        var e = new eui.Group;
        return this.mergeClick = e, e.x = 251, e.y = 758.36, e.elementsContent = [this._Image11_i(), this._Image12_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 115, e.scale9Grid = new egret.Rectangle(69, 34, 1, 2), e.source = "tuji6_json.btn_yellow4_png", e.width = 180, e.x = 0, e.y = 0, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1.1, e.scaleY = 1.1, e.source = "hecheng1_png", e.x = 35, e.y = 24.67, e
    }, t.oneKeyBtn_i = function() {
        var e = new eui.Group;
        return this.oneKeyBtn = e, e.x = 26, e.y = 780.01, e.elementsContent = [this._Image13_i(), this._Image14_i()], e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 80, e.scale9Grid = new egret.Rectangle(104, 44, 2, 1), e.source = "tuji4_json.btn_blue5_png", e.x = 0, e.y = 0, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "yijianfangru_png", e.x = 10, e.y = 15, e
    }, t.videoBtn_i = function() {
        var e = new eui.Group;
        return this.videoBtn = e, e.x = 446, e.y = 780.01, e.elementsContent = [this._Image15_i(), this._Image16_i(), this._Image17_i(), this._BitmapLabel1_i(), this._BitmapLabel2_i()], e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.scale9Grid = new egret.Rectangle(125, 49, 2, 3), e.source = "tuji6_json.btn_green6_png", e.width = 185, e.x = 0, e.y = 0, e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "tuji2_json.reward_ad_play_png", e.x = 18.63, e.y = 13, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "icon_card_png", e.x = 66.96, e.y = 18, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.font = "zhiwuziti_fnt", e.scaleX = 1.1, e.scaleY = 1.1, e.text = "3", e.x = 143.28, e.y = 26.35, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.font = "baimiaobian_fnt", e.scaleX = 1.2, e.scaleY = 1.2, e.text = "x", e.x = 111.64, e.y = 20.67, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 40, e.width = 300, e.x = 187, e.y = 889.98, e.elementsContent = [this._Image18_i(), this._Image19_i(), this._BitmapLabel3_i(), this.needCardNum_i(), this.cardNum_i()], e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "hechengxiaohao_png", e.x = 2, e.y = .99, e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "icon_card_png", e.x = 139, e.y = 1.32, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.font = "baimiaobian_fnt", e.text = "/", e.x = 237.35, e.y = 7.67, e
    }, t.needCardNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.needCardNum = e, e.font = "zhiwuziti_fnt", e.scaleX = .9, e.scaleY = .9, e.text = "3", e.textAlign = "left", e.x = 253.3, e.y = 12.02, e
    }, t.cardNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.cardNum = e, e.font = "zhiwuziti_fnt", e.right = 63, e.scaleX = .9, e.scaleY = .9, e.text = "300", e.textAlign = "right", e.y = 11.32, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 302, e.scaleX = .85, e.scaleY = .85, e.verticalCenter = -423, e.elementsContent = [this._Image20_i()], e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/TabItem.exml"] = window.TabItemSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["labelDisplay"], this.height = 75, this.minHeight = 50, this.minWidth = 100, this.width = 250, this.elementsContent = [this._Image1_i(), this.labelDisplay_i()], this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "button_down_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", .5)])]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e, e.percentHeight = 100, e.scale9Grid = new egret.Rectangle(1, 3, 8, 8), e.source = "button_up_png", e.percentWidth = 100, e
    }, t.labelDisplay_i = function() {
        var e = new eui.Label;
        return this.labelDisplay = e, e.bottom = 8, e.fontFamily = "Tahoma", e.left = 8, e.right = 8, e.size = 20, e.text = "aaa", e.textAlign = "center", e.textColor = 16777215, e.top = 8, e.verticalAlign = "middle", e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/TipWord.exml"] = window.TipWordSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["word"], this.height = 130, this.width = 400, this.elementsContent = [this._Group1_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 130, e.width = 400, e.x = 0, e.y = 0, e.elementsContent = [this._Image1_i(), this.word_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(70, 52, 420, 48), e.scaleX = .7, e.scaleY = .8, e.source = "xinshouUI_png", e.y = 0, e
    }, t.word_i = function() {
        var e = new eui.Label;
        return this.word = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.height = 64, e.horizontalCenter = .5, e.scaleX = 1, e.scaleY = 1, e.size = 30, e.text = "指挥官，兽兽军团正在逼近，快种植植物士兵", e.textAlign = "center", e.textColor = 5263440, e.verticalAlign = "middle", e.verticalCenter = -2, e.width = 277, e.x = 36, e.y = 26, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ToggleSwitchSkin.exml"] = window.skins.ToggleSwitchSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = [], this.elementsContent = [], this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.states = [new eui.State("down", [new eui.AddItems("_Image4", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image3", "", 1, "")]), new eui.State("upAndSelected", [new eui.AddItems("_Image1", "", 0, "")]), new eui.State("downAndSelected", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabledAndSelected", [new eui.SetProperty("", "width", 102), new eui.SetProperty("", "height", 138)])]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.horizontalCenter = 0, e.source = "btn_blue7_png", e.verticalCenter = 0, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.horizontalCenter = 0, e.source = "btn_blue7_png", e.verticalCenter = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.horizontalCenter = 0, e.source = "btn_yellow7_png", e.verticalCenter = 0, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return this._Image4 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.horizontalCenter = 0, e.source = "btn_yellow7_png", e.verticalCenter = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/TuiGuangItem.exml"] = window.TuiGuangItem = function(e) {
    function i() {
        e.call(this), this.skinParts = ["icon", "gameName", "tip", "finger"], this.height = 160, this.width = 130, this.elementsContent = [this._Group1_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 123, e.width = 130, e.x = 0, e.y = 0, e.elementsContent = [this.icon_i(), this.gameName_i(), this.tip_i(), this.finger_i()], e
    }, t.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e, e.anchorOffsetX = 65.96, e.anchorOffsetY = 58.83, e.height = 129, e.scaleX = 1, e.scaleY = 1, e.source = "nodebg_png", e.width = 129, e.x = 65.63, e.y = 58.63, e
    }, t.gameName_i = function() {
        var e = new eui.Label;
        return this.gameName = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", e.height = 24, e.maxHeight = 15, e.maxWidth = 64, e.scaleX = 1, e.scaleY = 1, e.size = 20, e.text = "五个字名字", e.textAlign = "center", e.verticalAlign = "middle", e.width = 102, e.x = 14, e.y = 131, e
    }, t.tip_i = function() {
        var e = new eui.Image;
        return this.tip = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 30, e.source = "img_main_tishi_png", e.width = 30, e.x = 101, e.y = 1.66, e
    }, t.finger_i = function() {
        var e = new eui.Image;
        return this.finger = e, e.anchorOffsetX = 47.5, e.anchorOffsetY = 42.5, e.scaleX = .8, e.scaleY = .8, e.source = "guideHand1-1_png", e.x = 65, e.y = 130, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/VipDengJiView.exml"] = window.VipDengJiViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["viplv", "getBtn", "videoBtn", "zuanshi", "jinbi", "xiyouSum", "xiyouTxt", "plantBg", "kapai", "manure", "card", "lvImg", "goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group11_i(), this._Group12_i(), this.goBack_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image2_i(), this.getBtn_i(), this.videoBtn_i(), this._Group2_i(), this._Group4_i(), this._Group6_i(), this._Group8_i(), this._Group10_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 850, e.scale9Grid = new egret.Rectangle(190, 363, 8, 10), e.scaleX = 1, e.scaleY = 1, e.source = "VIP7_png", e.width = 580, e.x = 4, e.y = 0, e
    }, t.getBtn_i = function() {
        var e = new eui.Group;
        return this.getBtn = e, e.x = 227.3, e.y = 758.3, e.elementsContent = [this._Image3_i(), this.viplv_i(), this._Image4_i(), this._Image5_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji4_json.yingyingls1_png", e.x = 0, e.y = 0, e
    }, t.viplv_i = function() {
        var e = new eui.BitmapLabel;
        return this.viplv = e, e.font = "baikuanzi_fnt", e.scaleX = .6, e.scaleY = .6, e.text = "0", e.textAlign = "center", e.x = 54.65, e.y = 13.36, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .45, e.scaleY = .45, e.source = "VIP_png", e.x = 1.32, e.y = 6.31, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "tuji3_json.lingquT_png", e.x = 75.35, e.y = 14, e
    }, t.videoBtn_i = function() {
        var e = new eui.Group;
        return this.videoBtn = e, e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 362, e.x = 227, e.elementsContent = [this._Image6_i(), this._Image7_i(), this._Image8_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.scale9Grid = new egret.Rectangle(68, 35, 1, 2), e.source = "tuji6_json.btn_yellow4_png", e.width = 170, e.x = 5.99, e.y = 2.01, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "tuji2_json.reward_ad_play_png", e.x = 24.31, e.y = 12.69, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "tuji3_json.lingquT_png", e.x = 73.72, e.y = 17.03, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.y = 75.34, e.elementsContent = [this._Image9_i(), this._Label1_i(), this.zuanshi_i(), this._Label2_i(), this._Label3_i(), this._Group1_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 115, e.scale9Grid = new egret.Rectangle(47, 13, 286, 83), e.source = "frame_di_png", e.width = 450, e.x = 0, e.y = 0, e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = -48.5, e.size = 34, e.text = "钻石x", e.textColor = 7878175, e.y = 6.67, e
    }, t.zuanshi_i = function() {
        var e = new eui.Label;
        return this.zuanshi = e, e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = 22, e.size = 34, e.text = "20", e.textColor = 7878175, e.y = 6.67, e
    }, t._Label2_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = -48.5, e.size = 34, e.text = "钻石x", e.textColor = 7878175, e.y = 6.67, e
    }, t._Label3_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 37, e.size = 23, e.text = "可用于商店购买宝箱或肥料", e.textColor = 7878175, e.y = 61.33, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 13.98, e.y = 9.34, e.elementsContent = [this._Image10_i(), this._Image11_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6999999999999998, e.scaleY = .65, e.source = "tuji5_json.frame_png", e.x = 0, e.y = 0, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "tuji6_json.icon_gem_png", e.x = 13, e.y = 20.33, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.y = 203.83, e.elementsContent = [this._Image12_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this.jinbi_i(), this._Group3_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 115, e.scale9Grid = new egret.Rectangle(47, 13, 286, 83), e.source = "frame_di_png", e.width = 450, e.x = 0, e.y = 0, e
    }, t._Label4_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 26.5, e.size = 23, e.text = "可用于购买植物提升等级", e.textColor = 7878175, e.y = 61.33, e
    }, t._Label5_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = -47.5, e.size = 34, e.text = "金币x", e.textColor = 7878175, e.y = 6.67, e
    }, t._Label6_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = -47.5, e.size = 34, e.text = "金币x", e.textColor = 7878175, e.y = 6.67, e
    }, t.jinbi_i = function() {
        var e = new eui.Label;
        return this.jinbi = e, e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = 25.5, e.size = 34, e.text = "200", e.textColor = 7878175, e.y = 6.67, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 11.32, e.y = 9.34, e.elementsContent = [this._Image13_i(), this._Image14_i()], e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .7, e.source = "frame3_png", e.x = 0, e.y = 0, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "kapai5_png", e.x = 8, e.y = 1, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.y = 343.43, e.elementsContent = [this._Image15_i(), this._Label7_i(), this.xiyouSum_i(), this._Label8_i(), this.xiyouTxt_i(), this._Group5_i()], e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 115, e.scale9Grid = new egret.Rectangle(47, 13, 286, 83), e.source = "frame_di_png", e.width = 450, e.x = 0, e.y = 0, e
    }, t._Label7_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 49.5, e.size = 23, e.text = "可用于植物升星以及合成碎片", e.textColor = 7878175, e.y = 61.33, e
    }, t.xiyouSum_i = function() {
        var e = new eui.Label;
        return this.xiyouSum = e, e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = 194.5, e.size = 34, e.text = "1", e.textColor = 7878175, e.y = 6.67, e
    }, t._Label8_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = 34.5, e.size = 32, e.text = "稀有植物碎片礼包X", e.textColor = 7878175, e.visible = !1, e.y = 7.67, e
    }, t.xiyouTxt_i = function() {
        var e = new eui.Label;
        return this.xiyouTxt = e, e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = 34.5, e.size = 32, e.text = "稀有植物碎片礼包X", e.textColor = 7878175, e.y = 7.67, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 11.32, e.y = 9.34, e.elementsContent = [this.plantBg_i(), this.kapai_i()], e
    }, t.plantBg_i = function() {
        var e = new eui.Image;
        return this.plantBg = e, e.scaleX = .75, e.scaleY = .7, e.source = "frame3_png", e.x = 0, e.y = 0, e
    }, t.kapai_i = function() {
        var e = new eui.Image;
        return this.kapai = e, e.source = "kapai1_png", e.x = 8.34, e.y = -4.65, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.y = 475.92, e.elementsContent = [this._Image16_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this.manure_i(), this._Group7_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 115, e.scale9Grid = new egret.Rectangle(47, 13, 286, 83), e.source = "frame_di_png", e.width = 450, e.x = 0, e.y = 0, e
    }, t._Label9_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 5.5, e.size = 23, e.text = "可用于植物炮塔升星", e.textColor = 7878175, e.y = 61.33, e
    }, t._Label10_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = -48, e.size = 32, e.text = "肥料x", e.textColor = 7878175, e.y = 8, e
    }, t._Label11_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = -48, e.size = 32, e.text = "肥料x", e.textColor = 7878175, e.y = 8, e
    }, t.manure_i = function() {
        var e = new eui.Label;
        return this.manure = e, e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = 23, e.size = 32, e.text = "200", e.textColor = 7878175, e.y = 8, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.x = 11.32, e.y = 9.34, e.elementsContent = [this._Image17_i(), this._Image18_i()], e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .7, e.source = "frame2_png", e.x = 0, e.y = 0, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "tuji6_json.gift_manue_icon_png", e.x = 17, e.y = 10, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.y = 610, e.elementsContent = [this._Image19_i(), this._Label12_i(), this._Label13_i(), this._Label14_i(), this.card_i(), this._Group9_i()], e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 115, e.scale9Grid = new egret.Rectangle(47, 13, 286, 83), e.source = "frame_di_png", e.width = 450, e.x = 0, e.y = 0, e
    }, t._Label12_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 25.5, e.size = 23, e.text = "可用于超级合成植物碎片", e.textColor = 7878175, e.y = 61.33, e
    }, t._Label13_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = -20.5, e.size = 32, e.text = "合成材料x", e.textColor = 7878175, e.y = 8, e
    }, t._Label14_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = -20.5, e.size = 32, e.text = "合成材料x", e.textColor = 7878175, e.y = 8, e
    }, t.card_i = function() {
        var e = new eui.Label;
        return this.card = e, e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = 66, e.size = 32, e.text = "1", e.textColor = 7878175, e.y = 8, e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.x = 11.32, e.y = 9.34, e.elementsContent = [this._Image20_i(), this._Image21_i()], e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .7, e.source = "frame1_png", e.x = 0, e.y = 0, e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "icon_card_png", e.x = 16.99, e.y = 15.01, e
    }, t._Group12_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -4, e.verticalCenter = -421.5, e.elementsContent = [this._Image22_i(), this._Image23_i(), this.lvImg_i()], e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "vip8_png", e.verticalCenter = 0, e
    }, t._Image23_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 20, e.scaleX = .8, e.scaleY = .9, e.source = "tuji7_json.VIPlibao_png", e.y = 10.22, e
    }, t.lvImg_i = function() {
        var e = new eui.Image;
        return this.lvImg = e, e.source = "hong1_png", e.x = 101.66, e.y = 11.98, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 274, e.scaleX = .85, e.scaleY = .85, e.verticalCenter = -408, e.elementsContent = [this._Image24_i()], e
    }, t._Image24_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_close1_png", e.x = 0, e.y = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/VipGongXiHuoDeView.exml"] = window.VipGongXiHuoDeViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["goBack", "mergeCard", "plantBg", "kapai", "plantCard", "manure", "jinbi", "zuanshi"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this.goBack_i(), this._Group8_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 580, e.horizontalCenter = 0, e.verticalCenter = -86, e.width = 580, e.elementsContent = [this._Image2_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 580, e.scale9Grid = new egret.Rectangle(190, 363, 8, 10), e.scaleX = 1, e.scaleY = 1, e.source = "VIP7_png", e.width = 580, e.x = 4, e.y = 0, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 6, e.verticalCenter = -374.5, e.elementsContent = [this._Image3_i(), this._Image4_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "vip8_png", e.verticalCenter = 0, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5, e.scaleX = .7, e.scaleY = .8, e.source = "tuji7_json.gongxihuodel_png", e.y = 6.22, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 2, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 129.5, e.elementsContent = [this._Image5_i(), this._Image6_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 90, e.scale9Grid = new egret.Rectangle(68, 35, 1, 2), e.source = "tuji6_json.btn_yellow4_png", e.width = 190, e.x = 0, e.y = 2.01, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1.1, e.scaleY = 1.1, e.source = "tuji3_json.quedingT_png", e.x = 48, e.y = 20.07, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.height = 350, e.horizontalCenter = 2, e.verticalCenter = -120, e.elementsContent = [this._Image7_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 350, e.scale9Grid = new egret.Rectangle(207, 81, 3, 4), e.scaleX = 1, e.scaleY = 1, e.source = "vip9_png", e.width = 490, e.x = 0, e.y = 0, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 198, e.y = 142, e.elementsContent = [this._Image8_i(), this.mergeCard_i(), this._Image9_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .7, e.source = "frame1_png", e.x = 0, e.y = 0, e
    }, t.mergeCard_i = function() {
        var e = new eui.BitmapLabel;
        return this.mergeCard = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 27, e.scaleX = .6, e.scaleY = .6, e.text = "1234", e.textAlign = "right", e.width = 80, e.x = 40, e.y = 64, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "icon_card_png", e.x = 16.99, e.y = 15.01, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 33, e.y = 142, e.elementsContent = [this.plantBg_i(), this.kapai_i(), this.plantCard_i()], e
    }, t.plantBg_i = function() {
        var e = new eui.Image;
        return this.plantBg = e, e.scaleX = .75, e.scaleY = .7, e.source = "frame3_png", e.x = 0, e.y = 0, e
    }, t.kapai_i = function() {
        var e = new eui.Image;
        return this.kapai = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 101, e.scaleX = .75, e.scaleY = .75, e.source = "kapai1_png", e.width = 96.67, e.x = 14.34, e.y = 3.35, e
    }, t.plantCard_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantCard = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 27, e.scaleX = .6, e.scaleY = .6, e.text = "1234", e.textAlign = "right", e.width = 80, e.x = 41, e.y = 64, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 362, e.y = 12, e.elementsContent = [this._Image10_i(), this._Image11_i(), this.manure_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .7, e.source = "frame2_png", e.x = 0, e.y = 0, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "tuji6_json.gift_manue_icon_png", e.x = 17, e.y = 10, e
    }, t.manure_i = function() {
        var e = new eui.BitmapLabel;
        return this.manure = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 27, e.scaleX = .6, e.scaleY = .6, e.text = "1234", e.textAlign = "right", e.width = 80, e.x = 41, e.y = 64, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 198, e.y = 12, e.elementsContent = [this._Image12_i(), this._Image13_i(), this.jinbi_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .7, e.source = "frame3_png", e.x = 0, e.y = 0, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "kapai5_png", e.x = 8, e.y = 1, e
    }, t.jinbi_i = function() {
        var e = new eui.BitmapLabel;
        return this.jinbi = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 27, e.scaleX = .6, e.scaleY = .6, e.text = "1234", e.textAlign = "right", e.width = 80, e.x = 41, e.y = 64, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.x = 36, e.y = 12, e.elementsContent = [this._Image14_i(), this._Image15_i(), this.zuanshi_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6999999999999998, e.scaleY = .65, e.source = "tuji5_json.frame_png", e.x = 0, e.y = 0, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "tuji6_json.icon_gem_png", e.x = 13, e.y = 20.33, e
    }, t.zuanshi_i = function() {
        var e = new eui.BitmapLabel;
        return this.zuanshi = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 27, e.scaleX = .6, e.scaleY = .6, e.text = "1234", e.textAlign = "right", e.width = 80, e.x = 34, e.y = 64, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/VipItem.exml"] = window.VipItemSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["line", "newLogo", "text1", "textSum"], this.height = 30, this.minHeight = 50, this.minWidth = 100, this.elementsContent = [this._Group1_i()], this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 30, e.horizontalCenter = -1, e.width = 407, e.y = 0, e.elementsContent = [this.line_i(), this.newLogo_i(), this.text1_i(), this.textSum_i()], e
    }, t.line_i = function() {
        var e = new eui.Image;
        return this.line = e, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(37, 0, 226, 2), e.scaleX = 1, e.scaleY = 1, e.source = "vip3_png", e.verticalCenter = 13, e.width = 380, e
    }, t.newLogo_i = function() {
        var e = new eui.Image;
        return this.newLogo = e, e.horizontalCenter = -189, e.scaleX = .4, e.scaleY = .4, e.source = "VIP4_png", e.verticalCenter = 0, e.x = 2, e.y = 2, e
    }, t.text1_i = function() {
        var e = new eui.Label;
        return this.text1 = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 14, e.text = "Daily diamond packs in the shop", e.textColor = 7878175, e.x = 29.32, e.y = 8, e
    }, t.textSum_i = function() {
        var e = new eui.Label;
        return this.textSum = e, e.bold = !0, e.fontFamily = "Lucida Family", e.size = 26, e.text = "+1", e.textColor = 1547537, e.x = 294.71, e.y = .66, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/VipView.exml"] = window.VipViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["vipLevel", "vipTip", "loadBar1", "loadText1", "loadBar2", "loadText2", "loadBar3", "loadText3", "dataList", "scroller", "vipBox", "viplv", "getBtn", "videoGetBtn", "curlevel", "cardAward1", "cardAward2", "cardAward3", "leftBtn", "rightBtn", "tip1", "tip2", "tip3", "goBack", "adGro", "node"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this.node_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t.node_i = function() {
        var e = new eui.Group;
        return this.node = e, e.height = 1280, e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 720, e.elementsContent = [this._Group14_i(), this._Group15_i(), this.goBack_i(), this.adGro_i()], e
    }, t._Group14_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -22, e.x = 68, e.y = 117, e.elementsContent = [this._Image2_i(), this._Image3_i(), this.vipLevel_i(), this.vipTip_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group11_i(), this._Group12_i(), this._Group13_i(), this.leftBtn_i(), this.rightBtn_i(), this._Image37_i(), this._Image38_i(), this._Image39_i(), this.tip1_i(), this.tip2_i(), this.tip3_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 1e3, e.horizontalCenter = 2, e.scale9Grid = new egret.Rectangle(190, 363, 8, 10), e.source = "VIP7_png", e.verticalCenter = -1, e.width = 580, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "viphuangguan_png", e.y = 25.99, e
    }, t.vipLevel_i = function() {
        var e = new eui.BitmapLabel;
        return this.vipLevel = e, e.font = "baikuanzi_fnt", e.horizontalCenter = 1, e.scaleX = 1.5, e.scaleY = 1.5, e.text = "0", e.textAlign = "center", e.y = 143.65, e
    }, t.vipTip_i = function() {
        var e = new eui.Label;
        return this.vipTip = e, e.bold = !0, e.fontFamily = "FangSong_GB2312", e.horizontalCenter = 11, e.size = 24, e.text = "DISTANCE UP VIP1", e.textColor = 7878175, e.y = 294, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 49, e.verticalCenter = -165.5, e.elementsContent = [this._Image4_i(), this.loadBar1_i(), this.loadText1_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "vip1_png", e.verticalCenter = 0, e.width = 300, e
    }, t.loadBar1_i = function() {
        var e = new eui.Image;
        return this.loadBar1 = e, e.anchorOffsetX = 0, e.height = 23, e.source = "vip2_png", e.width = 294, e.x = 3.35, e.y = 3.67, e
    }, t.loadText1_i = function() {
        var e = new eui.BitmapLabel;
        return this.loadText1 = e, e.font = "baimiaobian_fnt", e.text = "99/99", e.textAlign = "center", e.x = 107.08, e.y = .64, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 49, e.verticalCenter = -131.5, e.elementsContent = [this._Image5_i(), this.loadBar2_i(), this.loadText2_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "vip1_png", e.verticalCenter = 0, e.width = 300, e
    }, t.loadBar2_i = function() {
        var e = new eui.Image;
        return this.loadBar2 = e, e.height = 23, e.source = "vip2_png", e.width = 294, e.x = 3.35, e.y = 3.67, e
    }, t.loadText2_i = function() {
        var e = new eui.BitmapLabel;
        return this.loadText2 = e, e.font = "baimiaobian_fnt", e.text = "99/99", e.textAlign = "center", e.x = 108.41, e.y = .64, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 49, e.verticalCenter = -97.5, e.elementsContent = [this._Image6_i(), this.loadBar3_i(), this.loadText3_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "vip1_png", e.verticalCenter = 0, e.width = 300, e
    }, t.loadBar3_i = function() {
        var e = new eui.Image;
        return this.loadBar3 = e, e.height = 23, e.source = "vip2_png", e.width = 294, e.x = 3.35, e.y = 3.67, e
    }, t.loadText3_i = function() {
        var e = new eui.BitmapLabel;
        return this.loadText3 = e, e.font = "baimiaobian_fnt", e.text = "99/99", e.textAlign = "center", e.x = 108, e.y = .64, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5, e.y = 422.51, e.elementsContent = [this._Image7_i(), this._Group4_i(), this._Group5_i(), this._Label3_i(), this._Group6_i(), this._Label4_i(), this._Label5_i(), this._Group7_i(), this._Label6_i(), this._Label7_i(), this._Group8_i(), this._Label8_i(), this._Label9_i(), this._Group9_i(), this._Label10_i(), this._Label11_i(), this.scroller_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .5, e.source = "vip6_png", e.x = 0, e.y = 0, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.horizontalCenter = -4.5, e.verticalCenter = -55, e.visible = !1, e.width = 400, e.elementsContent = [this._Image8_i(), this._Image9_i(), this._Label1_i(), this._Label2_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(37, 0, 226, 2), e.scaleX = 1, e.scaleY = 1, e.source = "vip3_png", e.verticalCenter = 8, e.width = 380, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -192.5, e.scaleX = .35, e.scaleY = .35, e.source = "VIP4_png", e.verticalCenter = -1, e.x = 2, e.y = 2, e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "SimHei", e.size = 15, e.text = "商店每日免费钻石广告额外    次", e.textColor = 7878175, e.x = 20.32, e.y = 1.66, e
    }, t._Label2_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Lucida Family", e.size = 20, e.text = "+1", e.textColor = 1547537, e.x = 204.71, e.y = -1.34, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.horizontalCenter = -4.5, e.verticalCenter = -33, e.visible = !1, e.width = 400, e.elementsContent = [this._Image10_i(), this._Image11_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(37, 0, 226, 2), e.scaleX = 1, e.scaleY = 1, e.source = "vip3_png", e.verticalCenter = 8, e.width = 380, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -192.5, e.scaleX = .35, e.scaleY = .35, e.source = "VIP4_png", e.verticalCenter = -1, e.x = 2, e.y = 2, e
    }, t._Label3_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 14, e.text = "Show current VIP level icon on ranking", e.textColor = 7878175, e.visible = !1, e.x = 32.96, e.y = 27.65, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.horizontalCenter = -4.5, e.verticalCenter = -11, e.visible = !1, e.width = 400, e.elementsContent = [this._Image12_i(), this._Image13_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(37, 0, 226, 2), e.scaleX = 1, e.scaleY = 1, e.source = "vip3_png", e.verticalCenter = 8, e.width = 380, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -192.5, e.scaleX = .35, e.scaleY = .35, e.source = "VIP4_png", e.verticalCenter = -1, e.x = 2, e.y = 2, e
    }, t._Label4_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Lucida Family", e.size = 20, e.text = "+1", e.textColor = 1547537, e.visible = !1, e.x = 184.03, e.y = 46.67, e
    }, t._Label5_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 14, e.text = "Seedlings in treasure box in the shop", e.textColor = 7878175, e.visible = !1, e.x = 33.64, e.y = 49.65, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.height = 20, e.horizontalCenter = -4.5, e.verticalCenter = 11, e.visible = !1, e.width = 400, e.elementsContent = [this._Image14_i(), this._Image15_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(37, 0, 226, 2), e.scaleX = 1, e.scaleY = 1, e.source = "vip3_png", e.verticalCenter = 8, e.width = 380, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -192.5, e.scaleX = .35, e.scaleY = .35, e.source = "VIP4_png", e.verticalCenter = -1, e.x = 2, e.y = 2, e
    }, t._Label6_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 15, e.text = "开启老虎机每天免费      摇奖", e.textColor = 7878175, e.visible = !1, e.x = 33.65, e.y = 71.66, e
    }, t._Label7_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Lucida Family", e.size = 20, e.text = "+1", e.textColor = 1547537, e.visible = !1, e.x = 169.72, e.y = 69, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.height = 20, e.horizontalCenter = -4.5, e.verticalCenter = 33, e.visible = !1, e.width = 400, e.elementsContent = [this._Image16_i(), this._Image17_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(37, 0, 226, 2), e.scaleX = 1, e.scaleY = 1, e.source = "vip3_png", e.verticalCenter = 8, e.width = 380, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -192.5, e.scaleX = .35, e.scaleY = .35, e.source = "VIP4_png", e.verticalCenter = -1, e.x = 2, e.y = 2, e
    }, t._Label8_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 15, e.text = "双倍攻击效果提高       倍    ", e.textColor = 7878175, e.verticalCenter = 32.5, e.visible = !1, e.x = 32.98, e
    }, t._Label9_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Lucida Family", e.size = 20, e.text = "1.2", e.textColor = 1547537, e.verticalCenter = 32, e.visible = !1, e.x = 153.7, e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.height = 20, e.horizontalCenter = -4.5, e.verticalCenter = 55, e.visible = !1, e.width = 400, e.elementsContent = [this._Image18_i(), this._Image19_i()], e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(37, 0, 226, 2), e.scaleX = 1, e.scaleY = 1, e.source = "vip3_png", e.verticalCenter = 8, e.width = 380, e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -192.5, e.scaleX = .35, e.scaleY = .35, e.source = "VIP4_png", e.verticalCenter = -1, e.x = 2, e.y = 2, e
    }, t._Label10_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 15, e.text = "双倍收益效果提高       倍", e.textColor = 7878175, e.verticalCenter = 54.5, e.visible = !1, e.x = 32.98, e
    }, t._Label11_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Lucida Family", e.size = 20, e.text = "1.2", e.textColor = 1547537, e.verticalCenter = 55, e.visible = !1, e.x = 153.7, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 135, e.width = 409, e.x = 10, e.y = 3, e.viewport = this._Group10_i(), e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 134, e.width = 408, e.x = 0, e.y = -4, e.elementsContent = [this.dataList_i()], e
    }, t.dataList_i = function() {
        var e = new eui.List;
        return this.dataList = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 134, e.itemRendererSkinName = VipItemSkin, e.width = 408, e.x = 1, e.y = 0, e.layout = this._TileLayout1_i(), e.dataProvider = this._ArrayCollection1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 50, e.verticalGap = 3, e
    }, t._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i()], e
    }, t._Object1_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object2_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object3_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object4_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object5_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Object6_i = function() {
        var e = {
            null: ""
        };
        return e
    }, t._Group12_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.y = 562.99, e.elementsContent = [this._Image20_i(), this.vipBox_i(), this.getBtn_i(), this.videoGetBtn_i(), this._Image27_i(), this._Image28_i(), this._Image29_i(), this.curlevel_i()], e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.height = 140, e.scale9Grid = new egret.Rectangle(50, 19, 300, 115), e.source = "vip9_png", e.width = 430, e.x = 0, e.y = 0, e
    }, t.vipBox_i = function() {
        var e = new eui.Image;
        return this.vipBox = e, e.anchorOffsetX = 76.47, e.anchorOffsetY = 71.76, e.scaleX = .85, e.scaleY = .85, e.source = "VIP10baoxiang_png", e.x = 97, e.y = 69, e
    }, t.getBtn_i = function() {
        var e = new eui.Group;
        return this.getBtn = e, e.x = 240.66, e.y = 70.97, e.elementsContent = [this._Image21_i(), this.viplv_i(), this._Image22_i(), this._Image23_i()], e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "tuji4_json.yingyingls1_png", e.x = 0, e.y = 0, e
    }, t.viplv_i = function() {
        var e = new eui.BitmapLabel;
        return this.viplv = e, e.font = "baikuanzi_fnt", e.scaleX = .6, e.scaleY = .6, e.text = "0", e.textAlign = "center", e.x = 56.65, e.y = 13.36, e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.scaleX = .45, e.scaleY = .45, e.source = "VIP_png", e.x = 3.32, e.y = 6.31, e
    }, t._Image23_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .85, e.source = "tuji3_json.lingquT_png", e.x = 74.35, e.y = 9.33, e
    }, t.videoGetBtn_i = function() {
        var e = new eui.Group;
        return this.videoGetBtn = e, e.x = 230.41, e.y = 63.62, e.elementsContent = [this._Image24_i(), this._Image25_i(), this._Image26_i()], e
    }, t._Image24_i = function() {
        var e = new eui.Image;
        return e.height = 73, e.scale9Grid = new egret.Rectangle(26, 26, 84, 18), e.source = "tuji6_json.btn_yellow4_png", e.width = 150, e.x = 5.99, e.y = 2.01, e
    }, t._Image25_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "tuji8_json.renwu6_png", e.x = 26.66, e.y = 16.36, e
    }, t._Image26_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "tuji3_json.lingquT_png", e.x = 62.35, e.y = 14.3, e
    }, t._Image27_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 83.5, e.scaleX = .5, e.scaleY = .5, e.source = "meiriVIP_png", e.y = 38.69, e
    }, t._Image28_i = function() {
        var e = new eui.Image;
        return e.scaleX = .45, e.scaleY = .45, e.source = "VIP_png", e.x = 221.3, e.y = 3.67, e
    }, t._Image29_i = function() {
        var e = new eui.Image;
        return e.scaleX = .45, e.scaleY = .45, e.source = "dengjilibao_png", e.x = 298.67, e.y = 3.69, e
    }, t.curlevel_i = function() {
        var e = new eui.BitmapLabel;
        return this.curlevel = e, e.font = "baikuanzi_fnt", e.scaleX = .6, e.scaleY = .6, e.text = "0", e.textAlign = "center", e.x = 276.67, e.y = 9.36, e
    }, t._Group13_i = function() {
        var e = new eui.Group;
        return e.height = 250, e.horizontalCenter = 0, e.y = 742.38, e.elementsContent = [this._Image30_i(), this.cardAward1_i(), this.cardAward2_i(), this.cardAward3_i(), this._Image31_i(), this._Image32_i(), this._Image33_i(), this._Image34_i(), this._Image35_i(), this._Image36_i(), this._BitmapLabel1_i(), this._BitmapLabel2_i(), this._BitmapLabel3_i()], e
    }, t._Image30_i = function() {
        var e = new eui.Image;
        return e.source = "vip5_png", e.x = 14, e.y = 138, e
    }, t.cardAward1_i = function() {
        var e = new eui.Image;
        return this.cardAward1 = e, e.scaleX = .5, e.scaleY = .47, e.source = "tuji4_json.card_bg2_png", e.x = -4.32, e.y = -30, e
    }, t.cardAward2_i = function() {
        var e = new eui.Image;
        return this.cardAward2 = e, e.scaleX = .5, e.scaleY = .47, e.source = "tuji4_json.card_bg3_png", e.x = 157.66, e.y = -30, e
    }, t.cardAward3_i = function() {
        var e = new eui.Image;
        return this.cardAward3 = e, e.scaleX = .5, e.scaleY = .47, e.source = "tuji4_json.card_bg4_png", e.x = 322, e.y = -30, e
    }, t._Image31_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .45, e.source = "tuji3_json.zhiwu6_png", e.touchEnabled = !1, e.x = -4, e.y = -20, e
    }, t._Image32_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "tuji3_json.zhiwu12_png", e.touchEnabled = !1, e.x = 330, e.y = -24, e
    }, t._Image33_i = function() {
        var e = new eui.Image;
        return e.scaleX = .45, e.scaleY = .45, e.source = "tuji3_json.zhiwu7_png", e.touchEnabled = !1, e.x = 160, e.y = -29, e
    }, t._Image34_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .65, e.source = "tuji3_json.zhiwuzi6_png", e.touchEnabled = !1, e.x = -9, e.y = 93, e
    }, t._Image35_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "tuji3_json.zhiwuzi7_png", e.touchEnabled = !1, e.x = 161, e.y = 93, e
    }, t._Image36_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "tuji3_json.zhiwuzi12_png", e.touchEnabled = !1, e.x = 325, e.y = 92, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 34, e.text = "x10", e.width = 62, e.x = 53, e.y = 70, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 34, e.text = "x20", e.width = 62, e.x = 210, e.y = 69, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 34, e.text = "x30", e.width = 62, e.x = 371, e.y = 68, e
    }, t.leftBtn_i = function() {
        var e = new eui.Image;
        return this.leftBtn = e, e.horizontalCenter = -243, e.scaleX = .7, e.scaleY = .7, e.source = "tuji6_json.zuoyouziT_png", e.verticalCenter = -326.5, e
    }, t.rightBtn_i = function() {
        var e = new eui.Image;
        return this.rightBtn = e, e.rotation = 179.72, e.scaleX = .7, e.scaleY = .7, e.source = "tuji6_json.zuoyouziT_png", e.x = 560.33, e.y = 206, e
    }, t._Image37_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "denglutianshu_png", e.x = 95.01, e.y = 321.87, e
    }, t._Image38_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "renwucishu_png", e.x = 95.01, e.y = 356.55, e
    }, t._Image39_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "guanggaocishu_png", e.x = 95.01, e.y = 389.55, e
    }, t.tip1_i = function() {
        var e = new eui.Image;
        return this.tip1 = e, e.anchorOffsetX = 24, e.anchorOffsetY = 20, e.height = 43.64, e.source = "tuji7_json.VIP4_png", e.width = 49, e.x = 163, e.y = 724, e
    }, t.tip2_i = function() {
        var e = new eui.Image;
        return this.tip2 = e, e.anchorOffsetX = 25, e.anchorOffsetY = 22, e.height = 43.64, e.source = "tuji7_json.VIP4_png", e.width = 49, e.x = 328, e.y = 727, e
    }, t.tip3_i = function() {
        var e = new eui.Image;
        return this.tip3 = e, e.anchorOffsetX = 25, e.anchorOffsetY = 22, e.height = 43.64, e.source = "tuji7_json.VIP4_png", e.width = 49, e.x = 494, e.y = 726, e
    }, t._Group15_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -4, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -524.5, e.x = 156, e.y = 65, e.elementsContent = [this._Image40_i(), this._Image41_i()], e
    }, t._Image40_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "vip8_png", e.verticalCenter = 0, e
    }, t._Image41_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 4, e.source = "VIPtequan_png", e.y = 8.56, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 277.5, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -503.5, e.x = 593, e.y = 90.00000000000001, e.elementsContent = [this._Image42_i()], e
    }, t._Image42_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "btn_close1_png", e.x = 0, e.y = 0, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/VScrollBarSkin.exml"] = window.skins.VScrollBarSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["thumb"], this.minHeight = 20, this.minWidth = 8, this.elementsContent = [this.thumb_i()]
    }
    return __extends(i, e), i.prototype.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e, e.height = 30, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(3, 3, 2, 2), e.source = "roundthumb_png", e.width = 8, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/VSliderSkin.exml"] = window.skins.VSliderSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["track", "thumb"], this.minHeight = 30, this.minWidth = 25, this.elementsContent = [this.track_i(), this.thumb_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.track_i = function() {
        var e = new eui.Image;
        return this.track = e, e.percentHeight = 100, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(1, 1, 4, 4), e.source = "track_png", e.width = 7, e
    }, t.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e, e.horizontalCenter = 0, e.source = "thumb_png", e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/XingXiongHuoDe1View.exml"] = window.XingXiongHuoDe1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["xiyoudu", "zhiwuzi", "zhiwu", "animaGro", "dspine", "attackType", "anim3", "anim1", "anim2", "s1", "anim33", "anim11", "anim22", "s2", "anim333", "anim111", "anim222", "s3", "anim3333", "anim1111", "anim2222", "s4"], this.height = 900, this.width = 720, this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.s1_i(), this.s2_i(), this.s3_i(), this.s4_i(), this._Group8_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "new_tower_quality_di10_png", e.verticalCenter = 249, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "new_tower_title_png", e.verticalCenter = -287, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.horizontalCenter = 1, e.verticalCenter = -129, e.elementsContent = [this._Image3_i(), this.xiyoudu_i(), this.zhiwuzi_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "new_tower_quality_di1_png", e.x = 24, e.y = -31, e
    }, t.xiyoudu_i = function() {
        var e = new eui.Image;
        return this.xiyoudu = e, e.scaleX = .8000000000000002, e.scaleY = .8000000000000002, e.source = "new_tower_quality_tag1_png", e.x = 29.34, e.y = 27, e
    }, t.zhiwuzi_i = function() {
        var e = new eui.Image;
        return this.zhiwuzi = e, e.scaleX = 1, e.scaleY = 1, e.source = "zhiwuzi1_png", e.x = 165, e.y = 37, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5, e.verticalCenter = 96.5, e.elementsContent = [this.zhiwu_i(), this.animaGro_i(), this.dspine_i()], e
    }, t.zhiwu_i = function() {
        var e = new eui.Image;
        return this.zhiwu = e, e.scaleX = .9, e.scaleY = .9, e.source = "zhiwu1_png", e.visible = !1, e.x = -18, e.y = 2, e
    }, t.animaGro_i = function() {
        var e = new eui.Group;
        return this.animaGro = e, e.anchorOffsetY = 0, e.height = 213.64, e.width = 200, e.x = 5.51, e.y = 6.76, e
    }, t.dspine_i = function() {
        var e = new DragonSpine;
        return this.dspine = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 218.67, e.width = 204, e.x = 22.66, e.y = 4.34, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 49, e.horizontalCenter = 0, e.verticalCenter = 301.5, e.width = 160, e.elementsContent = [this.attackType_i()], e
    }, t.attackType_i = function() {
        var e = new eui.Image;
        return this.attackType = e, e.scaleX = .7, e.scaleY = .7, e.source = "txt_tower_class1_png", e.x = 21, e.y = 4.01, e
    }, t.s1_i = function() {
        var e = new eui.Group;
        return this.s1 = e, e.height = 500, e.horizontalCenter = 0, e.verticalCenter = 161, e.width = 720, e.elementsContent = [this.anim3_i(), this.anim1_i(), this.anim2_i()], e
    }, t.anim3_i = function() {
        var e = new eui.Group;
        return this.anim3 = e, e.scaleX = 1, e.scaleY = 1, e.x = 450.46, e.y = 204.34000000000003, e.elementsContent = [this._Image4_i(), this._Image5_i(), this._BitmapLabel1_i(), this._BitmapLabel2_i(), this._BitmapLabel3_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg3_png", e.x = 0, e.y = 0, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_3_png", e.x = 142.02, e.y = 22.68, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.height = 20, e.width = 20, e.x = 57, e.y = 76, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 75, e.scaleX = .8, e.scaleY = .8, e.text = "ATTACK\nSPEED\nINCREASE", e.width = 120, e.x = 50, e.y = 5, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "FIRING\nRATE", e.width = 110, e.x = 75, e.y = 80, e
    }, t.anim1_i = function() {
        var e = new eui.Group;
        return this.anim1 = e, e.scaleX = 1, e.scaleY = 1, e.x = 455.67, e.y = 4.019999999999982, e.elementsContent = [this._Image6_i(), this._Image7_i(), this._BitmapLabel4_i(), this._BitmapLabel5_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg2_png", e.x = 2, e.y = 5, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_2_png", e.x = 151, e.y = 19.33, e
    }, t._BitmapLabel4_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "DAMAGE\nINCREASE", e.width = 120, e.x = 60, e.y = 20, e
    }, t._BitmapLabel5_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 24, e.scaleX = .8, e.scaleY = .8, e.text = "RANGE", e.width = 100, e.x = 82, e.y = 75, e
    }, t.anim2_i = function() {
        var e = new eui.Group;
        return this.anim2 = e, e.horizontalCenter = -237, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -83.5, e.x = 9, e.y = 90, e.elementsContent = [this._Image8_i(), this._Image9_i(), this._BitmapLabel6_i(), this._BitmapLabel7_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg1_png", e.x = 0, e.y = 12, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_1_png", e.x = 13.33, e.y = 25.35, e
    }, t._BitmapLabel6_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "ATTACK\nINCREASE", e.width = 120, e.x = 105, e.y = 30, e
    }, t._BitmapLabel7_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 25, e.scaleX = .8, e.scaleY = .8, e.text = "STORM", e.width = 110, e.x = 105, e.y = 90, e
    }, t.s2_i = function() {
        var e = new eui.Group;
        return this.s2 = e, e.height = 500, e.horizontalCenter = 0, e.verticalCenter = 161, e.visible = !1, e.width = 720, e.elementsContent = [this.anim33_i(), this.anim11_i(), this.anim22_i()], e
    }, t.anim33_i = function() {
        var e = new eui.Group;
        return this.anim33 = e, e.scaleX = 1, e.scaleY = 1, e.x = 450.46, e.y = 204.34000000000003, e.elementsContent = [this._Image10_i(), this._Image11_i(), this._BitmapLabel8_i(), this._BitmapLabel9_i(), this._BitmapLabel10_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg3_png", e.x = 0, e.y = 0, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_6_png", e.x = 142.02, e.y = 22.68, e
    }, t._BitmapLabel8_i = function() {
        var e = new eui.BitmapLabel;
        return e.height = 20, e.width = 20, e.x = 57, e.y = 76, e
    }, t._BitmapLabel9_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 75, e.scaleX = .8, e.scaleY = .8, e.text = "ATTACK\nSPEED\nINCREASE", e.width = 120, e.x = 50, e.y = 5, e
    }, t._BitmapLabel10_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "ADDITIONAL\nDAMAGE", e.width = 160, e.x = 30, e.y = 80, e
    }, t.anim11_i = function() {
        var e = new eui.Group;
        return this.anim11 = e, e.scaleX = 1, e.scaleY = 1, e.x = 455.67, e.y = 4.019999999999982, e.elementsContent = [this._Image12_i(), this._Image13_i(), this._BitmapLabel11_i(), this._BitmapLabel12_i()], e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg2_png", e.x = 2, e.y = 5, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_5_png", e.x = 152, e.y = 19.33, e
    }, t._BitmapLabel11_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "DAMAGE\nINCREASE", e.width = 120, e.x = 60, e.y = 20, e
    }, t._BitmapLabel12_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 24, e.scaleX = .8, e.scaleY = .8, e.text = "RANGE", e.width = 100, e.x = 82, e.y = 75, e
    }, t.anim22_i = function() {
        var e = new eui.Group;
        return this.anim22 = e, e.horizontalCenter = -237, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -98.5, e.x = 9, e.y = 90, e.elementsContent = [this._Image14_i(), this._Image15_i(), this._BitmapLabel13_i(), this._BitmapLabel14_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg1_png", e.x = 0, e.y = 12, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_4_png", e.x = 13.33, e.y = 25.35, e
    }, t._BitmapLabel13_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "ATTACK\nINCREASE", e.width = 120, e.x = 105, e.y = 30, e
    }, t._BitmapLabel14_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 25, e.scaleX = .8, e.scaleY = .8, e.text = "FROZEN", e.width = 120, e.x = 105, e.y = 90, e
    }, t.s3_i = function() {
        var e = new eui.Group;
        return this.s3 = e, e.height = 500, e.horizontalCenter = 0, e.verticalCenter = 161, e.visible = !1, e.width = 720, e.elementsContent = [this.anim333_i(), this.anim111_i(), this.anim222_i()], e
    }, t.anim333_i = function() {
        var e = new eui.Group;
        return this.anim333 = e, e.scaleX = 1, e.scaleY = 1, e.x = 450.46, e.y = 204.34000000000003, e.elementsContent = [this._Image16_i(), this._Image17_i(), this._BitmapLabel15_i(), this._BitmapLabel16_i(), this._BitmapLabel17_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg3_png", e.x = 0, e.y = 0, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_8_png", e.x = 142.02, e.y = 22.68, e
    }, t._BitmapLabel15_i = function() {
        var e = new eui.BitmapLabel;
        return e.height = 20, e.width = 20, e.x = 57, e.y = 76, e
    }, t._BitmapLabel16_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 75, e.scaleX = .8, e.scaleY = .8, e.text = "ATTACK\nSPEED\nINCREASE", e.width = 120, e.x = 50, e.y = 5, e
    }, t._BitmapLabel17_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "FIRING\nRATE", e.width = 110, e.x = 75, e.y = 80, e
    }, t.anim111_i = function() {
        var e = new eui.Group;
        return this.anim111 = e, e.scaleX = 1, e.scaleY = 1, e.x = 455.67, e.y = 4.019999999999982, e.elementsContent = [this._Image18_i(), this._Image19_i(), this._BitmapLabel18_i(), this._BitmapLabel19_i()], e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg2_png", e.x = 2, e.y = 5, e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_7_png", e.x = 152, e.y = 19.33, e
    }, t._BitmapLabel18_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "DAMAGE\nINCREASE", e.width = 120, e.x = 60, e.y = 20, e
    }, t._BitmapLabel19_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 24, e.scaleX = .8, e.scaleY = .8, e.text = "POISON", e.width = 100, e.x = 70, e.y = 80, e
    }, t.anim222_i = function() {
        var e = new eui.Group;
        return this.anim222 = e, e.horizontalCenter = -237, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -98.5, e.x = 9, e.y = 90, e.elementsContent = [this._Image20_i(), this._Image21_i(), this._BitmapLabel20_i(), this._BitmapLabel21_i()], e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg1_png", e.x = 0, e.y = 12, e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_9_png", e.x = 13.33, e.y = 25.35, e
    }, t._BitmapLabel20_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "ATTACK\nINCREASE", e.width = 120, e.x = 105, e.y = 30, e
    }, t._BitmapLabel21_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "POISON\nSEEDS", e.width = 120, e.x = 105, e.y = 90, e
    }, t.s4_i = function() {
        var e = new eui.Group;
        return this.s4 = e, e.height = 500, e.horizontalCenter = 0, e.verticalCenter = 161, e.visible = !1, e.width = 720, e.elementsContent = [this.anim3333_i(), this.anim1111_i(), this.anim2222_i()], e
    }, t.anim3333_i = function() {
        var e = new eui.Group;
        return this.anim3333 = e, e.scaleX = 1, e.scaleY = 1, e.x = 450.46, e.y = 204.34000000000003, e.elementsContent = [this._Image22_i(), this._Image23_i(), this._BitmapLabel22_i(), this._BitmapLabel23_i(), this._BitmapLabel24_i()], e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg3_png", e.x = 0, e.y = 0, e
    }, t._Image23_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_12_png", e.x = 142.02, e.y = 22.68, e
    }, t._BitmapLabel22_i = function() {
        var e = new eui.BitmapLabel;
        return e.height = 20, e.width = 20, e.x = 57, e.y = 76, e
    }, t._BitmapLabel23_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 75, e.scaleX = .8, e.scaleY = .8, e.text = "ATTACK\nSPEED\nINCREASE", e.width = 120, e.x = 50, e.y = 5, e
    }, t._BitmapLabel24_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "DAMAGE\nINCREASE", e.width = 120, e.x = 50, e.y = 80, e
    }, t.anim1111_i = function() {
        var e = new eui.Group;
        return this.anim1111 = e, e.scaleX = 1, e.scaleY = 1, e.x = 455.67, e.y = 4.019999999999982, e.elementsContent = [this._Image24_i(), this._Image25_i(), this._BitmapLabel25_i(), this._BitmapLabel26_i()], e
    }, t._Image24_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg2_png", e.x = 2, e.y = 5, e
    }, t._Image25_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_11_png", e.x = 152, e.y = 19.33, e
    }, t._BitmapLabel25_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "DAMAGE\nINCREASE", e.width = 120, e.x = 60, e.y = 20, e
    }, t._BitmapLabel26_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 24, e.scaleX = .6, e.scaleY = .6, e.text = "EXPLOSIVE", e.width = 135, e.x = 70, e.y = 75, e
    }, t.anim2222_i = function() {
        var e = new eui.Group;
        return this.anim2222 = e, e.horizontalCenter = -237, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -98.5, e.x = 9, e.y = 90, e.elementsContent = [this._Image26_i(), this._Image27_i(), this._BitmapLabel27_i(), this._BitmapLabel28_i()], e
    }, t._Image26_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg1_png", e.x = 0, e.y = 12, e
    }, t._Image27_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_10_png", e.x = 13.33, e.y = 26.35, e
    }, t._BitmapLabel27_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "ATTACK\nINCREASE", e.width = 120, e.x = 105, e.y = 30, e
    }, t._BitmapLabel28_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 25, e.scaleX = .8, e.scaleY = .8, e.text = "STRONG", e.width = 120, e.x = 105, e.y = 85, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.height = 500, e.horizontalCenter = 0, e.verticalCenter = 161, e.visible = !1, e.width = 720, e.elementsContent = [this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Image36_i()], e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -237, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -28.5, e.x = 19, e.y = 100, e.elementsContent = [this._Image28_i(), this._Image29_i(), this._Image30_i(), this._BitmapLabel29_i()], e
    }, t._Image28_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "nt_bg1_png", e.x = 0, e.y = 12, e
    }, t._Image29_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "skill_ico_1_png", e.x = 13.33, e.y = 25.35, e
    }, t._Image30_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "jinengziT1_png", e.x = 91, e.y = 42, e
    }, t._BitmapLabel29_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 26.67, e.text = "强攻", e.width = 58.66, e.x = 125, e.y = 83.33, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.scaleX = 1, e.scaleY = 1, e.x = 450.46, e.y = 203.34, e.elementsContent = [this._Image31_i(), this._Image32_i(), this._BitmapLabel30_i(), this._BitmapLabel31_i()], e
    }, t._Image31_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "skill_di17271_png", e.x = 0, e.y = 0, e
    }, t._Image32_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "heroskill_a1_png", e.x = 147.02, e.y = 20.68, e
    }, t._BitmapLabel30_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 75, e.scaleX = .8, e.scaleY = .8, e.text = "ATTACK\nSPEED\nINCREASE", e.width = 120, e.x = 50, e.y = 5, e
    }, t._BitmapLabel31_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .8, e.scaleY = .8, e.text = "FIRING\nRATE", e.width = 110, e.x = 75, e.y = 80, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 49, e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 139.5, e.width = 160, e.x = 280, e.y = 366, e.elementsContent = [this._Image33_i()], e
    }, t._Image33_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "jinengziT5_png", e.x = 12, e.y = 7, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.scaleX = 1, e.scaleY = 1, e.x = 120, e.y = -122, e.elementsContent = [this._Image34_i(), this._Image35_i()], e
    }, t._Image34_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "new_tower_quality_di1_png", e.x = 24, e.y = -31, e
    }, t._Image35_i = function() {
        var e = new eui.Image;
        return e.source = "lierenT1_png", e.x = 181, e.y = 42, e
    }, t._Image36_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "hero1_png", e.x = 293, e.y = 170, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/XingXiongHuoDeView.exml"] = window.XingXiongHuoDeViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["plant", "okBtn"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group1_i(), this.okBtn_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 968, e.horizontalCenter = 0, e.verticalCenter = -104, e.width = 716, e.elementsContent = [this.plant_i()], e
    }, t.plant_i = function() {
        var e = new XingXiongHuoDe1View;
        return this.plant = e, e.scaleX = 1, e.scaleY = 1, e.x = -2, e.y = -1.3900000000000006, e
    }, t.okBtn_i = function() {
        var e = new eui.Group;
        return this.okBtn = e, e.horizontalCenter = 1, e.verticalCenter = 269, e.elementsContent = [this._Image2_i(), this._Image3_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 90, e.scale9Grid = new egret.Rectangle(67, 36, 1, 1), e.source = "btn_yellow4_png", e.width = 190, e.x = 0, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "quedingT_png", e.x = 53, e.y = 20.01, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/XinShouLiBao1View.exml"] = window.XinShouLiBao1ViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["num"], this.height = 650, this.width = 700, this.elementsContent = [this._Group9_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Group9_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 41, e.elementsContent = [this._Image1_i(), this._Group1_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Group6_i(), this._BitmapLabel1_i(), this._BitmapLabel2_i(), this._BitmapLabel3_i(), this._Image19_i(), this._BitmapLabel4_i(), this._Group7_i(), this._Group8_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "xinshoulibao_png", e.x = 0, e.y = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.width = 350, e.x = 175, e.y = 103, e.elementsContent = [this._Image2_i(), this.num_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "XSLB_png", e.x = 53.67, e.y = 2, e
    }, t.num_i = function() {
        var e = new eui.Image;
        return this.num = e, e.source = "yi1_png", e.x = 244.35, e.y = 3.33, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu5_png", e.x = 238, e.y = -97, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu12_png", e.x = 300, e.y = -78, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu14_png", e.x = 240, e.y = -76, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu2_png", e.x = 234, e.y = -80, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu8_png", e.x = 268, e.y = -104, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.height = 230, e.width = 600, e.x = 30, e.y = 190, e.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()], e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 4, e.y = 13, e.elementsContent = [this._Image8_i(), this._Image9_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_png", e.verticalCenter = 0, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "zhiwu1_png", e.x = 14, e.y = 35, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 157.66666666666669, e.y = 10, e.elementsContent = [this._Image10_i(), this._Image11_i(), this._Image12_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_1_png", e.verticalCenter = 0, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "gift_manue_icon_png", e.x = 28, e.y = 45, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "feiliao_png", e.x = 32, e.y = 158, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 310.33333333333337, e.y = 10, e.elementsContent = [this._Image13_i(), this._Image14_i(), this._Image15_i()], e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_1_png", e.verticalCenter = 0, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "gift_coin_icon_png", e.x = 26, e.y = 43, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "jinbiT_png", e.x = 33, e.y = 159, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 464, e.y = 10, e.elementsContent = [this._Image16_i(), this._Image17_i(), this._Image18_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_1_png", e.verticalCenter = 0, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "diamonds_png", e.x = 14, e.y = 34, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zuanshiT_png", e.x = 33, e.y = 159, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31, e.text = "x500", e.width = 85.96, e.x = 389.99, e.y = 326, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31, e.text = "x2", e.width = 44.71, e.x = 125, e.y = 329, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31, e.text = "x200", e.width = 85.96, e.x = 545, e.y = 326, e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "zhiwuzi1_png", e.x = 39, e.y = 358, e
    }, t._BitmapLabel4_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31, e.text = "x720", e.width = 85.96, e.x = 237.39, e.y = 325, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.left = -16, e.verticalCenter = 51.5, e.elementsContent = [this._Image20_i()], e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "zuoyouziT_png", e.x = 0, e.y = 0, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.right = -16, e.rotation = 179.57, e.verticalCenter = 45.5, e.elementsContent = [this._Image21_i()], e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "zuoyouziT_png", e.x = 0, e.y = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/XinShouLiBaoView.exml"] = window.XinShouLiBaoViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["goback", "giftNum", "zhiwu", "plantBg", "plantImg", "goldNum", "plantNum", "diamondNum", "plantName", "manureNum", "leftBtn", "rightBtn", "goBack", "freeImg", "videoImg", "videoBtn", "adGro"], this.height = 1280, this.width = 720, this.elementsContent = [this.goback_i(), this._Group8_i(), this.videoBtn_i(), this.adGro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.goback_i = function() {
        var e = new eui.Image;
        return this.goback = e, e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -80, e.elementsContent = [this._Group7_i(), this.goBack_i()], e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 41, e.elementsContent = [this._Image1_i(), this._Group1_i(), this.zhiwu_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Group6_i(), this.goldNum_i(), this.plantNum_i(), this.diamondNum_i(), this.plantName_i(), this.manureNum_i(), this.leftBtn_i(), this.rightBtn_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "xinshoulibao_png", e.x = 0, e.y = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.width = 350, e.x = 175, e.y = 103, e.elementsContent = [this._Image2_i(), this.giftNum_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "XSLB_png", e.x = 53.67, e.y = 2, e
    }, t.giftNum_i = function() {
        var e = new eui.Image;
        return this.giftNum = e, e.source = "yi1_png", e.x = 244.35, e.y = 3.33, e
    }, t.zhiwu_i = function() {
        var e = new eui.Image;
        return this.zhiwu = e, e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu5_png", e.x = 238, e.y = -97, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu12_png", e.visible = !1, e.x = 300, e.y = -78, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu14_png", e.visible = !1, e.x = 240, e.y = -76, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu2_png", e.visible = !1, e.x = 234, e.y = -80, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu8_png", e.visible = !1, e.x = 268, e.y = -104, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.height = 230, e.width = 600, e.x = 30, e.y = 190, e.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()], e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 4, e.y = 13, e.elementsContent = [this.plantBg_i(), this.plantImg_i()], e
    }, t.plantBg_i = function() {
        var e = new eui.Image;
        return this.plantBg = e, e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_png", e.verticalCenter = 0, e
    }, t.plantImg_i = function() {
        var e = new eui.Image;
        return this.plantImg = e, e.scaleX = .4, e.scaleY = .4, e.source = "zhiwu1_png", e.x = 14, e.y = 35, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 157.66666666666669, e.y = 10, e.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_1_png", e.verticalCenter = 0, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "gift_manue_icon_png", e.x = 28, e.y = 45, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "feiliao_png", e.x = 32, e.y = 158, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 310.33333333333337, e.y = 10, e.elementsContent = [this._Image10_i(), this._Image11_i(), this._Image12_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_1_png", e.verticalCenter = 0, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "gift_coin_icon_png", e.x = 26, e.y = 43, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "jinbiT_png", e.x = 33, e.y = 159, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 464, e.y = 10, e.elementsContent = [this._Image13_i(), this._Image14_i(), this._Image15_i()], e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .6, e.scaleY = .58, e.source = "card_bg1_1_png", e.verticalCenter = 0, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "diamonds_png", e.x = 14, e.y = 34, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zuanshiT_png", e.x = 33, e.y = 159, e
    }, t.goldNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.goldNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31, e.text = "x500", e.width = 84.96, e.x = 383.99, e.y = 326, e
    }, t.plantNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31, e.text = "x2", e.width = 44.71, e.x = 125, e.y = 329, e
    }, t.diamondNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.diamondNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31, e.text = "x200", e.width = 85.96, e.x = 545, e.y = 326, e
    }, t.plantName_i = function() {
        var e = new eui.Image;
        return this.plantName = e, e.scaleX = .6, e.scaleY = .6, e.source = "zhiwuzi1_png", e.x = 51, e.y = 358, e
    }, t.manureNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.manureNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31, e.text = "x720", e.width = 85.96, e.x = 237.39, e.y = 325, e
    }, t.leftBtn_i = function() {
        var e = new eui.Group;
        return this.leftBtn = e, e.left = -16, e.verticalCenter = 51.5, e.elementsContent = [this._Image16_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "zuoyouziT_png", e.x = 0, e.y = 0, e
    }, t.rightBtn_i = function() {
        var e = new eui.Group;
        return this.rightBtn = e, e.right = -16, e.rotation = 179.57, e.verticalCenter = 45.5, e.elementsContent = [this._Image17_i()], e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "zuoyouziT_png", e.x = 0, e.y = 0, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 291, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = -52, e.x = 571, e.y = 19, e.elementsContent = [this._Image18_i()], e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t.videoBtn_i = function() {
        var e = new eui.Group;
        return this.videoBtn = e, e.horizontalCenter = 0, e.verticalCenter = 267, e.elementsContent = [this._Image19_i(), this._Image20_i(), this.freeImg_i(), this.videoImg_i()], e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 90, e.scale9Grid = new egret.Rectangle(67, 36, 1, 1), e.source = "btn_yellow4_png", e.width = 190, e.x = 0, e.y = 0, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "iocn_redspot_new_png", e.x = 164.99, e.y = -2, e
    }, t.freeImg_i = function() {
        var e = new eui.Image;
        return this.freeImg = e, e.source = "lingquT_png", e.x = 55.11, e.y = 21.1, e
    }, t.videoImg_i = function() {
        var e = new eui.Group;
        return this.videoImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 60.61, e.width = 160.61, e.x = 22, e.y = 11, e.elementsContent = [this._Image21_i(), this._Image22_i()], e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "icon_ad_png", e.x = 6.229999999999961, e.y = 4.360000000000127, e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1, e.scaleY = 1, e.source = "lingquT_png", e.x = 60.42999999999995, e.y = 9.190000000000168, e
    }, t.adGro_i = function() {
        var e = new BannerView;
        return this.adGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 1, e.height = 1280, e.horizontalCenter = .5, e.left = 1, e.right = 0, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/YouXiQuanView.exml"] = window.YouXiQuanViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["goBack"], this.height = 1280, this.width = 720, this.elementsContent = [this._Image1_i(), this._Group1_i(), this.goBack_i(), this._Image10_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = -31, e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 850, e.scale9Grid = new egret.Rectangle(93, 493, 416, 16), e.scaleX = 1, e.scaleY = 1, e.source = "gyUI_png", e.width = 650, e.x = 0, e.y = 0, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "invite_icon1_png", e.x = 26.34, e.y = 97.01, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(222, 2, 4, 2), e.source = "rank_4_png", e.verticalCenter = 60, e.width = 550, e.x = 51, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1.5, e.scaleY = 1.5, e.source = "youxiquan_png", e.x = 240, e.y = 31.05, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "youxiquan1_png", e.x = 28, e.y = 576.81, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "youxiquan2_png", e.x = 28, e.y = 160.6, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "tucao_png", e.y = 670, e
    }, t.goBack_i = function() {
        var e = new eui.Group;
        return this.goBack = e, e.horizontalCenter = 302, e.scaleX = .85, e.scaleY = .85, e.verticalCenter = -365, e.elementsContent = [this._Image9_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "btn_close1_png", e.x = -4, e.y = -6, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "youxiquan3_png", e.x = 82.71, e.y = 689.32, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ZhiYinView.exml"] = window.ZhiYinViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["nodebg", "goldFlyTarget0", "glodMoney1", "addGlod0", "addImg0", "glodMoney2", "baseLevel0", "glodShop0", "attack0", "doubleGlod0", "attTime0", "doubleGoldTime0", "shop1", "upTip0", "shop2", "lajitong0", "bottomGro", "shop0", "xiyouImg0", "animaGro0", "chuzhanPlant0", "dspine0", "chuzhanPlantText0", "tipText0", "loadbg0", "loadImg0", "arrow0", "plantlevel0", "plantNum0", "chuzhanbtn0", "starUp0", "zhanliText0", "attactText0", "addAttack0", "extraGro0", "continueHurt0", "frequencyText0", "scopeText0", "feiliao0", "gongjiText0", "jieshao0", "starUp1", "dataList1", "loadBg0", "toolload0", "tooltext0", "toollevel0", "toolArrow0", "chanzi0", "toolGro0", "scroller", "loadBg1", "toolload1", "tooltext1", "toollevel1", "toolArrow1", "chanzi1", "toolGro1", "gro"], this.height = 1280, this.width = 720, this.elementsContent = [this.gro_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.gro_i = function() {
        var e = new eui.Group;
        return this.gro = e, e.bottom = 0, e.left = 0, e.right = 0, e.top = 0, e.touchThrough = !0, e.elementsContent = [this.nodebg_i(), this.bottomGro_i(), this.shop0_i(), this._Group19_i(), this.starUp1_i(), this.scroller_i(), this.toolGro1_i()], e
    }, t.nodebg_i = function() {
        var e = new eui.Image;
        return this.nodebg = e, e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e.visible = !1, e
    }, t.bottomGro_i = function() {
        var e = new eui.Group;
        return this.bottomGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 6, e.height = 123, e.horizontalCenter = 2, e.scaleX = 1, e.scaleY = 1, e.visible = !1, e.width = 720, e.elementsContent = [this._Group5_i(), this._Group6_i(), this._Group7_i(), this.lajitong0_i()], e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 122, e.x = 99, e.y = 4, e.elementsContent = [this._Image1_i(), this._Group1_i(), this.glodShop0_i(), this.attack0_i(), this.doubleGlod0_i(), this.attTime0_i(), this._Label1_i(), this.doubleGoldTime0_i(), this._Label2_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleY = .9, e.source = "entrance_bg_png", e.y = -8, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.width = 188.45, e.x = 167, e.y = -39.96, e.elementsContent = [this._Image2_i(), this.goldFlyTarget0_i(), this.glodMoney1_i(), this.addGlod0_i(), this.addImg0_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_bg1_png", e.x = -7, e.y = -5.039999999999964, e
    }, t.goldFlyTarget0_i = function() {
        var e = new eui.Image;
        return this.goldFlyTarget0 = e, e.scaleX = .4, e.scaleY = .4, e.source = "gift_coin_icon_png", e.x = 7, e.y = 4, e
    }, t.glodMoney1_i = function() {
        var e = new eui.BitmapLabel;
        return this.glodMoney1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31.11, e.scaleX = .8, e.scaleY = .8, e.text = "999999", e.width = 147.7, e.x = 39.74, e.y = 6.67, e
    }, t.addGlod0_i = function() {
        var e = new eui.BitmapLabel;
        return this.addGlod0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 30, e.scaleX = .5, e.scaleY = .5, e.text = "22.10B", e.width = 148, e.x = 156.24, e.y = 11.17, e
    }, t.addImg0_i = function() {
        var e = new eui.BitmapLabel;
        return this.addImg0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.scaleX = .7, e.scaleY = .7, e.text = "+", e.x = 137.24, e.y = 8.17, e
    }, t.glodShop0_i = function() {
        var e = new eui.Group;
        return this.glodShop0 = e, e.anchorOffsetX = 0, e.height = 104, e.width = 226, e.x = 148, e.y = 10, e.elementsContent = [this._Group2_i(), this._Image7_i(), this._Image8_i(), this._Group3_i(), this._Group4_i()], e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 11, e.y = 3, e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_yellowbg_png", e.x = -6, e.y = -5, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_red_png", e.x = -5, e.y = -1, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "tuji2_json.shanchuziT_png", e.x = 112, e.y = 19, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "tuji2_json.del_tower_png", e.x = 14, e.y = 10, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_yellow1_png", e.x = 9, e.y = 2, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_yellow_png", e.x = 6, e.y = 1, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.width = 188.45, e.x = 20, e.y = 37.04, e.elementsContent = [this._Image9_i(), this.glodMoney2_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "gift_coin_icon_png", e.x = 37.68, e.y = 3.33, e
    }, t.glodMoney2_i = function() {
        var e = new eui.BitmapLabel;
        return this.glodMoney2 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 46.67, e.scaleX = .5, e.scaleY = .5, e.text = "9999", e.width = 153.33, e.x = 74.69, e.y = 8.34, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 25, e.width = 120, e.x = 58, e.y = 8.33, e.elementsContent = [this._Image10_i(), this.baseLevel0_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .62, e.scaleY = .62, e.source = "LV_png", e.x = 22.68, e.y = 0, e
    }, t.baseLevel0_i = function() {
        var e = new eui.BitmapLabel;
        return this.baseLevel0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 45.33, e.scaleX = .45, e.scaleY = .45, e.text = "999", e.width = 122, e.x = 61.04, e.y = 2.72, e
    }, t.attack0_i = function() {
        var e = new eui.Group;
        return this.attack0 = e, e.x = 51, e.y = 22, e.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_attack_png", e.x = 3, e.y = 3, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_attack1_png", e.x = 14, e.y = 8, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_attack2_png", e.x = 20, e.y = 42, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_attack3_png", e.x = 70, e.y = 46, e
    }, t.doubleGlod0_i = function() {
        var e = new eui.Group;
        return this.doubleGlod0 = e, e.x = 381, e.y = 24, e.elementsContent = [this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i()], e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_gain_png", e.x = -2, e.y = 0, e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_gain1_png", e.x = 16, e.y = 4, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.rotation = 359.85, e.scaleX = .9, e.scaleY = .9, e.source = "entrance_gain2_png", e.x = 5, e.y = 39, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_gain3_png", e.x = 56, e.y = 42, e
    }, t.attTime0_i = function() {
        var e = new eui.Label;
        return this.attTime0 = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.rotation = 355.94, e.size = 18, e.text = "99:99", e.textAlign = "center", e.textColor = 14156290, e.verticalAlign = "middle", e.width = 103.11, e.x = 38.01, e.y = 4.03, e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.rotation = 355.94, e.size = 18, e.text = "99:99", e.textAlign = "center", e.textColor = 16777215, e.verticalAlign = "middle", e.visible = !1, e.x = 65.61, e.y = .99, e
    }, t.doubleGoldTime0_i = function() {
        var e = new eui.Label;
        return this.doubleGoldTime0 = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.rotation = 6.48, e.size = 18, e.text = "99:99", e.textAlign = "center", e.textColor = 14156290, e.verticalAlign = "middle", e.width = 103.17, e.x = 385.36, e.y = -5.22, e
    }, t._Label2_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.rotation = 6.48, e.size = 18, e.text = "99:99", e.textAlign = "center", e.textColor = 16777215, e.verticalAlign = "middle", e.visible = !1, e.x = 412.98, e.y = -2.31, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.x = -11, e.y = -8, e.elementsContent = [this.shop1_i(), this.upTip0_i()], e
    }, t.shop1_i = function() {
        var e = new eui.Image;
        return this.shop1 = e, e.scaleY = .9, e.source = "entrance_fruit_png", e.x = -24, e.y = 0, e
    }, t.upTip0_i = function() {
        var e = new eui.Group;
        return this.upTip0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 54.55, e.width = 87.88, e.x = 36, e.y = -50.59, e.elementsContent = [this._Image19_i(), this._Image20_i()], e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "tip_gain_png", e.x = -2.700000000000003, e.y = 5.5900000000001455, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "keshengji_png", e.x = 11.299999999999997, e.y = 12.590000000000146, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.x = 554, e.y = -8, e.elementsContent = [this.shop2_i(), this._Image21_i()], e
    }, t.shop2_i = function() {
        var e = new eui.Image;
        return this.shop2 = e, e.scaleY = .9, e.source = "entrance_shop_png", e.x = 0, e.y = 0, e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "iocn_redspot_new_png", e.x = 140.68, e.y = 11.65, e
    }, t.lajitong0_i = function() {
        var e = new eui.Image;
        return this.lajitong0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 98, e.source = "lajitong_png", e.visible = !1, e.width = 62, e.x = 15, e.y = 14, e
    }, t.shop0_i = function() {
        var e = new eui.Image;
        return this.shop0 = e, e.bottom = -15, e.left = -33, e.scaleY = .9, e.source = "entrance_fruit_png", e.visible = !1, e
    }, t._Group19_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = .5, e.verticalCenter = -50, e.visible = !1, e.elementsContent = [this._Image22_i(), this._Image23_i(), this._Group8_i(), this._Group9_i(), this.chuzhanbtn0_i(), this.starUp0_i(), this._Group10_i(), this._Group11_i(), this._Group12_i(), this._Group13_i(), this._Group14_i(), this._Group15_i(), this._Group18_i()], e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.height = 780, e.scale9Grid = new egret.Rectangle(98, 485, 406, 15), e.scaleX = 1, e.scaleY = 1, e.source = "gyUI_png", e.top = 0, e.x = 3, e
    }, t._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "shengxingT_png", e.x = 245, e.y = 35.32, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.x = 74.97, e.y = 228.74, e.elementsContent = [this.xiyouImg0_i(), this._Image24_i(), this.animaGro0_i(), this.chuzhanPlant0_i(), this.dspine0_i(), this.chuzhanPlantText0_i(), this.tipText0_i()], e
    }, t.xiyouImg0_i = function() {
        var e = new eui.Image;
        return this.xiyouImg0 = e, e.scaleX = .5, e.scaleY = .55, e.source = "new_tower_quality_tag1_png", e.x = -38.01, e.y = -81.65, e
    }, t._Image24_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "light_tower_upgrade_png", e.x = -7.34, e.y = 6.01, e
    }, t.animaGro0_i = function() {
        var e = new eui.Group;
        return this.animaGro0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 191, e.width = 171, e.y = 2, e
    }, t.chuzhanPlant0_i = function() {
        var e = new eui.Image;
        return this.chuzhanPlant0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.scaleX = .8, e.scaleY = .8, e.source = "zhiwu1_png", e.visible = !1, e.x = -34, e.y = -3, e
    }, t.dspine0_i = function() {
        var e = new DragonSpine;
        return this.dspine0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 180, e.width = 156, e.x = 8.67, e.y = 8.67, e
    }, t.chuzhanPlantText0_i = function() {
        var e = new eui.Image;
        return this.chuzhanPlantText0 = e, e.scaleX = .8, e.scaleY = .8, e.source = "zhiwuzi1_png", e.x = 11.98, e.y = -76.97, e
    }, t.tipText0_i = function() {
        var e = new eui.Image;
        return this.tipText0 = e, e.scaleX = .8, e.scaleY = .8, e.source = "lock_png", e.visible = !1, e.x = 52.35, e.y = 67, e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 45, e.width = 267, e.x = 243.41, e.y = 150.17, e.elementsContent = [this.loadbg0_i(), this.loadImg0_i(), this._Image25_i(), this.arrow0_i(), this.plantlevel0_i(), this.plantNum0_i()], e
    }, t.loadbg0_i = function() {
        var e = new eui.Image;
        return this.loadbg0 = e, e.scale9Grid = new egret.Rectangle(16, 15, 34, 10), e.scaleY = .75, e.source = "bar_bg2_png", e.width = 180, e.x = 45.25, e.y = 8.69, e
    }, t.loadImg0_i = function() {
        var e = new eui.Image;
        return this.loadImg0 = e, e.anchorOffsetY = 0, e.height = 33.23, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .66, e.scaleY = .8, e.source = "bar_bg1_png", e.x = 54.45, e.y = 10.72, e
    }, t._Image25_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "bg_lv_big_png", e.x = 20.32, e.y = -1, e
    }, t.arrow0_i = function() {
        var e = new eui.Image;
        return this.arrow0 = e, e.scaleX = .6, e.scaleY = .6, e.source = "icon_up_new_png", e.x = 195.25, e.y = 5.21, e
    }, t.plantlevel0_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantlevel0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 50.67, e.scaleX = .4, e.scaleY = .4, e.text = "99", e.width = 83, e.x = 27.99, e.y = 12.02, e
    }, t.plantNum0_i = function() {
        var e = new eui.BitmapLabel;
        return this.plantNum0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.56, e.scaleX = .6, e.scaleY = .6, e.text = "99/10", e.width = 100.66, e.x = 107.26, e.y = 15.51, e
    }, t.chuzhanbtn0_i = function() {
        var e = new eui.Group;
        return this.chuzhanbtn0 = e, e.anchorOffsetY = 0, e.x = 105.99, e.y = 631.67, e.elementsContent = [this._Image26_i(), this._Image27_i(), this._Image28_i()], e
    }, t._Image26_i = function() {
        var e = new eui.Image;
        return e.height = 85, e.horizontalCenter = 0, e.scale9Grid = new egret.Rectangle(64, 31, 5, 7), e.source = "btn_yellow4_png", e.verticalCenter = 0, e.width = 160, e
    }, t._Image27_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .69, e.source = "yingyingls1_png", e.visible = !1, e.x = 1.61, e.y = 1.95, e
    }, t._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "shangzhengT_png", e.x = 17, e.y = 15, e
    }, t.starUp0_i = function() {
        var e = new eui.Group;
        return this.starUp0 = e, e.anchorOffsetY = 0, e.x = 349.64, e.y = 633.67, e.elementsContent = [this._Image29_i(), this._Image30_i(), this._Image31_i()], e
    }, t._Image29_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .75, e.scaleY = .85, e.source = "btn_blue5_png", e.verticalCenter = 0, e
    }, t._Image30_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .65, e.source = "yingyingls_png", e.visible = !1, e.x = 1.32, e.y = 1.3, e
    }, t._Image31_i = function() {
        var e = new eui.Image;
        return e.source = "shengxingT_png", e.x = 20, e.y = 13, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 40, e.width = 298.67, e.x = 260.66, e.y = 214.02, e.elementsContent = [this._Image32_i(), this.zhanliText0_i()], e
    }, t._Image32_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "gs_png", e.x = 8.64, e.y = 1.5, e
    }, t.zhanliText0_i = function() {
        var e = new eui.BitmapLabel;
        return this.zhanliText0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 50.67, e.scaleX = .7, e.scaleY = .7, e.text = "9999.5", e.width = 320.34, e.x = 108.36, e.y = 3.67, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.width = 300, e.x = 260, e.y = 266.02, e.elementsContent = [this.attactText0_i(), this._BitmapLabel1_i(), this._BitmapLabel2_i(), this.extraGro0_i()], e
    }, t.attactText0_i = function() {
        var e = new eui.BitmapLabel;
        return this.attactText0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huang1_fnt", e.scaleX = .8, e.scaleY = .8, e.text = "1.90K1", e.width = 147, e.x = 108, e.y = 4.65, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.scaleX = .75, e.scaleY = .75, e.text = "+", e.visible = !1, e.width = 26, e.x = 203, e.y = 4, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 26.67, e.scaleX = .9, e.scaleY = .9, e.text = "攻击伤害", e.width = 105.33, e.x = 8.01, e.y = 3, e
    }, t.extraGro0_i = function() {
        var e = new eui.Group;
        return this.extraGro0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 23, e.width = 100, e.x = 209.68, e.y = 4, e.elementsContent = [this.addAttack0_i()], e
    }, t.addAttack0_i = function() {
        var e = new eui.BitmapLabel;
        return this.addAttack0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.scaleX = .8, e.scaleY = .8, e.text = "+109.", e.width = 113.57, e.x = 18, e
    }, t._Group12_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.width = 300, e.x = 260, e.y = 307.05, e.elementsContent = [this.continueHurt0_i(), this._BitmapLabel3_i()], e
    }, t.continueHurt0_i = function() {
        var e = new eui.BitmapLabel;
        return this.continueHurt0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huang1_fnt", e.scaleX = .8, e.scaleY = .8, e.text = "1.90K", e.width = 147, e.x = 108, e.y = 2.65, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 27.62, e.scaleX = .9, e.scaleY = .9, e.text = "持续伤害", e.width = 108.67, e.x = 8.01, e.y = 3, e
    }, t._Group13_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.width = 300, e.x = 260, e.y = 350.1, e.elementsContent = [this.frequencyText0_i(), this._BitmapLabel4_i()], e
    }, t.frequencyText0_i = function() {
        var e = new eui.BitmapLabel;
        return this.frequencyText0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huang1_fnt", e.scaleX = .8, e.scaleY = .8, e.text = "1.90K", e.width = 147, e.x = 108, e.y = 2.65, e
    }, t._BitmapLabel4_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 26.67, e.scaleX = .9, e.scaleY = .9, e.text = "攻击频率", e.width = 105.72, e.x = 8.01, e.y = 3, e
    }, t._Group14_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.width = 300, e.x = 260, e.y = 394.48, e.elementsContent = [this.scopeText0_i(), this._BitmapLabel5_i()], e
    }, t.scopeText0_i = function() {
        var e = new eui.BitmapLabel;
        return this.scopeText0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huang1_fnt", e.scaleX = .8, e.scaleY = .8, e.text = "1.90K", e.width = 147, e.x = 108, e.y = 3.65, e
    }, t._BitmapLabel5_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 28.57, e.scaleX = .9, e.scaleY = .9, e.text = "攻击范围", e.width = 104.76, e.x = 8.01, e.y = 2, e
    }, t._Group15_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 25, e.width = 229, e.x = 313.66, e.y = 587.68, e.elementsContent = [this.feiliao0_i(), this._Image33_i()], e
    }, t.feiliao0_i = function() {
        var e = new eui.BitmapLabel;
        return this.feiliao0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.83, e.rotation = 359.94, e.text = "99999/500", e.width = 216.32, e.x = 38.67, e.y = -2.32, e
    }, t._Image33_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "gift_manue_icon_png", e.x = -.65, e.y = -7.32, e
    }, t._Group18_i = function() {
        var e = new eui.Group;
        return e.height = 100, e.width = 500, e.x = 52, e.y = 454, e.elementsContent = [this._Image34_i(), this._Group16_i(), this._Group17_i()], e
    }, t._Image34_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .9, e.scaleY = .9, e.source = "duihuakuangziT_png", e.verticalCenter = 0, e
    }, t._Group16_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.x = 47.66, e.y = 21.02, e.elementsContent = [this.gongjiText0_i(), this._Label3_i(), this._Label4_i(), this._Label5_i()], e
    }, t.gongjiText0_i = function() {
        var e = new eui.Label;
        return this.gongjiText0 = e, e.bold = !0, e.fontFamily = "SimHei", e.scaleX = 1, e.scaleY = 1, e.size = 24, e.text = "Attack the single", e.textColor = 1154321, e.x = 0, e.y = 0, e
    }, t._Label3_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "SimHei", e.scaleX = 1, e.scaleY = 1, e.size = 24, e.text = "Attack the control", e.textColor = 1154321, e.visible = !1, e.x = 0, e.y = 0, e
    }, t._Label4_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "SimHei", e.scaleX = 1, e.scaleY = 1, e.size = 24, e.text = "Attack the poison", e.textColor = 1154321, e.visible = !1, e.x = 0, e.y = 0, e
    }, t._Label5_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "SimHei", e.scaleX = 1, e.scaleY = 1, e.size = 24, e.text = "Attack the crowd", e.textColor = 1154321, e.visible = !1, e.x = 0, e.y = 0, e
    }, t._Group17_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 40, e.width = 390, e.x = 47.65, e.y = 49.32, e.elementsContent = [this.jieshao0_i()], e
    }, t.jieshao0_i = function() {
        var e = new eui.Label;
        return this.jieshao0 = e, e.bold = !0, e.fontFamily = "SimHei", e.horizontalCenter = -53, e.scaleX = 1, e.scaleY = 1, e.size = 20, e.text = "His Gatling gun never goes off.", e.textColor = 5256217, e.verticalCenter = -6, e
    }, t.starUp1_i = function() {
        var e = new eui.Group;
        return this.starUp1 = e, e.anchorOffsetY = 0, e.horizontalCenter = 129, e.verticalCenter = 232, e.visible = !1, e.elementsContent = [this._Image35_i(), this._Image36_i(), this._Image37_i()], e
    }, t._Image35_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .75, e.scaleY = .85, e.source = "btn_blue5_png", e.verticalCenter = 0, e
    }, t._Image36_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .65, e.source = "yingyingls_png", e.visible = !1, e.x = 1.32, e.y = 1.3, e
    }, t._Image37_i = function() {
        var e = new eui.Image;
        return e.source = "shengxingT_png", e.x = 20, e.y = 13, e
    }, t.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 1118, e.horizontalCenter = 0, e.verticalCenter = 74, e.visible = !1, e.width = 720, e.viewport = this._Group23_i(), e
    }, t._Group23_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 1122, e.width = 540, e.x = -13.64, e.elementsContent = [this.dataList1_i(), this._Group20_i(), this.toolGro0_i(), this._Group22_i()], e
    }, t.dataList1_i = function() {
        var e = new eui.List;
        return this.dataList1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.itemRendererSkinName = MengGuo3ViewSkin, e.width = 720, e.x = 0, e.y = -.67, e.layout = this._TileLayout1_i(), e
    }, t._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.paddingLeft = 0, e.paddingTop = 320, e.verticalGap = 20, e
    }, t._Group20_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 7, e.top = 4, e.elementsContent = [this._Image38_i(), this._Image39_i()], e
    }, t._Image38_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "title_green_new1_png", e.x = 0, e.y = 0, e
    }, t._Image39_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "txt_tool_png", e.x = 128, e.y = 12, e
    }, t.toolGro0_i = function() {
        var e = new eui.Group;
        return this.toolGro0 = e, e.x = 148, e.y = 88, e.elementsContent = [this._Image40_i(), this._Group21_i(), this.chanzi0_i(), this._Image42_i()], e
    }, t._Image40_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .65, e.source = "card_bg1_1_png", e.x = 0, e.y = 0, e
    }, t._Group21_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 35.2, e.scaleX = 1, e.scaleY = 1, e.width = 159.6, e.x = -6.670000000000016, e.y = -7.029999999999973, e.elementsContent = [this.loadBg0_i(), this.toolload0_i(), this.tooltext0_i(), this._Image41_i(), this.toollevel0_i(), this.toolArrow0_i()], e
    }, t.loadBg0_i = function() {
        var e = new eui.Image;
        return this.loadBg0 = e, e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(32, 21, 1, 1), e.scaleY = .6, e.source = "bar_bg2_png", e.width = 133.5, e.x = 26, e.y = 7.17, e
    }, t.toolload0_i = function() {
        var e = new eui.Image;
        return this.toolload0 = e, e.anchorOffsetY = 0, e.height = 33.23, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .7, e.scaleY = .63, e.source = "bar_bg1_png", e.x = 27, e.y = 8.8, e
    }, t.tooltext0_i = function() {
        var e = new eui.BitmapLabel;
        return this.tooltext0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.56, e.scaleX = .6, e.scaleY = .6, e.text = "99/10", e.width = 100.66, e.x = 60.5, e.y = 9.99, e
    }, t._Image41_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "bg_lv_big_png", e.x = 3.17, e.y = -5.02, e
    }, t.toollevel0_i = function() {
        var e = new eui.BitmapLabel;
        return this.toollevel0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 50.67, e.scaleX = .4, e.scaleY = .4, e.text = "99", e.width = 83, e.x = 9.17, e.y = 6.66, e
    }, t.toolArrow0_i = function() {
        var e = new eui.Image;
        return this.toolArrow0 = e, e.scaleX = .5, e.scaleY = .5, e.source = "icon_up_new_png", e.x = 138.67000000000002, e.y = 3.99, e
    }, t.chanzi0_i = function() {
        var e = new eui.Image;
        return this.chanzi0 = e, e.scaleX = .6, e.scaleY = .6, e.source = "builder_png", e.x = 36.33, e.y = 45, e
    }, t._Image42_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "zhongzhigongjuT_png", e.x = 18, e.y = 179, e
    }, t._Group22_i = function() {
        var e = new eui.Group;
        return e.height = 230, e.width = 160, e.x = 421.01, e.y = 89.33, e.elementsContent = [this._Image43_i(), this._Image44_i()], e
    }, t._Image43_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .7, e.scaleY = .65, e.source = "tuji4_json.card_bg3_png", e.y = 1.34, e
    }, t._Image44_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .52, e.scaleY = .52, e.source = "chaojihecheng_png", e.y = 178.33, e
    }, t.toolGro1_i = function() {
        var e = new eui.Group;
        return this.toolGro1 = e, e.visible = !1, e.x = 148, e.y = 239.51, e.elementsContent = [this._Image45_i(), this._Group24_i(), this.chanzi1_i(), this._Image47_i()], e
    }, t._Image45_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .65, e.source = "card_bg1_1_png", e.x = 0, e.y = 0, e
    }, t._Group24_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 35.2, e.scaleX = 1, e.scaleY = 1, e.width = 159.6, e.x = -6.670000000000016, e.y = -7.029999999999973, e.elementsContent = [this.loadBg1_i(), this.toolload1_i(), this.tooltext1_i(), this._Image46_i(), this.toollevel1_i(), this.toolArrow1_i()], e
    }, t.loadBg1_i = function() {
        var e = new eui.Image;
        return this.loadBg1 = e, e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(32, 21, 1, 1), e.scaleY = .6, e.source = "bar_bg2_png", e.width = 133.5, e.x = 26, e.y = 7.17, e
    }, t.toolload1_i = function() {
        var e = new eui.Image;
        return this.toolload1 = e, e.anchorOffsetY = 0, e.height = 33.23, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .7, e.scaleY = .63, e.source = "bar_bg1_png", e.x = 27, e.y = 8.8, e
    }, t.tooltext1_i = function() {
        var e = new eui.BitmapLabel;
        return this.tooltext1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.56, e.scaleX = .6, e.scaleY = .6, e.text = "99/10", e.width = 100.66, e.x = 60.5, e.y = 9.99, e
    }, t._Image46_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .65, e.source = "bg_lv_big_png", e.x = 3.17, e.y = -5.02, e
    }, t.toollevel1_i = function() {
        var e = new eui.BitmapLabel;
        return this.toollevel1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 50.67, e.scaleX = .4, e.scaleY = .4, e.text = "99", e.width = 83, e.x = 9.17, e.y = 6.66, e
    }, t.toolArrow1_i = function() {
        var e = new eui.Image;
        return this.toolArrow1 = e, e.scaleX = .5, e.scaleY = .5, e.source = "icon_up_new_png", e.x = 138.67000000000002, e.y = 3.99, e
    }, t.chanzi1_i = function() {
        var e = new eui.Image;
        return this.chanzi1 = e, e.scaleX = .6, e.scaleY = .6, e.source = "builder_png", e.x = 36.33, e.y = 45, e
    }, t._Image47_i = function() {
        var e = new eui.Image;
        return e.scaleX = .75, e.scaleY = .75, e.source = "zhongzhigongjuT_png", e.x = 18, e.y = 179, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ZhongZhiGongJuView.exml"] = window.ZhongZhiGongJuViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["goBack", "bg", "upBtn1", "loadBg", "loadImg", "leveltext", "g1", "leveltext2", "g2", "arrows", "toolsNum", "chanzi", "levelText2", "toolsNum2", "manureNum2", "videoUpStar", "upBtn"], this.height = 1280, this.width = 720, this.elementsContent = [this.goBack_i(), this._Group5_i(), this.upBtn_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.goBack_i = function() {
        var e = new eui.Image;
        return this.goBack = e, e.alpha = .5, e.bottom = 0, e.left = 0, e.right = 0, e.source = "nodebg_png", e.top = 0, e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.touchChildren = !1, e.touchEnabled = !1, e.touchThrough = !0, e.verticalCenter = -57, e.elementsContent = [this.bg_i(), this.upBtn1_i(), this._Group1_i(), this._Group2_i(), this._Image7_i(), this._Image8_i(), this.levelText2_i(), this._Group3_i(), this._Group4_i(), this._Image11_i(), this._Image12_i(), this._BitmapLabel1_i()], e
    }, t.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e, e.source = "gyUI_png", e.touchEnabled = !0, e.x = 0, e.y = 0, e
    }, t.upBtn1_i = function() {
        var e = new eui.Group;
        return this.upBtn1 = e, e.anchorOffsetY = 0, e.visible = !1, e.x = 233, e.y = 787, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "btn_blue5_png", e.verticalCenter = 0, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = .63, e.scaleY = .63, e.source = "yingyingls_png", e.visible = !1, e.x = 1.32, e.y = -.02, e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "shengjiT_png", e.x = 40, e.y = 12, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 35.2, e.scaleX = 1, e.scaleY = 1, e.width = 184.27, e.x = 208, e.y = 551.46, e.elementsContent = [this.loadBg_i(), this.loadImg_i(), this.g1_i(), this.g2_i(), this.arrows_i(), this.toolsNum_i()], e
    }, t.loadBg_i = function() {
        var e = new eui.Image;
        return this.loadBg = e, e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(32, 21, 1, 1), e.scaleY = .8, e.source = "bar_bg2_png", e.width = 156.17, e.x = 26, e.y = 1.14, e
    }, t.loadImg_i = function() {
        var e = new eui.Image;
        return this.loadImg = e, e.anchorOffsetY = 0, e.height = 33.23, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .8, e.scaleY = .9, e.source = "bar_bg1_png", e.x = 27, e.y = 2.77, e
    }, t.g1_i = function() {
        var e = new eui.Group;
        return this.g1 = e, e.anchorOffsetX = 26, e.anchorOffsetY = 26, e.height = 52, e.width = 52, e.x = 28, e.y = 16, e.elementsContent = [this._Image4_i(), this.leveltext_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "bg_lv_big_png", e.x = 1.170000000000016, e.y = -1.0499999999999545, e
    }, t.leveltext_i = function() {
        var e = new eui.BitmapLabel;
        return this.leveltext = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 50.67, e.scaleX = .6, e.scaleY = .6, e.text = "99", e.width = 83, e.x = 4.670000000000016, e.y = 12.129999999999995, e
    }, t.g2_i = function() {
        var e = new eui.Group;
        return this.g2 = e, e.anchorOffsetX = 26, e.anchorOffsetY = 26, e.height = 52, e.width = 52, e.x = 28, e.y = 16, e.elementsContent = [this._Image5_i(), this.leveltext2_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "bg_lv_big_png", e.x = 1.170000000000016, e.y = -1.0499999999999545, e
    }, t.leveltext2_i = function() {
        var e = new eui.BitmapLabel;
        return this.leveltext2 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 50.67, e.scaleX = .6, e.scaleY = .6, e.text = "99", e.width = 83, e.x = 4.670000000000016, e.y = 12.129999999999995, e
    }, t.arrows_i = function() {
        var e = new eui.Image;
        return this.arrows = e, e.scaleX = .6, e.scaleY = .6, e.source = "icon_up_new_png", e.x = 158.01, e.y = -1.66, e
    }, t.toolsNum_i = function() {
        var e = new eui.BitmapLabel;
        return this.toolsNum = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.56, e.scaleX = .6, e.scaleY = .6, e.text = "99/10", e.width = 100.66, e.x = 82.01, e.y = 7.99, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 113, e.y = 215.12, e.elementsContent = [this._Image6_i(), this.chanzi_i()], e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "light_tower_upgrade_png", e.x = 0, e.y = 0, e
    }, t.chanzi_i = function() {
        var e = new eui.Image;
        return this.chanzi = e, e.source = "builder_png", e.x = 118, e.y = 94, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 60, e.scale9Grid = new egret.Rectangle(30, 21, 523, 148), e.source = "gyUI1_png", e.width = 520, e.x = 40, e.y = 644.57, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "zhiwujichudengjiT_png", e.x = 107.34, e.y = 657.91, e
    }, t.levelText2_i = function() {
        var e = new eui.BitmapLabel;
        return this.levelText2 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "huangkuanzi_fnt", e.height = 49.11, e.scaleX = .6, e.scaleY = .6, e.text = "999", e.width = 130, e.x = 397.92, e.y = 660.25, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 40, e.width = 92.67, e.x = 148.18, e.y = 717.91, e.elementsContent = [this._Image9_i(), this.toolsNum2_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .3, e.scaleY = .3, e.source = "builder_png", e.x = -21, e.y = -4, e
    }, t.toolsNum2_i = function() {
        var e = new eui.BitmapLabel;
        return this.toolsNum2 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.56, e.horizontalCenter = 43.665, e.text = "99/10", e.verticalCenter = 0, e.width = 139.66, e.x = 143, e.y = -263, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.height = 40, e.width = 200.67, e.x = 362.33, e.y = 718.57, e.elementsContent = [this._Image10_i(), this.manureNum2_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "gift_manue_icon_png", e.x = -7, e.y = 3, e
    }, t.manureNum2_i = function() {
        var e = new eui.BitmapLabel;
        return this.manureNum2 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 25.56, e.horizontalCenter = 39.165000000000006, e.text = "99/10", e.verticalCenter = 0, e.width = 204.99, e.x = 143, e.y = -263, e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "zhongzhigongjuT_png", e.x = 222, e.y = 165.34, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "txt_lv_png", e.x = 251, e.y = 49, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 29, e.text = "PLANT BASE LEVEL UP", e.width = 300, e.x = 165, e.y = 605, e
    }, t.upBtn_i = function() {
        var e = new eui.Group;
        return this.upBtn = e, e.anchorOffsetY = 0, e.horizontalCenter = 17, e.verticalCenter = 307.5, e.elementsContent = [this._Image13_i(), this.videoUpStar_i(), this._Image14_i(), this._Image15_i()], e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .8, e.scaleY = .8, e.source = "btn_blue5_png", e.verticalCenter = 0, e
    }, t.videoUpStar_i = function() {
        var e = new eui.Image;
        return this.videoUpStar = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 39.3, e.horizontalCenter = -55, e.scaleX = .75, e.scaleY = .85, e.source = "icon_ad_png", e.verticalCenter = -4, e.width = 42.91, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .63, e.scaleY = .63, e.source = "yingyingls_png", e.visible = !1, e.x = 1.32, e.y = -.02, e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "shengjiT_png", e.x = 45, e.y = 12, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ZhuanPanView.exml"] = window.ZhuanPanViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["zhuanpan", "zhizhen", "sum", "time", "zhuanpanBtn0", "zhuanpanBtn", "invitationBtn0", "invitationBtn", "closeBtn", "hengfu", "rocket", "tipbg"], this.height = 1280, this.width = 720, this.elementsContent = [this._Rect1_i(), this._Group14_i(), this.hengfu_i(), this.tipbg_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t._Rect1_i = function() {
        var e = new eui.Rect;
        return e.bottom = 0, e.fillAlpha = .75, e.fillColor = 458754, e.left = 0, e.right = 0, e.strokeAlpha = 1, e.strokeColor = 16250100, e.top = 0, e
    }, t._Group14_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 775, e.horizontalCenter = 0, e.verticalCenter = 18.5, e.width = 600, e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this.zhuanpan_i(), this.zhizhen_i(), this._Group11_i(), this._Group12_i(), this._Group13_i(), this.closeBtn_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 775, e.horizontalCenter = 0, e.source = "alertbg_png", e.width = 600, e.y = 0, e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.source = "hengfudingbu_png", e.x = 155.99, e.y = -40, e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.horizontalCenter = 3, e.size = 45, e.text = "幸运转盘", e.textColor = 2816254, e.y = -12, e
    }, t.zhuanpan_i = function() {
        var e = new eui.Group;
        return this.zhuanpan = e, e.anchorOffsetX = 240, e.anchorOffsetY = 240, e.height = 480, e.horizontalCenter = 0, e.verticalCenter = -31.5, e.width = 480, e.elementsContent = [this._Image3_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group6_i(), this._Group8_i(), this._Group9_i(), this._Group10_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 480, e.horizontalCenter = 0, e.source = "tuji3_json.zhiwu25_png", e.verticalCenter = 0, e.width = 480, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.y = 336, e.elementsContent = [this._Image4_i(), this._Label2_i()], e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .7, e.scaleY = .7, e.source = "zuanshi_png", e.y = 0, e
    }, t._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.horizontalCenter = 0, e.size = 30, e.text = "钻石x50", e.textColor = 0, e.y = 94, e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.rotation = 45, e.x = 118, e.y = 260, e.elementsContent = [this._Image5_i(), this._Label3_i()], e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -6.5, e.scaleX = .5, e.scaleY = .5, e.source = "pingguo_png", e.y = .71, e
    }, t._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.horizontalCenter = 0, e.size = 28, e.text = "射击速度X10", e.textColor = 0, e.y = 85, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.rotation = 132, e.x = 443, e.y = 345, e.elementsContent = [this._Label4_i(), this._Image6_i()], e
    }, t._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.horizontalCenter = 0, e.size = 30, e.text = "抽奖卡x3", e.textColor = 0, e.y = 0, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 1.5, e.source = "choujiangquan_png", e.y = 56, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.y = 21, e.elementsContent = [this._Image7_i(), this._Label5_i()], e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 1, e.scaleX = .6, e.scaleY = .6, e.source = "zuanshi_png", e.y = 58, e
    }, t._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.size = 30, e.text = "钻石x50", e.textColor = 0, e.x = 0, e.y = 0, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.rotation = 45, e.x = 344, e.y = 30, e.elementsContent = [this._Group5_i(), this._Label6_i()], e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.scaleX = .7, e.scaleY = .7, e.y = 55, e.elementsContent = [this._Image8_i(), this._Image9_i(), this._Image10_i()], e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "zuanshi_png", e.x = -11.11, e.y = 25.99, e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "zuanshi_png", e.x = 28.89, e.y = 25.99, e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -5, e.source = "zuanshi_png", e.y = -1.01, e
    }, t._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.size = 30, e.text = "钻石x1.0万", e.textColor = 0, e.x = 0, e.y = 0, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.rotation = -45, e.x = 40, e.y = 130, e.elementsContent = [this._Group7_i(), this._Label7_i()], e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.scaleX = .7, e.scaleY = .7, e.y = 55, e.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "zuanshi_png", e.x = -5.05, e.y = 28.01, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "zuanshi_png", e.x = 34.95, e.y = 28.01, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -3, e.source = "zuanshi_png", e.y = 1.01, e
    }, t._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.size = 30, e.text = "钻石x200", e.textColor = 0, e.x = 0, e.y = 0, e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.rotation = 90, e.verticalCenter = 0, e.x = 462, e.elementsContent = [this._Image14_i(), this._Label8_i()], e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "zuanshi_png", e.x = 16, e.y = 58, e
    }, t._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.size = 30, e.text = "钻石x500", e.textColor = 0, e.x = 0, e.y = 0, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.rotation = -90, e.verticalCenter = 0, e.x = 18, e.elementsContent = [this._Image15_i(), this._Label9_i()], e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -4, e.scaleX = .8, e.scaleY = .8, e.source = "zuanshi_png", e.y = 52, e
    }, t._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.size = 30, e.text = "钻石x100", e.textColor = 0, e.x = 0, e.y = 0, e
    }, t.zhizhen_i = function() {
        var e = new eui.Image;
        return this.zhizhen = e, e.horizontalCenter = .5, e.source = "pointer_png", e.y = 266, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 232, e.layout = this._HorizontalLayout1_i(), e.elementsContent = [this._Label10_i(), this.sum_i()], e
    }, t._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.horizontalAlign = "left", e.verticalAlign = "middle", e
    }, t._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.size = 25, e.text = "剩余次数:", e.textColor = 16777215, e.x = 0, e.y = 1, e
    }, t.sum_i = function() {
        var e = new eui.Label;
        return this.sum = e, e.fontFamily = "SimHei", e.size = 25, e.text = "01", e.textColor = 16777215, e.x = 84, e.y = 0, e
    }, t._Group12_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.visible = !1, e.y = 740, e.layout = this._HorizontalLayout2_i(), e.elementsContent = [this._Label11_i(), this.time_i()], e
    }, t._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e.horizontalAlign = "left", e.verticalAlign = "top", e
    }, t._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "SimHei", e.size = 20, e.text = "剩余时间：", e.textColor = 16777215, e.x = 0, e.y = 0, e
    }, t.time_i = function() {
        var e = new eui.Label;
        return this.time = e, e.fontFamily = "SimHei", e.size = 20, e.text = "00：00：00", e.textColor = 16777215, e.x = 118, e.y = 3, e
    }, t._Group13_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0, e.verticalCenter = 296.5, e.elementsContent = [this.zhuanpanBtn_i(), this.invitationBtn_i()], e
    }, t.zhuanpanBtn_i = function() {
        var e = new eui.Group;
        return this.zhuanpanBtn = e, e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image16_i(), this.zhuanpanBtn0_i()], e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.source = "btnyellow_png", e.verticalCenter = 0, e
    }, t.zhuanpanBtn0_i = function() {
        var e = new eui.Label;
        return this.zhuanpanBtn0 = e, e.fontFamily = "SimHei", e.size = 35, e.text = "幸运抽奖", e.x = 40, e.y = 13, e
    }, t.invitationBtn_i = function() {
        var e = new eui.Group;
        return this.invitationBtn = e, e.horizontalCenter = 0, e.verticalCenter = 0, e.elementsContent = [this._Image17_i(), this.invitationBtn0_i(), this._Image18_i()], e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "btnyellowad_png", e.x = 0, e.y = 0, e
    }, t.invitationBtn0_i = function() {
        var e = new eui.Label;
        return this.invitationBtn0 = e, e.fontFamily = "SimHei", e.size = 30, e.text = "免费获取", e.x = 61, e.y = 17, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "shipin_png", e.x = 20, e.y = 17, e
    }, t.closeBtn_i = function() {
        var e = new eui.Image;
        return this.closeBtn = e, e.horizontalCenter = 287, e.source = "closenew_png", e.verticalCenter = -376.5, e
    }, t.hengfu_i = function() {
        var e = new eui.Image;
        return this.hengfu = e, e.horizontalCenter = 0, e.source = "hengfu1_png", e.verticalCenter = -32, e.visible = !1, e.width = 720, e
    }, t.tipbg_i = function() {
        var e = new eui.Group;
        return this.tipbg = e, e.height = 572, e.visible = !1, e.width = 720, e.x = 0, e.y = 354, e.elementsContent = [this._Image19_i(), this._Image20_i(), this._Image21_i(), this.rocket_i(), this._Image22_i()], e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 572, e.source = "tipbg_png", e.width = 720, e.x = 0, e.y = 0, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "speedImg_png", e.visible = !1, e.x = 64, e.y = 142, e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "speedImg_png", e.visible = !1, e.x = 32, e.y = 156, e
    }, t.rocket_i = function() {
        var e = new eui.Image;
        return this.rocket = e, e.source = "speedImg_png", e.x = -562, e.y = 392, e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "speedImg_png", e.visible = !1, e.x = 732, e.y = -124, e
    }, i
}(eui.Skin), generateEUI.paths["resource/eui_skins/ZhuJieMianView.exml"] = window.ZhuJieMianViewSkin = function(e) {
    function i() {
        e.call(this), this.skinParts = ["goldFlyTarget", "glodMoney", "addGlod", "addImg", "glodMoney0", "baseLevel", "glodShop", "attack", "doubleGlod", "attTime", "doubleGoldTime", "shop", "upTip", "shop0", "redHot", "upTip0", "lajitong", "bottomGro", "loseGro", "leveltext1", "wintip", "leveltext0", "stoplevel0", "gobacklevel0", "losetip", "chuangguanGro", "bossGro", "winGro", "shibaiImg1", "shibaiImg2", "loseAnima", "worldBtn", "paihangbtn", "lastbossLvImg", "lastLvImg", "lastLvtext", "lastLvGro", "curbossLvImg", "curLvImg", "curLvtext", "box0", "curLvGro", "futbossLvImg", "futLvImg", "futLvtext", "box2", "futLvGro", "zhanli", "setBtn", "taskDot", "taskBtn", "vipText", "vipBtn", "giftTime", "giftbtn", "lixianTime", "lixianGro", "extraTime", "extraGiftBtn", "yugaoImg", "yugaoLevel", "jiesuoBtn", "mergeTime", "autoMerge", "lockImg", "miniGameBtn", "goldFlyTarget0", "loadbg1", "loadImg1", "box1", "iconTuiGuang", "taskDot0", "tuiguangBtn1", "redhit", "boxBtn", "fingerTip1", "fingerTip2", "root"], this.height = 1280, this.width = 720, this.elementsContent = [this.root_i()]
    }
    __extends(i, e);
    var t = i.prototype;
    return t.root_i = function() {
        var e = new eui.Group;
        return this.root = e, e.percentHeight = 100, e.horizontalCenter = 1, e.verticalCenter = 0, e.percentWidth = 100, e.elementsContent = [this.bottomGro_i(), this.loseGro_i(), this.chuangguanGro_i(), this.bossGro_i(), this.winGro_i(), this.loseAnima_i(), this.worldBtn_i(), this._Group9_i(), this._Group10_i(), this._Group11_i(), this.setBtn_i(), this.taskBtn_i(), this.vipBtn_i(), this.giftbtn_i(), this.lixianGro_i(), this._Group13_i(), this.extraGiftBtn_i(), this.jiesuoBtn_i(), this._Group14_i(), this._Group18_i(), this._Group19_i(), this.autoMerge_i(), this.miniGameBtn_i(), this._Group20_i(), this.goldFlyTarget0_i(), this._Group21_i(), this.iconTuiGuang_i(), this.tuiguangBtn1_i(), this._Group23_i(), this.boxBtn_i(), this._Group24_i()], e
    }, t.bottomGro_i = function() {
        var e = new eui.Group;
        return this.bottomGro = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 6, e.height = 123, e.horizontalCenter = 2, e.scaleX = 1, e.scaleY = 1, e.width = 720, e.elementsContent = [this._Group5_i(), this._Group6_i(), this._Group7_i(), this.lajitong_i()], e
    }, t._Group5_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 122, e.x = 99, e.y = -1, e.elementsContent = [this._Image1_i(), this._Group1_i(), this.glodShop_i(), this.attack_i(), this.doubleGlod_i(), this.attTime_i(), this._Label1_i(), this.doubleGoldTime_i(), this._Label2_i()], e
    }, t._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleY = .9, e.source = "entrance_bg_png", e.y = -8, e
    }, t._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.width = 188.45, e.x = 167, e.y = -39.96, e.elementsContent = [this._Image2_i(), this.goldFlyTarget_i(), this.glodMoney_i(), this.addGlod_i(), this.addImg_i()], e
    }, t._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_bg1_png", e.x = -7, e.y = -5.039999999999964, e
    }, t.goldFlyTarget_i = function() {
        var e = new eui.Image;
        return this.goldFlyTarget = e, e.scaleX = .4, e.scaleY = .4, e.source = "gift_coin_icon_png", e.x = 7, e.y = 4, e
    }, t.glodMoney_i = function() {
        var e = new eui.BitmapLabel;
        return this.glodMoney = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 31.11, e.scaleX = .8, e.scaleY = .8, e.text = "999999", e.width = 147.7, e.x = 39.74, e.y = 6.67, e
    }, t.addGlod_i = function() {
        var e = new eui.BitmapLabel;
        return this.addGlod = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 30, e.scaleX = .5, e.scaleY = .5, e.text = "22.10B", e.width = 148, e.x = 156.24, e.y = 11.17, e
    }, t.addImg_i = function() {
        var e = new eui.BitmapLabel;
        return this.addImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.scaleX = .7, e.scaleY = .7, e.text = "+", e.x = 137.24, e.y = 8.17, e
    }, t.glodShop_i = function() {
        var e = new eui.Group;
        return this.glodShop = e, e.anchorOffsetX = 0, e.height = 104, e.width = 226, e.x = 148, e.y = 10, e.elementsContent = [this._Group2_i(), this._Image7_i(), this._Image8_i(), this._Group3_i(), this._Group4_i()], e
    }, t._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 11, e.y = 3, e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i()], e
    }, t._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_yellowbg_png", e.x = -6, e.y = -5, e
    }, t._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_red_png", e.x = -5, e.y = -1, e
    }, t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "tuji2_json.shanchuziT_png", e.x = 112, e.y = 19, e
    }, t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "tuji2_json.del_tower_png", e.x = 14, e.y = 10, e
    }, t._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_yellow1_png", e.x = 9, e.y = 2, e
    }, t._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_yellow_png", e.x = 6, e.y = 1, e
    }, t._Group3_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.width = 188.45, e.x = 20, e.y = 37.04, e.elementsContent = [this._Image9_i(), this.glodMoney0_i()], e
    }, t._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = .4, e.scaleY = .4, e.source = "gift_coin_icon_png", e.x = 37.68, e.y = 3.33, e
    }, t.glodMoney0_i = function() {
        var e = new eui.BitmapLabel;
        return this.glodMoney0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 46.67, e.scaleX = .5, e.scaleY = .5, e.text = "9999", e.width = 153.33, e.x = 74.69, e.y = 8.34, e
    }, t._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 25, e.width = 120, e.x = 58, e.y = 8.33, e.elementsContent = [this._Image10_i(), this.baseLevel_i()], e
    }, t._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = .62, e.scaleY = .62, e.source = "LV_png", e.x = 22.68, e.y = 0, e
    }, t.baseLevel_i = function() {
        var e = new eui.BitmapLabel;
        return this.baseLevel = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 45.33, e.scaleX = .45, e.scaleY = .45, e.text = "999", e.width = 122, e.x = 61.04, e.y = 2.72, e
    }, t.attack_i = function() {
        var e = new eui.Group;
        return this.attack = e, e.x = 51, e.y = 22, e.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i()], e
    }, t._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_attack_png", e.x = 3, e.y = 3, e
    }, t._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_attack1_png", e.x = 14, e.y = 8, e
    }, t._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_attack2_png", e.x = 20, e.y = 42, e
    }, t._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_attack3_png", e.x = 70, e.y = 46, e
    }, t.doubleGlod_i = function() {
        var e = new eui.Group;
        return this.doubleGlod = e, e.x = 381, e.y = 24, e.elementsContent = [this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i()], e
    }, t._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_gain_png", e.x = -2, e.y = 0, e
    }, t._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_gain1_png", e.x = 16, e.y = 4, e
    }, t._Image17_i = function() {
        var e = new eui.Image;
        return e.rotation = 359.85, e.scaleX = .9, e.scaleY = .9, e.source = "entrance_gain2_png", e.x = 5, e.y = 39, e
    }, t._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "entrance_gain3_png", e.x = 56, e.y = 42, e
    }, t.attTime_i = function() {
        var e = new eui.Label;
        return this.attTime = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.rotation = 355.94, e.size = 18, e.text = "99:99", e.textAlign = "center", e.textColor = 14156290, e.verticalAlign = "middle", e.width = 103.11, e.x = 38.01, e.y = 4.03, e
    }, t._Label1_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.rotation = 355.94, e.size = 18, e.text = "99:99", e.textAlign = "center", e.textColor = 16777215, e.verticalAlign = "middle", e.visible = !1, e.x = 65.61, e.y = .99, e
    }, t.doubleGoldTime_i = function() {
        var e = new eui.Label;
        return this.doubleGoldTime = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.rotation = 6.48, e.size = 18, e.text = "99:99", e.textAlign = "center", e.textColor = 14156290, e.verticalAlign = "middle", e.width = 103.17, e.x = 385.36, e.y = -5.22, e
    }, t._Label2_i = function() {
        var e = new eui.Label;
        return e.bold = !0, e.fontFamily = "Microsoft YaHei", e.rotation = 6.48, e.size = 18, e.text = "99:99", e.textAlign = "center", e.textColor = 16777215, e.verticalAlign = "middle", e.visible = !1, e.x = 412.98, e.y = -2.31, e
    }, t._Group6_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.x = -11, e.y = -8, e.elementsContent = [this.shop_i(), this.upTip_i()], e
    }, t.shop_i = function() {
        var e = new eui.Image;
        return this.shop = e, e.scaleY = .9, e.source = "entrance_fruit_png", e.x = -24, e.y = 0, e
    }, t.upTip_i = function() {
        var e = new eui.Group;
        return this.upTip = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 54.55, e.width = 87.88, e.x = 36, e.y = -50.59, e.elementsContent = [this._Image19_i(), this._Image20_i()], e
    }, t._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "tip_gain_png", e.x = -2.700000000000003, e.y = 5.5900000000001455, e
    }, t._Image20_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "keshengji_png", e.x = 11.299999999999997, e.y = 12.590000000000146, e
    }, t._Group7_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.x = 554, e.y = -8, e.elementsContent = [this.shop0_i(), this.redHot_i(), this.upTip0_i()], e
    }, t.shop0_i = function() {
        var e = new eui.Image;
        return this.shop0 = e, e.scaleY = .9, e.source = "entrance_shop_png", e.x = 0, e.y = 0, e
    }, t.redHot_i = function() {
        var e = new eui.Image;
        return this.redHot = e, e.scaleX = .5, e.scaleY = .5, e.source = "iocn_redspot_new_png", e.x = 140.68, e.y = 11.65, e
    }, t.upTip0_i = function() {
        var e = new eui.Group;
        return this.upTip0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 54.55, e.width = 87.88, e.x = 53, e.y = -50.59, e.elementsContent = [this._Image21_i(), this._Image22_i(), this._Image23_i()], e
    }, t._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "tip_gain_png", e.x = -2.700000000000003, e.y = 5.5900000000001455, e
    }, t._Image22_i = function() {
        var e = new eui.Image;
        return e.scaleX = .55, e.scaleY = .55, e.source = "keshengji_png", e.visible = !1, e.x = 11.299999999999997, e.y = 12.590000000000146, e
    }, t._Image23_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .64, e.source = "tuji3_json.lingquT_png", e.x = 16, e.y = 10.67, e
    }, t.lajitong_i = function() {
        var e = new eui.Image;
        return this.lajitong = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 98, e.source = "lajitong_png", e.visible = !1, e.width = 62, e.x = 15, e.y = 14, e
    }, t.loseGro_i = function() {
        var e = new eui.Group;
        return this.loseGro = e, e.height = 160, e.horizontalCenter = 0, e.top = 455, e.visible = !1, e.width = 680, e.x = 10, e.elementsContent = [this._Image24_i(), this._Image25_i(), this._Image26_i()], e
    }, t._Image24_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.source = "hit_common_bg1_png", e.x = 11, e.y = 23.08, e
    }, t._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "hit_common2_png", e.x = 207, e.y = 46, e
    }, t._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "hit_common1_png", e.visible = !1, e.x = 191, e.y = 46, e
    }, t.chuangguanGro_i = function() {
        var e = new eui.Group;
        return this.chuangguanGro = e, e.height = 160, e.horizontalCenter = 0, e.top = 454, e.width = 680, e.x = 10, e.elementsContent = [this.wintip_i(), this.losetip_i()], e
    }, t.wintip_i = function() {
        var e = new eui.Group;
        return this.wintip = e, e.height = 160, e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 0, e.width = 680, e.x = 0, e.y = 196, e.elementsContent = [this._Image27_i(), this._Image28_i(), this.leveltext1_i()], e
    }, t._Image27_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.source = "hit_common_bg_png", e.x = 11, e.y = 11, e
    }, t._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "hit_common_png", e.x = 220.12, e.y = 46, e
    }, t.leveltext1_i = function() {
        var e = new eui.BitmapLabel;
        return this.leveltext1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 51.14, e.scaleX = 1.4, e.scaleY = 1.4, e.text = "99999", e.width = 201.33, e.x = 372.16, e.y = 48, e
    }, t.losetip_i = function() {
        var e = new eui.Group;
        return this.losetip = e, e.height = 160, e.horizontalCenter = 0, e.scaleX = 1, e.scaleY = 1, e.verticalCenter = 0, e.width = 680, e.x = 0, e.y = 196, e.elementsContent = [this._Image29_i(), this._Group8_i()], e
    }, t._Image29_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.source = "hit_common_bg1_png", e.x = 11, e.y = 23.08, e
    }, t._Group8_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 157.57, e.horizontalCenter = .5, e.width = 678.79, e.y = 1.61, e.elementsContent = [this.leveltext0_i(), this.stoplevel0_i(), this.gobacklevel0_i(), this._BitmapLabel1_i()], e
    }, t.leveltext0_i = function() {
        var e = new eui.BitmapLabel;
        return this.leveltext0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 51.14, e.scaleX = 1.4, e.scaleY = 1.4, e.text = "999", e.width = 201.33, e.x = 469.56, e.y = 46.389999999999986, e
    }, t.stoplevel0_i = function() {
        var e = new eui.Image;
        return this.stoplevel0 = e, e.scaleX = 1, e.scaleY = 1, e.source = "hit_common2_png", e.visible = !1, e.x = 183.56, e.y = 44.39000000000004, e
    }, t.gobacklevel0_i = function() {
        var e = new eui.Image;
        return this.gobacklevel0 = e, e.scaleX = 1, e.scaleY = 1, e.source = "hit_common1_png", e.x = 149.37, e.y = 44.39000000000004, e
    }, t._BitmapLabel1_i = function() {
        var e = new eui.BitmapLabel;
        return e.height = 20, e.width = 20, e.x = 647, e.y = 34, e
    }, t.bossGro_i = function() {
        var e = new eui.Group;
        return this.bossGro = e, e.height = 200, e.horizontalCenter = 0, e.top = 435, e.width = 200, e
    }, t.winGro_i = function() {
        var e = new eui.Group;
        return this.winGro = e, e.height = 200, e.horizontalCenter = 0, e.top = 434, e.width = 200, e
    }, t.loseAnima_i = function() {
        var e = new eui.Group;
        return this.loseAnima = e, e.height = 200, e.horizontalCenter = 0, e.top = 448, e.visible = !1, e.width = 200, e.elementsContent = [this.shibaiImg1_i(), this.shibaiImg2_i()], e
    }, t.shibaiImg1_i = function() {
        var e = new eui.Image;
        return this.shibaiImg1 = e, e.anchorOffsetX = 375, e.anchorOffsetY = 309, e.source = "tuji2_json.bg_png", e.x = 102.28, e.y = -23.65, e
    }, t.shibaiImg2_i = function() {
        var e = new eui.Image;
        return this.shibaiImg2 = e, e.anchorOffsetX = 375, e.anchorOffsetY = 309, e.source = "tuji2_json.bg_png", e.x = 102.28, e.y = -23.65, e
    }, t.worldBtn_i = function() {
        var e = new eui.Group;
        return this.worldBtn = e, e.left = 0, e.top = 162, e.width = 111, e.elementsContent = [this._Image30_i(), this._Image31_i(), this._BitmapLabel2_i()], e
    }, t._Image30_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -2.5, e.scale9Grid = new egret.Rectangle(10, 20, 60, 33), e.source = "btn_unlock_png", e.y = 0, e
    }, t._Image31_i = function() {
        var e = new eui.Image;
        return e.scaleX = .65, e.scaleY = .66, e.source = "btn_world_png", e.x = 22, e.y = 6.01, e
    }, t._BitmapLabel2_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.text = "WORLD", e.scaleX = .6, e.scaleY = .6, e.height = 20, e.width = 100, e.x = 25, e.y = 80, e
    }, t._Group9_i = function() {
        var e = new eui.Group;
        return e.left = 0, e.top = -16, e.elementsContent = [this._Image32_i(), this.paihangbtn_i()], e
    }, t._Image32_i = function() {
        var e = new eui.Image;
        return e.rotation = .62, e.scaleX = .8, e.scaleY = .8, e.source = "bg_btn_world_png", e.x = 1, e.y = 47.67, e
    }, t.paihangbtn_i = function() {
        var e = new eui.Group;
        return this.paihangbtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 85, e.width = 144, e.x = 4, e.y = 52, e.elementsContent = [this._Image33_i(), this._Image34_i(), this._BitmapLabel3_i()], e
    }, t._Image33_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .7, e.source = "icon_cup_png", e.x = -1.67, e.y = 8.009999999999998, e
    }, t._Image34_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 17.35, e.source = "txt_rank_png", e.width = 49.73, e.x = 38, e.y = 61.97, e
    }, t._BitmapLabel3_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.text = "排行", e.visible = !1, e.x = 40, e.y = 54.99, e
    }, t._Group10_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 94.67, e.horizontalCenter = 19, e.top = 68, e.width = 399.99, e.elementsContent = [this._Image35_i(), this._Image36_i(), this._Image37_i(), this._Image38_i(), this._Image39_i(), this._Image40_i(), this._Image41_i(), this.lastLvGro_i(), this.curLvGro_i(), this.futLvGro_i()], e
    }, t._Image35_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(188, 28, 2, 5), e.scaleX = .9, e.scaleY = .85, e.source = "icon_lv_sel16_png", e.x = 14.67, e.y = 14.65, e
    }, t._Image36_i = function() {
        var e = new eui.Image;
        return e.source = "arrow_gray_png", e.x = 230.01, e.y = 25.66, e
    }, t._Image37_i = function() {
        var e = new eui.Image;
        return e.source = "arrow_gray_png", e.x = 263.32, e.y = 25.66, e
    }, t._Image38_i = function() {
        var e = new eui.Image;
        return e.source = "arrow_gray_png", e.x = 298, e.y = 25.66, e
    }, t._Image39_i = function() {
        var e = new eui.Image;
        return e.source = "arrow_white_png", e.x = 96.67, e.y = 25.65, e
    }, t._Image40_i = function() {
        var e = new eui.Image;
        return e.source = "arrow_white_png", e.x = 62.68, e.y = 24.98, e
    }, t._Image41_i = function() {
        var e = new eui.Image;
        return e.source = "arrow_white_png", e.x = 134.66, e.y = 24.97, e
    }, t.lastLvGro_i = function() {
        var e = new eui.Group;
        return this.lastLvGro = e, e.scaleX = 1, e.scaleY = 1, e.x = -15.98, e.y = 6.99, e.elementsContent = [this.lastbossLvImg_i(), this.lastLvImg_i(), this.lastLvtext_i()], e
    }, t.lastbossLvImg_i = function() {
        var e = new eui.Image;
        return this.lastbossLvImg = e, e.height = 110.85, e.scaleX = .85, e.scaleY = .85, e.source = "icon_lv_unsel3_png", e.width = 120.08, e.x = -9.66, e.y = -11.01, e
    }, t.lastLvImg_i = function() {
        var e = new eui.Image;
        return this.lastLvImg = e, e.scaleX = .9, e.scaleY = .9, e.source = "icon_lv_unsel1_png", e.x = 13.02, e.y = 6, e
    }, t.lastLvtext_i = function() {
        var e = new eui.BitmapLabel;
        return this.lastLvtext = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 54, e.scaleX = .5, e.scaleY = .5, e.text = "999", e.width = 126, e.x = 14.34, e.y = 22.67, e
    }, t.curLvGro_i = function() {
        var e = new eui.Group;
        return this.curLvGro = e, e.scaleX = 1, e.scaleY = 1, e.x = 150.67, e.y = 5.64, e.elementsContent = [this.curbossLvImg_i(), this.curLvImg_i(), this.curLvtext_i(), this.box0_i()], e
    }, t.curbossLvImg_i = function() {
        var e = new eui.Image;
        return this.curbossLvImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 110.85, e.scaleX = .85, e.scaleY = .85, e.source = "icon_lv_sel3_png", e.width = 120.08, e.x = -5.31, e.y = -9.98, e
    }, t.curLvImg_i = function() {
        var e = new eui.Image;
        return this.curLvImg = e, e.scaleX = .85, e.scaleY = .85, e.source = "icon_lv_sel1_png", e.x = 9.02, e.y = 2.33, e
    }, t.curLvtext_i = function() {
        var e = new eui.BitmapLabel;
        return this.curLvtext = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 49, e.scaleX = .7, e.scaleY = .7, e.text = "999", e.width = 119, e.x = 8, e.y = 20.01, e
    }, t.box0_i = function() {
        var e = new eui.Image;
        return this.box0 = e, e.anchorOffsetX = 29.05, e.anchorOffsetY = 25.24, e.height = 51.59, e.scaleX = .9, e.scaleY = .9, e.source = "box5_png", e.width = 56.73, e.x = 47.28, e.y = 35.09, e
    }, t.futLvGro_i = function() {
        var e = new eui.Group;
        return this.futLvGro = e, e.scaleX = 1, e.scaleY = 1, e.x = 323.3, e.y = 6.97, e.elementsContent = [this.futbossLvImg_i(), this.futLvImg_i(), this.futLvtext_i(), this.box2_i()], e
    }, t.futbossLvImg_i = function() {
        var e = new eui.Image;
        return this.futbossLvImg = e, e.height = 110.85, e.scaleX = .85, e.scaleY = .85, e.source = "icon_lv_unsel3_png", e.width = 120.08, e.x = -11.67, e.y = -10.68, e
    }, t.futLvImg_i = function() {
        var e = new eui.Image;
        return this.futLvImg = e, e.scaleX = .9, e.scaleY = .9, e.source = "icon_lv_unsel1_png", e.x = 11.01, e.y = 6, e
    }, t.futLvtext_i = function() {
        var e = new eui.BitmapLabel;
        return this.futLvtext = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baikuanzi_fnt", e.height = 45, e.scaleX = .5, e.scaleY = .5, e.text = "999", e.width = 118, e.x = 14.34, e.y = 22.34, e
    }, t.box2_i = function() {
        var e = new eui.Image;
        return this.box2 = e, e.anchorOffsetX = 23.7, e.anchorOffsetY = 20.6, e.height = 42.09, e.scaleX = .9, e.scaleY = .9, e.source = "box5_png", e.width = 46.29, e.x = 42.47, e.y = 34.45, e
    }, t._Group11_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 15, e.height = 30, e.left = 6, e.top = 119, e.width = 150, e.elementsContent = [this._Image42_i(), this.zhanli_i()], e
    }, t._Image42_i = function() {
        var e = new eui.Image;
        return e.source = "gs17123_png", e.x = -4.02, e.y = -3.67, e
    }, t.zhanli_i = function() {
        var e = new eui.BitmapLabel;
        return this.zhanli = e, e.anchorOffsetX = 0, e.anchorOffsetY = 22.67, e.font = "huangkuanzi_fnt", e.height = 46.29, e.scaleX = .5, e.scaleY = .5, e.text = "1234567", e.width = 253.52, e.x = 33.3, e.y = 15.32, e
    }, t.setBtn_i = function() {
        var e = new eui.Group;
        return this.setBtn = e, e.right = 4, e.top = 157, e.elementsContent = [this._Image43_i(), this._BitmapLabel4_i()], e
    }, t._Image43_i = function() {
        var e = new eui.Image;
        return e.height = 89, e.scale9Grid = new egret.Rectangle(10, 17, 60, 42), e.source = "btn_more_png", e.width = 85, e.x = 0, e.y = 0, e
    }, t._BitmapLabel4_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.text = "MORE", e.scaleX = .6, e.scaleY = .6, e.height = 20, e.width = 90, e.x = 22, e.y = 82, e
    }, t.taskBtn_i = function() {
        var e = new eui.Group;
        return this.taskBtn = e, e.right = 4, e.top = 274, e.elementsContent = [this._Image44_i(), this._BitmapLabel5_i(), this.taskDot_i()], e
    }, t._Image44_i = function() {
        var e = new eui.Image;
        return e.height = 86, e.scale9Grid = new egret.Rectangle(10, 17, 60, 42), e.source = "tuji1_json.btn_task_png", e.width = 82, e.x = 0, e.y = 0, e
    }, t._BitmapLabel5_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.text = "TASK", e.scaleX = .6, e.scaleY = .6, e.height = 20, e.width = 70, e.x = 22, e.y = 81, e
    }, t.taskDot_i = function() {
        var e = new eui.Image;
        return this.taskDot = e, e.scaleX = .6, e.scaleY = .6, e.source = "tuji1_json.iocn_redspot_new_png", e.x = 59, e.y = 0, e
    }, t.vipBtn_i = function() {
        var e = new eui.Group;
        return this.vipBtn = e, e.right = 5, e.top = 391, e.elementsContent = [this._Image45_i(), this._Group12_i()], e
    }, t._Image45_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "vip_png", e.x = 0, e.y = 0, e
    }, t._Group12_i = function() {
        var e = new eui.Group;
        return e.height = 40, e.touchChildren = !1, e.touchEnabled = !1, e.touchThrough = !0, e.width = 40, e.x = 19, e.y = 26, e.elementsContent = [this.vipText_i()], e
    }, t.vipText_i = function() {
        var e = new eui.BitmapLabel;
        return this.vipText = e, e.anchorOffsetX = 0, e.font = "baikuanzi_fnt", e.scaleX = .6, e.scaleY = .6, e.text = "1", e.textAlign = "center", e.width = 37.77, e.x = 9.33, e.y = 8, e
    }, t.giftbtn_i = function() {
        var e = new eui.Group;
        return this.giftbtn = e, e.left = 7, e.top = 500, e.elementsContent = [this._Image46_i(), this._BitmapLabel6_i(), this._Image47_i(), this.giftTime_i()], e
    }, t._Image46_i = function() {
        var e = new eui.Image;
        return e.source = "icon_loot1_png", e.x = 0, e.y = 0, e
    }, t._BitmapLabel6_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 26.89, e.scaleX = .85, e.scaleY = .85, e.text = "豪华礼包", e.width = 104.11, e.x = -1.35, e.y = 61.05, e
    }, t._Image47_i = function() {
        var e = new eui.Image;
        return e.scaleX = .3499999999999999, e.scaleY = .4000000000000001, e.source = "huidiT_png", e.x = 4.52, e.y = 84.07, e
    }, t.giftTime_i = function() {
        var e = new eui.BitmapLabel;
        return this.giftTime = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32.63, e.scaleX = .5, e.scaleY = .5, e.text = "99：99", e.textAlign = "center", e.width = 169.34, e.x = .67, e.y = 87, e
    }, t.lixianGro_i = function() {
        var e = new eui.Group;
        return this.lixianGro = e, e.right = 4, e.top = 485, e.elementsContent = [this._Image48_i(), this._Image49_i(), this._Image50_i(), this.lixianTime_i(), this._BitmapLabel7_i()], e
    }, t._Image48_i = function() {
        var e = new eui.Image;
        return e.source = "icon_loot_png", e.x = 14.67, e.y = 2.68, e
    }, t._Image49_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "icon_lock_png", e.x = 53.69, e.y = 47.35, e
    }, t._Image50_i = function() {
        var e = new eui.Image;
        return e.scaleX = .35, e.scaleY = .4000000000000001, e.source = "huidiT_png", e.x = 10, e.y = 91.33, e
    }, t.lixianTime_i = function() {
        var e = new eui.BitmapLabel;
        return this.lixianTime = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 29.3, e.scaleX = .5, e.scaleY = .5, e.text = "99：99", e.textAlign = "center", e.width = 129.56, e.x = 18.01, e.y = 95.32, e
    }, t._BitmapLabel7_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 29.34, e.scaleX = .75, e.scaleY = .75, e.text = "额外收益", e.width = 103.34, e.x = 10, e.y = 71, e
    }, t._Group13_i = function() {
        var e = new eui.Group;
        return e.left = 0, e.top = 155, e.visible = !1, e.elementsContent = [this._Image51_i(), this._Image52_i()], e
    }, t._Image51_i = function() {
        var e = new eui.Image;
        return e.source = "activity_png", e.x = 0, e.y = 0, e
    }, t._Image52_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "iocn_redspot_new_png", e.x = 59, e.y = -3, e
    }, t.extraGiftBtn_i = function() {
        var e = new eui.Group;
        return this.extraGiftBtn = e, e.left = 7, e.top = 391, e.elementsContent = [this._Image53_i(), this._BitmapLabel8_i(), this._Image54_i(), this.extraTime_i()], e
    }, t._Image53_i = function() {
        var e = new eui.Image;
        return e.source = "icon_offline_png", e.x = 8, e.y = 0, e
    }, t._BitmapLabel8_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 23.33, e.scaleX = .85, e.scaleY = .85, e.text = "新手礼包", e.width = 104.67, e.x = 2, e.y = 60.99, e
    }, t._Image54_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -3, e.scaleX = .4, e.scaleY = .4000000000000001, e.source = "huidiT_png", e.y = 82.63, e
    }, t.extraTime_i = function() {
        var e = new eui.BitmapLabel;
        return this.extraTime = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 32.63, e.scaleX = .5, e.scaleY = .5, e.text = "99：99", e.textAlign = "center", e.width = 189.09, e.x = 0, e.y = 87.33, e
    }, t.jiesuoBtn_i = function() {
        var e = new eui.Group;
        return this.jiesuoBtn = e, e.left = 0, e.top = 272, e.elementsContent = [this._Image55_i(), this.yugaoImg_i(), this._BitmapLabel9_i(), this.yugaoLevel_i()], e
    }, t._Image55_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -2.5, e.scale9Grid = new egret.Rectangle(26, 29, 26, 24), e.source = "tuji1_json.btn_unlock_png", e.y = 3, e
    }, t.yugaoImg_i = function() {
        var e = new eui.Image;
        return this.yugaoImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 60, e.width = 60, e.x = 23.03, e.y = 11.01, e
    }, t._BitmapLabel9_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 24.57, e.scaleX = .9, e.scaleY = .9, e.text = "LV：       ", e.width = 116, e.x = 2, e.y = 88, e
    }, t.yugaoLevel_i = function() {
        var e = new eui.BitmapLabel;
        return this.yugaoLevel = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 36.67, e.scaleX = .9, e.scaleY = .9, e.text = "123", e.width = 71.48, e.x = 24.32, e.y = 82.68, e
    }, t._Group14_i = function() {
        var e = new eui.Group;
        return e.left = 0, e.verticalCenter = 118.5, e.visible = !1, e.elementsContent = [this._Image56_i(), this._Image57_i()], e
    }, t._Image56_i = function() {
        var e = new eui.Image;
        return e.source = "entrance_hero_btn_png", e.x = 0, e.y = 0, e
    }, t._Image57_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "iocn_redspot_new_png", e.x = 52, e.y = 1, e
    }, t._Group18_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0, e.height = 107, e.left = 0, e.verticalCenter = 218.5, e.visible = !1, e.elementsContent = [this._Image58_i(), this._Group15_i(), this._Group16_i(), this._Group17_i()], e
    }, t._Image58_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8, e.scaleY = .8, e.source = "hero_skill_di_png", e.x = 0, e.y = .98, e
    }, t._Group15_i = function() {
        var e = new eui.Group;
        return e.height = 22, e.width = 70, e.x = 4.35, e.y = 82.69, e.elementsContent = [this._Image59_i(), this._Image60_i(), this._BitmapLabel10_i()], e
    }, t._Image59_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(29, 11, 1, 1), e.scaleX = 1, e.scaleY = 1, e.source = "hero_skill_pro_di_png", e.width = 65, e.x = 2.999999999999999, e.y = -.7100000000000364, e
    }, t._Image60_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.scale9Grid = new egret.Rectangle(11, 10, 1, 1), e.scaleX = 1, e.scaleY = .9, e.source = "hero_skill_pro1_png", e.width = 8, e.x = 4.749999999999998, e.y = 1.2899999999999636, e
    }, t._BitmapLabel10_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "baimiaobian_fnt", e.height = 29.34, e.scaleX = .5, e.scaleY = .5, e.text = "100%", e.width = 84.01, e.x = 16.68, e.y = 2.66, e
    }, t._Group16_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.width = 60, e.x = 10.99, e.y = 11.31, e.elementsContent = [this._Image61_i()], e
    }, t._Image61_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .75, e.scaleY = .77, e.source = "heroskill_a1_png", e.verticalCenter = 0, e
    }, t._Group17_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.width = 30, e.x = 5.66, e.y = 7.34, e.elementsContent = [this._Image62_i(), this._Image63_i()], e
    }, t._Image62_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6, e.scaleY = .6, e.source = "hero_small_head_di_png", e.x = 0, e.y = -1.3799999999999955, e
    }, t._Image63_i = function() {
        var e = new eui.Image;
        return e.scaleX = .22, e.scaleY = .22, e.source = "hero_head1_png", e.x = 2.5, e.y = 1.34, e
    }, t._Group19_i = function() {
        var e = new eui.Group;
        return e.right = 0, e.verticalCenter = 119, e.visible = !1, e.elementsContent = [this._Image64_i(), this._Image65_i(), this._Image66_i(), this._Image67_i()], e
    }, t._Image64_i = function() {
        var e = new eui.Image;
        return e.source = "entrance_daily_collect_2_png", e.x = 0, e.y = 0, e
    }, t._Image65_i = function() {
        var e = new eui.Image;
        return e.source = "entrance_daily_collect_1_png", e.x = 2.67, e.y = 1.33, e
    }, t._Image66_i = function() {
        var e = new eui.Image;
        return e.scaleX = .7, e.scaleY = .7, e.source = "image_daily_collect_bag_png", e.x = 16, e.y = 8, e
    }, t._Image67_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .5, e.source = "iocn_redspot_new_png", e.x = 64, e.y = -2, e
    }, t.autoMerge_i = function() {
        var e = new eui.Group;
        return this.autoMerge = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 98, e.right = 3, e.verticalCenter = 128, e.width = 92, e.elementsContent = [this._Image68_i(), this._Image69_i(), this._Image70_i(), this.mergeTime_i(), this._Label3_i(), this._Label4_i(), this._Image71_i(), this._BitmapLabel11_i()], e
    }, t._Image68_i = function() {
        var e = new eui.Image;
        return e.scaleX = .35, e.scaleY = .4, e.source = "huidiT_png", e.x = 17.46, e.y = 85.69, e
    }, t._Image69_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 102.22, e.scaleX = .9, e.scaleY = .9, e.source = "btn_auto_combine1_png", e.width = 99.96, e.x = 8.54, e.y = -2, e
    }, t._Image70_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 27.51, e.scaleX = .8, e.scaleY = .8, e.source = "icon_ad_png", e.width = 24.5, e.x = 72.89, e.y = 44.37, e
    }, t.mergeTime_i = function() {
        var e = new eui.BitmapLabel;
        return this.mergeTime = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "lu1_fnt", e.height = 29.3, e.scaleX = .5, e.scaleY = .5, e.text = "99：99", e.textAlign = "center", e.width = 165.56, e.x = 14.86, e.y = 90.32, e
    }, t._Label3_i = function() {
        var e = new eui.Label;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.height = 18.7, e.horizontalCenter = 8.5, e.rotation = 0, e.size = 18, e.text = "99:99", e.textAlign = "center", e.textColor = 4707842, e.verticalAlign = "middle", e.verticalCenter = 50.5, e.visible = !1, e.width = 79.02, e
    }, t._Label4_i = function() {
        var e = new eui.Label;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.height = 18.7, e.horizontalCenter = -5.5, e.rotation = 0, e.size = 18, e.text = "99:99", e.textAlign = "center", e.textColor = 1824770, e.verticalAlign = "middle", e.verticalCenter = 45.5, e.visible = !1, e.width = 83.02, e
    }, t._Image71_i = function() {
        var e = new eui.Image;
        return e.scaleX = .9, e.scaleY = .9, e.source = "gift_auto_compose_icon_png", e.visible = !1, e.x = 9.04, e.y = .5, e
    }, t._BitmapLabel11_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 20, e.scaleX = .6, e.scaleY = .6, e.text = "AUTO", e.width = 80, e.x = 34, e.y = 62.69, e
    }, t.miniGameBtn_i = function() {
        var e = new eui.Group;
        return this.miniGameBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 98, e.left = 0, e.verticalCenter = 128, e.width = 92, e.elementsContent = [this._Image72_i(), this._BitmapLabel12_i(), this.lockImg_i()], e
    }, t._Image72_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 102.22, e.scaleX = .9, e.scaleY = .9, e.source = "tuji3_json.zhiwu25_png", e.width = 99.96, e.x = 1.54, e.y = 0, e
    }, t._BitmapLabel12_i = function() {
        var e = new eui.BitmapLabel;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.font = "zhiwuziti_fnt", e.height = 50, e.scaleX = .85, e.scaleY = .85, e.textAlign = "center", e.text = "SLOT\nMACHINE", e.width = 120, e.x = 5, e.y = 80, e
    }, t.lockImg_i = function() {
        var e = new eui.Image;
        return this.lockImg = e, e.scaleX = .7, e.scaleY = .7, e.source = "tuji4_json.lock_png", e.x = 30, e.y = 37, e
    }, t._Group20_i = function() {
        var e = new eui.Group;
        return e.height = 170, e.horizontalCenter = 0, e.verticalCenter = 555, e.visible = !1, e.width = 720, e.elementsContent = [this._Image73_i(), this._Image74_i()], e
    }, t._Image73_i = function() {
        var e = new eui.Image;
        return e.bottom = 0, e.left = 0, e.right = 0, e.source = "123ww_png", e.top = 0, e
    }, t._Image74_i = function() {
        var e = new eui.Image;
        return e.source = "shanchulajitong_png", e.x = 150, e.y = 22, e
    }, t.goldFlyTarget0_i = function() {
        var e = new eui.Image;
        return this.goldFlyTarget0 = e, e.anchorOffsetX = 41.67, e.anchorOffsetY = 40, e.bottom = 132, e.horizontalCenter = -68.5, e.scaleX = .4, e.scaleY = .4, e.source = "gift_coin_icon_png", e.visible = !1, e
    }, t._Group21_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 41.34, e.horizontalCenter = 20.5, e.top = 155, e.visible = !1, e.width = 393.33, e.elementsContent = [this.loadbg1_i(), this.loadImg1_i(), this.box1_i()], e
    }, t.loadbg1_i = function() {
        var e = new eui.Image;
        return this.loadbg1 = e, e.scale9Grid = new egret.Rectangle(32, 21, 1, 1), e.scaleX = 1, e.scaleY = .8000000000000002, e.source = "bar_bg2_png", e.width = 162, e.x = 108.69, e.y = 7.85, e
    }, t.loadImg1_i = function() {
        var e = new eui.Image;
        return this.loadImg1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.scale9Grid = new egret.Rectangle(34, 12, 1, 2), e.scaleX = .66, e.scaleY = .9, e.source = "bar_bg1_png", e.width = 237.73, e.x = 110.34, e.y = 10.22, e
    }, t.box1_i = function() {
        var e = new eui.Image;
        return this.box1 = e, e.anchorOffsetX = 25.09, e.anchorOffsetY = 22.57, e.height = 48.25, e.scaleX = .9, e.scaleY = .9, e.source = "box5_png", e.width = 53.07, e.x = 290.22, e.y = 19.68, e
    }, t.iconTuiGuang_i = function() {
        var e = new DaoChu1View;
        return this.iconTuiGuang = e, e.anchorOffsetX = 64.71, e.anchorOffsetY = 63, e.height = 126.58, e.right = 5, e.top = 138, e.visible = !1, e.width = 130.03, e
    }, t.tuiguangBtn1_i = function() {
        var e = new eui.Group;
        return this.tuiguangBtn1 = e, e.height = 75, e.left = -22, e.verticalCenter = 7.5, e.visible = !1, e.width = 75, e.elementsContent = [this._Image75_i(), this.taskDot0_i(), this._Group22_i()], e
    }, t._Image75_i = function() {
        var e = new eui.Image;
        return e.height = 75, e.source = "daochu4_png", e.width = 75, e.x = 0, e.y = 0, e
    }, t.taskDot0_i = function() {
        var e = new eui.Image;
        return this.taskDot0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 40, e.scaleX = .6, e.scaleY = .6, e.source = "img_main_tishi_png", e.width = 40, e.x = 51.99, e.y = -.68, e
    }, t._Group22_i = function() {
        var e = new eui.Group;
        return e.height = 30, e.width = 25, e.x = 32.67, e.y = 21.01, e.elementsContent = [this._Image76_i(), this._Image77_i()], e
    }, t._Image76_i = function() {
        var e = new eui.Image;
        return e.source = "daochu2_png", e.visible = !1, e.x = 3, e.y = 0, e
    }, t._Image77_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.source = "tuji9_json.daochu3_png", e.width = 21.52, e.x = 3, e.y = 0, e
    }, t._Group23_i = function() {
        var e = new eui.Group;
        return e.height = 60, e.left = 11, e.verticalCenter = 229, e.visible = !1, e.width = 60, e.elementsContent = [this._Image78_i(), this._Image79_i()], e
    }, t._Image78_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0, e.scaleX = .7, e.scaleY = .7, e.source = "luping_png", e.verticalCenter = 0, e
    }, t._Image79_i = function() {
        var e = new eui.Image;
        return e.source = "luzhizhong_png", e.x = -7, e.y = -11, e
    }, t.boxBtn_i = function() {
        var e = new eui.Group;
        return this.boxBtn = e, e.anchorOffsetX = 40.03, e.anchorOffsetY = 40.04, e.height = 82.58, e.right = 6, e.top = 166, e.visible = !1, e.width = 82.58, e.elementsContent = [this._Image80_i(), this.redhit_i(), this._Image81_i()], e
    }, t._Image80_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 71.97, e.source = "loot_box_1_png", e.width = 71.97, e.x = -.96, e.y = 2.42, e
    }, t.redhit_i = function() {
        var e = new eui.Image;
        return this.redhit = e, e.scaleX = .5, e.scaleY = .5, e.source = "tuji1_json.iocn_redspot_new_png", e.x = 52.91, e.y = 3.51, e
    }, t._Image81_i = function() {
        var e = new eui.Image;
        return e.scaleX = .5, e.scaleY = .6, e.source = "mianfeibaoxiang_png", e.y = 62.71, e
    }, t._Group24_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0, e.bottom = -36, e.height = 200, e.horizontalCenter = -1, e.touchEnabled = !1, e.width = 721.64, e.elementsContent = [this.fingerTip1_i(), this.fingerTip2_i()], e
    }, t.fingerTip1_i = function() {
        var e = new eui.Image;
        return this.fingerTip1 = e, e.scaleX = 1, e.scaleY = 1, e.source = "tuji9_json.guideHand1-1_png", e.touchEnabled = !1, e.x = 179, e.y = 82, e
    }, t.fingerTip2_i = function() {
        var e = new eui.Image;
        return this.fingerTip2 = e, e.scaleX = 1, e.scaleY = 1, e.source = "tuji9_json.guideHand1-1_png", e.touchEnabled = !1, e.x = 507.18, e.y = 82.91000000000008, e
    }, i
}(eui.Skin);