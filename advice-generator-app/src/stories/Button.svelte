<script>
  import src from '../assets/icon-dice.svg';
  let visible = false;

  const handleClick = (e) => {
    let button =  e.target;
    visible = true;
    button.classList.add("disabled");
    button.disabled = true;

    setTimeout(() => {
        visible = false;
        button.classList.remove("disabled");
        button.disabled = false;
    }, 2000);
    }
</script>

<button id="button" on:click={(e) => handleClick(e)} class="absolute"><img {src} alt="dice icon"/></button>

<style>
  button {
    --button-size: 6.4rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: var(--button-size);
    width: var(--button-size);
    border: 0;
    border-radius: var(--button-size);
    background-color: var(--neon-green);
    transition: box-shadow 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  /* button.absolute {
    position: absolute;
    left: 50%;
    bottom: -3rem;
    transform: translateX(-50%);
  } */
  button > img {
    pointer-events: none;
  }
  button:not(.disabled):hover {
    box-shadow: 0 0 40px 0 hsla(150, 100%, 66%, 1);
  }
  button:disabled {
    cursor: progress;
    background-color: var(--white);
  }
</style>
