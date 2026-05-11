import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarDays, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Section, AnimatedHeading, GradientText } from '../components/ui/index';

const timetableData = {
  Monday: [
    { time: '09:00', subject: 'Data Structures', room: 'Lab A', duration: 1.5, professor: 'Dr. Kumar' },
    { time: '10:45', subject: 'Web Development', room: 'Room 201', duration: 1, professor: 'Prof. Singh' },
    { time: '12:30', subject: 'Lunch Break', room: 'Cafeteria', duration: 1, isBreak: true },
    { time: '13:30', subject: 'Database Design', room: 'Lab B', duration: 1.5, professor: 'Dr. Patel' },
    { time: '15:15', subject: 'CS Elective', room: 'Room 301', duration: 1, professor: 'Prof. Sharma' },
  ],
  Tuesday: [
    { time: '09:00', subject: 'Algorithms', room: 'Lab A', duration: 1.5, professor: 'Dr. Kumar' },
    { time: '10:45', subject: 'Software Engineering', room: 'Room 201', duration: 1, professor: 'Prof. Singh' },
    { time: '12:30', subject: 'Lunch Break', room: 'Cafeteria', duration: 1, isBreak: true },
    { time: '13:30', subject: 'System Design', room: 'Lab B', duration: 1.5, professor: 'Dr. Patel' },
  ],
  Wednesday: [
    { time: '09:00', subject: 'Cloud Computing', room: 'Lab A', duration: 1.5, professor: 'Dr. Kumar' },
    { time: '10:45', subject: 'DevOps Workshop', room: 'Room 201', duration: 1, professor: 'Prof. Singh' },
    { time: '12:30', subject: 'Lunch Break', room: 'Cafeteria', duration: 1, isBreak: true },
    { time: '13:30', subject: 'Project Work', room: 'Lab B', duration: 2, professor: 'Team' },
  ],
  Thursday: [
    { time: '09:00', subject: 'AI/ML Basics', room: 'Lab A', duration: 1.5, professor: 'Dr. Kumar' },
    { time: '10:45', subject: 'Deep Learning', room: 'Room 201', duration: 1, professor: 'Prof. Singh' },
    { time: '12:30', subject: 'Lunch Break', room: 'Cafeteria', duration: 1, isBreak: true },
    { time: '13:30', subject: 'Research Seminar', room: 'Auditorium', duration: 1.5, professor: 'Guest Speaker' },
  ],
  Friday: [
    { time: '09:00', subject: 'Internals Review', room: 'Lab A', duration: 1, professor: 'Dr. Kumar' },
    { time: '10:15', subject: 'Team Meeting', room: 'Conference Room', duration: 1, professor: 'Team Lead' },
    { time: '12:30', subject: 'Lunch Break', room: 'Cafeteria', duration: 1, isBreak: true },
    { time: '13:30', subject: 'Code Review Session', room: 'Lab B', duration: 1.5, professor: 'Senior Dev' },
  ],
};

const days = Object.keys(timetableData);

export function Timetable() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentClass, setCurrentClass] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Find current or next class
    const timeString = currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const dayClasses = timetableData[selectedDay];
    const current = dayClasses.find((c) => {
      const classStart = parseInt(c.time.split(':')[0]);
      const classEnd = classStart + c.duration;
      const now = parseInt(timeString.split(':')[0]) + parseInt(timeString.split(':')[1]) / 60;
      return now >= classStart && now < classEnd;
    });

    setCurrentClass(current);
  }, [currentTime, selectedDay]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section className="dark:bg-dark-navy bg-white">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <AnimatedHeading level="h2">
              My Academic <GradientText>Schedule</GradientText>
            </AnimatedHeading>
            <p className="dark:text-text-muted text-gray-600 text-lg">
              Futuristic productivity dashboard for managing daily classes and activities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left sidebar - Day selector */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-neon-cyan mb-4">
                Select Day
              </h3>
              <div className="space-y-2">
                {days.map((day) => (
                  <motion.button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    whileHover={{ x: 5 }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedDay === day
                        ? 'glass-dark border-neon-cyan text-neon-cyan shadow-glow-md'
                        : 'glass dark:text-text-light text-gray-800 hover:border-neon-cyan'
                    }`}
                  >
                    <p className="font-semibold">{day}</p>
                    <p className="text-xs dark:text-text-muted text-gray-600">
                      {timetableData[day].length} classes
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Right section - Schedule view */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 space-y-6"
            >
              {/* Current time widget */}
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card space-y-3"
              >
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClock} className="text-neon-cyan text-xl" />
                  <span className="text-neon-cyan font-semibold">Current Time</span>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold gradient-text">
                    {currentTime.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                  <p className="dark:text-text-muted text-gray-600">
                    {currentTime.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </motion.div>

              {/* Current class highlight */}
              {currentClass && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-dark border-2 border-accent-green rounded-xl p-4 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                    <p className="font-semibold text-accent-green">Currently in class</p>
                  </div>
                  <h4 className="text-xl font-bold text-neon-cyan">{currentClass.subject}</h4>
                  <p className="dark:text-text-muted text-gray-600">
                    Location: {currentClass.room} | Professor: {currentClass.professor}
                  </p>
                </motion.div>
              )}

              {/* Schedule list */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-neon-cyan">{selectedDay}'s Schedule</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {timetableData[selectedDay].map((classItem, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className={`glass-card p-4 space-y-2 border-l-4 transition-all ${
                        classItem.isBreak
                          ? 'border-l-accent-green'
                          : currentClass?.time === classItem.time
                          ? 'border-l-accent-green shadow-glow-lg'
                          : 'border-l-neon-cyan'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-lg font-bold text-neon-cyan">
                            {classItem.subject}
                          </p>
                          <p className="text-sm dark:text-text-muted text-gray-600">
                            {classItem.time} - {Math.floor(classItem.duration)}h{Math.round((classItem.duration % 1) * 60)}m
                          </p>
                        </div>
                        {currentClass?.time === classItem.time && (
                          <span className="px-3 py-1 dark:bg-accent-green bg-accent-green dark:bg-opacity-20 bg-opacity-20 text-accent-green text-xs font-semibold rounded-full">
                            NOW
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm dark:text-text-muted text-gray-600">
                        <span>📍 {classItem.room}</span>
                        <span>👨‍🏫 {classItem.professor}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
