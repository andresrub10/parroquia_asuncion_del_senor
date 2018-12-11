package com.bezikee;

import com.bezikee.Common.LoggerOps;
import com.bezikee.ServiceLayer.*;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Verticle;
import io.vertx.core.Vertx;
import io.vertx.core.spi.VerticleFactory;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.CorsHandler;
import io.vertx.maven.MavenVerticleFactory;

import java.util.HashSet;
import java.util.Set;

public class App
{

    public static Vertx vertx = Vertx.vertx();
    public static Router router = Router.router(vertx);

    public static void main(String [ ] args) {
       LoggerOps.debug("Starting vertx.");


        Set<String> allowedHeaders = new HashSet<>();
        allowedHeaders.add("Access-Control-Allow-Origin");
        allowedHeaders.add("origin");
        allowedHeaders.add("Content-Type");
        allowedHeaders.add("accept");
        router.route().handler(CorsHandler.create("*").allowedHeaders(allowedHeaders));


       DeploymentOptions options = new DeploymentOptions().setWorker(true);



        DonationVerticle donation= new DonationVerticle();
        vertx.deployVerticle(donation,options);

        CalendarVerticle calendar = new CalendarVerticle();
        vertx.deployVerticle(calendar,options);

        NewVerticle news = new NewVerticle();
        vertx.deployVerticle(news,options);

        ServiceVerticle service = new ServiceVerticle();
        vertx.deployVerticle(service,options);

       PaymentVerticle payment = new PaymentVerticle();
        vertx.deployVerticle(payment,options);


   }

}
