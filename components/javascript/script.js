$(document).ready(function() {
    const list_object = [{
            img: "../../assets/img/profile.jfif",
            name: "مانی نجاتی",
            location: "اهواز, Iran",
        },
        {
            img: "../../assets/img/profile1.jfif",
            name: "Arvin Anderson",
            location: "Mebonden, Norway",
        },
        {
            img: "../../assets/img/profile2.jfif",
            name: "Indira Ramos",
            location: "Americana, Brazill",
        },
        {
            img: "../../assets/img/profile3.jfif",
            name: "Mirja Worner",
            location: "Leichllingen (Rheinland), Germany",
        },
        {
            img: "../../assets/img/profile4.jfif",
            name: "Sofia Petrson",
            location: "Klitmoller, Denmark",
        },
        {
            img: "../../assets/img/profile5.jfif",
            name: "Sofia Hansen",
            location: "Hurup Thy, Denmark",
        },
        {
            img: "../../assets/img/profile6.jfif",
            name: "Oscar Rasmussen",
            location: "Kvistgaard, Denmark",
        },
        {
            img: "../../assets/img/profile.jfif",
            name: "Gustav Rasmussen",
            location: "Gorlose, Denmark",
        },
        {
            img: "../../assets/img/profile1.jfif",
            name: "Sebastian Kristensen",
            location: "Hasiev, Denmark",
        },
        {
            img: "../../assets/img/profile2.jfif",
            name: "مانی نجاتی",
            location: "اهواز, Iran",
        },
        {
            img: "../../assets/img/profile3.jfif",
            name: "Indira Ramos",
            location: "Americana, Brazill",
        },
        {
            img: "../../assets/img/profile4.jfif",
            name: "Sofia Hansen",
            location: "Hurup Thy, Denmark",
        },
        {
            img: "../../assets/img/profile5.jfif",
            name: "Mirja Worner",
            location: "Leichllingen (Rheinland), Germany",
        },
        {
            img: "../../assets/img/profile6.jfif",
            name: "Oscar Rasmussen",
            location: "Kvistgaard, Denmark",
        },
    ];
    let $list = $(".filter__items");

    function loopIt() {
        for (var i = 0; i < list_object.length; i++) {
            $list.append(
                "<li><img src=" +
                list_object[i].img +
                ">" +
                "<h4>" +
                list_object[i].name +
                "</h4>" +
                "<p>" +
                list_object[i].location +
                "</p></li>"
            );
        }
    }
    loopIt();

    $(".search").on("keyup", function() {
        let search_item = $(this).val().toLowerCase();
        // console.log(search_item);
        $("li").each(function() {
            let list_item = $(this).text().toLowerCase();
            // console.log("search: " + search_item);
            // console.log("list: " + list_item);
            if (list_item.indexOf(search_item) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});