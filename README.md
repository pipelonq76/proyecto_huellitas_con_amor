<!DOCTYPE html>
<html lang="en">

    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">   
   
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
     <!-- Site Metas -->
    <title>Huellitas con amor</title>  
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Site Icons -->
    <link rel="shortcut icon" href="/resources/images/adoptar.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="/resources/images/adoptar.png">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/resources/css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="/resources/css/style.css">
    <!-- ALL VERSION CSS -->
    <link rel="stylesheet" href="/resources/css/versions.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="/resources/css/responsive.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="/resources/css/custom.css">

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body class="barber_version">

    <!-- LOADR -->
    <div id="preloader">
        <div class="cube-wrapper">
		  <div class="cube-folding">
			<span class="leaf1"></span>
			<span class="leaf2"></span>
			<span class="leaf3"></span>
			<span class="leaf4"></span>
		  </div>
		  <div class="mus">
			<img src="/resources/images/adoptar.png" height="75" alt="" />
		  </div>
		  <span class="loading" data-name="Loading">Cargando....</span>
		</div>
    </div><!-- end loader -->
    <!-- END LOADER -->


	<div class="top-add alert alert-light alert-dismissible">
		<button type="button" class="close" data-dismiss="alert">&times;</button>
		<strong>¡Bienvenido!</strong> a Huellitas con Amor
	</div>
	<!-- Start header -->
	<header class="top-navbar">
		<nav class="navbar navbar-expand-lg navbar-light bg-dark">
			<div class="container">
				<a class="navbar-brand" href="/">
					<img src="/resources/images/adoptar.png" style="border-radius: 50%" height="50" alt="" />
				</a>
				<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
					<span class="icon-bar top-bar"></span>
					<span class="icon-bar middle-bar"></span>
					<span class="icon-bar bottom-bar"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbars-rs-food">
					<ul class="navbar-nav ml-auto">
					<li class="nav-item active"><a class="nav-link" href="/">Inicio</a></li>
						<li class="nav-item"><a class="nav-link" href="/adopta">Adopta</a></li>
						<li class="nav-item"><a class="nav-link" href="/donaciones">Donaciones</a></li>
						<li class="nav-item"><a class="nav-link" href="/sobre_nosotros">Sobre Nosotros</a></li>
						<li class="nav-item"><a class="nav-link" href="/mascotas_extraviadas">Mascotas Extraviadas</a></li>
								
						<li class="nav-item"><a class="nav-link" href="peticiones">Peticiones</a></li>
						<% } %>
						<% if (login) { %>
							<li class="nav-item"><a class="nav-link" href=""><%=nombre%></a></li>
							<li class="nav-item"><a class="nav-link" href="/logout">Cerrar sesión</a></li>
						<% } else { %>
							<li class="nav-item"><a class="nav-link" href="/login2">Iniciar Sesion</a></li>
							<li class="nav-item"><a class="nav-link" href="/registro">Registro</a></li>
						
						<% } %>

					</ul>
				</div>
			</div>
		</nav>
	</header>
	<!-- End header -->

	

	<div id="home" class="parallax">
		<div id="full-width" class="owl-carousel owl-theme home-hero">
			<div class="text-center item slider-01 display-table overlay">
				<div class="display-table-cell">
					<div class="big-tagline text-center">
						<h2><strong>¡Adopta!</strong><br>
						Dale la bienvenida a un amigo peludo a tu hogar</h2>
						<p class="lead">Añade a un nuevo integrante a tu familia</p>
						<a href="/adopta" class="btn btn-light btn-radius btn-brd grd1 effect-1 butn">¡Adopta ahora!</a>
					</div>
				</div>
			</div>
			<div class="text-center item slider-02 display-table overlay">
				<div class="display-table-cell">
					<div class="big-tagline text-center">
					<h2><strong> ¿Mascotas Extraviadas?</strong><br>
						Ingresa a nuestra sección mascotas extraviadas para publicar información de tu 	mascota</h2>
						<p class="lead">Con tu ayuda y la de los demás podemos reunir a estas mascotas con su familia.<br></p>
						<a href="/mascotas_extraviadas" class="btn btn-light btn-radius btn-brd grd1 effect-1 butn">dale click aqui</a>
					</div>
				</div>
			</div>
			<div class="text-center item slider-03 display-table overlay">
				<div class="display-table-cell">
					<div class="big-tagline text-center">
						<h2><strong>¡Ayúdanos!</strong><br>
						Con tus donaciones podemos ayudar a hacer felices a nuestros amigos peludos y darles un nuevo hogar</h2>
						<p class="lead">Gracias a tus donaciones podemos seguir dandole a nuestros amigos cuadrúpedos un nuevo hogar<br></p>
						<a href="/donaciones" class="btn btn-light btn-radius btn-brd grd1 effect-1 butn">¡Ayúdanos!</a>
					</div>
				</div>
			</div>
		</div>
	</div><!-- end section -->
	
	<!-- Page Content -->
	<div id="page-content-wrapper">			
		<div class="section wb">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-6 text-left">
						<div class="message-box">
							
							<h2 class="titulo">¡Bienvenido a Huellitas con Amor!.</h2>
							<p class="lead">Dónde le damos una mano a nuestros amigos peludos.</p>

							<p class="titulo3">Aquí en Huellitas con Amor nos sentimos honrados de darle un nuevo hogar a nuestros compañeros cuadrúpedos.</p>

							<center>
							<a href="/sobre_nosotros" data-scroll class="btn btn-light btn-radius btn-brd grd1 effect-1">Leer más</a>
							</center>
						</div><!-- end messagebox -->
					</div><!-- end col -->
					<div class="col-md-6 text-center">
						<div class="right-box">
							<img class="img-fluid" src="/resources/images/noCompresAdopta.png" alt="" />
						</div>
					</div><!-- end col -->
				</div><!-- end row -->

				

				
	

		<div class="copyrights">
			<div class="container">
				<div class="footer-distributed">
					<div class="footer-left">
						<p class="footer-company-name">All Rights Reserved. &copy; 2018 <a href="#">Huellitas con Amor</a> Design By : <a href="https://html.design/">html design</a></p>
					</div>
				</div>
			</div><!-- end container -->
		</div><!-- end copyrights -->
	</div>
    
    <a href="#" id="scroll-to-top" class="dmtop global-radius"><i class="fa fa-angle-up"></i></a>

    <!-- ALL JS FILES -->
    <script src="/resources/js/all.js"></script>
	<script src="/resources/js/responsive-tabs.js"></script>
    <!-- ALL PLUGINS -->
    <script src="/resources/js/custom.js"></script>
</body>
</html>
