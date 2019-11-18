(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{442:function(e,s,a){"use strict";a.r(s);var i=a(0),t=Object(i.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"scheduling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scheduling"}},[e._v("#")]),e._v(" Scheduling")]),e._v(" "),a("p",[e._v("Time matters, particularly in distributed applications. Most sophisticated systems need to schedule things, and MassTransit has excellent scheduling support. From broker-based scheduling to leveraging Quartz.NET as a standalone message scheduler, MassTransit provides a consistent scheduling API.")]),e._v(" "),a("p",[e._v("MassTransit uses Quartz.NET to schedule messages, making it possible to build complex time-based workflows. Several extensions are available to message consumers, as well as middleware for using message scheduling.")]),e._v(" "),a("p",[e._v("In a production system, Quartz.NET is run as a service with multiple instances active for high availability and load balancing. Quartz can use any SQL database to coordinate scheduled jobs across servers, making it suitable for this type of use.")]),e._v(" "),a("p",[e._v("There is a standalone MassTransit service, MassTransit.QuartzService, which can be installed and used on servers for this purpose. It is configured via the "),a("code",[e._v("App.config")]),e._v(" file and is a good example of how to build a standalone MassTransit service.")]),e._v(" "),a("blockquote",[a("p",[e._v("This service will likely move to be hosted in the MassTransit.Host, making the service logic reusable across any message transport.")])]),e._v(" "),a("p",[e._v("Message scheduling is described in details in the following articles:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"scheduling-api"}},[e._v("Scheduling API")])]),e._v(" "),a("li",[a("a",{attrs:{href:"in-memory"}},[e._v("In-memory scheduling")])]),e._v(" "),a("li",[a("a",{attrs:{href:"azure-sb-scheduler"}},[e._v("Azure Service Bus")])]),e._v(" "),a("li",[a("a",{attrs:{href:"rabbitmq-delayed"}},[e._v("RabbitMQ Delayed Exchange")])]),e._v(" "),a("li",[a("a",{attrs:{href:"redeliver"}},[e._v("Redelivering messages")])])])])}),[],!1,null,null,null);s.default=t.exports}}]);