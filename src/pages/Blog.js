import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBookOpen,
  faCalendar,
  faLocationDot,
  faPenNib,
} from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Section,
  AnimatedHeading,
  GradientText,
} from '../components/ui/index';

const posts = [
  {
    title: 'From localhost to a real domain.',
    excerpt:
      'A hands-on Full Stack Web Development workshop where students moved from understanding how the web works to actually deploying a website on Microsoft Azure and connecting it to a real domain.',
    date: '19 September 2026',
    location: 'Jeppiaar Engineering College, Chennai',
    category: 'Workshop',
    readTime: '8 min read',
    image:
      '/images/blog/jeppiaar-workshop/707ebfc64875464588dc39e059f73be7.jpg',
    path: '/blog/jeppiaar-full-stack-workshop',
    tags: [
      'Full Stack Development',
      'Microsoft Azure',
      'Cloud Computing',
    ],
    featured: true,
  },
];

const categories = ['All', 'Workshops', 'Engineering', 'Cloud'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((post) => {
          if (activeCategory === 'Workshops') {
            return post.category === 'Workshop';
          }

          if (activeCategory === 'Cloud') {
            return post.tags.some((tag) =>
              tag.toLowerCase().includes('azure') ||
              tag.toLowerCase().includes('cloud')
            );
          }

          return true;
        });

  return (
    <Section className="relative overflow-hidden bg-slate-50 dark:bg-[#050b18]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
            absolute -right-40 top-1/3
            h-96 w-96
            rounded-full
            bg-purple-400/10
            blur-3xl
            dark:bg-purple-500/5
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.05)_1px,transparent_0)]
            [background-size:32px_32px]
            dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)]
          "
        />
      </div>

      <Container>
        <div className="relative">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div
              className="
                mb-5 inline-flex items-center gap-2
                rounded-full
                border border-cyan-500/20
                bg-cyan-500/5
                px-4 py-2
                text-xs font-bold uppercase
                tracking-[0.2em]
                text-cyan-600
                dark:border-cyan-400/20
                dark:bg-cyan-400/5
                dark:text-cyan-300
              "
            >
              <FontAwesomeIcon icon={faBookOpen} />
              Engineering Journal
            </div>

            <AnimatedHeading level="h1">
              Thoughts,{' '}
              <GradientText>Experiences & Builds</GradientText>
            </AnimatedHeading>

            <p
              className="
                mx-auto mt-5 max-w-2xl
                text-base leading-7
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
            >
              A collection of technical experiences, workshops, cloud
              experiments, projects and lessons learned while building
              things beyond the screen.
            </p>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    rounded-full border
                    px-4 py-2
                    text-xs font-semibold
                    transition-all duration-300
                    ${
                      active
                        ? `
                          border-cyan-500
                          bg-cyan-500
                          text-white
                          shadow-lg
                          shadow-cyan-500/20
                          dark:border-cyan-400
                          dark:bg-cyan-400
                          dark:text-slate-950
                        `
                        : `
                          border-slate-200
                          bg-white
                          text-slate-600
                          hover:border-cyan-300
                          hover:text-cyan-600
                          dark:border-white/[0.08]
                          dark:bg-white/[0.025]
                          dark:text-slate-400
                          dark:hover:border-cyan-400/30
                          dark:hover:text-cyan-300
                        `
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>

          {/* Posts */}
          <div className="mt-12">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  group overflow-hidden
                  rounded-3xl
                  border border-slate-200
                  bg-white
                  shadow-sm
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-slate-200/50
                  dark:border-white/[0.08]
                  dark:bg-white/[0.035]
                  dark:shadow-none
                  dark:hover:bg-white/[0.05]
                "
              >
                <div className="grid lg:grid-cols-[1.05fr_1fr]">

                  {/* Image */}
                  <Link
                    to={post.path}
                    className="
                      relative block
                      min-h-[300px]
                      overflow-hidden
                      lg:min-h-[430px]
                    "
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="
                        absolute inset-0
                        h-full w-full
                        object-cover
                        transition-transform duration-700
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-slate-950/70
                        via-slate-950/10
                        to-transparent
                      "
                    />

                    <div className="absolute left-6 top-6">
                      <span
                        className="
                          inline-flex items-center
                          rounded-full
                          border border-white/20
                          bg-slate-950/40
                          px-3 py-1.5
                          text-[10px] font-bold
                          uppercase tracking-[0.15em]
                          text-white
                          backdrop-blur-md
                        "
                      >
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-xs font-medium text-white/70">
                        {post.location}
                      </p>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-500">
                      <span className="inline-flex items-center gap-2">
                        <FontAwesomeIcon icon={faCalendar} />
                        {post.date}
                      </span>

                      <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block dark:bg-slate-700" />

                      <span>{post.readTime}</span>
                    </div>

                    <h2
                      className="
                        mt-5
                        text-3xl
                        font-extrabold
                        leading-tight
                        tracking-tight
                        text-slate-900
                        dark:text-white
                        sm:text-4xl
                      "
                    >
                      {post.title}
                    </h2>

                    <p
                      className="
                        mt-5
                        text-sm
                        leading-7
                        text-slate-600
                        dark:text-slate-400
                        sm:text-base
                      "
                    >
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-lg
                            border border-slate-200
                            bg-slate-50
                            px-2.5 py-1.5
                            text-[10px]
                            font-medium
                            text-slate-600
                            dark:border-white/[0.07]
                            dark:bg-white/[0.03]
                            dark:text-slate-400
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        to={post.path}
                        className="
                          inline-flex items-center gap-2
                          rounded-xl
                          bg-cyan-500
                          px-5 py-3
                          text-sm font-bold
                          text-white
                          shadow-lg shadow-cyan-500/20
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:bg-cyan-600
                          dark:bg-cyan-400
                          dark:text-slate-950
                          dark:hover:bg-cyan-300
                        "
                      >
                        Read experience
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>

                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 flex justify-center">
            <div
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-slate-200
                bg-white
                px-5 py-3
                text-xs font-medium
                text-slate-500
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
                dark:text-slate-400
              "
            >
              <FontAwesomeIcon
                icon={faPenNib}
                className="text-cyan-500"
              />
              More engineering stories will be added here.
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}