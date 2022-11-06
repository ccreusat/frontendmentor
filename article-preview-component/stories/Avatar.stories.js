import { createAvatar } from "./Avatar";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/Avatar Component",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    hasCaption: {
      description: "Display text of avatar component, `bool`",
      control: "boolean",
    },
    name: {
      description: "Person name in the component `string`",
      control: "text",
    },
    date: {
      description: "Publication date, pass a `string`",
      control: "text",
    },
    avatarALT: {
      description: "Fallback ALT, pass a `string`",
      control: "text",
    },
    avatarURL: {
      description: "Add image to the avatar with a `string` url path",
      control: "text",
    },
  },
  args: {
    hasCaption: false,
    name: "Michelle Appleton",
    date: "28 June 2020",
    avatarALT: "michelle",
    avatarURL: "/avatar-michelle.jpg",
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = args => {
  return createAvatar(args);
};

export const Default = Template.bind({});
Default.args = {};

export const AvatarWithCaption = Template.bind({});
AvatarWithCaption.args = {
  ...Default.args,
  hasCaption: true,
};
