(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{399:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"interoperability"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interoperability"}},[s._v("#")]),s._v(" Interoperability")]),s._v(" "),t("p",[s._v("In MassTransit, developers specify types for messages. MassTransit's serializers then perform the hard work of converting the types to the serializer format (such as JSON, XML, BSON, etc.) and then back again.")]),s._v(" "),t("p",[s._v("To interoperate with other languages and platforms, the message structure is important.")]),s._v(" "),t("h3",{attrs:{id:"content-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[s._v("#")]),s._v(" Content type")]),s._v(" "),t("p",[s._v("To support custom message types, MassTransit uses a transport-level header to specify the message format. MassTransit simultaneously supports the following message formats on a single transport.")]),s._v(" "),t("ul",[t("li",[s._v("json (application/vnd.masstransit+json)")]),s._v(" "),t("li",[s._v("bson (application/vnd.masstransit+bson)")]),s._v(" "),t("li",[s._v("xml  (application/vnd.masstransit+xml)")])]),s._v(" "),t("p",[s._v("If you enable encryption:")]),s._v(" "),t("ul",[t("li",[s._v("aes  (application/vnd.masstransit+aes)")]),s._v(" "),t("li",[s._v("aes  (application/vnd.masstransit.v2+aes)")])]),s._v(" "),t("p",[s._v("If you configure the binary serializer:")]),s._v(" "),t("ul",[t("li",[s._v("binary (application/vnd.masstransit+binary)")])]),s._v(" "),t("p",[s._v("Register custom types would during endpoint/bus configuration.")]),s._v(" "),t("h3",{attrs:{id:"json-bson-xml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-bson-xml"}},[s._v("#")]),s._v(" JSON/BSON/XML")]),s._v(" "),t("p",[s._v("MassTransit uses a message envelope to encapsulate the built-in message headers, as well as the message payload. The envelope properties on the wire include:")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MessageId")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CorrelationId")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConversationId")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InitiatorId")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RequestId")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SourceAddress")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DestinationAddress")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResponseAddress")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FaultAddress")]),s._v("\nDateTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExpirationTime")]),s._v("\nDateTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SentTime")]),s._v("\nIDictionary"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("object")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Headers")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("object")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Message")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MessageType")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HostInfo")]),s._v(" Host\n")])])]),t("p",[s._v("The "),t("em",[s._v("Id")]),s._v(" values should be convertible to a GUID/UUID or they will fail. All are optional, but MessageId should be present at a minimum.")]),s._v(" "),t("p",[s._v("The "),t("em",[s._v("Address")]),s._v(" values should be convertible to a URI that is a valid MassTransit endpoint address.")]),s._v(" "),t("p",[s._v("The "),t("em",[s._v("MessageType")]),s._v(" entries should be URNs, which are convertible to .NET types. MassTransit defines the format of the URN in the following structure:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("urn:message:Namespace:TypeName\n")])])]),t("p",[s._v("The "),t("em",[s._v("Host")]),s._v(" is an internal data type, but is a set of strings that define the host that produced the message.")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MachineName")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProcessName")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProcessId")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Assembly")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AssemblyVersion")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FrameworkVersion")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MassTransitVersion")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" OperatingSystemVersion\n")])])]),t("p",[s._v("Examples include:")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("urn:message:MyProject.Messages:UpdateAccount\nurn:message:MyProject.Messages.Events:AccountUpdated\nurn:message:MyProject:ChangeAccount\nurn:message:MyProject.AccountService:MyService+AccountUpdatedEvent\n")])])]),t("p",[s._v("The last one is a nested class, as indicated by the '+' symbol.")]),s._v(" "),t("h4",{attrs:{id:"example-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-message"}},[s._v("#")]),s._v(" Example message")]),s._v(" "),t("p",[s._v("This is a minimal message:")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"destinationAddress"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rabbitmq://localhost/input_queue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"headers"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"value"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Some Value"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"customerId"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"messageType"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"urn:message:MassTransit.Tests:ValueMessage"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);