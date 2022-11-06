import "./BackToTopButton.scss";

export const BackToTopButton = ({ scrollToTop }: any) => {
  function handleScrollToTop() {
    scrollToTop();
  }
  return (
    <button onClick={() => handleScrollToTop()} className="back-to-top">
      &#9757;
    </button>
  );
};
