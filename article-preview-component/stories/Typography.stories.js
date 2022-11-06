// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Design System/Atoms/Typography",
  parameters: {
    docs: {
      inlineStories: false,
      description: {
        component: "Basic typo styles",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    title: {
      description: "Main heading of the card component, `string`",
    },
    text: {
      description: "Main paragraph of the card component, `string`",
    },
    name: {
      description:
        "Person name in the avatar component followed by the date, `string`",
    },
    date: {
      description: "Publication date in the avatar component, `string`",
    },
  },
  args: {
    title:
      "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
    text: "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
    name: "Michelle Appleton",
    date: "28 June 2020",
  },
  decorators: [
    story =>
      `<div style="background-color: #fff; padding: 2rem 3rem">${story()}</div>`,
  ],
};

export const Heading = args => `<h1 class="heading">${args.title}</h1>`;
Heading.args = {};

export const Text = args => `<p class="text">${args.text}</p>`;
Text.args = {};

export const Block = args =>
  `<h1 class="heading">${args.title}</h1><p class="text">${args.text}</p>`;
Block.args = {};

export const Quote = args =>
  `<figcaption class="avatar-caption"><strong>${args.name}</strong><span>${args.date}</span></figcaption>`;
/* Quote.decorators = [
  story =>
    `<div style="background-color: #fff; padding: 2rem 3rem">${story()}</div>`,
]; */
