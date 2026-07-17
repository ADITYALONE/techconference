export const eventDate = "2026-10-15T09:00:00";

export const speakers = [
  {
    id: 1,
    name: "Maria Chen",
    title: "Senior Frontend Engineer, Netflix",
    bio: "Maria has spent the last 8 years building large scale React apps. She talks a lot about component architecture and why most teams over engineer their state management.",
    tracks: ["Web Dev"],
  },
  {
    id: 2,
    name: "Devon Walsh",
    title: "ML Engineer, OpenAI",
    bio: "Devon works on training infrastructure for large language models. Previously taught intro to machine learning at Madison for three semesters.",
    tracks: ["AI/ML"],
  },
  {
    id: 3,
    name: "Priya Nair",
    title: "Open Source Maintainer, Vite",
    bio: "Priya maintains a few build tools you have probably used without knowing it. She'll be talking about sustainable open source and burnout.",
    tracks: ["Open Source"],
  },
  {
    id: 4,
    name: "Jordan Ackerman",
    title: "Staff Engineer, Stripe",
    bio: "Jordan builds payment infrastructure that handles millions of requests a day. Big fan of boring, reliable technology over hype.",
    tracks: ["Web Dev", "Open Source"],
  },
  {
    id: 5,
    name: "Sofia Ramirez",
    title: "Research Scientist, DeepMind",
    bio: "Sofia's research focuses on reinforcement learning applied to robotics. She's speaking about what actually works vs what looks good in a paper.",
    tracks: ["AI/ML"],
  },
  {
    id: 6,
    name: "Tom Kessler",
    title: "Founder, Kessler Labs",
    bio: "Tom started three companies, two of which failed. He's here to talk honestly about what he learned building developer tools.",
    tracks: ["Open Source", "Web Dev"],
  },
];

export const sessions = [
  {
    id: 1,
    time: "9:00 AM - 10:00 AM",
    title: "Keynote: The State of Web Development",
    room: "Main Hall",
    track: "Web Dev",
    speakers: [1],
  },
  {
    id: 2,
    time: "10:15 AM - 11:00 AM",
    title: "Rethinking Component Architecture in React",
    room: "Room 204",
    track: "Web Dev",
    speakers: [1],
  },
  {
    id: 3,
    time: "11:15 AM - 12:00 PM",
    title: "Building CSS That Doesn't Fight Back",
    room: "Room 118",
    track: "Web Dev",
    speakers: [4],
  },
  {
    id: 4,
    time: "1:00 PM - 1:45 PM",
    title: "Shipping Fast Without Breaking Prod",
    room: "Room 204",
    track: "Web Dev",
    speakers: [4, 6],
  },
  {
    id: 5,
    time: "9:00 AM - 10:00 AM",
    title: "Training Large Models on a Budget",
    room: "Room 310",
    track: "AI/ML",
    speakers: [2],
  },
  {
    id: 6,
    time: "10:15 AM - 11:00 AM",
    title: "Reinforcement Learning for Real Robots",
    room: "Room 310",
    track: "AI/ML",
    speakers: [5],
  },
  {
    id: 7,
    time: "11:15 AM - 12:00 PM",
    title: "Why Your ML Pipeline Is Slower Than It Should Be",
    room: "Room 305",
    track: "AI/ML",
    speakers: [2],
  },
  {
    id: 8,
    time: "1:00 PM - 2:00 PM",
    title: "Panel: Where Is AI/ML Actually Headed",
    room: "Room 310",
    track: "AI/ML",
    speakers: [2, 5],
  },
  {
    id: 9,
    time: "9:00 AM - 10:00 AM",
    title: "Maintaining a Project Used by Millions",
    room: "Room 150",
    track: "Open Source",
    speakers: [3],
  },
  {
    id: 10,
    time: "10:15 AM - 11:00 AM",
    title: "Avoiding Burnout as a Maintainer",
    room: "Room 150",
    track: "Open Source",
    speakers: [3],
  },
  {
    id: 11,
    time: "11:15 AM - 12:00 PM",
    title: "Lessons From Founding a Dev Tools Company",
    room: "Room 150",
    track: "Open Source",
    speakers: [6],
  },
  {
    id: 12,
    time: "1:00 PM - 1:45 PM",
    title: "Getting Your First PR Merged",
    room: "Room 150",
    track: "Open Source",
    speakers: [3, 6],
  },
];

export const ticketTiers = [
  {
    id: "general",
    name: "General",
    price: 199,
    description: "Full conference access for professionals.",
    features: [
      "Access to all three tracks",
      "Lunch and coffee breaks included",
      "Conference swag bag",
      "Access to recorded sessions after the event",
    ],
  },
  {
    id: "student",
    name: "Student",
    price: 79,
    description: "Discounted pricing for currently enrolled students.",
    features: [
      "Access to all three tracks",
      "Lunch and coffee breaks included",
      "Conference swag bag",
      "Valid student ID required at check in",
    ],
  },
  {
    id: "vip",
    name: "VIP",
    price: 399,
    description: "Everything in General plus speaker dinner and front row seating.",
    features: [
      "Access to all three tracks",
      "Front row reserved seating",
      "Speaker dinner on Friday night",
      "1-on-1 office hours with a speaker of your choice",
      "Recorded sessions after the event",
    ],
  },
];

export const faqs = [
  {
    category: "Pricing",
    question: "How much does a ticket cost?",
    answer: "General admission is $199, Student tickets are $79 with a valid student ID, and VIP tickets are $399. See the Register page for what's included in each tier.",
  },
  {
    category: "Pricing",
    question: "Is there a student discount?",
    answer: "Yes. Students get the Student tier for $79 as long as they can show a valid student ID at check in.",
  },
  {
    category: "Content",
    question: "Will sessions be recorded?",
    answer: "Yes, all sessions will be recorded and made available to General and VIP ticket holders about a week after the conference ends.",
  },
  {
    category: "Logistics",
    question: "Is the venue accessible?",
    answer: "Yes. The venue is fully wheelchair accessible, including all session rooms, restrooms, and the main hall. Let us know at check in if you need any accommodations.",
  },
  {
    category: "Pricing",
    question: "What is the refund policy?",
    answer: "Refunds are available up to 14 days before the event. After that, tickets are non-refundable but you can transfer your ticket to someone else by emailing us.",
  },
  {
    category: "Logistics",
    question: "Can I get a special meal at lunch?",
    answer: "Yes, you can note any dietary restrictions when you register and the catering team will have options for you at lunch.",
  },
  {
    category: "Logistics",
    question: "How do I get to the venue?",
    answer: "The venue is a short walk from the downtown transit center. See the Venue page for full directions and nearby hotels.",
  },
  {
    category: "Logistics",
    question: "Is there parking available?",
    answer: "There is a parking garage attached to the venue. Rates are $12 for the day if you park before 9am.",
  },
  {
    category: "Content",
    question: "Can I switch tracks during the day?",
    answer: "Absolutely, your ticket gives you access to all three tracks so you can move between Web Dev, AI/ML, and Open Source sessions as you like.",
  },
  {
    category: "Logistics",
    question: "What if I need to cancel my registration?",
    answer: "You can cancel anytime from the My Registration page. If it's within 14 days of the event you may not be eligible for a refund, see our refund policy above.",
  },
];
