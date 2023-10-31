import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SpacerLine from "./components/spacer_line";
import Company from "./components/company";
import VideoPlayer from "./components/video-player";
import StdButton from "./components/std-button";
import Images from "./components/images";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import { useEffect } from "react";
import TopNav from "./components/TopNav";
import { React, useRef } from "react";
import { InlineWidget } from "react-calendly";
import ReactPixel from 'react-facebook-pixel';

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    ReactPixel.init("148743401628627");
    ReactPixel.pageView();
  }, []);

  const testimonials = [
    {
      text: "El equipo de Stardust se conectó a nuestra compañía como un verdadero equipo de Marketing interno y se hizo cargo de nuestro canal online de forma exitosa.",
      customer: "Dimas Parquet",
      business: "Chicco",
    },
    {
      text: "Los resultados hablan por sí solos, un equipo de profesionales increíble.",
      customer: "Hilal Fahs",
      business: "DJI Agriculture",
    },
    {
      text: "Gracias a Stardust llegamos a nuestras metas comerciales en tiempo récord. Un verdadero equipo de marketing.",
      customer: "Ibrahim Hachem",
      business: "Pioneer DJ",
    },
  ];

  const imgData = [
    {
      id: "1",
      imgUrl: "/assets/casos/na-caso-1024x498.jpg",
      description:
        "E-commerce del segmento Moda/Fashion – Crecimiento del 1400% luego de comenzar a trabajar con nosotros.",
    },
    {
      id: "2",
      imgUrl: "/assets/casos/enfs-1024x498.jpg",
      description:
        "E-commerce del segmento Retail – Programa de 12 semanas, aumentó su facturación en x5 con respecto a su anterior agencia.",
    },
    {
      id: "3",
      imgUrl: "/assets/casos/al-1024x498.jpg",
      description:
        "E-commerce del segmento Retail/Cocina – Triplico sus ventas en solo 3 semanas de operación con nuestra agencia.",
    },
    {
      id: "4",
      imgUrl: "/assets/casos/db-1024x498.jpg",
      description:
        "E-commerce del segmento Retail- Resultados luego de 2 semanas de trabajo x4 Facturación y escalando.",
    },
    {
      id: "5",
      imgUrl: "/assets/casos/1-1024x497.jpg",
      description:
        "Mayorista de alimentos (generación de clientes potenciales): logró un aumento del 252% en las ventas fuera de su área de ventas habitual.",
    },
    {
      id: "6",
      imgUrl: "/assets/casos/2-1024x497.jpg",
      description:
        "Compañía de ventas de automóviles (generación de clientes potenciales): aumento de + 300% en clientes potenciales con respecto a la agencia anterior.",
    },
    {
      id: "7",
      imgUrl: "/assets/casos/3-1024x497.jpg",
      description:
        "Bienes raíces: la campaña de clientes potenciales no había funcionado durante meses. Logramos resultados x4.5 en comparación con su agencia anterior en dos semanas.",
    },
    {
      id: "8",
      imgUrl: "/assets/casos/4-1024x497.jpg",
      description:
        "Negocio mayorista (Generación de Leads) : Logramos en 6 meses transformar completamente la empresa.",
    },
  ];
  const agenda = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <TopNav />
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <div className="text-white text-center mt-5">
              <h1
                className="title fs-1"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Performance Digital
              </h1>
              <h1
                className="title title_color fs-1"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                completamente a Resultado.
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center my-3 col-12">
            <SpacerLine
              height="3px"
              DataAos="fade-down"
              DataAosDuration="2000"
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="d-flex justify-content-center col-12 col-lg-6 mx-auto mb-4">
            <VideoPlayer />
          </div>
        </div>
        <div
          className="row mt-4 mb-2"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="d-flex justify-content-center col-12">
            <span
              className="std_span text-white"
              onClick={() => scrollToSection(agenda)}
            >
              AGENDA TU CONSULTORIA
            </span>
          </div>
        </div>
        <div className="row mb-5 mt-4">
          <div className="d-flex justify-content-center my-3 col-12">
            <SpacerLine width="3px" height="250px" />
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 text-white text-center fs-5"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            <p>Empresas que escalaron sus ventas con nosotros</p>
          </div>
        </div>
        <Company />
        <div className="row mt-4 mb-5">
          <div
            className="col-12 text-white text-center fs-5"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            <p>+100 clientes: Latinoamérica.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="text-white text-center">
              <h1
                className="title fs-1"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Somos un partner{" "}
              </h1>
              <h1
                className="title_color fs-1"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                verdadero para crecer.
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center my-3 col-12">
            <SpacerLine
              height="3px"
              DataAos="fade-down"
              DataAosDuration="2000"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="m-auto col-12 col-md-12 col-lg-6 text-white text-center">
            <p
              className="fs-5 text"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              Somos responsables del éxito de decenas de compañías que escalaron
              sus ventas en los últimos 3 años de forma agresiva y sin descanso.
              Hoy nuestra agenda de trabajo está completa con clientes de todo
              LATAM que buscan esos mismos resultados. ¿Por qué? Simplemente
              porque nacimos para generar resultado.
            </p>
          </div>
        </div>
        <StdButton text={"SOLICITAR PRESUPUESTO"} />
        <div className="row my-5">
          <div className="d-flex justify-content-center my-3 col-12">
            <SpacerLine width="3px" height="150px" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="text-white text-center">
              <h1
                className="title fs-1"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Nuestra oferta
              </h1>
              <h1
                className="title_color fs-1"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                es simple y sencilla.
              </h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="d-flex justify-content-center my-3 col-12">
            <SpacerLine
              height="3px"
              DataAos="fade-down"
              DataAosDuration="2000"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="m-auto col-11 text-white text-center">
            <p
              className="fs-5 text"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              Conectamos a tu empresa un equipo AAA compuesto por especialistas
              en Paid Ads, Data Analytics, Publicidad, Diseño y Copywriting.
              Nuestro equipo pondrá en marcha nuestro framework de trabajo, el
              mismo que venimos corriendo para todos nuestros casos de éxito. En
              menos de doce semanas vas a experimentar un crecimiento
              significativo en tu facturación junto con un aumento en la
              notoriedad. ¿Qué garantía tenes? Más allá de nuestra extensa
              cartera de casos de éxito, proponemos una modalidad única en donde
              si no vendés no pagás, vamos variabilizados completamente.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column flex-md-row  my-3 col-12">
            <div className="row mt-5">
              {testimonials.map((item) => (
                <div className="mb-3 col-12 col-md-6 col-xl-4">
                  <Testimonials
                    text={item.text}
                    customer={item.customer}
                    business={item.business}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="d-flex justify-content-center my-3 col-12">
            <SpacerLine width="3px" height="150px" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-white text-center">
              <h1
                className="title fs-1"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Casos de éxito reales
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center my-3 col-12">
            <SpacerLine
              height="3px"
              DataAos="fade-down"
              DataAosDuration="2000"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="m-auto col-12 fs-5 text-white text-center">
            <p className="text" data-aos="fade-down" data-aos-duration="1500">
              Todos nuestros clientes en las primeras 12 semanas experimentan un
              crecimiento enorme en sus ventas. Te presentamos alguno de
              nuestros casos de éxito, con capturas de pantalla de sus cuentas
              publicitarias. 100% Resultados reales que podemos mostrarte en una
              llamada.
            </p>
          </div>
        </div>
        <div className="row d-flex d-flex justify-content-center">
          {imgData.map((item) => (
            <div className="my-3 col-12 col-md-6" key={item.id}>
              <Images ImageUrl={item.imgUrl} description={item.description} />
            </div>
          ))}
        </div>

        <div className="row">
          <div className="d-flex justify-content-center my-3 col-12">
            <SpacerLine width="3px" height="150px" />
          </div>
        </div>
        <div ref={agenda} className="row my-4">
          <div className="col-12">
            <div className="text-white text-center">
              <h1
                className="title fs-1"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Consultoría gratuita
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center mb-3 col-12">
            <SpacerLine
              height="3px"
              DataAos="fade-down"
              DataAosDuration="2000"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="m-auto col-12 text-white text-center">
            <p
              className="fs-5 text"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              Agenda una videollamada de diagnóstico y consultoría totalmente
              gratuita. Nuestros especialistas realizarán un diagnóstico y te
              brindará una evaluación de posibles alterativas para tu plan de
              crecimiento!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div>
              <InlineWidget
                url="https://calendly.com/stardustmarketing/marketing-digital-performance"
                styles={{ width: "600px" }}
                pageSettings={{ hideGdprBanner: false }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
