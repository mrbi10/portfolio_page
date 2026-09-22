import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faLocationDot,
    faCode,
    faCalendar,
    faCloud,
    faGlobe,
    faServer,
    faDatabase,
    faShieldHalved,
    faNetworkWired,
    faTerminal,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    Section,
    GradientText,
} from '../../components/ui/index';

const images = {
    teaching:
        '/images/blog/jeppiaar-workshop/707ebfc64875464588dc39e059f73be7.jpg',

    momento: null,

    group:
        '/images/blog/jeppiaar-workshop/5a54e83968123934.jpg',

    momento:
        '/images/blog/jeppiaar-workshop/bdca66417ef14379b16f8c6e3fdbebf9.jpg',

    poster:
        '/images/blog/jeppiaar-workshop/f6db7a5110164a1895e5ef539d502762.jpg',

    board:
        '/images/blog/jeppiaar-workshop/fe6313558acc423396c8da8f714897b5.jpg',
};

function PlaceholderImage({ label }) {
    return (
        <div
            className="
        flex aspect-[16/10]
        items-center justify-center
        rounded-2xl
        border border-dashed
        border-slate-300
        bg-slate-100
        dark:border-white/[0.12]
        dark:bg-white/[0.025]
      "
        >
            <div className="text-center">
                <div
                    className="
            mx-auto mb-3 flex h-12 w-12
            items-center justify-center
            rounded-xl
            bg-cyan-500/10
            text-cyan-500
          "
                >
                    <FontAwesomeIcon icon={faUsers} />
                </div>

                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {label}
                </p>

                <p className="mt-1 text-xs text-slate-400 dark:text-slate-600">
                    Photo will be added here
                </p>
            </div>
        </div>
    );
}

function ArticleImage({ src, alt, caption }) {
    if (!src) {
        return <PlaceholderImage label={caption || 'Image placeholder'} />;
    }

    return (
        <figure>
            <div
                className="
          overflow-hidden
          rounded-2xl
          border border-slate-200
          bg-slate-100
          shadow-sm
          dark:border-white/[0.08]
          dark:bg-white/[0.025]
        "
            >
                <img
                    src={src}
                    alt={alt}
                    className="
            w-full
            object-cover
            transition-transform duration-700
            hover:scale-[1.01]
          "
                />
            </div>

            {caption && (
                <figcaption
                    className="
            mt-3
            text-center
            text-xs
            leading-5
            text-slate-500
            dark:text-slate-500
          "
                >
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

function SectionNumber({ children }) {
    return (
        <div className="mb-5 flex items-center gap-3">
            <span
                className="
          font-mono
          text-xs
          font-bold
          tracking-[0.2em]
          text-cyan-500
        "
            >
                {children}
            </span>

            <div className="h-px flex-1 bg-slate-200 dark:bg-white/[0.08]" />
        </div>
    );
}

function ConceptCard({ icon, title, children }) {
    return (
        <div
            className="
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
        dark:border-white/[0.08]
        dark:bg-white/[0.025]
        dark:hover:bg-white/[0.04]
      "
        >
            <div
                className="
          mb-4 flex h-11 w-11
          items-center justify-center
          rounded-xl
          bg-cyan-500/10
          text-cyan-500
          dark:bg-cyan-400/10
          dark:text-cyan-300
        "
            >
                <FontAwesomeIcon icon={icon} />
            </div>

            <h3 className="font-bold text-slate-900 dark:text-white">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {children}
            </p>
        </div>
    );
}

export default function JeppiaarWorkshop() {
    return (
        <main className="bg-slate-50 dark:bg-[#050b18]">

            {/* ================================================================ */}
            {/* HERO                                                             */}
            {/* ================================================================ */}

            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div
                        className="
              absolute -left-40 top-20
              h-96 w-96
              rounded-full
              bg-cyan-400/10
              blur-3xl
              dark:bg-cyan-500/5
            "
                    />

                    <div
                        className="
              absolute -right-40 top-40
              h-96 w-96
              rounded-full
              bg-purple-400/10
              blur-3xl
              dark:bg-purple-500/5
            "
                    />
                </div>

                <Container>
                    <div className="relative py-16 sm:py-20 lg:py-24">

                        <Link
                            to="/blog"
                            className="
                inline-flex items-center gap-2
                text-xs font-semibold
                text-slate-500
                transition-colors
                hover:text-cyan-500
                dark:text-slate-500
                dark:hover:text-cyan-300
              "
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            Back to journal
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mt-10 max-w-4xl"
                        >
                            <div
                                className="
                  mb-5 inline-flex items-center gap-2
                  rounded-full
                  border border-cyan-500/20
                  bg-cyan-500/5
                  px-4 py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-600
                  dark:border-cyan-400/20
                  dark:bg-cyan-400/5
                  dark:text-cyan-300
                "
                            >
                                <FontAwesomeIcon icon={faGlobe} />
                                Workshop · Full Stack Development
                            </div>

                            <h1
                                className="
                  text-4xl
                  font-extrabold
                  leading-[1.08]
                  tracking-tight
                  text-slate-900
                  dark:text-white
                  sm:text-5xl
                  lg:text-7xl
                "
                            >
                                From localhost
                                <br />
                                <GradientText>to a real domain.</GradientText>
                            </h1>

                            <p
                                className="
                  mt-7
                  max-w-3xl
                  text-lg
                  leading-8
                  text-slate-600
                  dark:text-slate-400
                  sm:text-xl
                "
                            >
                                From understanding how the web works to actually
                                making something live on it.
                            </p>

                            <div
                                className="
                  mt-8
                  flex flex-wrap
                  items-center
                  gap-x-6 gap-y-3
                  text-xs
                  font-medium
                  text-slate-500
                  dark:text-slate-500
                "
                            >
                                <span className="inline-flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    19 September 2026
                                </span>

                                <span className="inline-flex items-center gap-2">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    Jeppiaar Engineering College, Chennai
                                </span>
                            </div>
                        </motion.div>

                        {/* Hero image */}
                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="mt-12"
                        >
                            <div className="flex justify-center">
                                <div
                                    className="
      overflow-hidden
      rounded-3xl
      border border-slate-200
      bg-white
      shadow-xl
      dark:border-white/[0.08]
      dark:bg-white/[0.025]
    "
                                >
                                    <img
                                        src={images.poster}
                                        alt="Hands-on Full Stack Web Development Workshop at Jeppiaar Engineering College"
                                        className="
        block
        h-auto
        w-full
        max-w-[720px]
        object-contain
      "
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </Container>
            </section>

            {/* ================================================================ */}
            {/* INTRO                                                            */}
            {/* ================================================================ */}

            <section className="pb-20">
                <Container>
                    <div className="mx-auto max-w-4xl">

                        <SectionNumber>01 — THE IDEA</SectionNumber>

                        <h2
                            className="
                text-3xl
                font-extrabold
                tracking-tight
                text-slate-900
                dark:text-white
                sm:text-4xl
              "
                        >
                            I intentionally didn't start with code.
                        </h2>

                        <div
                            className="
                mt-6
                space-y-5
                text-base
                leading-8
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
                        >
                            <p>
                                When we say <strong className="text-slate-900 dark:text-white">
                                    Full Stack Development
                                </strong>, most workshops immediately move into
                                frameworks, components and code.
                            </p>

                            <p>
                                I wanted to approach it differently.
                            </p>

                            <p>
                                Before writing code, the students explored what actually
                                happens behind a website — domains, DNS, the Internet,
                                protocols, clients and servers, frontend and backend,
                                databases, APIs, data travelling between systems, and
                                encryption and decryption.
                            </p>

                            <p>
                                The goal was simple: understand the system before
                                building one part of it.
                            </p>
                        </div>

                    </div>
                </Container>
            </section>

            {/* ================================================================ */}
            {/* CONCEPTS                                                         */}
            {/* ================================================================ */}

            <section className="pb-24">
                <Container>

                    <SectionNumber>02 — BEFORE THE CODE</SectionNumber>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        <ConceptCard icon={faGlobe} title="Domains & DNS">
                            How a human-readable domain becomes an address that
                            computers can reach.
                        </ConceptCard>

                        <ConceptCard icon={faNetworkWired} title="Protocols">
                            How systems communicate and exchange information across
                            the Internet.
                        </ConceptCard>

                        <ConceptCard icon={faServer} title="Client & Server">
                            What happens between a browser request and the server
                            returning a response.
                        </ConceptCard>

                        <ConceptCard icon={faCode} title="Frontend & Backend">
                            How the visible interface connects to application logic
                            running behind it.
                        </ConceptCard>

                        <ConceptCard icon={faDatabase} title="Databases & APIs">
                            How applications store information and move data between
                            different layers.
                        </ConceptCard>

                        <ConceptCard icon={faShieldHalved} title="Encryption">
                            Why information needs protection while moving between
                            systems.
                        </ConceptCard>

                    </div>

                </Container>
            </section>

            {/* ================================================================ */}
            {/* TEACHING                                                         */}
            {/* ================================================================ */}

            <section className="pb-24">
                <Container>

                    <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

                        <ArticleImage
                            src={images.teaching}
                            alt="Teaching students during the Full Stack Development workshop"
                            caption="Explaining how the different layers of a web application connect."
                        />

                        <div>
                            <SectionNumber>03 — BUILDING THE UNDERSTANDING</SectionNumber>

                            <h2
                                className="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-slate-900
                  dark:text-white
                "
                            >
                                From individual concepts to one working system.
                            </h2>

                            <div
                                className="
                  mt-6
                  space-y-5
                  text-base
                  leading-8
                  text-slate-600
                  dark:text-slate-400
                "
                            >
                                <p>
                                    The discussion gradually connected each concept to
                                    the next.
                                </p>

                                <p>
                                    A domain leads to DNS. DNS leads to an address.
                                    A browser becomes a client. The request reaches a
                                    server. The backend processes it. APIs carry data.
                                    Databases store information.
                                </p>

                                <p>
                                    Instead of treating these as isolated technical
                                    terms, the students could see how they combine to
                                    form the website they use every day.
                                </p>
                            </div>
                        </div>

                    </div>

                </Container>
            </section>

            {/* ================================================================ */}
            {/* AZURE                                                           */}
            {/* ================================================================ */}

            <section
                className="
          border-y
          border-slate-200
          bg-white
          py-24
          dark:border-white/[0.06]
          dark:bg-white/[0.015]
        "
            >
                <Container>

                    <div className="mx-auto max-w-4xl">

                        <SectionNumber>04 — FROM THEORY TO INFRASTRUCTURE</SectionNumber>

                        <div className="flex items-start gap-4">

                            <div
                                className="
                  flex h-14 w-14 shrink-0
                  items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-500
                  to-blue-600
                  text-xl
                  text-white
                  shadow-lg
                  shadow-cyan-500/20
                "
                            >
                                <FontAwesomeIcon icon={faCloud} />
                            </div>

                            <div>
                                <h2
                                    className="
                    text-3xl
                    font-extrabold
                    tracking-tight
                    text-slate-900
                    dark:text-white
                  "
                                >
                                    Then we made it real.
                                </h2>

                                <p
                                    className="
                    mt-3
                    text-base
                    leading-7
                    text-slate-600
                    dark:text-slate-400
                  "
                                >
                                    The afternoon moved from explanation into a
                                    hands-on Microsoft Azure activity.
                                </p>
                            </div>

                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">

                            <ConceptCard icon={faCloud} title="Resource Groups">
                                Teams created the cloud resources needed for their
                                applications.
                            </ConceptCard>

                            <ConceptCard icon={faNetworkWired} title="Virtual Networks">
                                Students worked with Azure networking concepts while
                                setting up their environments.
                            </ConceptCard>

                            <ConceptCard icon={faServer} title="Virtual Machines">
                                Each team created a VM and connected to it through
                                Remote Desktop.
                            </ConceptCard>

                            <ConceptCard icon={faGlobe} title="Public IP & Domains">
                                Websites were exposed through public IP addresses and
                                connected to domains using A records.
                            </ConceptCard>

                        </div>

                    </div>

                </Container>
            </section>

            {/* ================================================================ */}
            {/* BOARD IMAGE                                                      */}
            {/* ================================================================ */}

            <section className="py-24">
                <Container>

                    <div className="mx-auto max-w-5xl">

                        <SectionNumber>05 — ON THE BOARD</SectionNumber>

                        <ArticleImage
                            src={images.board}
                            alt="Explaining web infrastructure on the board"
                            caption="Breaking down the flow before the students built it themselves."
                        />

                    </div>

                </Container>
            </section>

            {/* ================================================================ */}
            {/* LIVE DEPLOYMENT                                                  */}
            {/* ================================================================ */}

            <section className="pb-24">
                <Container>

                    <div className="mx-auto max-w-4xl">

                        <SectionNumber>06 — MAKING IT LIVE</SectionNumber>

                        <h2
                            className="
                text-3xl
                font-extrabold
                tracking-tight
                text-slate-900
                dark:text-white
                sm:text-4xl
              "
                        >
                            The moment the infrastructure became visible.
                        </h2>

                        <div
                            className="
                mt-6
                space-y-5
                text-base
                leading-8
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
                        >
                            <p>
                                The students connected to their virtual machines,
                                deployed their websites and opened them through the
                                public IP address.
                            </p>

                            <p>
                                Then came the next step: connecting those deployments
                                to their own domains and subdomains.
                            </p>

                            <p>
                                Something that had started as a discussion about DNS,
                                servers and networking was now a website they could
                                actually open in a browser.
                            </p>
                        </div>

                        <div
                            className="
                mt-10
                rounded-2xl
                border
                border-cyan-500/20
                bg-cyan-500/5
                p-6
                dark:border-cyan-400/10
                dark:bg-cyan-400/5
              "
                        >
                            <div className="flex gap-4">

                                <div
                                    className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-cyan-500
                    text-white
                    dark:bg-cyan-400
                    dark:text-slate-950
                  "
                                >
                                    <FontAwesomeIcon icon={faTerminal} />
                                </div>

                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">
                                        The progression
                                    </p>

                                    <p className="mt-2 font-mono text-sm leading-7 text-cyan-700 dark:text-cyan-300">
                                        Browser → Internet → DNS → Public IP → VM → Website
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>

                </Container>
            </section>

            {/* ================================================================ */}
            {/* MOMENTO PLACEHOLDER                                              */}
            {/* ================================================================ */}

            <section className="pb-24">
                <Container>

                    <div className="mx-auto max-w-4xl">

                        <SectionNumber>07 — THE CLOSING</SectionNumber>

                        <ArticleImage
                            src={images.momento}
                            alt="Valedictory ceremony"
                            caption="Valedictory ceremony — momento and shawl presentation."
                        />

                        <div className="mt-10">
                            <p
                                className="
                  text-base
                  leading-8
                  text-slate-600
                  dark:text-slate-400
                  sm:text-lg
                "
                            >
                                The workshop concluded with the valedictory ceremony
                                alongside the IT faculty, Head of Department and
                                Principal of Jeppiaar Engineering College.
                            </p>
                        </div>

                    </div>

                </Container>
            </section>

            {/* ================================================================ */}
            {/* EXPERIENCE                                                       */}
            {/* ================================================================ */}

            <section className="pb-24">
                <Container>

                    <div className="mx-auto max-w-4xl">

                        <SectionNumber>08 — BEYOND THE WORKSHOP</SectionNumber>

                        <h2
                            className="
                text-3xl
                font-extrabold
                tracking-tight
                text-slate-900
                dark:text-white
                sm:text-4xl
              "
                        >
                            The conversations went beyond technology.
                        </h2>

                        <div
                            className="
                mt-6
                space-y-5
                text-base
                leading-8
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
                        >
                            <p>
                                There were questions, experiments, things that broke,
                                things that were fixed and plenty of discussion between
                                the teams.
                            </p>

                            <p>
                                We also spoke about the software industry, the changing
                                role of AI, what companies expect from fresh graduates,
                                and why learning to think beyond a single programming
                                language matters.
                            </p>

                            <p>
                                That part of the session was just as important as the
                                technical activity.
                            </p>
                        </div>

                    </div>

                </Container>
            </section>

            {/* ================================================================ */}
            {/* GROUP PHOTO                                                      */}
            {/* ================================================================ */}

            <section className="pb-24">
                <Container>

                    <div className="mx-auto max-w-5xl">

                        <ArticleImage
                            src={images.group}
                            alt="Students and faculty together after the workshop"
                            caption="A final group photograph with the students and faculty."
                        />

                    </div>

                </Container>
            </section>

            {/* ================================================================ */}
            {/* REFLECTION                                                       */}
            {/* ================================================================ */}

            <section className="pb-24">
                <Container>

                    <div
                        className="
              mx-auto
              max-w-4xl
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              dark:border-white/[0.08]
              dark:bg-white/[0.025]
              sm:p-12
            "
                    >

                        <SectionNumber>09 — A PERSONAL NOTE</SectionNumber>

                        <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">

                            <p>
                                Getting the opportunity to stand on the other side of
                                the classroom and conduct a technical session was a
                                meaningful experience.
                            </p>

                            <p>
                                My own college, Misrimal Navajee Munoth Jain Engineering
                                College, has given me opportunities to participate, take
                                responsibility, interact with people and step beyond
                                the role of a student.
                            </p>

                            <p>
                                This workshop gave me another opportunity to do exactly
                                that — but this time, by helping someone else experience
                                the same transition from learning to doing.
                            </p>

                        </div>

                    </div>

                </Container>
            </section>

            {/* ================================================================ */}
            {/* THANKS                                                           */}
            {/* ================================================================ */}

            <section className="pb-24">
                <Container>

                    <div className="mx-auto max-w-4xl">

                        <SectionNumber>10 — THANK YOU</SectionNumber>

                        <div className="grid gap-3 sm:grid-cols-2">

                            {[
                                'Mr. Vinoth Kumar — Event Coordinator',
                                'Mrs. Anuja T — Head of Department, IT',
                                'Dr. K. Senthil Kumar — Principal',
                                'The 3rd-year IT students',
                                'Misrimal Navajee Munoth Jain Engineering College',
                            ].map((person) => (
                                <div
                                    key={person}
                                    className="
                    rounded-xl
                    border border-slate-200
                    bg-white
                    px-5 py-4
                    text-sm
                    font-medium
                    text-slate-600
                    dark:border-white/[0.08]
                    dark:bg-white/[0.025]
                    dark:text-slate-400
                  "
                                >
                                    {person}
                                </div>
                            ))}

                        </div>

                    </div>

                </Container>
            </section>

            {/* ================================================================ */}
            {/* ENDING                                                           */}
            {/* ================================================================ */}

            <section className="pb-28">
                <Container>

                    <div className="mx-auto max-w-4xl text-center">

                        <div
                            className="
                mx-auto mb-6
                h-px w-24
                bg-gradient-to-r
                from-cyan-500
                to-purple-500
              "
                        />

                        <p
                            className="
                text-2xl
                font-extrabold
                leading-tight
                tracking-tight
                text-slate-900
                dark:text-white
                sm:text-3xl
              "
                        >
                            From learning how the web works,
                            <br />
                            to making their own website live on it.
                        </p>

                        <p
                            className="
                mt-5
                text-lg
                font-semibold
                text-cyan-600
                dark:text-cyan-300
              "
                        >
                            That was the workshop.
                        </p>

                        <Link
                            to="/blog"
                            className="
                mt-8
                inline-flex items-center gap-2
                rounded-xl
                border
                border-slate-200
                bg-white
                px-5 py-3
                text-sm font-bold
                text-slate-700
                transition-all
                hover:-translate-y-0.5
                hover:border-cyan-300
                hover:text-cyan-600
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
                dark:text-slate-300
                dark:hover:border-cyan-400/30
                dark:hover:text-cyan-300
              "
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            Back to journal
                        </Link>

                    </div>

                </Container>
            </section>

        </main>
    );
}