// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/Share Component",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    isActive: {
      description: "Show an example of the active component: `bool`",
      control: "boolean",
    },
  },
  args: {
    isActive: false,
  },
  decorators: [
    story => `<article class="card" style="margin-top:10rem"><div class="card-inner">
  <div class="card-bottom">${story()}</div></div></article>`,
  ],
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return `
  <div class="share ${
    args.isActive ? "is-active" : ""
  } is-display-flex justify-content-between">
        <div class="is-display-flex share-icons">
            <span class="share-text">Share</span>
            <a href="#" class="share-link"
            ><img src="/icon-facebook.svg" alt="facebook"
            /></a>
            <a href="#" class="share-link"
            ><img src="/icon-twitter.svg" alt="twitter"
            /></a>
            <a href="#" class="share-link"
            ><img src="/icon-pinterest.svg" alt="pinterest"
            /></a>
        </div>
        <button class="share-trigger">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
            <path
                fill="#6E8098"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
            />
            </svg>
        </button>
    </div>`;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = {
  isActive: false,
};
Default.parameters = {
  docs: {
    /* source: {
      code: "Some custom string here",
    }, */
    description: {
      component: "Fully responsive share component for the card element",
    },
  },
};

export const Active = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Active.args = {
  isActive: true,
};
