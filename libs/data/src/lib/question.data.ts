import { Question } from '@personality-questionnaire/interfaces';

export const QUESTIONS: Question[] = [{
    prompt: "You're having an animated discussion with a colleague regarding a project that you're in charge of. You:",
    answers: [{
        text: "Don't dare contradict them",
        value: -3
    },
    {
        text: "Think that they are obviously right",
        value: -1
    },
    {
        text: "Continuously interrupt your colleague",
        value: 3
    },
    {
        text: "Defend your own point of view, tooth and nail",
        value: 1
    }]
},{
    prompt: "During dinner parties at your home, you have a hard time with people who:",
    answers: [{
        text: "Hang around you all evening",
        value: 1
    },
    {
        text: "Ask you to tell a story in front of everyone else",
        value: -3
    },
    {
        text: "Talk privately between themselves",
        value: -1
    },
    {
        text: "Always drag the conversation back to themselves",
        value: 3
    }]
},{
    prompt: "This morning, your agenda seems to be free. You:",
    answers: [{
        text: "Pick up the phone and start filling up your agenda with meetings",
        value: 3
    },
    {
        text: "Know that somebody will find a reason to come and bother you",
        value: -3
    },
    {
        text: "Question your colleagues about a project that's been worrying you",
        value: 1
    },
    {
        text: "Heave a sigh of relief and look forward to a day without stress",
        value: -1
    }]
},{
    prompt: "You're out with a group of friends and there's a person who's quite shy and doesn't talk much. You:",
    answers: [{
        text: "Shoot some friendly smiles in their direction",
        value: 1
    },
    {
        text: "Go and have a chat with them",
        value: -1
    },
    {
        text: "Notice that they're alone, but don't go over to talk with them",
        value: -3
    },
    {
        text: "Hardly notice them at all",
        value: 3
    }]
},{
    prompt: "A friend arrives late for your meeting. You:",
    answers: [{
        text: "Say, 'It's not a problem,' even if that's not what you really think",
        value: -3
    },
    {
        text: "Make a scene in front of everyone",
        value: 3
    },
    {
        text: "Tell them, 'You're too much! Have you seen the time?'",
        value: 1
    },
    {
        text: "Give them a filthy look and sulk for the rest of the evening",
        value: -1
    }]
}]