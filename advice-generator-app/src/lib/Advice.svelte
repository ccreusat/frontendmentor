<script lang="ts">
    import src from '../assets/icon-dice.svg';
    import dividerDesktop from '../assets/pattern-divider-desktop.svg';
    import dividerMobile from '../assets/pattern-divider-mobile.svg';
    // const progressBar:HTMLElement = document.getElementById('progress-bar');
    let id:number = 0;
    let advice:string = "Click on the dice to generate a random advice!";
    let visible:boolean = false;
    let promise:Promise<any> = Promise.resolve([]);
        const endpoint = 'https://api.adviceslip.com/advice';

    const fetchAdvice = async () => {
        const response = await fetch(endpoint);
        const data = await response.json();
        const { slip } = data;
        id = slip.id;
        advice = slip.advice;
    }

    const handleClick = (e) => {
        let button =  e.target;
        promise = fetchAdvice();
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

<section>
    <h1>Advice generator app</h1>
    <article>
        <span>
            {#if id === 0}
                Start
            {:else}
                Advice #{id}
            {/if}
        </span>
        {#await promise}
            <h2>{advice}</h2>
        {:then data}
            <h2>{advice}</h2>
        {/await}
        <div><img src={dividerMobile} srcset={`${dividerDesktop} 444w`} sizes="(min-width: 35em) 540px, 100vw" alt="divider"></div>
        {#if visible}<p>(Advice is cached for 2 seconds. You have to wait to generate another advice)</p>{/if}
        <button id="button" on:click={(e) => handleClick(e)}><img {src} alt="dice icon"/></button>
    </article>
</section>

<style>
    section {
        margin: 0 1.6rem;
    }
    h1 {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap; /* added line */
        border: 0;
    }
    article {
        position: relative;
        padding: 4rem 2.4rem;
        border-radius: 1.5rem;
        text-align: center;
        background-color: var(--dark-grayish-blue);
        box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
    }
    span {
        font-size: 1.3rem;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: var(--neon-green);
    }
    h2 {
        --h1-font-size: 2.4rem;
        --h1-margin-bottom: 2.4rem;
        margin-top: 2.4rem;
        margin-bottom: var(--h1-margin-bottom);
        font-size: var(--h1-font-size);
        color: var(--light-cyan);
        letter-spacing: -0.3px;
    }
    button {
        --button-size: 6.4rem;
        position: absolute;
        left: 50%;
        bottom: -3rem;
        transform: translateX(-50%);
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
    div {
        overflow: hidden;
        margin-bottom: 2rem;
    }
    div > img {
        display: block;
        width: 100%;
    }
    p {
        margin-bottom: 2rem;
        text-align: center;
        font-size: 1.1rem;
        color: var(--light-cyan);
        letter-spacing: -0.3px;
    }

    @media (min-width: 35em) {
        section {
            max-width: 54rem;
            min-width: 54rem;
            margin: 0 auto;
        }

        article {
            padding: 4.8rem;
        }
        h2 {
            --h1-margin-bottom: 4rem;
            --h1-font-size: 2.8rem;
        }
    }
</style>