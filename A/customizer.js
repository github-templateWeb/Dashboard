!function(a,e,s){"use strict";var n={"theme-primary":"rgba(90, 141, 238, 0.2)","theme-success":"rgba(57, 218, 138, 0.2)","theme-danger":"rgba(255, 91, 92, 0.2)","theme-info":"rgba(0, 207, 221, 0.2)","theme-warning":"rgba(253, 172, 65, 0.2)","theme-dark":"rgba(57, 76, 98, 0.2)"},o={"theme-default":"#FFFFFF","theme-primary":"#5A8DEE","theme-success":"#39DA8A","theme-danger":"#FF5B5C","theme-info":"#00CFDD","theme-warning":"#FDAC41","theme-dark":"#394C62"},r=s("body"),i=(s(".app-content"),s(".main-menu")),t=s(".menu-content"),d=s(".footer"),l=s(".header-navbar"),c=s(".main-header-navbar"),v=(s(".navbar-light"),s(".header-navbar-shadow")),b=s(".toggle-icon"),m=s("#collapse-sidebar-switch"),g=s("#icon-animation-switch"),u=s(".customizer");s(".brand-logo");if(s(".customizer-toggle").on("click",function(a){a.preventDefault(),s(u).toggleClass("open")}),s(".customizer-close").on("click",function(){s(u).removeClass("open")}),s(".customizer-content").length>0)new PerfectScrollbar(".customizer-content",{wheelPropagation:!1});s(e).on("click","#customizer-theme-colors .color-box",function(){var a=s(this);a.siblings().removeClass("selected"),a.addClass("selected");var e=s(this).data("color"),r=n[e],d=o[e];function l(a){a.updateLiviconEvo({strokeColor:d,solidColor:d,fillColor:d,strokeColorAlt:d})}t.find("li.active").length?(t.find("li.active a").css({color:d}),t.find("li.active a > i").css({color:d}),t.find("li.active a span.menu-item").css({color:d}),t.find("li.active").css({background:r,"border-color":d}),s("li.sidebar-group-active .menu-livicon").length&&l(s("li.sidebar-group-active .menu-livicon"))):(i.find(".nav-item.active a").css({background:r,color:d}),i.find(".nav-item.active a .menu-title").css({color:d}),s(".nav-item.active .menu-livicon").length&&l(s(".nav-item.active .menu-livicon")))}),s(".layout-name").on("click",function(){var a=s(this).data("layout");r.removeClass("dark-layout semi-dark-layout").addClass(a),""===a&&(i.removeClass("menu-dark").addClass("menu-light"),l.removeClass("navbar-dark").addClass("navbar-light"),c.css({"background-color":"inherit"})),r.hasClass("dark-layout")&&(i.removeClass("menu-light").addClass("menu-dark"),l.removeClass("navbar-light").addClass("navbar-dark"),c.css({"background-color":"inherit"})),r.hasClass("semi-dark-layout")&&(i.removeClass("menu-light").addClass("menu-dark"),l.removeClass("navbar-dark").addClass("navbar-light"),c.css({"background-color":"inherit"}))});var C=r.data("layout");if(s(".layout-name[data-layout='"+C+"']").prop("checked",!0),g.on("click",function(){s(this).is(":checked")?s("#main-menu-navigation .menu-livicon").updateLiviconEvo({animated:!0}):s("#main-menu-navigation .menu-livicon").updateLiviconEvo({animated:!1})}),m.on("click",function(){s(r).hasClass("menu-expanded")?(r.removeClass("menu-expanded").addClass("menu-collapsed"),i.removeClass("expanded"),i.find(".sidebar-group-active").removeClass("open").addClass("menu-collapsed-open"),b.removeClass("bx bx-disc").addClass("bx bx-circle")):(r.removeClass("menu-collapsed").addClass("menu-expanded"),i.find(".sidebar-group-active").addClass("open"),b.removeClass("bx bx-circle").addClass("bx bx-disc"))}),b.on("click",function(){m.prop("checked",!m.prop("checked"))}),r.hasClass("menu-collapsed")?m.prop("checked",!0):m.prop("checked",!1),s(r).hasClass("horizontal-layout")&&(s("#customizer-navbar-colors .color-box.bg-white").removeClass("selected").hide(),s("#customizer-navbar-colors .color-box.bg-primary").addClass("selected"),s("#customizer-theme-colors").hide(),s(".navbar-type .hidden-ele").hide()),s(r).hasClass("navbar-static")&&s("#navbar-static").attr("checked","true"),s(r).hasClass("boxicon-layout")&&s("#menu-icon-animation").hide(),s("#customizer-navbar-colors .color-box").on("click",function(){var e=s(this);e.siblings().removeClass("selected"),e.addClass("selected");var n=e.data("navbar-color");s(r).hasClass("vertical-layout")?s(a).scrollTop()>20&&(n?s(".vertical-layout").find(l).removeClass("bg-primary bg-success bg-danger bg-info bg-warning bg-dark navbar-light").addClass(n+" navbar-dark"):s(".vertical-layout.navbar-sticky").find(l).addClass("navbar-light").removeClass("navbar-dark").removeClass("bg-primary bg-success bg-danger bg-info bg-warning bg-white bg-dark navbar-dark"),r.hasClass("dark-layout")&&l.addClass("navbar-dark")):n&&s(".horizontal-layout").find(".navbar-with-menu").removeClass("bg-primary bg-success bg-danger bg-info bg-warning bg-dark").addClass(n)}),s(a).scroll(function(){var a=s("#customizer-navbar-colors .color-box.selected").data("navbar-color");s(this).scrollTop()<20?s(".vertical-layout.navbar-sticky").find(c).removeClass("bg-primary bg-success bg-danger bg-info bg-warning bg-white bg-dark navbar-dark"):a&&s(".vertical-layout.navbar-sticky").find(c).removeClass("bg-primary bg-success bg-danger bg-info bg-warning bg-white bg-dark navbar-dark").addClass(a+" navbar-dark")}),s(r).hasClass("horizontal-layout")){l=s(".header-navbar.navbar-with-menu");var h=s(".header-navbar.navbar-horizontal");s("#navbar-static").on("click",function(){v.addClass("d-none"),l.removeClass("d-none floating-nav fixed-top navbar-fixed").addClass("navbar-static-top"),r.removeClass("navbar-hidden navbar-floating navbar-sticky").addClass("navbar-static"),h.removeClass("d-none floating-nav fixed-top navbar-fixed").addClass("navbar-sticky")}),s("#navbar-sticky").on("click",function(){v.addClass("d-none"),l.removeClass("d-none floating-nav navbar-static-top").addClass("fixed-top"),r.removeClass("navbar-static navbar-floating navbar-hidden").addClass("navbar-sticky")})}else s("#navbar-hidden").on("click",function(){l.addClass("d-none"),v.addClass("d-none"),r.removeClass("navbar-static navbar-floating navbar-sticky").addClass("navbar-hidden")}),s("#navbar-static").on("click",function(){v.addClass("d-none"),l.removeClass("bg-primary bg-success bg-danger bg-info bg-warning bg-white bg-dark navbar-dark").removeClass("d-none floating-nav fixed-top").addClass("navbar-static-top"),r.removeClass("navbar-hidden navbar-floating navbar-sticky").addClass("navbar-static")}),s("#navbar-sticky").on("click",function(){v.addClass("d-none"),l.removeClass("d-none floating-nav navbar-static-top").addClass("fixed-top"),r.removeClass("navbar-static navbar-floating navbar-hidden").addClass("navbar-sticky")});s("#footer-hidden").on("click",function(){d.addClass("d-none"),r.removeClass("footer-static fixed-footer").addClass("footer-hidden")}),s("#footer-static").on("click",function(){r.removeClass("fixed-footer"),d.removeClass("d-none").addClass("footer-static"),r.removeClass("footer-hidden fixed-footer").addClass("footer-static")}),s("#footer-sticky").on("click",function(){r.removeClass("footer-static fixed-hidden").addClass("fixed-footer"),d.removeClass("d-none footer-static")}),s("#card-shadow-switch").on("click",function(){r.toggleClass("no-card-shadow")}),s("#hide-scroll-top-switch").on("click",function(){var a=s(".scroll-top");s(this).prop("checked")?a.addClass("d-none"):a.removeClass("d-none")})}(window,document,jQuery);
