EurekaJ
=======

EurekaJ is currently hosted at [http://eurekaj.haagen.name](http://eurekaj.haagen.name). Over the next few weeks the contents will be migrated over and hosted under the Haagen-software.no domain.

Concept and idea
----------------

The idea to start EurekaJ came about in summer of 2008. Since then work on EurekaJ have gone through different phases and technologies have been added and replaced along the way. At the start, work was primarily focussed on building a Java agent that would successfully profile a running Java application, letting the user configure which parts of the running JVM they would like to gather statistics on. Shortly after, work started on the visualizing Manager application that would visualize the statistics and automatically alert when any defined thresholds where breached within the gathered statistics. 

After working on the EurekaJ as a side project for about 9 months, I came across BTrace. BTrace describes itself as "a safe, dynamic tracing tool for the Java platform. BTrace can be used to dynamically trace a running Java program". After investigating and trying BTrace out it became very clear that BTrace would be a perfect fit for the EurekaJ application, and I spent the next few months working on integrating BTrace and EurekaJ, committing a couple of new features that I needed to the BTrace project. In the process a small Proxy tool, EurekaJ Proxy, were started that would parse the BTrace Script output files from disk and pass it along to the EurekaJ Manager application. Initially the communication between EurekaJ Proxy and EurekaJ Manager was defined as a WebService interface using SOAP and Apache CXF.

From JavaServer Faces to SproutCore
-----------------------------------

Initially I had intended to write EurekaJ Manager as a JavaServer Faces application, using JBoss RichFaces and my own HTML5 JSF charting framework <a href="http://code.google.com/p/jsflot">JSFlot</a>. When writing the application I constantly felt the need for better control of what was happening on the client side. Although the applications features were coming along nicely, I didn't really like all of the state management that went on at the server side, and as most of the application was written using XHR communication via the JBoss RichFaces framework, managing that state got just that much harder. 

I came across Cappuccino during the summer of 2010, and I was intrigued at what I learned about writing Rich Internet Applications. After a few feeble attempts at writing a simple client-side application in Cappuccino I stumbled across another client side JavaScript framework that would enable building Right Internet Applications on the client side, SproutCore. Although I admired what Cappuccino had done with Objective-J in trying to tame the "wild JavaScript beast" and making JavaScript more strongly typed, I found SproutCore a better match both for what I wanted to achieve with EurekaJ, as well as with my existing skills. I also liked SproutCores rich Model layer and its built in DataStore. 

I started working with porting the all Java JSF application to a SproutCore client (EurekaJ View) plus a Java Backend (EurekaJ Manager) in November of 2010. All communication between SproutCore and EurekaJ Manager is now done via a JSON REST interface, which led to the the above mentioned SOAP framework also being ported over to JSON and REST. 

CodeHaus and Subversion -> GitHub and Git
-----------------------------------------

I initially applied to get EurekaJ accepted at the Codehaus, where it lived a short life before moving on Git and The GitHub. Sadly I work with Subversion each and every day, and getting to work with Git every once in a while when working with EurekaJ surely feels like a treat! 

The EurekaJ SourceCode can be found at the following GitHub page: <a href="https://github.com/joachimhs/EurekaJ">https://github.com/joachimhs/EurekaJ</a>.

Release Candidate 1
-------------------

I finally finished all the tickets that I had planned for the final release, and changed the version of the project up from version 0.1 - a version EurekaJ has had since its inception back in 2008, to RC1. I am very proud to be able to finally have something substantial to share with the community! Head over to the Downloads section of this page to be download EurekaJ. I am currenlty working on getting the documentation finished and ready to go before the final 1.0 release, which I am aiming to get finished by the end of August, at the very latest. 	
