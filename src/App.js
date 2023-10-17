import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SpacerLine from './components/spacer_line';
import Company from './components/company';
import VideoPlayer from './components/video-player';
import StdButton from './components/std-button';
import Images from './components/images';
import Blog from './components/blog';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import { useEffect } from 'react'
import TopNav from './components/TopNav';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const isScreenLarge = window.innerWidth >= 1440;
  const ImageUrl = 'https://placehold.it/350x200'
  const ImageUrlLarge = 'https://placehold.it/620x280'
  const image = "https://placehold.it/200x200";

  return (
    <div className="App">
      <TopNav />
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-12'>
            <div className='text-white text-center mt-5'>
              <h1 className='title fs-1' data-aos="fade-down" data-aos-duration="1500">Performance Digital</h1>
              <h1 className='title title_color fs-1' data-aos="fade-down" data-aos-duration="1500">completamente a Resultado.</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex justify-content-center my-3 col-12'>
            <SpacerLine height="3px" DataAos="fade-down" DataAosDuration="2000" />
          </div>
        </div>
        <div className='row my-2'>
          <div className='col-12 d-flex justify-content-center'>
            <div className='row'>
              <div className='col-4'>
                <img src="https://placehold.it/107x30" data-aos="zoom-in" data-aos-duration="2000" />
              </div>
              <div className='col-4'>
                <img src="https://placehold.it/107x30" data-aos="zoom-in" data-aos-duration="2000" />
              </div>
              <div className='col-4'>
                <img src="https://placehold.it/107x30" data-aos="zoom-in" data-aos-duration="2000" />
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='d-flex justify-content-center my-3 col-12'>
            <SpacerLine width="3px" height="250px" />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 text-white text-center fs-5' data-aos="fade-in" data-aos-duration="2000">
            <p>Empresas que escalaron sus ventas con nosotros</p>
          </div>
        </div>
        <Company />
        <div className='row mt-4 mb-5'>
          <div className='col-12 text-white text-center fs-5' data-aos="fade-in" data-aos-duration="2000">
            <p>+100 clientes: Latinoamérica.</p>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-12'>
            <div className='text-white text-center'>
              <h1 className='title fs-1' data-aos="fade-down" data-aos-duration="1500" >Somos un partner </h1>
              <h1 className='title_color fs-1' data-aos="fade-down" data-aos-duration="1500">verdadero para crecer.</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex justify-content-center my-3 col-12'>
            <SpacerLine height="3px" DataAos="fade-down" DataAosDuration="2000" />
          </div>
        </div>
        <div className='row my-3'>
          <div className='m-auto col-12 col-md-12 col-lg-6 text-white text-center'>
            <p className='fs-5 text' data-aos="fade-down" data-aos-duration="1500">Somos responsables del éxito de decenas de compañías que escalaron sus ventas en los últimos 3 años de forma agresiva y sin descanso. Hoy nuestra agenda de trabajo está completa con clientes de todo LATAM que buscan esos mismos resultados. ¿Por qué? Simplemente porque nacimos para generar resultado.</p>
          </div>
        </div>
        {/* <div className='row'>
          <div className='d-flex justify-content-center'>
            <VideoPlayer embedUrl={"https://www.youtube.com/embed/${videoId}"}
              VideoHeight={"230px"}
              VideoWidth={"400px"} />
            <div className='row'>
            </div>
          </div>
          <div className='col-12 text_video text-center'>
            <p>Matias Solina, Founder DCG</p>
          </div>
        </div> */}
        <StdButton text={"SOLICITAR PRESUPUESTO"} />
        <div className='row my-5'>
          <div className='d-flex justify-content-center my-3 col-12'>
            <SpacerLine width="3px" height="150px" />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-12'>
            <div className='text-white text-center'>
              <h1 className='title fs-1' data-aos="fade-down" data-aos-duration="1500">Nuestra oferta</h1>
              <h1 className='title_color fs-1' data-aos="fade-down" data-aos-duration="1500">es simple y sencilla.</h1>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='d-flex justify-content-center my-3 col-12'>
            <SpacerLine height="3px" DataAos="fade-down" DataAosDuration="2000" />
          </div>
        </div>
        <div className='row my-4'>
          <div className='m-auto col-11 text-white text-center'>
            <p className='fs-5 text' data-aos="fade-down" data-aos-duration="1500">Conectamos a tu empresa un equipo AAA compuesto por especialistas en Paid Ads, Data Analytics, Publicidad, Diseño y Copywriting. Nuestro equipo pondrá en marcha nuestro framework de trabajo, el mismo que venimos corriendo para todos nuestros casos de éxito. En menos de doce semanas vas a experimentar un crecimiento significativo en tu facturación junto con un aumento en la notoriedad. ¿Qué garantía tenes? Más allá de nuestra extensa cartera de casos de éxito en comercio electrónico proponemos una modalidad única en donde si no vendés no pagás, vamos variabilizados completamente.</p>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex flex-column flex-md-row  my-3 col-12'>
            <div className='row mt-5'>
              <div className='mb-3 col-12 col-md-6 col-xl-4'>
                <Testimonials />
              </div>
              <div className='mb-3 col-12 col-md-6 col-xl-4'>
                <Testimonials />
              </div>
              <div className='mb-3 col-12 col-md-6 col-xl-4'>
                <Testimonials />
              </div></div>
            {/* <div className='col-md-4 text-white text-center'>
              <VideoPlayer embedUrl={"https://www.youtube.com/embed/${videoId}"}
                VideoHeight={"120px"}
                VideoWidth={"250px"} />
              <p className='mt-1 col-12'>Fernando Farré, Infinit Lead Generation</p>
            </div>
            <div className='col-md-4 text-white text-center'>
              <VideoPlayer embedUrl={"https://www.youtube.com/embed/${videoId}"}
                VideoHeight={"120px"}
                VideoWidth={"250px"} />
              <p className='mt-1 col-12'>Fernando Farré, Infinit Lead Generation</p>
            </div>
            <div className='col-md-4 text-white text-center'>
              <VideoPlayer embedUrl={"https://www.youtube.com/embed/${videoId}"}
                VideoHeight={"120px"}
                VideoWidth={"250px"} />
              <p className='mt-1 col-12'>Fernando Farré, Infinit Lead Generation</p>
            </div> */}
          </div>
        </div>
        <div className='row my-2'>
          <div className='d-flex justify-content-center my-3 col-12'>
            <SpacerLine width="3px" height="150px" />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='text-white text-center'>
              <h1 className='title fs-1' data-aos="fade-down" data-aos-duration="1500">Casos de éxito reales</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex justify-content-center my-3 col-12'>
            <SpacerLine height="3px" DataAos="fade-down" DataAosDuration="2000" />
          </div>
        </div>
        <div className='row my-4'>
          <div className='m-auto col-12 fs-5 text-white text-center'>
            <p className='text' data-aos="fade-down" data-aos-duration="1500">Todos nuestros clientes en las primeras 12 semanas experimentan un crecimiento enorme en sus ventas. Te presentamos alguno de nuestros casos de éxito, con capturas de pantalla de sus cuentas publicitarias.
              100% Resultados reales que podemos mostrarte en una llamada.</p>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex justify-content-center my-3 col-12 col-md-6'>
            <Images ImageUrl={isScreenLarge ? ImageUrlLarge : ImageUrl} />
          </div>
          <div className='d-flex justify-content-center my-3 col-12 col-md-6'>
            <Images ImageUrl={isScreenLarge ? ImageUrlLarge : ImageUrl} />
          </div>
          <div className='d-flex justify-content-center my-3 col-12 col-md-6'>
            <Images ImageUrl={isScreenLarge ? ImageUrlLarge : ImageUrl} />
          </div>
          <div className='d-flex justify-content-center my-3 col-12 col-md-6'>
            <Images ImageUrl={isScreenLarge ? ImageUrlLarge : ImageUrl} />
          </div>
          <div className='d-flex justify-content-center my-3 col-12 col-md-6'>
            <Images ImageUrl={isScreenLarge ? ImageUrlLarge : ImageUrl} />
          </div>
          <div className='d-flex justify-content-center my-3 col-12 col-md-6'>
            <Images ImageUrl={isScreenLarge ? ImageUrlLarge : ImageUrl} />
          </div>
          <div className='d-flex justify-content-center my-3 col-12 col-md-6'>
            <Images ImageUrl={isScreenLarge ? ImageUrlLarge : ImageUrl} />
          </div>
          <div className='d-flex justify-content-center my-3 col-12 col-md-6'>
            <Images ImageUrl={isScreenLarge ? ImageUrlLarge : ImageUrl} />
          </div>
          <div className='d-flex justify-content-center my-3 col-12 col-md-6'>
            <Images ImageUrl={isScreenLarge ? ImageUrlLarge : ImageUrl} />
          </div>
          <div className='d-flex justify-content-center my-3 col-12 col-md-6'>
            <Images ImageUrl={isScreenLarge ? ImageUrlLarge : ImageUrl} />
          </div>
        </div>


        <div className='row'>
          <div className='d-flex justify-content-center my-3 col-12'>
            <SpacerLine width="3px" height="150px" />
          </div>
        </div>
        <div className='row my-4'>
          <div className='col-12'>
            <div className='text-white text-center'>
              <h1 className='title fs-1' data-aos="fade-down" data-aos-duration="1500">Consultoría gratuita</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex justify-content-center mb-3 col-12'>
            <SpacerLine height="3px" DataAos="fade-down" DataAosDuration="2000" />
          </div>
        </div>
        <div className='row my-4'>
          <div className='m-auto col-12 text-white text-center'>
            <p className='fs-5 text' data-aos="fade-down" data-aos-duration="1500">Agenda una videollamada de diagnóstico y consultoría totalmente gratuita. Nuestros especialistas realizarán un diagnóstico y te brindará una evaluación de posibles alterativas para tu plan de crecimiento!</p>
          </div>
        </div>
        {/* <div className='row'>
          <div className='col-12 d-flex justify-content-center'>
            <div class="calendly-inline-widget" data-url="https://calendly.com/ejirouweghrepha"></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          </div>
        </div> */}
        {/*<div className='row mt-5 mb-3'>
          <div className='col-12 mt-5'>
            <div className='text-white text-center'>
              <h1 className='title fs-1' data-aos="fade-down" data-aos-duration="1500">Nuestro Blog</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex justify-content-center mb-3 col-12'>
            <SpacerLine height="3px" DataAos="fade-down" DataAosDuration="2000"/>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='mb-3 col-12 col-md-6 col-xl-4'>
            <Blog Image={image} />
          </div>
          <div className='mb-3 col-12 col-md-6 col-xl-4'>
            <Blog Image={image} />
          </div>
          <div className='mb-3 col-12 col-md-6 col-xl-4'>
            <Blog Image={image} />
          </div>
        </div>
         <StdButton text={"VISITAR BLOG"} /> */}
        <Footer />

      </div>
    </div>
  );
}

export default App;
