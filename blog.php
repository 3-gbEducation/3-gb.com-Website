<!--
Author: W3layouts
Author URL: http://w3layouts.com
-->
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>3-GB - Blogs</title>
    <link rel="icon" href="assets/images/circle.ico" height="16px" type="x-icon" />
    <!-- google-fonts -->
    <link href="//fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <!-- //google-fonts -->
    <!-- Template CSS Style link -->
    <link rel="stylesheet" href="./assets/css/style-starter.css">
    <link rel="stylesheet" href="./assets/css/style-liberty.css">

</head>

<body>
    <!-- <script src="//m.servedby-buysellads.com/monetization.js" type="text/javascript"></script> -->
    <script>
        (function() {
            if (typeof _bsa !== 'undefined' && _bsa) {
                // format, zoneKey, segment:value, options
                _bsa.init('flexbar', 'CKYI627U', 'placement:w3layoutscom');
            }
        })();
    </script>
    <script>
        (function() {
            if (typeof _bsa !== 'undefined' && _bsa) {
                // format, zoneKey, segment:value, options
                _bsa.init('fancybar', 'CKYDL2JN', 'placement:demo');
            }
        })();
    </script>
    <script>
        (function() {
            if (typeof _bsa !== 'undefined' && _bsa) {
                // format, zoneKey, segment:value, options
                _bsa.init('stickybox', 'CKYI653J', 'placement:w3layoutscom');
            }
        })();
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src='https://www.googletagmanager.com/gtag/js?id=UA-149859901-1'></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-149859901-1');
    </script>

    <script>
        window.ga = window.ga || function() {
            (ga.q = ga.q || []).push(arguments)
        };
        ga.l = +new Date;
        ga('create', 'UA-149859901-1', 'demo.w3layouts.com');
        ga('require', 'eventTracker');
        ga('require', 'outboundLinkTracker');
        ga('require', 'urlChangeTracker');
        ga('send', 'pageview');
    </script>
    <!-- <script async src='/js/autotrack.js'></script> -->

    <meta name="robots" content="noindex">

    <body>
        <!-- <link rel="stylesheet" href="/assests/css/font-awesome.min.css"> -->
        <!-- New toolbar-->
        <style>
            * {
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            }


            #w3lDemoBar.w3l-demo-bar {
                top: 0;
                right: 0;
                bottom: 0;
                z-index: 9999;
                padding: 40px 5px;
                padding-top: 70px;
                margin-bottom: 70px;
                background: #0D1326;
                border-top-left-radius: 9px;
                border-bottom-left-radius: 9px;
            }

            #w3lDemoBar.w3l-demo-bar a {
                display: block;
                color: #e6ebff;
                text-decoration: none;
                line-height: 24px;
                opacity: .6;
                margin-bottom: 20px;
                text-align: center;
            }

            #w3lDemoBar.w3l-demo-bar span.w3l-icon {
                display: block;
            }

            #w3lDemoBar.w3l-demo-bar a:hover {
                opacity: 1;
            }

            #w3lDemoBar.w3l-demo-bar .w3l-icon svg {
                color: #e6ebff;
            }

            #w3lDemoBar.w3l-demo-bar .responsive-icons {
                margin-top: 30px;
                border-top: 1px solid #41414d;
                padding-top: 40px;
            }

            #w3lDemoBar.w3l-demo-bar .demo-btns {
                border-top: 1px solid #41414d;
                padding-top: 30px;
            }

            #w3lDemoBar.w3l-demo-bar .responsive-icons a span.fa {
                font-size: 26px;
            }

            #w3lDemoBar.w3l-demo-bar .no-margin-bottom {
                margin-bottom: 0;
            }

            .toggle-right-sidebar span {
                background: #0D1326;
                width: 50px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                color: #e6ebff;
                border-radius: 50px;
                font-size: 26px;
                cursor: pointer;
                opacity: .5;
            }

            .pull-right {
                float: right;
                position: fixed;
                right: 0px;
                top: 70px;
                width: 90px;
                z-index: 99999;
                text-align: center;
            }

            /* ============================================================
RIGHT SIDEBAR SECTION
============================================================ */

            #right-sidebar {
                width: 90px;
                position: fixed;
                height: 100%;
                z-index: 1000;
                right: 0px;
                top: 0;
                margin-top: 60px;
                -webkit-transition: all .5s ease-in-out;
                -moz-transition: all .5s ease-in-out;
                -o-transition: all .5s ease-in-out;
                transition: all .5s ease-in-out;
                overflow-y: auto;
            }


            /* ============================================================
RIGHT SIDEBAR TOGGLE SECTION
============================================================ */

            .hide-right-bar-notifications {
                margin-right: -300px !important;
                -webkit-transition: all .3s ease-in-out;
                -moz-transition: all .3s ease-in-out;
                -o-transition: all .3s ease-in-out;
                transition: all .3s ease-in-out;
            }



            @media (max-width: 992px) {
                #w3lDemoBar.w3l-demo-bar a.desktop-mode {
                    display: none;

                }
            }

            @media (max-width: 767px) {
                #w3lDemoBar.w3l-demo-bar a.tablet-mode {
                    display: none;

                }
            }

            @media (max-width: 568px) {
                #w3lDemoBar.w3l-demo-bar a.mobile-mode {
                    display: none;
                }

                #w3lDemoBar.w3l-demo-bar .responsive-icons {
                    margin-top: 0px;
                    border-top: none;
                    padding-top: 0px;
                }

                #right-sidebar,
                .pull-right {
                    width: 90px;
                }

                #w3lDemoBar.w3l-demo-bar .no-margin-bottom-mobile {
                    margin-bottom: 0;
                }
            }
        </style>

        <!-- pradeepa -->
        <?php include('header.php') ?>
        <!-- //pradeepa -->
        <!-- inner banner -->
        <div class="inner-banner">
            <section class="w3l-breadcrumb">
                <div class="container">
                    <h4 class="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">Blog Posts</h4>
                    <ul class="breadcrumbs-custom-path">
                        <li><a href="index.php">Home</a></li>
                        <li class="active"><span class="fa fa-chevron-right mx-2" aria-hidden="true"></span>Blog Page</li>
                    </ul>
                </div>
            </section>
        </div>
        <!-- //inner banner -->
        <div style="margin: 8px auto; display: block; text-align:center;">

            <!---728x90--->


        </div>
        <!-- blog page -->
        <section class="w3l-blog">
            <div class="text-element-9 py-5">
                <div class="container py-md-5 py-4">
                    <div class="row grid-text-9">
                        <div class="col-lg-8">
                            <div href="" class="blog-article-post">
                                <div class="blog-post d-flex flex-wrap align-content-between">
                                    <a href="https://shivangi-160997.medium.com/artificial-intelligence-ai-990b4dda2f2">
                                        <img src="https://miro.medium.com/max/1050/1*0yBxBAlFo2niLaDwMqiu2Q.jpeg" class="img-fluid" alt="blog-post-image" />
                                    </a>
                                    <div class="post-content">
                                        <ul class="blog-author-date mb-sm-4 mb-3 d-flex justify-content-between align-items-end">
                                            <li class="author"><a href="https://shivangi-160997.medium.com/"><i class="fa fa-user mr-1" aria-hidden="true"></i>By Shivangi Garg</a></li>
                                            <li><i class="fa fa-clock-o mr-1" aria-hidden="true"></i>May 27, 2021</li>
                                        </ul>
                                        <h4 class="text-head-text-9"><a href="blog-single.php">Artificial Intelligence
                                            </a> </h4>
                                        <p class="mt-3">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div href="blog-single.php" class="blog-article-post">
                                <div class="blog-post d-flex flex-wrap align-content-between">
                                    <a href="blog-single.php">
                                        <img src="https://miro.medium.com/max/1050/1*vOc_hckyamKWpCe-TzmioQ.jpeg" class="img-fluid" alt="blog-post-image" />
                                    </a>
                                    <div class="post-content">
                                        <ul class="blog-author-date mb-sm-4 mb-3 d-flex justify-content-between align-items-end">
                                            <li class="author"><a href="https://shivangi-160997.medium.com/"><i class="fa fa-user mr-1" aria-hidden="true"></i>By Shivangi Garg </a></li>
                                            <li><i class="fa fa-clock-o mr-1" aria-hidden="true"></i>May 26, 2021</li>
                                        </ul>
                                        <h4 class="text-head-text-9"><a href="blog-single.php">2 Minutes with AI and The Future of Mankind!</a></h4>
                                        <p class="mt-3">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div href="blog-single.php" class="blog-article-post">
                                <div class="blog-post d-flex flex-wrap align-content-between">
                                    <a href="blog-single.php">
                                        <img src="assets/images/bg2.jpg" class="img-fluid" alt="blog-post-image" />
                                    </a>
                                    <div class="post-content">
                                        <ul class="blog-author-date mb-sm-4 mb-3 d-flex justify-content-between align-items-end">
                                            <li class="author"><a href="https://rainer-hahnekamp.medium.com/"><i class="fa fa-user mr-1" aria-hidden="true"></i>By Rainer Hahnekamp</a></li>
                                            <li><i class="fa fa-clock-o mr-1" aria-hidden="true"></i>Dec 15, 2020</li>
                                        </ul>
                                        <h4 class="text-head-text-9"><a href="blog-single.php">The main pillars of learning programming</a></h4>
                                        <p class="mt-3">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- pagination -->
                            <div class="pagination-style">
                                <ul>
                                    <li> <a href="#none" class="not-allowed" disabled="">
                                            <span class="fa fa-angle-double-left" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                    <li><a class="active" href="#page">1</a></li>
                                    <li>
                                        <a href="#page">2</a>
                                    </li>
                                    <li>
                                        <a href="#page">3</a>
                                    </li>
                                    <li>
                                        <a href="#page"><span class="fa fa-angle-double-right" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- //pagination -->
                        </div>
                        <div class="col-lg-4 left-text-9 mt-lg-0 mt-5 pl-lg-4">
                            <div class="blog-search">
                                <form action="#" method="GET" class="d-flex search-form">
                                    <input type="search" class="form-control" placeholder="Search..." name="search" required="required">
                                    <button type="submit" class="btn search-btn"><span class="fa fa-search"></span></button>
                                </form>
                            </div>

                            <div class="categories left-aside mt-5">
                                <h6 class="heading-small-text-9">Categories</h6>
                                <ul>
                                    <li>
                                        <a href="blog-single.php" class="">
                                            Arts & Gallery (1) </a>
                                    </li>
                                    <li>
                                        <a href="blog-single.php" class="">
                                            Web Designs (2) </a>
                                    </li>
                                    <li>
                                        <a href="blog-single.php" class="">
                                            English (1)</a>
                                    </li>
                                    <li>
                                        <a href="https://w3layouts.com/" class=""> W3Layouts Websites (1)</a>
                                    </li>
                                    <li>
                                        <a href="blog-single.php" class="">
                                            Marketing (2)</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="left-top-9 left-aside mt-5">
                                <h6 class="heading-small-text-9 mb-3">Popular Post</h6>
                                <div class="d-flex align-items-center">
                                    <img src="assets/images/blog1.jpg" alt="" class="img-fluid mr-3" />
                                    <div class="content-blog">
                                        <a href="blog-single.php" class="p-post d-block">
                                            <h6 class="text-left-inner-9">Sed ut unde omnis iste natus
                                            </h6>
                                        </a>
                                        <span class="sub-inner-text-9">May 06, 2021</span>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center mt-4">
                                    <img src="assets/images/blog2.jpg" alt="" class="img-fluid mr-3" />
                                    <div class="content-blog">
                                        <a href="blog-single.php" class="p-post d-block">
                                            <h6 class="text-left-inner-9">Wotam rem eaque ipsa quae ab
                                            </h6>
                                        </a>
                                        <span class="sub-inner-text-9">May 06, 2021</span>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center mt-4">
                                    <img src="assets/images/blog3.jpg" alt="" class="img-fluid mr-3" />
                                    <div class="content-blog">
                                        <a href="blog-single.php" class="p-post d-block">
                                            <h6 class="text-left-inner-9">Quia sit aut odit aut fugit
                                            </h6>
                                        </a>
                                        <span class="sub-inner-text-9">May 06, 2021</span>
                                    </div>
                                </div>
                            </div>

                            <div class="categories left-aside mt-5">
                                <h6 class="heading-small-text-9">Archives</h6>
                                <ul>
                                    <li>
                                        <a href="blog-single.php" class="">January 2019</a>
                                    </li>
                                    <li>
                                        <a href="blog-single.php" class="">February 2018</a>
                                    </li>
                                    <li>
                                        <a href="blog-single.php" class="">March 2018</a>
                                    </li>
                                    <li>
                                        <a href="blog-single.php" class="">April 2017</a>
                                    </li>

                                    <li>
                                        <a href="blog-single.php" class="">May 2016</a>
                                    </li>

                                </ul>
                            </div>

                            <div class="tags-block left-aside mt-5">
                                <h6 class="heading-small-text-9">Tags</h6>
                                <a href="blog-single.php" class="">Learn</a>

                                <a href="blog-single.php" class="">Skills</a>

                                <a href="blog-single.php" class="">Education</a>

                                <a href="blog-single.php" class="">Website</a>

                                <a href="blog-single.php" class="">Course</a>
                                <a href="blog-single.php" class="">Study</a>
                                <a href="blog-single.php" class="">Marketing</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- //blog page -->
        <div style="margin: 8px auto; display: block; text-align:center;">

            <!---728x90--->

        </div>
        <!-- pradeepa -->
        <?php include('footer.php') ?>
        <!-- //pradeepa -->
        <!-- Js scripts -->
        <!-- move top -->
        <button onclick="topFunction()" id="movetop" title="Go to top">
            <span class="fa fa-level-up" aria-hidden="true"></span>
        </button>
        <script>
            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function() {
                scrollFunction()
            };

            function scrollFunction() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    document.getElementById("movetop").style.display = "block";
                } else {
                    document.getElementById("movetop").style.display = "none";
                }
            }

            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        </script>
        <!-- //move top -->

        <!-- common jquery plugin -->
        <script src="assets/js/jquery-3.3.1.min.js"></script>
        <!-- //common jquery plugin -->

        <!-- theme switch js (light and dark)-->
        <script src="assets/js/theme-change.js"></script>
        <script>
            function autoType(elementClass, typingSpeed) {
                var thhis = $(elementClass);
                thhis.css({
                    "position": "relative",
                    "display": "inline-block"
                });
                thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
                thhis = thhis.find(".text-js");
                var text = thhis.text().trim().split('');
                var amntOfChars = text.length;
                var newString = "";
                thhis.text("|");
                setTimeout(function() {
                    thhis.css("opacity", 1);
                    thhis.prev().removeAttr("style");
                    thhis.text("");
                    for (var i = 0; i < amntOfChars; i++) {
                        (function(i, char) {
                            setTimeout(function() {
                                newString += char;
                                thhis.text(newString);
                            }, i * typingSpeed);
                        })(i + 1, text[i]);
                    }
                }, 1500);
            }

            $(document).ready(function() {
                // Now to start autoTyping just call the autoType function with the 
                // class of outer div
                // The second paramter is the speed between each letter is typed.   
                autoType(".type-js", 200);
            });
        </script>
        <!-- //theme switch js (light and dark)-->

        <!-- MENU-JS -->
        <script>
            $(window).on("scroll", function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 80) {
                    $("#site-header").addClass("nav-fixed");
                } else {
                    $("#site-header").removeClass("nav-fixed");
                }
            });

            //Main navigation Active Class Add Remove
            $(".navbar-toggler").on("click", function() {
                $("header").toggleClass("active");
            });
            $(document).on("ready", function() {
                if ($(window).width() > 991) {
                    $("header").removeClass("active");
                }
                $(window).on("resize", function() {
                    if ($(window).width() > 991) {
                        $("header").removeClass("active");
                    }
                });
            });
        </script>
        <!-- //MENU-JS -->

        <!-- disable body scroll which navbar is in active -->
        <script>
            $(function() {
                $('.navbar-toggler').click(function() {
                    $('body').toggleClass('noscroll');
                })
            });
        </script>
        <!-- //disable body scroll which navbar is in active -->

        <!--bootstrap-->
        <script src="assets/js/bootstrap.min.js"></script>
        <!-- //bootstrap-->
        <!-- //Js scripts -->


        <div id="v-w3layouts"></div>
        <!-- <script>
            (function(v, d, o, ai) {
                ai = d.createElement('script');
                ai.defer = true;
                ai.async = true;
                ai.src = v.location.protocol + o;
                d.head.appendChild(ai);
            })(window, document, '//a.vdo.ai/core/v-w3layouts/vdo.ai.js');
        </script> -->
    </body>

</html>