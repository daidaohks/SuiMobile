
$(function ($) {
    var weiPhone={
        int:function () {
            /*index*/
            weiPhone.checkPhone();
            /*contact*/
            weiPhone.checkSearch();
            weiPhone.PhoneListoperation();
            weiPhone.addUser();
            weiPhone.RecordListOperation();
            /*center*/
            weiPhone.Resetpassword();
            weiPhone.changePhone();
            weiPhone.code();
            weiPhone.Chongzhi();
        },
        /*index页面*/
        checkPhone:function (){
            $("#phoneNum").bind('input propertychange', function() {
                var phoneNum= $("#phoneNum").val();
                if (phoneNum!=""){
                    $("#clearPhone").show();
                    $("#clearPhone").click(function(){
                        $("#phoneNum").val("");
                        $("#clearPhone").hide();
                    })
                }else {
                    $("#clearPhone").hide();
                }
            })
        },
        /*contact页面*/
        checkSearch:function (){
            $(".wei-saerch-input").bind('input propertychange', function() {
                var phoneSearch= $(".saerch").val();
                if (phoneSearch!=""){
                    $(".wei-search-dele").show();
                    $(".wei-search-dele").click(function(){
                        $(".wei-saerch-input").val("");
                        $(".wei-search-dele").hide();
                    })
                }else {
                    $(".wei-search-dele").hide();
                }
            })
        },
        /*wei-add-user添加新的联系人*/
        addUser:function () {
            $(".wei-add-user").click(function () {
                $.modal({
                    title:  '添加新的联系人',
                    text: ' <div class="Modify"> <div><input type="text" placeholder="请输入姓名"></div> <div><input type="text" placeholder="请输入手机号码"></div></div>',
                    buttons: [
                        {
                            text: '取消'
                        },
                        {
                            text: '确定',
                            onClick: function() {
                                $.alert('已添加')
                            }
                        },
                    ]
                })
            })
        },
        /*点击通讯录名单时的操作*/
        PhoneListoperation:function () {
            $(".phone li").click(function () {
                $(this).click(function () {
                    var buttons = [
                        {
                            text: '拨号',
                            bold: true,
                            onClick: function() {
                                $.router.load("#page-call",true);
                            }
                        },
                        {
                            text: '充话费',
                            onClick: function() {
                                $.router.load("Center.html#pageCenter-1",true);
                            }
                        },
                        {
                            text: '编辑',
                            onClick: function() {
                                $.modal({
                                    title:  '修改当前联系人',
                                    text: ' <div class="Modify"> <div><input type="text" value="金三胖"></div> <div><input type="text" value="18012548564"></div></div>',
                                    buttons: [
                                        {
                                            text: '取消'
                                        },
                                        {
                                            text: '修改',
                                            onClick: function() {
                                                $.alert('已修改成功');
                                            }
                                        },
                                    ]
                                })
                            }
                        },
                        {
                            text: '删除',
                            color: 'danger',
                            onClick: function() {
                                $.confirm('15201532589', '确定删除该联系人吗?', function () {
                                    $(".phone li").eq(this).remove();
                                });
                            }
                        },
                        {
                            text: '取消'
                        }
                    ];
                    var groups = [buttons];
                    $.actions(groups);
                })
            })
        },
        /*点击通话记录时的操作*/
        RecordListOperation:function () {
            $(".record-list-content .list").click(function () {
                $(this).click(function () {
                    var buttons = [
                        {
                            text: '拨号',
                            bold: true,
                            onClick: function() {
                                $.router.load("#page-call",true);
                            }
                        },
                        {
                            text: '添加到通讯录',
                            onClick: function() {
                                $.modal({
                                    title:  '添加新的联系人',
                                    text: ' <div class="Modify"> <div><input type="text" value="金三胖"></div> <div><input type="text" value="18012548564"></div></div>',
                                    buttons: [
                                        {
                                            text: '取消'
                                        },
                                        {
                                            text: '确定',
                                            onClick: function() {
                                                $.alert('已添加')
                                            }
                                        },
                                    ]
                                })
                            }
                        },
                        {
                            text: '删除',
                            color: 'danger',
                            onClick: function() {
                                $.confirm('15201532589', '确定删除该联系人吗?', function () {
                                    $(".list").eq(this).remove();
                                });
                            }
                        },
                        {
                            text: '取消'
                        }
                    ];
                    var groups = [buttons];
                    $.actions(groups);
                })
            })
        },
        /*center*/
        Resetpassword:function () {
            $(".resetPassword").click(function () {
                $(".wei-center-mediaList").hide();
                $("#getCode").show();
            })
            $(".btn-next").click(function () {
                var phone=$("#phone").val();
                var phonecode=$("#phonecode").val();
                if (phone==""){
                    $.alert("手机号不能为空");
                    return false
                }
                if (phonecode==""){
                    $.alert("验证码不能为空");
                    return false
                }
                else {
                    $("#getCode").hide();
                    $("#resetpsw").show();
                    $("#phone").val("");
                    $("#phonecode").val("");
                }
            });
            $(".complete").click(function () {
                var password=$("#psw").val();
                var comfirmpassword=$("#comfirmpassword").val();
                if (password==""){
                    $.alert("新密码不能为空");
                    return false
                }
                if (comfirmpassword==""){
                    $.alert("请再次输入密码");
                    return false
                }
                else {
                    $.alert('密码修改成功', '', function () {
                        $("#resetpsw").hide();
                        $(".wei-center-mediaList").show();
                        $("#psw").val("");
                        $("#comfirmpassword").val("");
                    });
                }
            });
        },
        /*更改电话号码*/
        changePhone:function () {
            $("#phonechange").click(function () {
                $(".wei-center-mediaList").hide();
                $("#changephone").show();
            });
            $(".confirmChange").click(function () {
                var userPassword=$("#userPassword").val();
                var newPassword=$("#newPassword").val();
                var newPhone=$("#newPhone").val();
                if (userPassword==""){
                    $.alert("密码不能为空");
                    return false
                }
                if (newPassword==""){
                    $.alert("密码不能为空");
                    return false
                }
                if (newPhone==""){
                    $.alert("请输入新的手机号码");
                    return false
                }
                else {
                    $.alert('更换成功', '', function () {
                        $("#changephone").hide();
                        $(".wei-center-mediaList").show();
                        $("#userPassword").val("");
                        $("#newPassword").val("");
                        $("#newPhone").val("");
                    });
                }
            });
        },
        /*我的二维码*/
        code:function () {
            $("#codelist").click(function () {
                $(".wei-center-mediaList").hide();
                $(".imgcode").show();
            });
            $(".back").click(function () {
                $(".wei-center-mediaList").show();
                $(".imgcode").hide();
            })
        },
        /*在线充值*/
        Chongzhi:function () {
            $("#chongzhiID").click(function () {
                $.router.load("#pageCenter-2",true);
            })
            $(".t-list li").click(function () {
                $(this).click(function () {
                    $(this).addClass("active").siblings().removeClass("active");
                })
            });
            $(".wechantPay").click(function () {
                $.alert('充值成功', '', function () {
                    $.router.load("#pageCenter-1",true);
                });
            })
            $(".confirmUp").click(function () {
                var cardNum=$("#cardNum").val();
                var cardpsw=$("#cardpsw").val();
                if (cardNum==""){
                    $.alert("请输入银行卡号");
                    return false
                }
                if (cardpsw==""){
                    $.alert("请输入银行密码");
                    return false
                }
                else {
                    $.alert('充值成功', '', function () {
                        $.router.load("#pageCenter-1",true);
                        $("#cardNum").val("");
                        $("#cardpsw").val("");
                    });
                }
            });
        }
    }
    weiPhone.int();
});