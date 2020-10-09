function openContent(element) {
    //lấy tất cả menu, xóa class menu-active đi
    var menus = document.getElementsByClassName('menu');

    for (var i = 0; i < menus.length; i++) {    //xóa class menu-active ở tất cả menu
        removeClass(menus[i], 'menu-active');
    }

    addClass(element, 'menu-active');

    // lấy tất cả content
    var contents = document.getElementsByClassName('content');

    for (var i = 0; i < contents.length; i++) {//xóa class active ở tất cả content
        removeClass(contents[i], 'active');
    }

    // hiển thị content của menu đang click
    addClass(element.nextElementSibling, 'active');
}

//function xoa class classNameStr khoi element
function removeClass(element, classNameStr) {
    element.className = element.className.replace(' ' + classNameStr, '');;
}

//function them class classNameStr vao element
function addClass(element, classNameStr) {
    element.className = element.className + ' ' + classNameStr;
}