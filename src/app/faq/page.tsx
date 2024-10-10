import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto my-10 p-10">
        <h1 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h1>

        <div className="space-y-8">
          {/* Question 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">What is the MLSA Nexus Chapter?</h2>
            <p className="text-gray-700">
            The MLSA Nexus Chapter is a student-led tech community under the Microsoft Learn Student Ambassador program. We organize events and workshops focused on technology to help students grow their skills.

            </p>
          </div>

          {/* Question 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Who can join the MLSA Nexus Chapter?</h2>
            <p className="text-gray-700">
            Any student with a passion for technology and learning can join! We welcome all skill levels, from beginners to experienced coders.

            </p>
          </div>

          {/* Question 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">How can I participate in your events?</h2>
            <p className="text-gray-700">
            Follow our social media or website for announcements on upcoming events and workshops. You can register for any event that interests you and be a part of the action!
            </p>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default FAQ;
