<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <nav class="navbar">
        <div class="nav-content">
            <div onclick="handleclick" class="logo"><a href="#">MHPS</a></div>
            <ul class="nav-menu">
                <div class="icon-menu close-mobile-btn">
                    <i class="fa fa-times"></i>
                </div>
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#marketing">Marketing</a></li>
                <li><a href="#">Contact Us</a></li>
                <li class="nav-btn"><a href="#">Sign Up</a></li>
            </ul>
            <div class="icon-menu mobile-btn">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </nav>

    <div class="banner">
        <div class="circle">
            <span>THE</span>
            <h1>DIGITAL</h1>
            <h2>AGENCY</h2>
            <i></i>
        </div>
        <ul class="banner-items">
            <li><a href="#">Website Design</a></li>
            <li><a href="#">Original Marketing</a></li>
            <li><a href="#">Brand Strategy</a></li>
        </ul>
    </div>
    <div id="marketing" class="content">
        <h1 class="title">What is Marketing, Really?</h1>
        <p>
            Dictionary.com defines marketing as, "the action or business of promoting and selling products or
            services, including market research and advertising."
        </p>
        <p>
            If you work in a marketing role like I do, it's probably difficult for you to define marketing even
            though you see and use it every day -- the term marketing is a bit all-encompassing and variable for
            a straightforward definition.
        </p>
        <p>This definition feels unhelpful.<br />
            The selling part, for instance, overlaps a little too snuggly with a "what is sales" definition, and
            the word advertising makes me think of Mad Men brainstorming sessions.
        </p>
        <p>But upon digging deeper, I began seeing that actually, marketing does overlap heavily with
            advertising and sales. Marketing is present in all stages of the business, beginning to end.
        </p>
        <h2>Download Now: State of Marketing Report [2020 Version]</h2>
        <p>
            At first, I wondered why marketing was a necessary component during product development, or a sales
            pitch, or retail distribution. But it makes sense when you think about it -- marketers have the
            firmest finger on the pulse of your consumer persona
        </p>
        <p>
            The purpose of marketing is to research and analyze your consumers all the time, conduct focus
            groups, send out surveys, study online shopping habits, and ask one underlying question: "Where,
            when, and how does our consumer want to communicate with our business?"
        </p>
        <p>
            Modern marketing began in the 1950s when people started to use more than just print media to endorse
            a product. As TV -- and soon, the internet -- entered households, marketers could conduct entire
            campaigns across multiple platforms. And as you might expect, over the last 70 years, marketers have
            become increasingly important to fine-tuning how a business sells a product to consumers to optimize
            success.
        </p>
        <p>
            In fact, the fundamental purpose of marketing is to attract consumers to your brand through
            messaging. Ideally, that messaging will helpful and educational to your target audience so you can
            convert consumers into leads.<br />
            Today, there are literally dozens of places one can carry out a marketing campaign -- where does one
            do it in the 21st century?
        </p>
        <h2>Types of Marketing</h2>
        <p>
            Where your marketing campaigns live depends entirely on where your customers spend their time. It's
            up to you to conduct market research that determines which types of marketing -- and which mix of
            tools within each type -- is best for building your brand. Here are several types of marketing that
            are relevant today, some of which have stood the test of time:
        </p>
        <ul id="services">
            <li>
                <strong>Internet marketing:</strong> Inspired by an Excedrin product campaign that took place online,
                the very
                idea of having a presence on the internet for business reasons is a type of marketing in and of
                itself.
            </li>
            <li>
                <strong>Search engine optimization:</strong> Abbreviated "SEO," this is the process of optimizing
                content on a
                website so that it appears in search engine results. It's used by marketers to attract people
                who perform searches that imply they're interested in learning about a particular industry.
            </li>
            <li>
                <strong>Blog marketing:</strong> Blogs are no longer exclusive to the individual writer. Brands now
                publish blogs
                to write about their industry and nurture the interest of potential customers who browse the
                internet for information.
            </li>
            <li>
                <strong>Social media marketing: </strong>Businesses can use Facebook, Instagram, Twitter, LinkedIn, and
                similar
                social networks to create impressions on their audience over time.
            </li>
            <li>
                <strong>Print marketing:</strong> As newspapers and magazines get better at understanding who subscribes
                to their
                print material, businesses continue to sponsor articles, photography, and similar content in the
                publications their customers are reading.
            </li>
            <li>
                <strong>Search engine marketing:</strong> This type of marketing is a bit different than SEO, which is
                described
                above. Businesses can now pay a search engine to place links on pages of its index that get high
                exposure to their audience. (It's a concept called "pay-per-click" -- I'll show you an example
                of this in the next section).
            </li>
            <li>
                <strong>Video marketing:</strong> While there were once just commercials, marketers now put money into
                creating
                and publishing all kinds of videos that entertain and educate their core customers.
            </li>
        </ul>
        
    </div>

    
</body>

</html>

*{
    padding:0;
    margin:0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
}

.navbar{
    position: fixed;
    background-color:#222429;
    width:100%;
    margin:auto;
    padding: 10px 15px;
    height: 90px;
    z-index: 10;
    transition: all 0.3s ease;
}

.navbar.sticky{
    padding: 0px 15px;
    height: 70px;
    background-color:#383d49;
}

.nav-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 35px;
    width: 100%;
    /* line-height: 40px; */
    height: 65px;
    font-size: 22px;
    font-weight: 400;
    transition: all 0.3s ease;
}

.nav-content li a{
    color:#eee;
    margin-left:30px;
    font-size: 18px;
    padding: 10px 22px;
    border-radius: 5px;
}

.nav-content li a:hover{
    padding:8px 20px;
    border:2px solid #54c0ff;
    color: #54c0ff;    
    transition: color 0.3s ease;
}

.logo a{
    color:#eee;
    font-size: 35px;
    font-weight: 700;
}

.logo a:hover{
    color: #54c0ff;
    transition: color 0.3s ease;
}
.icon-menu{
    font-size: 30px;
    color:#eee;
    cursor: pointer;
    display:none;
}

.icon-menu:hover{
    color:#0e7bb9
}

.close-mobile-btn{
    width: 30px;
    height: 30px;
    position: absolute;
    top:25px;
    right:45px;
}



.nav-menu{
    display:inline-flex;
}

.nav-btn a{
    background-color: #0e7bb9;
}

.nav-btn a:hover{
    background-color:transparent;
}

.banner{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image:linear-gradient(0deg, #0b65b9 20%, #9227f7 80%);
    height:100vh;
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
}


.circle{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 150px;
    width: 500px;
    height: 500px;
    background-color: #eee;
    border-radius: 50%;
    color:#0e7bb9;
}

.circle h1{
    padding: 30px;
    font-size: 80px;
    letter-spacing: 2px;
}

.circle h2{
    letter-spacing: 30px;
    font-size: 40px;
    font-weight: 300;
    margin-left: 35px;
}

.circle i{
    margin-top:50px;
    width: 50px;
    border: 3px solid #0e7bb9;
    border-radius: 5px;
}

.banner-items{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 200px;
}

.banner-items li a{
    color: #ddd;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.banner-items li a:hover{
    color: #fff;
}

.content{
    padding: 100px 0 50px 0;
    width: 60%;
    margin: auto;
    line-height: 25px;
}

.title{
    font-size: 30px;
    font-weight: 700;
}

.content p{
    padding-top:25px;
    text-align: justify;
}

.content h2 {
    padding-top: 40px;
    font-size: 25px;
}

.content ul li{
    padding-top: 30px;
    list-style-type: disc;
}

@media screen and (max-width: 950px){

    body.disabled-scroll{
        overflow: hidden;
    }

    .nav-menu{
        display:block;
        position: fixed;
        top:0;
        left:-100%;
        width:100%;
        background-color: #222429;
        padding: 40px 0;
        height: 100vh;
        max-width: 80%;
        text-align:center;
        transition: all 0.3s ease;
    }

    .nav-menu.active{
        left: 0%;
    }

    .icon-menu{
        display:block;
    }

    .icon-menu.hidden{
        display: none;
    }

    .nav-menu li{
        margin-top: 10px;
    }

    .nav-menu li:nth-child(2){
        margin-top:50px;
    }

    .nav-menu li a{
        margin-left: 0;
        padding:20px;
        display:block;
    }

    .nav-menu li a:hover{
        padding:18px;
    }

    .circle{
        border-radius: 10%;
        width: 80%;        
    }

    .circle h1{
        width: 100%;
        padding: 10px;
        background-color: #272e42;
        color:#3794fd;
        font-size:50px;
        text-align: center;
        margin: 30px 0;
    }

    .circle h2{
        font-size: 100%;
    }

    .circle i{
        margin-top:20px;
    }

    .banner-items{
        margin-top:10px;
        display:block;
        text-align: center;
    }

    .banner-items li{
        padding: 10px;
    }

    .content{
        width:70%;
        padding-top: 30px;
    }

    .title{
        font-size:22px;
    }

    .content h2 {
        font-size:18px;
    }

    .content p{
        font-size: 15px;
    }
}