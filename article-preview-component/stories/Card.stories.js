import { createCard } from "./Card";
import * as ImageStories from "./Image.stories";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/Card Component",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    hasCard: {
      description: "Can display text and avatar elements: `boolean`",
      control: "boolean",
    },
    hasImage: {
      description: "To add an image to the component and display it: `boolean`",
      control: "boolean",
    },
    hasContent: {
      description: "Can enable or disable block text: `boolean`",
      control: "boolean",
    },
    hasAvatar: {
      description: "Can enable or disable avatar comp: `boolean` URL path",
      control: "boolean",
    },
    title: {
      description: "Title of the card component: `string` URL path",
      control: "text",
    },
    text: {
      description: "Text of the card component: `string`",
      control: "text",
    },
  },
  args: {
    url: "/drawers.jpg",
    alt: "drawers",
    avatarURL: "/avatar-michelle.jpg",
    avatarALT: "michelle",
    hasCard: false,
    hasImage: false,
    hasContent: false,
    hasAvatar: false,
    hasCaption: false,
    title:
      "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
    text: "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
    name: "Michelle Appleton",
    date: "28 June 2020",
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createCard({ ...args });
};

const TemplateWithHTML = args => {
  return `<article class="card">
    <div class="aspect-box">
      <img src="${args.url}" alt="${args.alt}">
    </div>
    <div class="card-inner">
      <h1 class="heading">${args.title}</h1>
      <p class="text">${args.text}</p>
      <div class="avatar has-margin-top-16">
        <figure class="avatar-thumbnail">
          <div class="aspect-box">
            <img src="${args.avatarURL}" alt="${args.avatarALT}" />
          </div>
        </figure>
        <figcaption class="avatar-caption">
          <strong>${args.name}</strong>
          <span>${args.date}</span>
        </figcaption>
      </div>
    </div>
  </article>`;
};

export const ContainerCard = Template.bind({});
ContainerCard.args = {
  hasCard: true,
};

export const ImageCard = Template.bind({});
ImageCard.args = {
  hasImage: true,
};

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  hasCard: true,
  hasContent: true,
};

export const FullCard = Template.bind({});
FullCard.args = {
  hasCard: true,
  hasImage: true,
  hasContent: true,
  hasAvatar: true,
  hasCaption: true,
};

export const VanillaHTMLCard = TemplateWithHTML.bind({});
VanillaHTMLCard.parameters = {
  controls: { disabled: true },
};
VanillaHTMLCard.args = {
  ...ImageStories.Default.args,
  ...ImageStories.Avatar.args,
  title:
    "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
  text: "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
};
