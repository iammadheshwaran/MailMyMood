import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

type Props = {
  mood: string;
  setMood: (val: string) => void;
  onGenerate: () => void;
  disabled: boolean;
};

const MoodInput = ({ mood, setMood, onGenerate, disabled }: Props) => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 md:flex-row md:space-x-4">
      <Input
        type="text"
        className="w-full md:flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="How are you feeling today?"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disabled}
      />
      <Button
        className="w-full md:w-auto bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-900 transition-all duration-300"
        onClick={onGenerate}
        disabled={disabled}
      >
        Generate Mail
      </Button>
    </div>
  );
};

export default MoodInput;
