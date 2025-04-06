import React from 'react';
import CardsGrid from './CardsGrid';

function Products() {
  return (
    <div className="w-screen h-[200vh] p-20 bg-white flex justify-center items-center">
      <div className="w-4/5 h-full bg-[#F3F7FE] rounded-3xl flex flex-col">
        <div className="w-full flex flex-col p-6 gap-3">
          <div className="text-[#28DC86] font-normal text-xl">Dive into the world of marketing</div>
          <div className="text-7xl font-bold">CATALOG HUB</div>
        </div>

        <div className="w-full grid grid-cols-4 gap-5 p-10">
          {services.map((item, index) => (
            <CardsGrid key={index} Product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;


const services = [
    {
      title: "Automated Certificate Lifecycle",
      slug: "certificate",
      description: "Tool that makes a follow-up of your current SSL certificate, gives you status, and renews it.",
      src: "/home/servicesCards/img12.svg",
      color: "#FEBEB6",
      details: [
        {
          heading: "What Does This Product Do?",
          content: "The Automated Certificate Lifecycle Management Tool ensures that your digital infrastructure remains secure by automatically tracking, managing, and renewing your SSL/TLS certificates. This tool continuously monitors expiration dates and certificate statuses, sending alerts before expiration and initiating automatic renewal processes. It helps prevent costly outages, downtime, and security breaches caused by expired certificates. The system provides a central dashboard for visibility into all certificates across environments and integrates seamlessly with common CAs and platforms. It automates inventory collection, policy enforcement, and deployment to multiple systems, reducing manual errors and compliance risks."
        },
        {
          heading: "Why Choose Us?",
          content: "Our solution saves your team hours of manual effort by automating certificate discovery, renewal, and deployment. By minimizing human intervention, it significantly lowers the risk of missed renewals and security lapses. You'll enjoy continuous compliance and real-time visibility into your certificate landscape. We support modern protocols and enterprise-grade encryption standards to ensure maximum security and compatibility. Our robust alert system, audit logs, and role-based access help your team remain informed and compliant at all times. With seamless integration into CI/CD pipelines and cloud services, our tool grows with your business."
        },
        {
          heading: "Flexible Solutions Tailored to You",
          content: "Whether you’re a small startup with a few domains or a large enterprise with thousands of certificates, we offer deployment models that suit your organization’s infrastructure. Use our cloud-hosted service for rapid deployment and minimal maintenance, or opt for a self-hosted instance for full control and data sovereignty. We also offer APIs and CLI tools for easy integration into your DevSecOps workflows. Our onboarding team provides assistance with migration, and we support various validation methods including DV, OV, and EV certificates."
        }
      ]
    },
    {
      title: "Security Assets",
      slug: "security",
      description: "Keep your assets safe: manage permissions, lock BIOS, and block threats with ease!",
      src: "/home/servicesCards/img2.svg",
      color: "#5362AF",
      details: [
        {
          heading: "What Does This Product Do?",
          content: "Our Security Assets solution provides a centralized platform for managing and protecting your organization's digital and physical assets. This includes controlling access to applications, locking BIOS settings on company devices to prevent tampering, managing endpoint permissions, and detecting anomalous behavior. The tool allows for granular permission policies, role-based access controls, and automatic policy enforcement across devices. It continuously monitors device health, detects vulnerabilities, and integrates with threat intelligence feeds to block known risks in real time. Device lockdown features prevent changes at the hardware level, safeguarding against malware injections and unauthorized system access."
        },
        {
          heading: "Why Choose Us?",
          content: "Our platform simplifies asset security management by consolidating multiple protection layers into one intuitive dashboard. Non-technical users can easily enforce strict security policies without deep IT knowledge. We help your business meet industry compliance standards like ISO 27001, NIST, and HIPAA. Our automation features ensure that devices are protected around the clock, even when offline. Security patches, configuration policies, and access rules can be deployed at scale within minutes. Our solution also supports integration with existing EDR, SIEM, and IAM systems, creating a unified security posture without replacing existing tools."
        },
        {
          heading: "Flexible Solutions Tailored to You",
          content: "We provide both cloud and on-premises deployment options to match your infrastructure and regulatory requirements. Choose our fully managed service for quick setup and 24/7 monitoring, or take control with a self-managed instance backed by our support team. Our modular architecture lets you start with core asset protection and expand into advanced threat detection and compliance modules over time. We support Windows, macOS, Linux, and mobile endpoints with minimal performance overhead."
        }
      ]
    },
    {
      title: "Microservice Deployment Tool",
      slug: "deployment",
      description: "Manage microservices effortlessly: ArgoCD, YAML, multi-language support, and more!",
      src: "/home/servicesCards/img3.svg",
      color: "#5362AF",
      details: [
        {
          heading: "What Does This Product Do?",
          content: "The Microservice Deployment Tool is designed to automate and streamline the deployment of containerized microservices across Kubernetes environments. It offers native support for GitOps using ArgoCD and declarative YAML configurations. The tool allows development teams to define services in code, enabling version control, rollback, and visibility into deployment pipelines. Multi-language support ensures compatibility with microservices written in Node.js, Python, Java, Go, and more. It features automatic CI/CD triggers, blue-green and canary deployments, service health checks, dependency management, and live deployment status tracking. The system enhances collaboration by allowing teams to review, approve, and audit deployments before they go live."
        },
        {
          heading: "Why Choose Us?",
          content: "Our solution reduces the complexity of managing microservices in distributed environments. By leveraging GitOps principles, we help you maintain consistency, improve deployment security, and reduce configuration drift. The intuitive UI enables real-time observability of your deployment status and logs, while our CLI tools offer power and flexibility for advanced users. With automated rollbacks, fine-grained access controls, and built-in integrations with GitHub, GitLab, and Bitbucket, your team can ship code faster and more reliably. We also provide prebuilt templates and deployment wizards to get you started instantly."
        },
        {
          heading: "Flexible Solutions Tailored to You",
          content: "You can deploy our tool on your own Kubernetes cluster, use our hosted version for zero maintenance, or embed it into your existing CI/CD infrastructure. We support integrations with Jenkins, GitHub Actions, CircleCI, and other popular tools. Our team will help you configure ArgoCD or a YAML-based approach depending on your operational needs and DevOps maturity. Advanced enterprise features like RBAC, multi-tenant support, and SSO are available."
        }
      ]
    },
    {
        title: "Self-Hosted Agents",
        slug: "agents",
        description: "Faster builds, full security, and total control with self-hosted agents for your CI/CD.",
        src: "/home/servicesCards/img4.svg",
        color: "#89B1FF",
        details: [
          {
            heading: "What Does This Product Do?",
            content: "Self-Hosted Agents empower development teams to run their own CI/CD pipelines directly on infrastructure they control. This means faster build times, enhanced security, and full customization. Instead of relying on shared or cloud-hosted runners, teams can deploy agents tailored to their specific tools, configurations, and requirements. Whether you're building software with specific dependencies or need secure access to internal systems, our self-hosted agents ensure you can do it efficiently. From setting up agent pools to handling concurrent jobs, these agents are designed for performance and scalability, while giving your team complete visibility into the build environment and resource usage."
          },
          {
            heading: "Why Choose Us?",
            content: "Our self-hosted agent solution provides faster build execution, greater privacy, and enhanced security because you're not sharing infrastructure with others. You'll gain better control over software versions, dependencies, and network access, which is crucial for enterprises that require compliance or need to handle sensitive data. Our platform supports parallel builds, custom caching mechanisms, and resource throttling to help optimize performance and cost. With our extensive documentation, support, and expert guidance, you can implement a CI/CD environment that truly fits your unique workflows and security standards without the limitations of third-party runners."
          },
          {
            heading: "Flexible Solutions Tailored to You",
            content: "We offer a completely customizable self-hosted agent solution that can be installed on your cloud or on-premises servers. You can manage it yourself or let our team handle the setup, maintenance, and monitoring. Whether you have a small dev team or an enterprise-level operation, our offering scales with your needs. We also provide integration support for all major CI/CD systems like GitHub Actions, GitLab CI, Jenkins, and Azure DevOps. Additional enterprise features include LDAP integration, role-based access control, detailed audit logging, and automated upgrades to ensure your pipelines stay fast, secure, and compliant."
          }
        ]
    },
    {
        title: "Pricing Calculator Tool",
        slug: "pricing",
        description: "Optimize pricing, automate budgeting, and track contracts with a secure platform.",
        src: "/home/servicesCards/img5.png",
        color: "#5362AF",
        details: [
          {
            heading: "What Does This Product Do?",
            content: "The Pricing Calculator Tool is a comprehensive financial platform designed to help businesses optimize their pricing strategies, automate budgeting processes, and manage contractual obligations with precision. It allows you to build dynamic pricing models based on multiple variables such as cost, demand, region, and customer segmentation. It also integrates seamlessly with your CRM and ERP systems to provide real-time financial data and forecasting. With customizable dashboards and granular permission control, finance teams, sales reps, and decision-makers can collaborate more efficiently, ensuring everyone has the right data at their fingertips for accurate financial planning."
          },
          {
            heading: "Why Choose Us?",
            content: "Manual pricing and budgeting are not only time-consuming but also prone to errors. Our tool eliminates that risk by offering automated workflows, approval processes, and audit trails that ensure accuracy and compliance. By automating repetitive financial tasks and syncing with your existing software stack, your teams can focus on strategic initiatives instead of data entry. You’ll benefit from predictive pricing simulations, margin optimization insights, and intelligent alerts that help you identify underperforming products or services. Our platform is built for scalability and security, with robust encryption, multi-region deployment, and customizable access controls to support businesses of all sizes."
          },
          {
            heading: "Flexible Solutions Tailored to You",
            content: "We offer our Pricing Calculator Tool in three modes: SaaS-hosted, private cloud, and fully on-premises installations. If your organization needs specific modules, custom workflows, or region-based compliance features, we can customize the platform to match your unique operational and legal requirements. We also provide white-labeled versions for consulting firms and partners. Whether you’re an SMB looking for plug-and-play tools or an enterprise needing advanced financial modeling with integrations into SAP or Oracle, we tailor our implementation, training, and support services around your needs, ensuring a smooth transition and long-term success."
          }
        ]
    },
    {
        title: "IaC Terraform Automation",
        slug: "terraform",
        description: "Automate resource creation, maintain consistency, and simplify cloud management easily.",
        src: "/home/servicesCards/img11.svg",
        color: "#FEBEB6",
        details: [
          {
            heading: "What Does This Product Do?",
            content: "Our IaC Terraform Automation tool is designed to streamline and automate your cloud infrastructure management using Terraform. This includes the automated provisioning, updating, and destruction of cloud resources such as servers, databases, storage, and networking components. The tool supports both single-cloud and multi-cloud environments, with built-in modules for AWS, Azure, and GCP. It simplifies managing configurations at scale and ensures that every deployment is repeatable and consistent. Built-in version control and remote state management allow teams to collaborate effectively while keeping infrastructure configurations in sync across different environments."
          },
          {
            heading: "Why Choose Us?",
            content: "Our solution helps eliminate configuration drift and human error, reducing the chances of misconfigured resources that can lead to downtime or security vulnerabilities. With policy-as-code enforcement, environment locking, and role-based access control, you can ensure compliance and governance in all your deployments. We also provide deep integration with CI/CD pipelines so infrastructure changes can be tested, approved, and deployed automatically alongside application code. Our intuitive dashboards and detailed activity logs provide visibility and control over every infrastructure change, allowing you to audit, rollback, or scale resources with confidence."
          },
          {
            heading: "Flexible Solutions Tailored to You",
            content: "Our platform supports both self-managed Terraform setups and hosted Terraform services like Terraform Cloud or OpenTofu. You can start small with predefined templates or scale up to enterprise-grade infrastructure automation with dynamic modules and advanced orchestration. We offer customized onboarding, integration with your existing tools (such as GitHub, Bitbucket, Jenkins, Azure DevOps), and ongoing support including disaster recovery and migration planning. For businesses with legacy infrastructure, we assist in migrating to IaC-based workflows, ensuring long-term maintainability, cost control, and performance optimization."
          }
        ]
    },
    {
        title: "Event-Driven Serverless Architecture",
        slug: "serverless",
        description: "Build scalable, event-driven applications without managing infrastructure.",
        src: "/home/servicesCards/img7.svg",
        color: "#F9D7A4",
        details: [
          {
            heading: "What Does This Product Do?",
            content: "Our Event-Driven Serverless Architecture provides a scalable, flexible way to design applications that react to events. By leveraging serverless compute services, you no longer need to manage servers or infrastructure. Instead, your application can scale dynamically, responding to events such as HTTP requests, database changes, or message queue updates. With this architecture, your application only runs when it is needed, making it more cost-efficient and eliminating the need for manual infrastructure provisioning. This approach is ideal for applications with unpredictable or highly variable workloads, such as IoT applications, mobile apps, or microservices."
          },
          {
            heading: "Why Choose Us?",
            content: "Traditional server-based architectures require you to manage infrastructure, scaling, and monitoring. Our event-driven serverless approach removes these burdens by abstracting the infrastructure layer. This means faster development cycles, lower operational costs, and greater focus on building core application features. Our platform is integrated with popular serverless compute providers like AWS Lambda, Azure Functions, and Google Cloud Functions, enabling you to choose the best cloud platform for your needs. Additionally, we provide powerful analytics and monitoring tools that offer insights into the health of your serverless functions, making it easier to optimize performance and troubleshoot issues."
          },
          {
            heading: "Flexible Solutions Tailored to You",
            content: "Our Event-Driven Serverless Architecture can be customized to fit your needs, whether you need to build microservices, real-time data processing pipelines, or event-driven applications. We support both event-driven workflows that trigger functions based on HTTP requests or messages from queues and push-based triggers such as webhooks and stream data. Whether you’re an enterprise looking for complete scalability or a startup looking to minimize costs, our serverless platform offers both flexibility and reliability. We provide seamless integration with other serverless services such as storage, databases, and analytics tools, giving you the ability to build a full-stack serverless solution."
          }
        ]
    },
    {
        title: "Automated Backup Solutions",
        slug: "backup",
        description: "Ensure your data is securely backed up with fully automated, reliable backup solutions.",
        src: "/home/servicesCards/img8.png",
        color: "#F8A9C0",
        details: [
          {
            heading: "What Does This Product Do?",
            content: "Automated Backup Solutions provide businesses with the peace of mind that their data is continuously protected, stored securely, and recoverable at all times. Our system automates the entire backup process, including incremental, differential, and full backups, tailored to the needs of your specific infrastructure. Whether you're backing up databases, file systems, cloud storage, or applications, our solution ensures that your data is safely preserved in a secure and easily accessible manner. We support multi-cloud backups, disaster recovery scenarios, and ensure that your backups are compliant with industry regulations."
          },
          {
            heading: "Why Choose Us?",
            content: "Data loss is one of the most critical issues facing organizations today. Our automated backup solutions provide reliable protection against hardware failure, cyberattacks, accidental deletions, and other data loss events. By automating the backup process, we eliminate human error and ensure that your backups are taken at regular intervals. With our service, you get seamless integrations with popular cloud platforms like AWS, Google Cloud, and Azure, ensuring that your data is securely stored off-site. Additionally, our solution offers quick recovery times, allowing you to restore lost or corrupted data rapidly with minimal downtime."
          },
          {
            heading: "Flexible Solutions Tailored to You",
            content: "Our backup solution is designed to scale with your business, from small startups to large enterprises. You can choose the frequency and type of backups, set retention policies, and configure alerts for backup failures. We offer both on-premise and cloud backup options, giving you flexibility in how you store your data. For organizations with stringent data governance and compliance requirements, our backup solutions include encryption at rest and in transit, as well as audit trails that provide full visibility into backup activities. We also provide easy-to-use recovery tools, allowing you to restore your data in just a few clicks."
          }
        ]
    },
    {
        title: "Data Analytics & Reporting Tools",
        slug: "analytics",
        description: "Extract meaningful insights from your data with powerful analytics and reporting tools.",
        src: "/home/servicesCards/img9.svg",
        color: "#95B0E0",
        details: [
          {
            heading: "What Does This Product Do?",
            content: "Our Data Analytics & Reporting Tools are designed to help businesses make data-driven decisions by turning raw data into meaningful insights. The platform provides powerful features like real-time data analysis, custom reporting, and interactive dashboards. You can track key performance indicators (KPIs), identify trends, and get actionable insights to guide your business strategy. With built-in connectors for popular data sources like databases, APIs, and third-party applications, you can consolidate all your data into a single platform for comprehensive analysis. Additionally, the system includes machine learning and AI-powered features for advanced predictive analytics."
          },
          {
            heading: "Why Choose Us?",
            content: "Businesses today generate more data than ever before, but without the right tools, this data can become overwhelming and difficult to interpret. Our platform simplifies the process of making sense of complex datasets by providing intuitive visualizations and powerful analytics. You can create custom reports based on any metric or data source, and our platform will automatically generate insights based on your business objectives. We also offer integration with popular CRM, ERP, and business intelligence tools to ensure that your data flows seamlessly across your organization. Whether you’re tracking sales, marketing, customer engagement, or operational efficiency, our tools enable you to make informed decisions faster."
          },
          {
            heading: "Flexible Solutions Tailored to You",
            content: "Our Data Analytics & Reporting Tools can be fully customized to meet the specific needs of your business. You can choose from a wide variety of visualization options, including bar charts, line graphs, heatmaps, and geographical maps, to present your data in the most meaningful way. Our platform is fully scalable, supporting everything from small-scale projects to enterprise-wide deployments with millions of data points. We also offer advanced filtering, segmentation, and drill-down capabilities, enabling you to analyze data at a granular level. With our extensive API support, you can integrate our analytics with your existing systems and workflows, automating the reporting process and ensuring that all key stakeholders have access to up-to-date information."
          }
        ]
    },
    {
        title: "Custom Web App Development",
        slug: "web-apps",
        description: "Create fully customized, scalable web applications tailored to your business needs.",
        src: "/home/servicesCards/img10.svg",
        color: "#E4B8FF",
        details: [
          {
            heading: "What Does This Product Do?",
            content: "Our Custom Web App Development service provides end-to-end solutions to help businesses create fully customized, scalable, and high-performing web applications. We work with you to understand your business requirements and design an application that fits your needs, whether you're building a customer portal, internal tool, e-commerce site, or SaaS product. We use modern web technologies such as React, Node.js, and Next.js to build responsive, user-friendly applications that are optimized for performance and scalability. Our team ensures that the app is secure, easily maintainable, and integrates seamlessly with your existing systems."
          },
          {
            heading: "Why Choose Us?",
            content: "When it comes to web app development, one size does not fit all. Our custom web apps are tailored to meet your specific needs, whether it’s integrating with your CRM, handling complex workflows, or providing real-time data updates. With our agile development approach, you can be sure that the app evolves as your business grows. We prioritize user experience, performance optimization, and mobile responsiveness to ensure that your users get the best experience. Moreover, our team follows industry best practices for security, ensuring that your web app is protected against vulnerabilities and attacks."
          },
          {
            heading: "Flexible Solutions Tailored to You",
            content: "Our web app development solutions are designed to be flexible and scalable, able to grow with your business. Whether you’re a startup or an enterprise, we can build a web application that fits your vision and goals. We offer a range of services, from simple prototypes to complex enterprise applications with multi-tier architecture. Our team also offers ongoing maintenance, updates, and support to ensure that your application remains up-to-date with the latest web standards and security patches. We provide a smooth user experience with cross-browser and cross-device compatibility and focus on developing apps that enhance engagement and productivity for your users."
          }
        ]
    },
    {
        title: "API Integration & Development",
        slug: "api",
        description: "Seamlessly connect your systems and applications with custom API solutions.",
        src: "/home/servicesCards/img12.svg",
        color: "#99FFCC",
        details: [
          {
            heading: "What Does This Product Do?",
            content: "Our API Integration & Development service helps businesses connect different software systems and applications to enable seamless communication and data exchange. We design and develop custom APIs tailored to your specific needs, whether you need to integrate with third-party services or enable internal systems to talk to each other. From RESTful APIs to GraphQL and SOAP, we provide flexible API solutions that fit your data and application architecture. Additionally, we help with API documentation, versioning, and testing to ensure that your integrations are secure and scalable."
          },
          {
            heading: "Why Choose Us?",
            content: "API integrations are the backbone of modern software ecosystems. With our expert API development services, you can enhance your business by enabling communication between disparate systems, improving data accuracy, and automating workflows. Whether it’s integrating payment gateways, CRM systems, or cloud services, our team has experience working with a wide variety of third-party APIs. We prioritize security in every API we build, ensuring that your data is protected through encryption, OAuth, and other industry-standard practices. Furthermore, we provide detailed documentation and testing to ensure that your APIs work smoothly and efficiently across environments."
          },
          {
            heading: "Flexible Solutions Tailored to You",
            content: "We understand that every business has different integration needs. Whether you're building a microservices architecture, automating business processes, or connecting disparate systems, our API solutions are built to be flexible and scalable. We provide custom solutions that fit your exact requirements, with ongoing support and maintenance to ensure that your APIs stay functional and secure as your business grows. Our developers are well-versed in both front-end and back-end integrations, meaning that we can help you design full-stack solutions with seamless communication between the front end, back end, and third-party services."
          }
        ]
    },      
    {
        title: "Cloud Infrastructure Management",
        slug: "cloud",
        description: "Manage and scale your cloud infrastructure with expert support and monitoring.",
        src: "/home/servicesCards/img1.svg",
        color: "#A5D9FF",
        details: [
          {
            heading: "What Does This Product Do?",
            content: "Our Cloud Infrastructure Management service helps businesses manage their cloud resources and ensure that their cloud infrastructure is optimized, secure, and scalable. We offer full-stack cloud management solutions, including provisioning, scaling, monitoring, and troubleshooting of cloud resources. Whether you're using AWS, Azure, or Google Cloud, our team ensures that your cloud infrastructure is efficiently managed, minimizing downtime and maximizing performance. With real-time monitoring and automated alerts, we help you track system health, performance metrics, and resource usage to keep your cloud environment running smoothly."
          },
          {
            heading: "Why Choose Us?",
            content: "Managing cloud infrastructure can be complex and time-consuming, especially as your business grows. Our expert team simplifies this process by providing proactive monitoring, performance tuning, and security management for your cloud environment. We specialize in multi-cloud environments, ensuring that your cloud architecture is optimized for cost and performance. We also help businesses with disaster recovery planning and compliance, ensuring that you meet regulatory standards and avoid data loss during outages. With our cloud infrastructure management service, you can focus on growing your business while we handle the technical complexities of your cloud environment."
          },
          {
            heading: "Flexible Solutions Tailored to You",
            content: "Our cloud infrastructure management service is fully customizable to your business’s needs. Whether you're running a small-scale web application or managing a global enterprise infrastructure, we have the expertise to manage and scale your resources. We provide ongoing support, including troubleshooting, performance reviews, and cost optimization, and we offer a variety of deployment options for businesses of all sizes. Whether you need managed services for a single cloud provider or a multi-cloud strategy, we tailor our approach to ensure that your infrastructure is always optimized for performance, security, and cost efficiency."
          }
        ]
    },
      
      ];
  
  
  


