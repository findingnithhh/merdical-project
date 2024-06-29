// // Countdown.js
// 'use client'
// import React, { useState, useEffect } from "react";

// const Countdown = ({ targetDate }: any) => {
//   const calculateTimeLeft = () => {
//     const difference = +new Date(targetDate) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timerId);
//   }, [targetDate]);

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <div>
//         {Object.keys(timeLeft).length > 0 ? (
//           <>
//             <span>{timeLeft.days} days </span>
//             <span>{timeLeft.hours} hours </span>
//             <span>{timeLeft.minutes} minutes </span>
//             <span>{timeLeft.seconds} seconds </span>
//           </>
//         ) : (
//           <span>Time's up!</span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Countdown;
