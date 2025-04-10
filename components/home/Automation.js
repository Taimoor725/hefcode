import React from 'react';
import Image from 'next/image';

const WhyToDoAutomation = () => {
    const automationBenefits = [
        {
            title: "Increase Efficiency",
            description: "Automation helps streamline processes, allowing your team to get more done in less time.",
            imageUrl: "/home/whyauto/inscreas.svg",
        },
        {
            title: "Improve Accuracy",
            description: "By reducing human error, automation ensures higher accuracy and consistency in your operations.",
            imageUrl: "/home/whyauto/improve.svg",
        },
        {
            title: "Save Time and Resources",
            description: "Automation reduces the need for manual tasks, saving both time and operational costs.",
            imageUrl: "/home/whyauto/time.svg",
        },
        {
            title: "Enhance Scalability",
            description: "With automation, it's easier to scale your processes as your business grows without adding additional overhead.",
            imageUrl: "/home/whyauto/enhance.svg", 
        },
        {
            title: "Focus on Strategic Tasks",
            description: "Automation frees up your team's time, allowing them to focus on higher-value, strategic work.",
            imageUrl: "/home/whyauto/focuse.svg", 
        },
    ];

    return (
        <section className="w-full h-auto bg-[#F3F7FE] py-20">
            <div className="container mx-auto px-6 w-3/4 h-3/4 bg-white rounded-3xl py-10">
                <div className="text-center mb-12 flex flex-col items-center w-full ">
                    <h2 className="text-4xl font-bold">Why Automate?</h2>
                    <p className="text-xl mt-4 w-2/3">
                        Automating your business processes can lead to significant improvements in efficiency, accuracy, and scalability.
                        Here's why automation is a game-changer for your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {automationBenefits.map((benefit, index) => (
                        <div key={index} className="bg-[#F3F7FE] p-6 rounded-lg shadow-lg text-center flex flex-col">
                            <div className='h-2/3'>
                                <Image
                                    src={benefit.imageUrl}
                                    alt={benefit.title}
                                    width={300}
                                    height={300}
                                    className="mx-auto mb-6 rounded-lg object-cover"
                                />
                            </div>
                            <div className='h-1/3 '>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                                <p className="text-lg text-gray-600">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyToDoAutomation;
