import MoodInput from '@/components/MoodInput';
import MoodOutput from '@/components/MoodOutput';
import { getMoodCategory } from '@/components/ui/moodKeywords'; 
import React, { useState } from 'react';

const Home = () => {
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    const lowerMood = mood.toLowerCase();
    const moodCategory = getMoodCategory(lowerMood);

    if (moodCategory === "happy") {
      setSubject("Just a Happy Note!");
      setFooter("😊 Stay happy and keep shining ✨");

    } else if (moodCategory === "sad") {
      setSubject("Feeling a Bit Low Today...");
      setFooter("Feeling low, but sending soft hugs anyway ");

    } else if (moodCategory === "angry") {
      setSubject("Not Okay With This.");
      setFooter("Inhale. Exhale. Still felt like that?");

    } else if (moodCategory === "anxious") {
      setSubject("It’s Okay to Slow Down");
      setFooter("One breath at a time. You’ve got this 🫶");

    } else if (moodCategory === "lonely") {
      setSubject("You’re Not Alone, Even Now");
      setFooter("Sending quiet comfort your way 🌙");

    } else if (moodCategory === "tired") {
      setSubject("Rest Is Not a Weakness");
      setFooter("Breathe. Rest. You’re doing enough. 😴");

    } else if (moodCategory === "excited") {
      setSubject("Can’t Wait to Share This! 🎉");
      setFooter("Energy’s high — let’s ride the wave! 🚀");

    } else if (moodCategory === "confused") {
      setSubject("It’s Okay Not to Have It All Figured Out");
      setFooter("Uncertainty is part of the process. Keep going. 🔄");

    } else if (moodCategory === "relaxed") {
      setSubject("Taking It Slow and Easy 🌿");
      setFooter("Enjoy the calm while it lasts. ☁️");

    } else if (moodCategory === "motivated") {
      setSubject("Let’s Get It Done 💪");
      setFooter("Fueled by purpose. You’ve got this!");

    } else if (moodCategory === "bored") {
      setSubject("Looking for Something New?");
      setFooter("Even boredom can spark creativity… eventually.");

    } else {
      setSubject("Mood check? Might be time for a little change.");
      setFooter("Catch you later ✌️");
    }

    setGenerated(true);
  };

  const handleReset = () => {
    setMood("");
    setSubject("");
    setFooter("");
    setGenerated(false);
  };

  return (
    <div className='max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-sm bg-white space-y-6 animate-fadein'>
      <h1 className='text-4xl font-bebas text-gray-800'>MoodMail Generator</h1>

      {!generated ? (
        <MoodInput
          mood={mood}
          setMood={setMood}
          onGenerate={handleGenerate}
          disabled={generated}
        />
      ) : ( <div className="animate-fadein transition-all duration-500 ease-in-out bg-white p-4 rounded-lg shadow-md">
  <MoodOutput subject={subject} footer={footer} onReset={handleReset} />
</div>)}
    </div>

    
  );
};

export default Home;
