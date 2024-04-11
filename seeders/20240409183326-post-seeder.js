"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    return queryInterface.bulkInsert("posts", [
      {
        title: "Introduction to Python",
        content: "This post covers the basics of Python programming language.",
        imageUrl: "https://www.example.com/python.jpg",
        categoryId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
        userId: 1,
      },
      {
        title: "Machine Learning Fundamentals",
        content: "A beginner's guide to understanding machine learning concepts.",
        imageUrl: "https://www.example.com/ml.jpg",
        categoryId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
        userId: 1,
      },
      {
        title: "Web Development with React",
        content: "Learn how to build modern web applications using React.js.",
        imageUrl: "https://www.example.com/react.jpg",
        categoryId: 2,
        createdAt: currentDate,
        updatedAt: currentDate,
        userId: 2,
      },
      {
        title: "Data Analysis Techniques",
        content: "Exploring various methods for analyzing and interpreting data.",
        imageUrl: "https://www.example.com/data.jpg",
        categoryId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
        userId: 2,
      },
      {
        title: "Mobile App Development Essentials",
        content: "Discover the key principles and tools for building mobile apps.",
        imageUrl: "https://www.example.com/mobile.jpg",
        categoryId: 3,
        createdAt: currentDate,
        updatedAt: currentDate,
        userId: 3,
      },
      {
        title: "Introduction to Blockchain",
        content: "Learn about the fundamentals of blockchain technology.",
        imageUrl: "https://www.example.com/blockchain.jpg",
        categoryId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
        userId: 3,
      },
      {
        title: "Cloud Computing Basics",
        content: "An overview of cloud computing and its various services.",
        imageUrl: "https://www.example.com/cloud.jpg",
        categoryId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
        userId: 4,
      },
      {
        title: "Cybersecurity Fundamentals",
        content: "Understanding the basics of cybersecurity and best practices.",
        imageUrl: "https://www.example.com/cybersecurity.jpg",
        categoryId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
        userId: 4,
      },
      {
        title: "Data Structures and Algorithms",
        content: "Exploring common data structures and algorithms used in programming.",
        imageUrl: "https://www.example.com/dsa.jpg",
        categoryId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
        userId: 5,
      },
      {
        title: "Artificial Intelligence Applications",
        content: "Real-world examples of artificial intelligence in various industries.",
        imageUrl: "https://www.example.com/ai.jpg",
        categoryId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
        userId: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
