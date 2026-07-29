import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { ExpressIcon } from "@/components/ui/svgs/express";
import { RustIcon } from "@/components/ui/svgs/rust";
import { SolidityIcon } from "@/components/ui/svgs/solidity";
import { MoveIcon } from "@/components/ui/svgs/move";
import { CairoIcon } from "@/components/ui/svgs/cairo";
import { GitIcon } from "@/components/ui/svgs/git";
import { MetalIcon } from "@/components/ui/svgs/metal";
import { LinuxIcon } from "@/components/ui/svgs/linux";

export const DATA = {
  name: "Sayan Roy",
  initials: "SR",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Web 3 & AI Engineer turned Entrepreneur. I like to solve complex engineering problems. Actively on Twitter.",
  summary:
    "Currently serving as Stellar India Ambassador, ex Move club member . Been around 1.5 years in actively building around web3. Worked with more than 15+ different chains..[I'm pursuing a bachelors degree in computer science](/#education), [interned at big tech companies & startups](https://youtu.be/7Yuw5vHb_Wk), and [Won 7x hackathons](/#hackathons). I enjoy working at the systems layer by designing secure, modular, and efficient on-chain/off-chain architectures that improve execution, trust, and developer experience rather than simply adding more complexity. I also had the pleasure of being a part of SAP Hackfest'26 as National Finalist scaled the product to 1k + users at Coimbatore [SAP Hackfest'25](https://www.sap.com/india/index.html).",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: ExpressIcon },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Rust", icon: RustIcon },
    { name: "Solidity", icon: SolidityIcon },
    { name: "Move", icon: MoveIcon },
    { name: "Cairo", icon: CairoIcon },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Git", icon: GitIcon },
    { name: "Metal/Rcom", icon: MetalIcon },
    { name: "Linux", icon: LinuxIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ergo Protocol",
      href: "https://github.com/mesayanroy/Ergo-Protocol",
      badges: [],
      location: "Remote",
      title: "Head of Product ",
      logoUrl: "/ergo.png",
      start: "Jan 2026",
      end: "Present",
      description:
        "Architected and deployed Ergo Protocol, the premier non-custodial decentralized liquidity layer on Stellar Mainnet (Soroban). Built a high-performance Shared Core pool coupled with isolated Satellite Pools, dual-oracle price feeds (Reflector + Soroswap TWAP fallback), dynamic E-Mode (90% LTV), and automated Dutch liquidation auctions.",
      bullets: [
        "Deployed 7 interlocking Soroban smart contracts on Stellar Mainnet including Core Pool, Oracle Aggregator, and Liquidation Engine.",
        "Engineered dual-oracle pricing aggregator combining Reflector CEX/DEX feeds with Soroswap TWAP fallbacks.",
        "Implemented dynamic E-Mode boosting borrowing power to 90% LTV for correlated stablecoin pairs.",
        "Designed Dutch Auction liquidation engine enabling linear discount bad-debt repayment."
      ]
    },
    {
      company: "Stellar Development Foundation",
      href: "https://stellar.org",
      badges: [],
      location: "San Francisco, California, United States · Remote",
      title: "Ambassador",
      logoUrl: "/stellar.png",
      start: "Jan 2026",
      end: "Present",
      description:
        "Educating and inspiring others about Stellar and its ecosystem. Empowering local communities with knowledge about blockchain's potential. Driving meaningful conversations and collaborations within Stellar India.",
      bullets: [
        "Educating and inspiring others about Stellar and its ecosystem.",
        "Empowering local communities with knowledge about blockchain's potential.",
        "Driving meaningful conversations and collaborations within Stellar India."
      ]
    },
    {
      company: "Snaapify™",
      href: "https://snaapify.com",
      badges: [],
      location: "Kolkata, West Bengal, India",
      title: "Full Stack Engineer",
      logoUrl: "/snaapify.png",
      start: "Jun 2025",
      end: "Present",
      employmentType: "Full-time · 1 yr 2 mos",
      description:
        "At Snaapify, a photography-focused freelance e-commerce startup, I build and optimize both frontend and backend of our platform to deliver a seamless experience for photographers and clients alike.",
      roles: [
        {
          title: "Full Stack Engineer",
          start: "Nov 2025",
          end: "Present",
          duration: "9 mos",
          location: "Kolkata, West Bengal, India",
          description:
            "At Snaapify, a photography-focused freelance e-commerce startup, I now take on a broader role — building and optimizing both the frontend and backend of our platform to deliver a seamless experience for photographers and clients alike.",
          bullets: [
            "Crafted intuitive user interfaces and enhanced platform performance for photographers and clients.",
            "Designed scalable REST/gRPC APIs, integrated payment gateways, and managed image workflows.",
            "Created an end-to-end ecosystem empowering creatives to showcase talent and connect with opportunities."
          ]
        },
        {
          title: "Back End Engineer",
          start: "Jun 2025",
          end: "Nov 2025",
          duration: "6 mos",
          location: "Hybrid",
          description:
            "At Snaapify, a photography-focused freelance e-commerce startup, I work on building the backend engine that keeps our platform running seamlessly.",
          bullets: [
            "Designed scalable APIs and optimized databases to ensure smooth platform execution.",
            "Integrated payment gateways and ensured smooth high-resolution image handling.",
            "Created a strong, reliable engineering foundation for photographers and clients."
          ]
        }
      ],
      bullets: [
        "Crafted intuitive user interfaces and enhanced platform performance for photographers and clients.",
        "Designed scalable APIs, integrated payment systems, and managed image processing pipelines.",
        "Built end-to-end e-commerce features connecting photographers with creative opportunities."
      ]
    },
    {
      company: "AI Wallah",
      href: "https://aiwallah.com",
      badges: [],
      location: "Remote",
      title: "AI / Machine Learning Engineer",
      logoUrl: "/ai-wallah.png",
      start: "Feb 2025",
      end: "May 2025",
      description:
        "Developing AI tools and full-stack machine learning applications, fine-tuning LLMs, and constructing autonomous AI workflows.",
      bullets: [
        "Fine-tuned open-source LLM models for customized enterprise query systems.",
        "Built low-latency RAG (Retrieval-Augmented Generation) pipelines with vector databases.",
        "Deployed scalable AI agent microservices using Docker and Python FastAPI."
      ]
    },
    {
      company: "HackQuest",
      badges: [],
      href: "https://hackquest.io",
      location: "Remote",
      title: "Senior Developer Advocate",
      logoUrl: "/hackquest.png",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production.",
      bullets: [
        "Implemented a custom Kubernetes controller in Go to automate database resource deployments.",
        "Enabled 2,000+ internal developers to instantly deploy app databases to production.",
        "Automated MySQL database failovers while keeping replica topologies consistent."
      ]
    },
    {
      company: "GeeksforGeeks",
      href: "https://geeksforgeeks.org",
      badges: [],
      location: "Santa Clara, CA",
      title: "Technical Executive",
      logoUrl: "/geeksforgeeks.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Got selected as the club member at University where ,i architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
      bullets: [
        "Architected and wrote MVP of internal admin and A/B testing dashboard.",
        "Utilized React, Redux, TypeScript, and Python to optimize real-time monitoring.",
        "Streamlined operational telemetry and feature flag experiments."
      ]
    },
    {
      company: "Delloite",
      href: "https://deloitte.com",
      badges: [],
      location: "San Jose, CA",
      title: "Data Analyst",
      logoUrl: "/deloitte.png",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product.",
      bullets: [
        "Co-developed security orchestration iOS application in Swift for enterprise demo.",
        "Implemented real-time gRPC microservice in Python and C++ yielding 500% throughput increase.",
        "Serialized data using Protobufs over high-speed networks."
      ]
    },
    {
      company: "Goldman Sacs",
      href: "https://goldmansachs.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/goldman-sachs.png",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks.",
      bullets: [
        "Implemented internal Ruby API for cellular device telematics and control.",
        "Developed automated firmware update system scaling across 100,000+ global nodes.",
        "Constructed real-time dashboard in React, PostgreSQL, and EC2."
      ]
    },
    {
      company: "GirlScript Summer of Code (GSSoC)",
      href: "https://gssoc.foundation",
      badges: [],
      location: "Remote",
      title: "Mentor & Project Admin",
      logoUrl: "/gssoc.png",
      start: "May 2025",
      end: "Present",
      employmentType: "Open Source · 2 yrs",
      description:
        "Served as Senior Contributor in 2025 and promoted to Mentor & Project Admin in 2026. Architected open source repositories, reviewed pull requests, and mentored 100+ contributors across Web3 and full-stack projects.",
      roles: [
        {
          title: "Mentor & Project Admin",
          start: "May 2026",
          end: "Present",
          duration: "4 mos",
          location: "Remote",
          description:
            "Managing open source projects, reviewing community pull requests, guiding architecture, and mentoring student developers.",
          bullets: [
            "Appointed as Project Admin and Mentor for global open-source cohorts.",
            "Reviewed and merged PRs for smart contracts, security tools, and Web3 dashboards."
          ]
        },
        {
          title: "Senior Contributor",
          start: "May 2025",
          end: "Aug 2025",
          duration: "4 mos",
          location: "Remote",
          description:
            "Contributed core cryptographic, authentication, and API integration modules across top ecosystem repositories.",
          bullets: [
            "Implemented secure password encryption and session storage mechanisms.",
            "Integrated financial data APIs and optimized real-time data pipelines."
          ]
        }
      ],
      bullets: [
        "Appointed as Project Admin and Mentor for global open-source cohorts.",
        "Implemented secure password encryption and session storage mechanisms.",
        "Integrated financial data APIs and optimized real-time data pipelines."
      ]
    },
  ],
  education: [
    {
      school: "University of Michigan",
      href: "https://umich.edu",
      degree: "Professional Certificate in Python Programming",
      logoUrl: "/michigan.png",
      start: "2025",
      end: "2026",
    },
    {
      school: "Sister Nivedita University",
      href: "https://snuniv.ac.in",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/snu.png",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Agentforge",
      href: "https://github.com/mesayanroy/AgentForge",
      dates: "2024 - Present",
      active: true,
      description:
        "Execution layer for autonomous AI agents natively built on Stellar. Features low-overhead PRoot sandboxes, agent smart wallets, decentralized ownership, and automated 0x402 micropayment settlement.",
      technologies: [
        "Stellar",
        "Soroban",
        "Rust",
        "PRoot",
        "Typescript",
        "Next.js",
        "Docker",
        "FastAPI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mesayanroy/AgentForge",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo Video",
          href: "https://youtu.be/WlxBo90rBvU",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://player.cloudinary.com/embed/?cloud_name=v71srn2q&public_id=agentforge-cursorful-video-1785250175336_wxbouz",
    },
    {
      title: "Ergo Protocol",
      href: "https://github.com/mesayanroy/Ergo-Protocol",
      dates: "2024 - Present",
      active: true,
      description:
        "Premier non-custodial decentralized lending & borrowing liquidity layer on Stellar Soroban. Features dynamic E-Mode (90% LTV), dual-oracle pricing feeds, satellite risk isolation pools, and Dutch liquidation auctions.",
      technologies: [
        "Stellar",
        "Soroban",
        "Rust",
        "Typescript",
        "Next.js",
        "Oracle",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mesayanroy/Ergo-Protocol",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo Video",
          href: "https://youtu.be/7Yuw5vHb_Wk",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://player.cloudinary.com/embed/?cloud_name=v71srn2q&public_id=ergo-cursorful-video-1785245147832_xcr6dy",
    },
    {
      title: "Valdyum",
      href: "https://github.com/mesayanroy/Valdyum-Labs",
      dates: "2023 - 2024",
      active: true,
      description:
        "Open-source developer platform and high-performance smart contract lifecycle governance & analytics engine for decentralized protocols and Web3 applications.",
      technologies: [
        "Typescript",
        "Next.js",
        "PostgreSQL",
        "Rust",
        "Solidity",
        "Docker",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mesayanroy/Valdyum-Labs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://player.cloudinary.com/embed/?cloud_name=v71srn2q&public_id=valdyum-cursorful-video-1785248372257_zmidbl",
    },
    {
      title: "Vayyl",
      href: "https://github.com/mesayanroy/Vayyl",
      dates: "2024 - Present",
      active: true,
      description:
        "Confidential settlement & privacy infrastructure for Stellar Soroban using Groth16 zero-knowledge proofs, Circom, Poseidon2 hashing, shielded pools, and BN254 host functions.",
      technologies: [
        "Stellar",
        "Soroban",
        "Rust",
        "Circom",
        "Groth16",
        "Zero-Knowledge",
        "PostgreSQL",
        "Next.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mesayanroy/Vayyl",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://player.cloudinary.com/embed/?cloud_name=v71srn2q&public_id=vayylcursorful-video-1785247416694_udbqdc",
    },
  ],
  contributions: [
    {
      category: "CONTRIBUTION & RESEARCH WORK",
      items: [
        {
          title: "Published an article: Zero-Knowledge Infrastructure: Scaling Payments Without Revealing Data.",
          href: "https://mesayanroy.hashnode.dev/zero-knowledge?utm_source=hashnode&utm_medium=feed",
          external: true,
        },
        {
          title: "Raised 2 PRs on the WSL winget for Stellar installation guidelines, merged into the Stellar repository.",
          href: "https://github.com/stellar",
          external: true,
        },
        {
          title: "Contributed to OpenZeppelin by developing a deterministic policy engineering system for OpenZeppelin Stellar smart accounts.",
          href: "https://github.com/OpenZeppelin",
          external: true,
        },
        {
          title: "Contributed to Vayyl on the privacy payment suite for circuit breaker sessions and fixing order books pipeline on accurate positions.",
          href: "https://github.com/mesayanroy/Vayyl",
          external: true,
        },
        {
          title: "Contributed to GirlScript Summer of Code as a Senior Contributor (2025) and as a Mentor & Project Admin (2026).",
          href: "https://github.com/gssoc",
          external: true,
        },
        {
          title: "Contributed to Solana Foundation and the Anchor framework.",
          href: "https://github.com/solana-labs",
          external: true,
        },
      ],
    },
    {
      category: "ACHIEVEMENTS",
      items: [
        {
          title: "Product Pitch to Investors in ISER KOLKATA as Freshman ‘24.",
        },
        {
          title: "Internship Certification by Forage from Goldman Sachs & Deloitte as Freshman ‘24.",
        },
        {
          title: "Was part of Spring fest '25 IIT Kharagpur.",
        },
        {
          title: "Selected as the Technical Executive for Geeks for Geeks SNU as a Freshman ‘25.",
        },
        {
          title: "7x Hackathons Wins.",
        },
        {
          title: "Cracked the CIT exam (Common Internship Test), ranking in the top 0.1%.",
        },
        {
          title: "Cracked the Entrance Exam for Online program of BS Degree in AI & DS at IIT Mandi ’25.",
        },
        {
          title: "Selected for the National Round for SAP Hackfest ’25 (Out of 30k+, top 300 devs); overall travel & accommodation paid by college for the first time.",
        },
        {
          title: "Led team Locals.discord & Hosted a couple of tech events.",
        },
        {
          title: "Won all the tracks in Stellar x RiseIn India Master Journey.",
        },
        {
          title: "Appointed as Stellar Ambassador India ’26.",
        },
        {
          title: "Managing Stellar Indian Community, coordinating with global peers & onboarding new Web3 builders.",
        },
        {
          title: "Got selected for the Insta Rewards 15k $ grant for Agentforge backed by Stellar.",
          href: "https://github.com/mesayanroy/AgentForge",
          external: true,
          badge: "15k Grant",
        },
        {
          title: "Got selected for Stellar Community Grant #45 of 150K $ on Ergo Protocol.",
          href: "https://github.com/mesayanroy/Ergo-Protocol",
          external: true,
          badge: "Grant #45",
        },
      ],
    },
  ],
  hackathons: [
    {
      title: "National Finalist & 3x Regional Champion — SAP Hackfest'25",
      dates: "2025",
      location: "Coimbatore / National Round",
      description:
        "National Finalist & 3x Regional Champion. Cleared 3 elimination stages (Intra-College 1st Place, Inter-College 1st Place, and State 1st Place) out of 30,000 total competing teams to reach the National Finals.",
      image: "/sap.png",
      links: [],
    },
    {
      title: "Hack4Bengal 4.0",
      dates: "2024",
      location: "Kolkata, India",
      description:
        "MLH Chain Winner. Awarded top honors for building high-performance decentralized blockchain applications.",
      image: "/hack4bengal.png",
      links: [],
    },
    {
      title: "Hack4Bengal Online Hack",
      dates: "2024",
      location: "Online",
      description:
        "1st Place - Soci-Fi Track. Designed and developed decentralized social finance protocol infrastructure.",
      image: "/hack4bengal.png",
      links: [],
    },
    {
      title: "Semifinalist - Paris Blockchain Hackathon",
      dates: "2024",
      location: "Paris, France / Remote",
      description:
        "Semifinalist - DeFi Track. Reached the semifinalist standing competing among global Web3 protocol developers.",
      image: "/paris-blockchain.png",
      links: [],
    },
    {
      title: "EDU Chain Hackathon",
      dates: "2024",
      location: "Online",
      description:
        "3rd Place - Bug Bounty Track. Awarded 3rd place for security vulnerability research, threat modeling, and smart contract auditing.",
      image: "/hackquest.png",
      links: [],
    },
  ],
} as const;
