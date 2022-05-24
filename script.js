let mostPopularPhotos=["https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg","https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg","https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/beaches-near-nyc-cover.jpg"];
let likedPics =mostPopularPhotos [1];
let photos =[];

$(".submit").click(function() {
    let link = $(".linker").val();
    let submit = $(".submit");
    let span = mostPopularPhotos.length;
    $(".posts").append("<img src=" + link + ">");
    mostPopularPhotos.push(link);
    $(".message").text(mostPopularPhotos.length);
    $(".liked-photo").append("<img src=" + likedPics + ">");
    if (span === 3) {
        $(".message").text(" Congrats, you are a Silver Level User"  );
    }
      if(span === 5) {
            $(".message").text(" Congrats, you are a Gold Level User");
     }
        if(span >= 6) {
            $(".message").text(" Congrats, you are a Platinum Level User");
     }
    
});





















