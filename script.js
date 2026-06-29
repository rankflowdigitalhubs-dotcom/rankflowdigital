*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#08111f;
    color:#fff;
}

.container{
    width:90%;
    max-width:1200px;
    margin:auto;
}

header{
    position:fixed;
    width:100%;
    top:0;
    left:0;
    background:#0d1526;
    padding:20px 0;
    z-index:1000;
}

header .container{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    font-size:28px;
    font-weight:700;
    color:#4da3ff;
}

nav a{
    color:white;
    text-decoration:none;
    margin-left:30px;
    transition:.3s;
}

nav a:hover{
    color:#4da3ff;
}

.hero{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:120px 20px;
    background:linear-gradient(135deg,#08111f,#0f2344);
}

.hero-content{
    max-width:850px;
}

.hero h1{
    font-size:58px;
    margin-bottom:20px;
    line-height:1.2;
}

.hero p{
    font-size:20px;
    color:#c7d2e4;
    margin-bottom:40px;
    line-height:1.8;
}

.btn{
    display:inline-block;
    padding:15px 40px;
    background:#4da3ff;
    color:#fff;
    text-decoration:none;
    border-radius:50px;
    font-weight:600;
    transition:.3s;
}

.btn:hover{
    background:white;
    color:#08111f;
}
