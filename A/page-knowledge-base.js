$(document).ready(function(){$(function(){"use strict";$("#searchbar").on("keyup",function(){var e=$(this).val().toLowerCase();""!=e?($(".kb-search-content-info .kb-search-content").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(e)>-1)}),0==$(".kb-search-content-info .kb-search-content:visible").length?$(".kb-search-content-info .no-result").removeClass("no-items"):$(".kb-search-content-info .no-result").hasClass("no-items")||$(".kb-search-content-info .no-result").addClass("no-items")):($(".kb-search-content-info .kb-search-content").show(),$(".kb-search-content-info .no-results").hasClass("no-items")&&$(".kb-search-content-info .no-results").removeClass("no-items"))})}),$("button").hasClass("kb-menu")&&($(".kb-menu").on("click",function(){$(".kb-sidebar").toggleClass("show"),$(".kb-overlay").toggleClass("show")}),$(".kb-close-icon, .kb-overlay").on("click",function(){$(".kb-sidebar").removeClass("show"),$(".kb-overlay").removeClass("show")}))});
