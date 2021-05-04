import React from "react";

import { Switch, Route } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Hero from "./heroSection/Hero";
import PriceSection from "./pricing/PriceSection";
import About from "./aboutus/About";
import Clients from "./calltoAction/Clients";
import Footer from "./footer/Footer";

import AboutUs from "./pages/AboutUs";
import Affiliates from "./pages/Affiliates";
import Cloud_Hosting from "./pages/Cloud_Hosting";
import Contact from "./pages/Contact";
import DedicatedServer from "./pages/DedicatedServer";
import DomainChecker from "./pages/DomainChecker";
import DomainTransfer from "./pages/DomainTransfer";
import FreeHostingforSchool from "./pages/FreeHostingforSchool";
import GoogleCloudServer from "./pages/GoogleCloudServer";
import HostingforCollege from "./pages/HostingforCollege";
import ResellerHosting from "./pages/ResellerHosting";
import Network from "./pages/Network";
import Partners from "./pages/Partners";
import Blog from "./pages/Blog";
import SharedHosting from "./pages/SharedHosting";
import Tomcat from "./pages/Tomcat";
import Vps_hosting from "./pages/Vps_hosting";
import WebsiteBuilder from "./pages/WebsiteBuilder";
import WindowsVPS from "./pages/WindowsVPS";
import WordpressHosting from "./pages/WordpressHosting";
import Googlecomingsoon from "./pages/Googlecomingsoon";
import Vps_server from "./pages/Vps_server";
import Homepage from "./frontEnd/Homepage";

const RouterLinks = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Hero />
          <PriceSection />
          <About />
          <Clients />
        </Route>
        <Route path="/affiliates">
          <Affiliates />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/cloud-hosting">
          <Cloud_Hosting />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/dedicated-server">
          <DedicatedServer />
        </Route>
        <Route path="/domain-checker">
          <DomainChecker />
        </Route>
        <Route path="/domain-transfer">
          <DomainTransfer />
        </Route>
        <Route path="/free-hosting-for-school">
          <FreeHostingforSchool />
        </Route>
        <Route path="/google-cloud">
          <GoogleCloudServer />
        </Route>
        <Route path="/free-hosting-for-college">
          <HostingforCollege />
        </Route>

        <Route path="/shared-hosting">
          <SharedHosting />
        </Route>
        <Route path="/java-hosting">
          <Tomcat />
        </Route>
        <Route path="/vps-hosting">
          <Vps_hosting />
        </Route>

        <Route path="/vps-server">
          <Vps_server />
        </Route>
        <Route path="/cpanel-reseller-hosting">
        <ResellerHosting />
        </Route>
        <Route path="/wordpress-hosting">
          <WordpressHosting />
        </Route>
        <Route path="/google-coming-soon">
          <Googlecomingsoon />
        </Route>
        <Route path="/website-builder">
          <WebsiteBuilder />
        </Route>

        {/* For adding content */}
        <Route path="/homePage">
          <Homepage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default RouterLinks;
