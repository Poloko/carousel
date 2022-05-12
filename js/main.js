
let app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.card1Name = "Mobile Internet";
    $scope.card1Image = "images/placeholder.png";
    $scope.card1Url = "#";
    $scope.card2Name = "Home Internet";
    $scope.card2Image = "images/placeholder.png";
    $scope.card2Url = "#";
    $scope.card3Name = "Get A Device";
    $scope.card3Image = "images/placeholder.png";
    $scope.card3Url = "#";
    $scope.card4Name = "Add A Phone Line";
    $scope.card4Image = "images/placeholder.png";
    $scope.card4Url = "#";
    $scope.card5Name = "Upgrade";
    $scope.card5Image = "images/placeholder.png";
    $scope.card5Url = "#";
    $scope.btnText = "Read More";
    let theWidth = document.getElementById("slides").children[0].offsetWidth,
        totalSlides = document.getElementsByClassName('single-slide'),
        startHere = 0,
        count=0;
    $scope.navItems = function (direction){

        switch (direction){
            case "left":
                if(count < 2) {
                    startHere = startHere - theWidth - 20;
                    for (let i = 0; i < totalSlides.length; i++) {
                        if (totalSlides[i].classList.contains('active')) {
                            let preSlide = i + 1;
                            totalSlides[i].classList.remove('active');
                            totalSlides[preSlide].classList.add('active');
                            break;
                        }
                    }
                    count++;
                }
                break;
            case "right":
                if(count > -2) {
                    startHere = startHere + theWidth + 20;
                    for (let i = 0; i < totalSlides.length; i++) {
                        if (totalSlides[i].classList.contains('active')) {
                            let preSlide = i - 1;
                            totalSlides[i].classList.remove('active');
                            totalSlides[preSlide].classList.add('active');
                            break;
                        }
                    }
                    count--;
                }
                break;
        }
        gsap.to(".slides", {x: startHere + "px", duration: 1});

    }
});